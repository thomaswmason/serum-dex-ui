import React from 'react';
import { Button, Row, Col, Dropdown, Menu } from 'antd';
import { useWallet } from '../utils/wallet';
import { abbreviateAddress } from '../utils/utils';
import Settings from './Settings';
import { DisconnectOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Item } = Menu;

export const Dot = () => {
  return (
    <div
      style={{
        width: 6,
        height: 6,
        borderRadius: 4,
        background: '#51D07B',
      }}
    />
  );
};

export default function WalletConnect(): JSX.Element {
  const { connected, wallet } = useWallet();
  const publicKey = wallet?.publicKey;
  const history = useHistory(0);

  const styles = {
    menu: {
      width: '100%',
      fontWeight: 400,
      fontSize: 16,
      color: 'white',
    },
    icon: { fontSize: 24, color: '#B3B3FF' },
    col: { paddingRight: 20 },
    item: {
      paddingTop: 15,
    },
  };

  const ConnectedDropDown = (
    <Menu style={styles.menu}>
      <Item>
        <Settings autoApprove={wallet?.autoApprove} />
      </Item>
      <Item style={styles.item}>
        <Row
          align="middle"
          justify="start"
          onClick={() => history.push('/collection')}
        >
          <Col style={styles.col}>
            <AppstoreOutlined style={styles.icon} />
          </Col>
          <Col>Collection</Col>
        </Row>
      </Item>
      <Item onClick={wallet.disconnect} style={styles.item}>
        <Row align="middle" justify="start">
          <Col style={styles.col}>
            <DisconnectOutlined style={styles.icon} />
          </Col>
          <Col>Disconnect</Col>
        </Row>
      </Item>
    </Menu>
  );

  return (
    <React.Fragment>
      <Button
        type="text"
        size="large"
        onClick={connected ? () => {} : wallet.connect}
        style={{
          color: '#B2B2FF',
          textTransform: 'uppercase',
          border: '1px solid',
          borderColor: '#B2B2F',
        }}
      >
        {!connected ? (
          'Connect wallet'
        ) : (
          <Dropdown
            overlay={ConnectedDropDown}
            placement="bottomCenter"
            overlayStyle={{ width: 284, background: '#0A0D1F' }}
          >
            <Row align="middle" justify="space-around">
              <Col style={{ paddingRight: 10 }}>
                <Dot />
              </Col>
              <Col>{abbreviateAddress(publicKey)}</Col>
            </Row>
          </Dropdown>
        )}
      </Button>
    </React.Fragment>
  );
}
