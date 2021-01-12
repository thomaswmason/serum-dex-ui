import React from 'react';
import { Button, Row, Col } from 'antd';
import { useBestBid } from '../utils/nfts/utils';
import { PublicKey } from '@solana/web3.js';
import { NftCard } from '../components/NftCard';
import { NftPanelDisplayHomePage } from '../components/NftPanelDisplay';
import { getRedeemableNftList, getNonRedeemableNftList } from '../utils/nfts';
import waves from '../assets/homepage/bonfida_waves.svg';

const HomePageHeader = (): JSX.Element => {
  return (
    <>
      <h1 className="homepage-title">The marketplace for redeemable NFTs</h1>
      <h2 className="homepage-subtitle">Spend crypto on real life products</h2>
      <Row align="middle" justify="center" style={{ paddingTop: 20 }}>
        <Button className="btn-explore-marketplace">Explore marketplace</Button>
      </Row>
    </>
  );
};

const HomePage = (): JSX.Element => {
  const redeemable = getRedeemableNftList();
  const digital = getNonRedeemableNftList();
  return (
    <div
      style={{
        backgroundImage: `url(${waves})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <HomePageHeader />
      <Row justify="center" style={{ paddingTop: 100, marginBottom: 50 }}>
        <NftPanelDisplayHomePage
          title={'Redeemable'}
          NftsArray={redeemable.slice(0, 3)}
        />
      </Row>
      <Row justify="center" style={{ marginBottom: 50 }}>
        <NftPanelDisplayHomePage
          title={'Digital NFTS'}
          NftsArray={digital.slice(0, 3)}
        />
      </Row>
    </div>
  );
};

export default HomePage;
