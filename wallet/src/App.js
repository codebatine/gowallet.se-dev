import './App.css';
import { useState } from 'react';
import { Select } from 'antd';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import RecoverAccount from './components/RecoverAccount';
import WalletView from './components/WalletView';

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState('0x1');

  return (
    <div className="App">
      <div className="walletWrapper">
        <header>
          <Select
            onChange={(val) => setSelectedChain(val)}
            value={selectedChain}
            options={[
              {
                label: 'Ethereum',
                value: '0x1',
              },
              {
                label: 'Sepolia',
                value: '0xaa36a7',
              },
            ]}
            className="dropdown"
          ></Select>
        </header>
        {wallet && seedPhrase ? (
          <Routes>
            <Route
              path="/yourwallet"
              element={
                <WalletView
                  wallet={wallet}
                  setWallet={setWallet}
                  seedPhrase={seedPhrase}
                  setSeedPhrase={setSeedPhrase}
                  selectedChain={selectedChain}
                  setSelectedChain={setSelectedChain}
                />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/yourwallet"
              element={
                <CreateAccount
                  setSeedPhrase={setSeedPhrase}
                  setWallet={setWallet}
                />
              }
            />
            <Route
              path="/recover"
              element={
                <RecoverAccount
                  setSeedPhrase={setSeedPhrase}
                  setWallet={setWallet}
                />
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
