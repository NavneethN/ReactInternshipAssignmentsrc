import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import './styles.css';
import { Stack } from '@mui/material';


const FirstPage = () => {

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (firstname && lastname && phoneNumber && email) {
      const userDetails = {
        firstname,
        lastname,
        phoneNumber,
        email,
      };

      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/second-page');
    } else {
      alert('Please enter all details.');
    }
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form>


        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="First Name"
            onChange={e => setFirstName(e.target.value)}
            value={firstname}
            fullWidth
            required
          />
          <TextField
            type="text"
            variant='outlined'
            color='secondary'
            label="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={lastname}
            fullWidth
            required
          />
        </Stack>
        <TextField

          variant='outlined'
          color='secondary'
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <TextField
          type="email"
          variant='outlined'
          color='secondary'
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Button

          variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>

      </form>
    </div>
  );
};

export default FirstPage;
