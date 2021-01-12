import React, { useState } from 'react';
import { Button, Col, Row, Input, Space } from 'antd';
import { findNftFromMarket } from '../utils/nfts/utils';
import { useMarket, useTokenAccounts } from '../utils/markets';
import { NFT } from '../utils/nfts';
import {
  useQuoteFromMarketAddress,
  useBestAsk,
  useBestBid,
  useSupply,
} from '../utils/nfts/utils';
import { AddressLink } from './ExplorerLink';
import { RedeemableTag, OwnedTag } from './NftCard';
import { useWallet } from '../utils/wallet';

const Line = () => {
  return <div className="line" />;
};

const TradeForm = ({ nft }: { nft: NFT }): JSX.Element => {
  const [bidSize, setBidSize] = useState<string | null>(null);
  const [askSize, setAskSize] = useState<string | null>(null);
  const [accounts] = useTokenAccounts();
  const { wallet, connected } = useWallet();

  console.log(accounts);

  const { market } = useMarket();
  const bestBid = useBestBid(market?.address);
  const bestAsk = useBestAsk(market?.address);
  const quote = useQuoteFromMarketAddress(market?.address);
  const supply = useSupply(nft.mintAddress);

  return (
    <Space direction="vertical">
      <Row justify="space-between" align="middle" style={{ paddingTop: 20 }}>
        <Col className="trade-form-label">Price:</Col>
        <Col className="trade-form-description">
          {bestAsk} {quote}
        </Col>
      </Row>
      <Row justify="end" align="middle" style={{ paddingBottom: 20 }}>
        <Button className="buy-button">Buy now</Button>
      </Row>
      <Row align="middle" justify="space-between" style={{ paddingTop: 20 }}>
        <Col className="trade-form-label">Place Bid</Col>
        {/* Add input + Button */}
        <Input
          placeholder="Bid price"
          suffix={quote}
          style={{ width: 200, borderColor: '#b3b3ff' }}
        />
        <Button className="button-place-bid">Place bid</Button>
      </Row>
      {bestBid && (
        <Row justify="start" align="middle" style={{ paddingBottom: 10 }}>
          <Col flex="auto" />
          <Col>
            Highest Bid: {bestBid} {quote}
          </Col>
        </Row>
      )}
      <Row
        justify="space-between"
        align="middle"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Col className="trade-form-label">Supply</Col>
        <Col className="trade-form-description">1 of {supply}</Col>
      </Row>

      {nft.description && (
        <Row
          justify="space-between"
          align="middle"
          style={{ paddingTop: 20, paddingBottom: 20 }}
        >
          <Col className="trade-form-label">Description</Col>
          <Col className="trade-form-description">{nft.description}</Col>
        </Row>
      )}
      <Row
        justify="space-between"
        align="middle"
        style={{ paddingTop: 20, paddingBottom: 20 }}
      >
        <Col className="trade-form-label">Mint address</Col>
        <Col className="trade-form-description">
          <AddressLink address={nft.mintAddress} />
        </Col>
      </Row>
    </Space>
  );
};

const TradePanel = (): JSX.Element | null => {
  const { market } = useMarket();
  const nft = findNftFromMarket(market?.address);
  if (!nft) {
    return null;
  }
  return (
    <div className="trade-panel">
      <Row align="middle" justify="start">
        <Col>
          <h1 className="title">{nft.name}</h1>
        </Col>
        <Col style={{ marginTop: 20, paddingLeft: 20, paddingRight: 10 }}>
          {nft.redeembable && <RedeemableTag />}
        </Col>
        <Col style={{ marginTop: 20 }}>{true && <OwnedTag />}</Col>
      </Row>

      <Line />
      <Row align="middle" justify="space-around" style={{ height: '80%' }}>
        <Col flex="auto" />
        <Col>
          <img
            // @ts-ignore
            src={nft.img}
          />
        </Col>
        <Col flex="auto" />
        <Col>
          <TradeForm nft={nft} />
        </Col>
        <Col flex="auto" />
      </Row>
    </div>
  );
};

export default TradePanel;
