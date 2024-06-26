import React from 'react';
import { BulbOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ethers } from 'ethers';

const { TextArea } = Input;

function RecoverAccount({ setWallet, setSeedPhrase }) {
  const navigate = useNavigate();
  const [typedSeed, setTypedSeed] = useState('');
  const [nonValid, setNonValid] = useState(false);

  function seedAdjust(e) {
    setNonValid(false);
    setTypedSeed(e.target.value);
  }

  function recoverWallet() {
    let recoveredWallet;
    try {
      recoveredWallet = ethers.Wallet.fromPhrase(typedSeed);
    } catch (error) {
      setNonValid(true);
      return;
    }

    setSeedPhrase(typedSeed);
    setWallet(recoveredWallet.address);
    navigate('/yourwallet');
  }

  return (
    <>
      <div className="content">
        <div className="mnemonic">
          <BulbOutlined style={{ fontSize: '1.2rem' }} />
          <div>Enter your seed phrase, separate the 12 words with spaces.</div>
        </div>
        <TextArea
          value={typedSeed}
          onChange={seedAdjust}
          rows={4}
          className="seedPhraseContainer"
          placeholder="Tye your seed phrase here..."
        />
        <Button
          disabled={
            typedSeed.split(' ').length !== 12 || typedSeed.slice(-1) === ' '
          }
          className="frontPageButton"
          onClick={() => recoverWallet()}
        >
          Recover Wallet
        </Button>
        {nonValid && <p>Invalid Seed Phrase</p>}
        <p
          className="frontPageBottom"
          onClick={() => navigate('/')}
        >
          Back Home
        </p>
      </div>
    </>
  );
}

export default RecoverAccount;
