import { Button } from '@mui/material';
import { useMetaMaskAccount } from '../../providers/MetaMaskProvider';
import Header from '../../components/Header';
import Container from '../../components/Container';
import "./styles.scss";

const WalletConnection = () => {
  const { ethereum, connectAccount } = useMetaMaskAccount();

  if (!ethereum) {
    return <p>Please install MetaMask to connect to this site</p>
  }

  return (
    <>
      <Header />
      <Container className="wallet-connection">
        <Button variant="contained" onClick={connectAccount}>Connect MetaMask</Button>
      </Container>
    </>
  )
}

export default WalletConnection;
