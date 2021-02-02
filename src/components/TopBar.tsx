import React from 'react';
import { Button, Col, Popover, Row, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import logo from '../assets/solible-logo.svg';
import styled from 'styled-components';
import { useWallet, WALLET_PROVIDERS } from '../utils/wallet';
import WalletConnect from './WalletConnect';
import SearchBar from './SearchBar';

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

  const history = useHistory();

  return (
    <>
      <Row
        align="middle"
        justify="space-around"
        style={{ background: '#121837' }}
      >
        <LogoWrapper onClick={() => history.push('/')}>
          <img src={logo} alt="" />
          {'Solible'}
        </LogoWrapper>
        <SearchBar />
        <Col>
          <Row justify="space-around" style={{ fontWeight: 600, fontSize: 16 }}>
            <Col
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/explore')}
            >
              EXPLORE
            </Col>
            <Col
              style={{ paddingRight: 70, paddingLeft: 70, cursor: 'pointer' }}
              onClick={() =>
                (window.location.href = 'https://help.bonfida.com')
              }
            >
              FAQ
            </Col>
            <Col>
              <WalletConnect />
            </Col>
            <Col style={{ marginLeft: 20 }}>
              <Select onSelect={setProvider} value={providerUrl}>
                {WALLET_PROVIDERS.map(({ name, url }) => (
                  <Select.Option value={url} key={url}>
                    {name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
