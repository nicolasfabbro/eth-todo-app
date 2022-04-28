import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from '../../components/Header';

const AddNew = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header leftElement={<ArrowBackIcon onClick={() => navigate(-1)} />} />
    </>
  )
}

export default AddNew;
