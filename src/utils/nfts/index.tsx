import { mintTo } from '@project-serum/serum/lib/token-instructions';
import { PublicKey } from '@solana/web3.js';

enum NFT_Types {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  REDEEMABLE = 'REDEEMABLE',
}

export class NFT {
  img: Object;
  imgSmall: Object;
  name: string;
  supply: number;
  mintAddress: PublicKey;
  marketAddress: PublicKey;
  redeembable: boolean;
  keywords: string[];
  type: NFT_Types;
  redeemAddress?: PublicKey;
  redeemDescription?: string;
  auctionDeadLine?: string;
  description?: string;
  constructor(
    img: Object,
    imgSmall: Object,
    name: string,
    supply: number,
    mintAddress: PublicKey,
    marketAddress: PublicKey,
    redeembable: boolean,
    keywords: string[],
    type: NFT_Types,
    redeemAddress?: PublicKey,
    redeemDescription?: string,
    auctionDeadLine?: string,
    description?: string,
  ) {
    this.img = img;
    this.imgSmall = imgSmall;
    this.name = name;
    this.supply = supply;
    this.mintAddress = mintAddress;
    this.marketAddress = marketAddress;
    this.redeembable = redeembable;
    this.keywords = keywords;
    this.type = type;
    this.redeemAddress = redeemAddress;
    this.redeemDescription = redeemDescription;
    this.auctionDeadLine = auctionDeadLine;
    this.description = description;
  }
}

