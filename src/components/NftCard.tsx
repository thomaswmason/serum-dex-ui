import React from 'react';
import { Col, Row } from 'antd';
import { PublicKey } from '@solana/web3.js';
import {
  findNftFromMint,
  useBestAsk,
  useBestBid,
  useQuoteFromMarketAddress,
  useSupply,
} from '../utils/nfts/utils';
import { useHistory } from 'react-router-dom';

export const RedeemableTag = (): JSX.Element => {
  return <div className="redeemable-tag">Redeemable</div>;
};

export const OwnedTag = () => {
  return <div className="owned-tag">Owned by you</div>;
};

export const NftCard = ({
  mintAddress,
}: {
  mintAddress: PublicKey;
}): JSX.Element | null => {
  const nft = findNftFromMint(mintAddress);
  const bestAsk = useBestAsk(nft?.marketAddress);
  const bestBid = useBestBid(nft?.marketAddress);
  const quoteCurrency = useQuoteFromMarketAddress(nft?.marketAddress);
  const supply = useSupply(mintAddress);

  const history = useHistory();

  const onClick = (): void => {
    history.push(`/market/${nft?.marketAddress}`);
  };

  if (!nft) {
    return null;
  }
  return (
    <div className="nft-card" onClick={onClick}>
      {nft.redeembable && <RedeemableTag />}
      {nft.type === 'IMAGE' ? (
        <img
          // @ts-ignore
          src={nft.imgSmall}
        />
      ) : (
        <video width="400" muted loop autoPlay playsInline>
          <source
            // @ts-ignore
            src={nft.imgSmall}
            type="video/mp4"
          />
        </video>
      )}
      <div className="bottom">
        <Row justify="space-between">
          <Col style={{ paddingLeft: 15 }}>
            <span className="text-bold">{nft.name}</span>
            <br />
            {bestAsk && (
              <>
                <span className="text-bold">
                  {bestAsk} {quoteCurrency}
                </span>
                <br />
                <span className="text-light">Price</span>
              </>
            )}
          </Col>
          <Col style={{ textAlign: 'right', paddingRight: 15 }}>
            <b>{supply}</b>
            <br />
            Supply
          </Col>
        </Row>
      </div>
    </div>
  );
};
