import { useState, useEffect, createContext, useContext, FC, ReactNode } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";

type MetaMaskContextTypes = {
  ethereum: MetaMaskInpageProvider | null;
  connectedAccount: string | undefined;
  connectAccount: () => void;
};

const MetaMaskAccountContext = createContext<MetaMaskContextTypes>({
  ethereum: null,
  connectedAccount: '',
  connectAccount: () => { },
});

type ProviderProps = {
  children: ReactNode;
};

const MetaMaskAccountProvider: FC<ProviderProps> = ({ children }) => {
  const [ethereum, setEthereum] = useState<MetaMaskInpageProvider | null>(null);
  const [connectedAccount, setConnectedAccount] = useState<string | undefined>('');

  const setEthereumFromWindow = async () => {
    if(window.ethereum) {
      // Reload if chain changes, see <https://docs.metamask.io/guide/ethereum-provider.html#chainchanged>
      window.ethereum.on('chainChanged', (_chainId) => window.location.reload());

      // Reload if account changes, see <https://docs.metamask.io/guide/ethereum-provider.html#accountschanged>
      window.ethereum.on('accountsChanged', (...accounts: unknown[]) => {
        console.log('accountsChanged');
        window.location.reload();
      });

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const rinkebyId = '0x4'; // See <https://docs.metamask.io/guide/ethereum-provider.html#chain-ids>
      if(chainId === rinkebyId) {
        setEthereum(window.ethereum);
      } else {
        alert('Please use Rinkeby network');
      }
    }
  }

  const handleAccounts = (accounts: string[]) => {
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('We have an authorized account: ', account);
      setConnectedAccount(account);
    } else {
      console.log("No authorized accounts yet")
    }
  };

  const getConnectedAccount = async () => {
    if (ethereum) {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      console.log('getConnectedAccount - eth_accounts', accounts);
      
      if (accounts && Array.isArray(accounts)) {
        handleAccounts(accounts);
      }
    }
  };

  const connectAccount = async () => {
    if (!ethereum) {
      console.error('Ethereum object is required to connect an account');
      return;
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log('eth_requestAccounts - connectAccount', accounts);
    if (accounts && Array.isArray(accounts)) {
      handleAccounts(accounts);
    }
  };

  
  useEffect(() => {
    setEthereumFromWindow();
  }, []);

  useEffect(() => {
    getConnectedAccount()
  });

  const value = { ethereum, connectedAccount, connectAccount };

  return (
    <MetaMaskAccountContext.Provider value={value}>
      {children}
    </MetaMaskAccountContext.Provider>
  )
}

export const useMetaMaskAccount = () => {
  return useContext(MetaMaskAccountContext);
}

export default MetaMaskAccountProvider;
