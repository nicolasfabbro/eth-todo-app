import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import Header from '../components/Header';
import Container from '../components/Container';

const List = () => {
  return (
    <>
      <Header
        leftElement={<LogoutIcon />}
        rightElement={<AddIcon />}
      />
      <Container className="list">
        This is the list
      </Container>
    </>
  )
}

export default List;
