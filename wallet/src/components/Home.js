import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <h2>Go Wallet</h2>
        <h4 className="h2">open, send, receive</h4>
        <Button
          onClick={() => navigate('/yourwallet')}
          className="frontPageButton"
        >
          Create Wallet
        </Button>
        <Button
          onClick={() => navigate('/recover')}
          className="frontPageButton"
        >
          Sign In With Seed Phrase
        </Button>
        <p className="frontPageBottom">
          <a
            href="https://gowallet.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gowallet.se
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
