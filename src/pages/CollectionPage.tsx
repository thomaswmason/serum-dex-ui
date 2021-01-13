import React, { useEffect, useState } from 'react';
import { Row, Col, Spin } from 'antd';
import { NftCard } from '../components/NftCard';
import { getNftList } from '../utils/nfts';
import { useLocation } from 'react-router-dom';
import { useTokenAccounts } from '../utils/utils';
import { useWallet } from '../utils/wallet';
import { useConnection } from '../utils/connection';
import { NFT } from '../utils/nfts';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

const CollectionPage = (): JSX.Element => {
  let allNfts = getNftList();
  const [nfts, setNfts] = useState<Array<NFT>>([]);
  const { wallet, connected } = useWallet();
  const connection = useConnection();
  const { balances, loaded } = useTokenAccounts(wallet?.publicKey, connection);
  const rows = [...Array(Math.ceil(nfts?.length / 4))];
  const productRows = rows.map((row, idx) => nfts?.slice(idx * 4, idx * 4 + 4));

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keywords = params.get('keywords')?.split('-');

  useEffect(() => {
    const intersection = allNfts.filter((x) =>
      balances?.includes(x.mintAddress.toBase58()),
    );
    setNfts(intersection);
  }, [balances, connected]);

  if (!connected) {
    return (
      <Row align="middle" justify="center" style={{ paddingTop: 50 }}>
        <h1 className="explore-page-title">Please connect your wallet</h1>
      </Row>
    );
  }

  return (
    <>
      <Row align="middle" justify="space-around" style={{ paddingTop: 50 }}>
        <Col>
          <h1 className="explore-page-title">Your collection</h1>
        </Col>
        <Col>Sort options</Col>
      </Row>
      {productRows.map((row, idx) => {
        if (!loaded) {
          return (
            <Row justify="center" style={{ paddingTop: 100 }}>
              <Spin indicator={antIcon} size="large" />
            </Row>
          );
        }
        return (
          <Row align="middle" justify="center" style={{ paddingBottom: 20 }}>
            {row.map((nft) => {
              if (nfts.length > 0) {
                return (
                  <Col style={{ padding: 20 }}>
                    <NftCard mintAddress={nft.mintAddress} />
                  </Col>
                );
              }
            })}
          </Row>
        );
      })}
    </>
  );
};

export default CollectionPage;
