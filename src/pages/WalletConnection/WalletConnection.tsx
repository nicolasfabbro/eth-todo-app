import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Header from '../../components/Header';
import Container from '../../components/Container';
import "./styles.scss";

const WalletConnection = () => {
  return (
    <>
      <Header rightElement={<AddIcon />} />
      <Container className="wallet-connection">
        <Button variant="contained">Connect MetaMask</Button>
      </Container>
    </>
  )
}

export default WalletConnection;
