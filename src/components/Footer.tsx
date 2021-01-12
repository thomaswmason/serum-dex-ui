import React from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Link from './Link';
import { helpUrls } from './HelpUrls';
import logo from '../assets/solible-logo.svg';
import discord from '../assets/social/discord.svg';
import telegram from '../assets/social/telegram.svg';
import twitter from '../assets/social/twitter.svg';

const { Footer } = Layout;
const { useBreakpoint } = Grid;

const footerElements = [
  {
    description: 'Twitter',
    link: helpUrls.twitter,
  },
  { description: 'Support', link: helpUrls.support },
  { description: 'Bonfida', link: helpUrls.bonfida },
];

export const CustomFooter = () => {
  const smallScreen = !useBreakpoint().lg;

  return (
    <Footer
      style={{
        height: '60px',
        paddingBottom: 10,
        paddingTop: 10,
        background: '#121837',
      }}
    >
      <Row align="middle" justify="space-around">
        <Col>
          <img src={logo} />
        </Col>
        {!smallScreen && (
          <Col>
            {footerElements.map((elem, index) => {
              return (
                <Link
                  key={`footer-elem-${index}-${elem.description}`}
                  external
                  to={elem.link}
                  style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textTransform: 'uppercase',
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  {elem.description}
                </Link>
              );
            })}
          </Col>
        )}
        <Col>
          <img
            src={discord}
            style={{ height: 25, cursor: 'pointer' }}
            onClick={() => (window.location.href = helpUrls.discord)}
          />
          <img
            src={telegram}
            style={{
              height: 20,
              marginRight: 25,
              marginLeft: 25,
              cursor: 'pointer',
            }}
            onClick={() => (window.location.href = helpUrls.telegram)}
          />
          <img
            src={twitter}
            style={{ height: 20, cursor: 'pointer' }}
            onClick={() => (window.location.href = helpUrls.twitter)}
          />
        </Col>
      </Row>
    </Footer>
  );
};
