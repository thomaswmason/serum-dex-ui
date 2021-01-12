import { SettingOutlined } from '@ant-design/icons';
import { Button, Col, Popover, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/solible-logo.svg';
import styled from 'styled-components';
import { useWallet, WALLET_PROVIDERS } from '../utils/wallet';
import { useConnectionConfig } from '../utils/connection';
import Settings from './Settings';
import { EndpointInfo } from '../utils/types';
import { notify } from '../utils/notifications';
import { Connection } from '@solana/web3.js';
import WalletConnect from './WalletConnect';
import { getTradePageUrl } from '../utils/markets';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  img {
    height: 30px;
    margin-right: 8px;
  }
`;

export default function TopBar(): JSX.Element {
  const { connected, wallet, providerUrl, setProvider } = useWallet();
  const {
    endpoint,
    endpointInfo,
    setEndpoint,
    availableEndpoints,
    setCustomEndpoints,
  } = useConnectionConfig();
  const [addEndpointVisible, setAddEndpointVisible] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [searchFocussed, setSearchFocussed] = useState(false);

  const onAddCustomEndpoint = (info: EndpointInfo) => {
    const existingEndpoint = availableEndpoints.some(
      (e) => e.endpoint === info.endpoint,
    );
    if (existingEndpoint) {
      notify({
        message: `An endpoint with the given url already exists`,
        type: 'error',
      });
      return;
    }

    const handleError = (e) => {
      console.log(`Connection to ${info.endpoint} failed: ${e}`);
      notify({
        message: `Failed to connect to ${info.endpoint}`,
        type: 'error',
      });
    };

    try {
      const connection = new Connection(info.endpoint, 'recent');
      connection
        .getEpochInfo()
        .then((result) => {
          setTestingConnection(true);
          console.log(`testing connection to ${info.endpoint}`);
          const newCustomEndpoints = [
            ...availableEndpoints.filter((e) => e.custom),
            info,
          ];
          setEndpoint(info.endpoint);
          setCustomEndpoints(newCustomEndpoints);
        })
        .catch(handleError);
    } catch (e) {
      handleError(e);
    } finally {
      setTestingConnection(false);
    }
  };

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <>
      <Row
        align="middle"
        justify="space-around"
        style={{ background: '#121837' }}
      >
        <LogoWrapper onClick={() => history.push(tradePageUrl)}>
          <img src={logo} alt="" />
          {'Solible'}
        </LogoWrapper>

        {connected && (
          <div>
            <Popover
              content={<Settings autoApprove={wallet?.autoApprove} />}
              placement="bottomRight"
              title="Settings"
              trigger="click"
            >
              <Button style={{ marginRight: 8 }}>
                <SettingOutlined />
                Settings
              </Button>
            </Popover>
          </div>
        )}

        <Col>
          <Row justify="space-around" style={{ fontWeight: 600, fontSize: 16 }}>
            <Col>EXPLORE</Col>
            <Col style={{ paddingRight: 70, paddingLeft: 70 }}>FAQ</Col>
            <Col>
              <WalletConnect />
              <div>
                <Select onSelect={setProvider} value={providerUrl}>
                  {WALLET_PROVIDERS.map(({ name, url }) => (
                    <Select.Option value={url} key={url}>
                      {name}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
