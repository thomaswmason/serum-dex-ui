import { useState, useEffect } from 'react';
import { PublicKey } from '@solana/web3.js';
import { useConnection } from '../connection';
import { Market, TOKEN_MINTS } from '@project-serum/serum';
import { getNftList } from './';
import { NFT } from './';

export const DISABLE_SELL = ['327ubUZkUUAEdeWvyQYh1Ycs9mt6yDnt7jDAW47U3krw'];
export const PUBLIC_KEY_GOD = 'BJa7dq3bRP216zaTdw4cdcV71WkPc1HXvmnGeFVDi5DC';

const programId = new PublicKey('EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o');

export const hasMoreImages = (publicKeyString: string): [any, boolean] => {
  switch (publicKeyString) {
    case '7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd':
      return [
        [
          require(`../../assets/nfts/${publicKeyString}/${publicKeyString}.jpg`),
          require(`../../assets/nfts/${publicKeyString}/${publicKeyString}-1.jpg`),
          require(`../../assets/nfts/${publicKeyString}/${publicKeyString}-2.jpg`),
        ],
        true,
      ];
    case '8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ':
      return [
        [
          require(`../../assets/nfts/${publicKeyString}/${publicKeyString}.png`),
          require(`../../assets/nfts/${publicKeyString}/${publicKeyString}-1.jpg`),
          require(`../../assets/nfts/${publicKeyString}/${publicKeyString}-2.jpg`),
        ],
        true,
      ];

    default:
      return [[], false];
  }
};

export const findMarketFromMint = (
  mintAddress: PublicKey,
): PublicKey | undefined => {
  const allNfts = getNftList();
  return allNfts.find(
    (nft) => nft.mintAddress.toBase58() === mintAddress.toBase58(),
  )?.marketAddress;
};

export const findMintfromMarket = (
  marketAddress: PublicKey,
): PublicKey | undefined => {
  const allNfts = getNftList();
  return allNfts.find(
    (nft) => nft.marketAddress.toBase58() === marketAddress.toBase58(),
  )?.mintAddress;
};

export const findNftFromMarket = (
  marketAddress: PublicKey | null | undefined,
): NFT | undefined => {
  if (!marketAddress) {
    return undefined;
  }
  const allNfts = getNftList();
  return allNfts.find((nft) => {
    return nft.marketAddress.toBase58() === marketAddress.toBase58();
  });
};

export const useQuoteFromMarketAddress = (
  address: PublicKey | undefined,
): string | undefined => {
  const [quote, setQuote] = useState<string | undefined>(undefined);
  const connection = useConnection();
  useEffect(() => {
    const get = async (): Promise<void> => {
      if (!address) {
        return;
      }
      let market = await Market.load(connection, address, {}, programId);
      let quoteMint = market.quoteMintAddress;
      setQuote(
        TOKEN_MINTS.find(
          (token) => token.address.toBase58() === quoteMint.toBase58(),
        )?.name,
      );
    };
    get();
  });
  return quote;
};

export const findNftFromMint = (mintAddress: PublicKey): NFT | undefined => {
  const allNfts = getNftList();
  return allNfts.find(
    (nft): boolean => nft.mintAddress.toBase58() === mintAddress.toBase58(),
  );
};

export const useBestBid = (address: PublicKey | undefined): number | null => {
  const [bestBid, setBestBid] = useState<null | number>(null);
  const connection = useConnection();

  useEffect((): void => {
    const get = async () => {
      if (!address) {
        return;
      }
      let market = await Market.load(connection, address, {}, programId);
      let bids = await market.loadBids(connection);
      const bb = bids.getL2(1);
      setBestBid(bb[0] && bb[0][0] ? bb[0][0] : null);
    };
    get();
  }, [connection, address]);

  return bestBid;
};

export const useBestAsk = (address: PublicKey | undefined): number | null => {
  const [bestAsk, setBestAsk] = useState<null | number>(null);
  const connection = useConnection();

  useEffect((): void => {
    const get = async () => {
      if (!address) {
        return;
      }
      let market = await Market.load(connection, address, {}, programId);
      let asks = await market.loadAsks(connection);
      const ba = asks.getL2(1);
      setBestAsk(ba[0] && ba[0][0] ? ba[0][0] : null);
    };
    get();
  }, [connection, address]);

  return bestAsk;
};

export const useMarkPrice = (address: PublicKey): number | null => {
  const [price, setPrice] = useState<null | number>(null);
  const connection = useConnection();

  useEffect((): void => {
    const get = async () => {
      let market = await Market.load(connection, address, {}, programId);
      let asks = await market.loadAsks(connection);
      let bids = await market.loadBids(connection);

      const ba = asks.getL2(1);
      const bb = bids.getL2(1);

      setPrice((ba[0][0] + bb[0][0]) / 2);
    };
    get();
  }, [connection, address]);

  return price;
};

export const useSupply = (address: PublicKey): number | null => {
  const [supply, setSupply] = useState<number | null>(null);
  const connection = useConnection();

  useEffect(() => {
    const get = async () => {
      try {
        const _supply = await connection.getTokenSupply(address);
        setSupply(_supply.value.uiAmount);
      } catch (err) {
        console.log(`Error getting supply for ${address.toBase58()} - ${err}`);
      }
    };
    get();
  });
  return supply;
};