const NFTS: NFT[] = [
  new NFT(
    require('../../assets/nfts/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA.gif'),
    require('../../assets/nfts/FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA/small.mp4'),
    'FIDA - NFT.',
    10,
    new PublicKey('FBycjnjoUW9hZh6a4VzkLCoYzFgjQBjHgbBhNuxZv3WA'),
    new PublicKey('EbMffYFDCpP9jzz6cMVAgMbbvLwSTSgakNcBD32okMVp'),
    false,
    ['fida', 'bonfida'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb.gif'),
    require('../../assets/nfts/4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb/small.mp4'),
    'FTX x Frontier Round 1',
    10,
    new PublicKey('4fRZgSrbc9o9BTqNwX2zsqLthwK63egGDu3VjWaZipmb'),
    new PublicKey('3E7C4291CxV5aCDSf3uc1MVepUv2pfofytj8UjxS471E'),
    false,
    ['front', 'frontier', 'ftx', 'round'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9.gif'),
    require('../../assets/nfts/91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9/small.mp4'),
    'Unlimited Energy',
    10,
    new PublicKey('91fSFQsPzMLat9DHwLdQacW3i3EGnWds5tA5mt7yLiT9'),
    new PublicKey('Gs5y1GsuCKpfzHzxrUmCmCbeRBRJbmpDiPjQdi8XzcNb'),
    false,
    ['unlimited', 'energy', 'bonfida', 'front'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP.gif'),
    require('../../assets/nfts/29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP/small.mp4'),
    'Need for Speed',
    25,
    new PublicKey('29PEpZeuqWf9tS2gwCjpeXNdXLkaZSMR2s1ibkvGsfnP'),
    new PublicKey('42MbxTXK2VSWfFxcwiSarUuZWr1YM25TmVsx5tUZXiGa'),
    false,
    ['need', 'speed', 'front'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo.gif'),
    require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/small.mp4'),
    'LSD',
    1,
    new PublicKey('AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo'),
    new PublicKey('DG7rHpfmQ1CHi1KvvpTM9ffyGkZHuFXEQyPKrWXL8rCW'),
    false,
    ['lsd', 'gif'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL.jpeg'),
    require('../../assets/nfts/EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL/small.jpeg'),
    'CMS - Rare',
    1,
    new PublicKey('EDP8TpLJ77M3KiDgFkZW4v4mhmKJHZi9gehYXenfFZuL'),
    new PublicKey('Ck6EvkQuKXTJecWu9L8zES2YdzcShmpJxgW6wM5bpuEM'),
    false,
    ['cms', 'holding'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ.gif'),
    require('../../assets/nfts/9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ/small.mp4'),
    'DeceFi',
    1,
    new PublicKey('9CmQwpvVXRyixjiE3LrbSyyopPZohNDN1RZiTk8rnXsQ'),
    new PublicKey('Fp3Fg8RcFP8fq5a9t33xfWWrMPWLiJYpC94nA1RfwGha'),
    false,
    ['decefi', 'DCFI'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z.png'),
    require('../../assets/nfts/FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z/small.png'),
    'Seldom',
    1500,
    new PublicKey('FkmkTr4en8CXkfo9jAwEMov6PVNLpYMzWr3Udqf9so8Z'),
    new PublicKey('TT4nPag4MmQrQZ5w4f7zefnK6HFkTUG7ND8sMrMWBJ8'),
    false,
    ['seldom', 'wallet'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD.JPG'),
    require('../../assets/nfts/2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD/small.JPG'),
    'Satoshi Closeup',
    10,
    new PublicKey('2gn1PJdMAU92SU5inLSp4Xp16ZC5iLF6ScEi7UBvp8ZD'),
    new PublicKey('AuYWT2M2LuGMprFEf9t3hLJeAtWPKEZpatqobErEVnQ7'),
    false,
    ['satoshi', 'closeup', 'genesis', 'block'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR.JPG'),
    require('../../assets/nfts/7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR/small.JPG'),
    'Satoshi GB',
    10,
    new PublicKey('7mhZHtPL4GFkquQR4Y6h34Q8hNkQvGc1FaNtyE43NvUR'),
    new PublicKey('DFHdLA5hjLTsdMh5aQcGuQLWP2y7tf9UDkQ3vbcWb73H'),
    false,
    ['satoshi', 'gb', 'genesis', 'block'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH.gif'),
    require('../../assets/nfts/AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH/small.mp4'),
    'Satoshi GB',
    10,
    new PublicKey('AiD7J6D5Hny5DJB1MrYBc2ePQqy2Yh4NoxWwYfR7PzxH'),
    new PublicKey('5qhHk1Dfr8fjP8a13e1VCYZr6gpXGUj1hDwxWe5zdDL9'),
    false,
    ['satoshi', 'gb', 'genesis', 'block', 'gif'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g.gif'),
    require('../../assets/nfts/822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g/small.mp4'),
    'CZ vs SBF',
    1,
    new PublicKey('822s5k4kqGZU9HHH1TVkXZDMGYDjwTLKN53gTxk86G8g'),
    new PublicKey('EkXiaPoCP1KD6pTSW7rC1Q8KNitSxNhzxYZLuNrGXSjT'),
    false,
    ['cz', 'sbf', 'binance', 'ftx'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1.gif'),
    require('../../assets/nfts/FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1/small.mp4'),
    'Sound Wave',
    3,
    new PublicKey('FAT8nAdwWdAKyU3kaVAci6TGtPVyuTxBu5i37kjTwCf1'),
    new PublicKey('EGRMgG4bsKu54QGwwbkzfGz6dy5rMsryV9XGTWCXN2mb'),
    false,
    ['solana', 'sound', 'wave'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL/GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL.gif'),
    require('../../assets/nfts/GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL/small.mp4'),
    'Car Phoenix',
    5,
    new PublicKey('GL1eYh1GZTBUkauhYwjwsUfVCY5YSqy4XcygvmBxQPtL'),
    new PublicKey('HHME7KWhLspgHv7MFTwaRiRpVq9Z1q99fy5AtadwwZLY'),
    false,
    ['car', 'phoenix'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o/2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o.gif'),
    require('../../assets/nfts/2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o/small.mp4'),
    'Bunker Burn',
    5,
    new PublicKey('2eiiGkEgcCXsvznCizZyVKLA3iBHCi6Ta44JvVRuSw6o'),
    new PublicKey('FQvtPLxm2BvqWBNqhR6gzqcEjiydEpDW9mrHTN6jhnJr'),
    false,
    ['bunker', 'burn'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz/ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz.gif'),
    require('../../assets/nfts/ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz/small.mp4'),
    'Junkyard Stock Burn',
    5,
    new PublicKey('ADfPJ6q9tuJ2VDMGkLjdnwm92kgyLF5na1KyaSiXHKEz'),
    new PublicKey('8B5gScgJWsbzVoCKNjrRxgsfexFFohT9K76wm3kwXDLU'),
    false,
    ['junkyar', 'burn', 'stock'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ/2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ.gif'),
    require('../../assets/nfts/2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ/small.mp4'),
    'Stock Submersion',
    5,
    new PublicKey('2dFdXxYBWuXo9LKfSoRWMhPu44kiwMjjUgbjAPb1BorZ'),
    new PublicKey('9TjijGbEsTW9XCm7v8wregGWT5NK24vTDS6LKj9inKfK'),
    false,
    ['submersion', 'stock'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE/561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE.gif'),
    require('../../assets/nfts/561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE/small.mp4'),
    'Sustained Burn',
    5,
    new PublicKey('561q6ph76Am8fQ5ZCZ52tybAZCBjtNzmhCen2dMM4ovE'),
    new PublicKey('F33un2ub1hGN9jyNRcDcDABT3WcgTQuGrZNAUTviNFnk'),
    false,
    ['sustained', 'burn'],
    NFT_Types.VIDEO,
  ),
  new NFT(
    require('../../assets/nfts/EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn/EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn.png'),
    require('../../assets/nfts/EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn/small.png'),
    'CME ETH',
    1,
    new PublicKey('EWLVDZ7hNBxEADSDazaKtB81MAi1TNkDXmVuyYz6kKbn'),
    new PublicKey('HguTmEtymYuSKhkFZ7LS72Ro27jmtxk1ypHnbU49xZYF'),
    false,
    ['cme', 'eth'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R/ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R.jpg'),
    require('../../assets/nfts/ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R/small.jpg'),
    'Luther Blissett #0',
    1,
    new PublicKey('ZyqV5jBYqcffWkaxcPPL9pFEXGkL3feGNFQy46PNj4R'),
    new PublicKey('BTTAWf84hmLjbt7roqy9Jz3YYRynCaAYmk9yaUy5fzdA'),
    false,
    ['luther', 'blissett', '#0'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz/7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz.jpg'),
    require('../../assets/nfts/7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz/small.jpg'),
    'Luther Blissett #0/1',
    1,
    new PublicKey('7Q5iKDEGBPdu9G46Wif9c7vX25rE3E9pVyNrbomzKQz'),
    new PublicKey('3aFQqVVmHSGpAKGe1CLhFuuZjxd1jdhR8YcPmDGjiDdC'),
    false,
    ['luther', 'blissett', '#0/1'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN/CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN.png'),
    require('../../assets/nfts/CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN/small.png'),
    'Doge',
    430,
    new PublicKey('CHhyNFe17Xd9k7HA3tacdicftCdpS7QXzUcqY41ZbibN'),
    new PublicKey('Hsh9AgsFapGnXPRWwDfhy1M46DXgHotCQ6FpGiTvjqJZ'),
    false,
    ['doge'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3/CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3.jpg'),
    require('../../assets/nfts/CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3/small.jpg'),
    'SBF worked hard',
    1,
    new PublicKey('CQMAqmZZrBdLeyuYde8G55epEfcJPzvopUZrMtDKG4W3'),
    new PublicKey('4iHoPQqYTD97iHTHiNmu8kwi4BqERnbmPdQkn4t3HT3V'),
    false,
    ['sbf', 'worked', 'hard'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/HvsGKEML1Z3DfKoZxi5EpGcpUMnzGj7pqmyb78HS9CK/HvsGKEML1Z3DfKoZxi5EpGcpUMnzGj7pqmyb78HS9CK.png'),
    require('../../assets/nfts/HvsGKEML1Z3DfKoZxi5EpGcpUMnzGj7pqmyb78HS9CK/small.png'),
    'SON',
    1,
    new PublicKey('HvsGKEML1Z3DfKoZxi5EpGcpUMnzGj7pqmyb78HS9CK'),
    new PublicKey('3ycEFLcKgcoTHmSvhXsr1yf11uj4g3bB63WUqnrmDM2F'),
    false,
    ['son'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/CRG8S8UEw1AjE8gDgP6SYj5ZvCe75xhpCkHb32vPui2M/CRG8S8UEw1AjE8gDgP6SYj5ZvCe75xhpCkHb32vPui2M.png'),
    require('../../assets/nfts/CRG8S8UEw1AjE8gDgP6SYj5ZvCe75xhpCkHb32vPui2M/small.png'),
    'Central Park, NYC',
    1,
    new PublicKey('CRG8S8UEw1AjE8gDgP6SYj5ZvCe75xhpCkHb32vPui2M'),
    new PublicKey('HYkuaxQg8yJgtvDJNzk7ZPgjxHXRxT7Lgh4Bm9U63Yp5'),
    false,
    ['central', 'park', 'nyc'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/7e6SdwobPVTZYsP6giRfiCWNz5WGgVd4wn9MacRdTnFW/7e6SdwobPVTZYsP6giRfiCWNz5WGgVd4wn9MacRdTnFW.jpg'),
    require('../../assets/nfts/7e6SdwobPVTZYsP6giRfiCWNz5WGgVd4wn9MacRdTnFW/small.jpg'),
    'Mine',
    1,
    new PublicKey('7e6SdwobPVTZYsP6giRfiCWNz5WGgVd4wn9MacRdTnFW'),
    new PublicKey('6sX7WpkbuWCDGw1VoshrXQdrNME5CuZdPZv1sF99seUy'),
    false,
    ['mine'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/5gj1JbHvNTKd1qHgvEzW6txKABkCxyB4a9JSuYYnR2Kx/5gj1JbHvNTKd1qHgvEzW6txKABkCxyB4a9JSuYYnR2Kx.png'),
    require('../../assets/nfts/5gj1JbHvNTKd1qHgvEzW6txKABkCxyB4a9JSuYYnR2Kx/small.png'),
    'UFUCKA',
    1,
    new PublicKey('5gj1JbHvNTKd1qHgvEzW6txKABkCxyB4a9JSuYYnR2Kx'),
    new PublicKey('4XYCHBBpE4hG66inUT9L8bm9SvowJg2FUHiz7NTvNvEh'),
    false,
    ['ufucka'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/4KvnPpXSLXBqwqeHCcLPiJwHYB3M3BA1hBGJdEAV5Dcn/4KvnPpXSLXBqwqeHCcLPiJwHYB3M3BA1hBGJdEAV5Dcn.jpg'),
    require('../../assets/nfts/4KvnPpXSLXBqwqeHCcLPiJwHYB3M3BA1hBGJdEAV5Dcn/small.jpg'),
    'Convoluted Ink #1',
    1,
    new PublicKey('4KvnPpXSLXBqwqeHCcLPiJwHYB3M3BA1hBGJdEAV5Dcn'),
    new PublicKey('5X6kBvgz3d7QzJ3FPZPGK43rM9qRnEcpNW5mzmsPZNYc'),
    false,
    ['convoluted', 'ink'],
    NFT_Types.IMAGE,
  ),
  new NFT(
    require('../../assets/nfts/FaqTxsEDPi1AGieTzstHLB7Va1vr8merFAzSA8W8rH5u/FaqTxsEDPi1AGieTzstHLB7Va1vr8merFAzSA8W8rH5u.png'),
    require('../../assets/nfts/FaqTxsEDPi1AGieTzstHLB7Va1vr8merFAzSA8W8rH5u/small.png'),
    '2020 Year of YOLO Towel',
    500,
    new PublicKey('FaqTxsEDPi1AGieTzstHLB7Va1vr8merFAzSA8W8rH5u'),
    new PublicKey('FyTf1j5sjWKve3LhEBeTjkjAWdbHtXrn6F8qTfqoPsFK'),
    false,
    ['2020', 'year', 'yolo', 'towel'],
    NFT_Types.IMAGE,
  ),
];

export default NFTS;

export const REDEEMABLE_NFTS: NFT[] = [
  new NFT(
    require('../../assets/nfts/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf.gif'),
    require('../../assets/nfts/94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf/small.mp4'),
    'SRM Socks',
    5,
    new PublicKey('94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf'),
    new PublicKey('2SFVMDtouRyqJESh2WmxJ8DzDPTF5mHZBDMeXjHwgr7Z'),
    true,
    ['srm', 'serum', 'sock', 'kong'],
    NFT_Types.VIDEO,
    new PublicKey('9QTrBTjooTK4NQ5QkYQGUNkyo8grpMrrmjMXAh3bJVtd'),
    'This NFT can be redeemed for a physical pair of Serum Socks mailed to your door',
  ),
  new NFT(
    require('../../assets/nfts/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd.jpg'),
    require('../../assets/nfts/7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd/small.jpg'),
    'SRM tee-shirt',
    8,
    new PublicKey('7TRzvCqXN8KSXggbSyeEG2Z9YBBhEFmbtmv6FLbd4mmd'),
    new PublicKey('3UtEfHUNgeZuiKnEJFUebKt6M68D98PM7vn1MjBzBFyw'),
    true,
    ['srm', 't', 'shirt', 'tee-shirt', 'redeem'],
    NFT_Types.IMAGE,
    new PublicKey('4bGXwBj7222chiksjAF4XcsqebamRNQUBqxdRQeYHYMr'),
    'This NFT can be redeemed for a physical SRM tee-shirt mailed to your door. All sizes are availble (M/F).',
  ),
  new NFT(
    require('../../assets/nfts/Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB/Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB.JPG'),
    require('../../assets/nfts/Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB/small.JPG'),
    'DOGE',
    1,
    new PublicKey('Etwjv2bTbXhgRFgJqMwG2LG6PQXPvVknQi4BMbjGQwJB'),
    new PublicKey('EEK1RjJuc5ZtK1iEfjr6BSatG6N9V1ewm6D9XAezkbT6'),
    true,
    ['doge', 'painting'],
    NFT_Types.IMAGE,
    new PublicKey('7aMoYNa3M6r1F4QrkPmUPpjRtEXbDaNpaWkFXW1wvNuj'),
    'This NFT can be redeemed for the real painting mailed to your door',
    '2021-02-14T21:00:00.000+08:00',
  ),
  new NFT(
    require('../../assets/nfts/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ.png'),
    require('../../assets/nfts/8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ/small.png'),
    'Ledger Nano X',
    30,
    new PublicKey('8xH9FWLA5wbETiV6WM1yUUbAnSE3N2pZqZR6WW3aUQTJ'),
    new PublicKey('AS5ZvSVSmu5LXNg6UetDfwafT41xeUQyUcFzmMHNtCzW'),
    true,
    ['ledger', 'nano', 'x', 'black', 'friday'],
    NFT_Types.IMAGE,
    new PublicKey('EvXsVnNu9mxo63tPiGNbLy3mwb6Zy4qT59RR62Y2UJW1'),
    'This NFT can be redeemed for a Ledger Nano X branded Serum mailed to your door. The market will be unlisted on 30/11/2020 at 9pm UTC +8. After this date you will only be able to redeem.',
    '2020-11-30T21:00:00.000+08:00',
  ),
  new NFT(
    require('../../assets/nfts/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx.jpg'),
    require('../../assets/nfts/AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx/small.jpg'),
    'Bitcoin Tram',
    5,
    new PublicKey('AgdBQN2Sy2abiZ2KToWeUsQ9PHdCv95wt6kVWRf5zDkx'),
    new PublicKey('E6TpcPUuBea77dgYUwsArSTrkR6QRUkKWsv7B85Lzh5v'),
    true,
    ['bitcoin', 'tram', 'hong', 'kong'],
    NFT_Types.IMAGE,
    new PublicKey('FCHmpXY6AQifAwe6SjAEGfF6APTPEcCjyNFAHn83ijdb'),
    'This NFT can be redeemed for a physical Bitcoin Tram model mailed to your door',
    '2020-11-06T21:00:00.000+08:00',
  ),
];

export const ALL = [...REDEEMABLE_NFTS, ...NFTS];

export const DEFAULT_NFT = new NFT(
  require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo.gif'),
  require('../../assets/nfts/AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo/small.mp4'),
  'LSD',
  1,
  new PublicKey('AcstFzGGawvvdVhYV9bftr7fmBHbePUjhv53YK1W3dZo'),
  new PublicKey('DG7rHpfmQ1CHi1KvvpTM9ffyGkZHuFXEQyPKrWXL8rCW'),
  false,
  ['lsd', 'gif'],
  NFT_Types.VIDEO,
);

export const getNftList = () => {
  return ALL;
};

export const getRedeemableNftList = () => {
  return REDEEMABLE_NFTS;
};

export const getNonRedeemableNftList = () => {
  return NFTS;
};

export const getExceptionalStyle = (mint: PublicKey): any => {
  switch (mint.toBase58()) {
    case '94w8qHS4XFadqJhWZzyfAS2bbj55ReFnVYB8BwewMNmf':
      return { top: 80 };
    default:
      return null;
  }
};
