import React from 'react';
import { Button, Popover } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useWallet } from '../utils/wallet';
import LinkAddress from './LinkAddress';

export default function WalletConnect(): JSX.Element {
  const { connected, wallet } = useWallet();
  const publicKey = wallet?.publicKey?.toBase58();

  return (
    <React.Fragment>
      <Button
        type="text"
        size="large"
        onClick={connected ? wallet.disconnect : wallet.connect}
        style={{
          color: '#B2B2FF',
          textTransform: 'uppercase',
          border: '1px solid',
          borderColor: '#B2B2F',
        }}
      >
        {!connected ? 'Connect wallet' : 'Disconnect'}
      </Button>
    </React.Fragment>
  );
}
