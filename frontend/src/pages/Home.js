import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
    <Typography variant="h2" style={{ fontFamily: 'Montserrat, Inter, sans-serif', color: '#3BBA9C' }}>
        Study Mate
    </Typography>
    <Typography variant="h5" style={{ fontFamily: 'Montserrat, Inter, sans-serif', color: '#3BBA9C' }}>
        Your personal dashboard for tracking your learning style and progress
    </Typography>



      <Button variant="contained" color="primary" style={{ backgroundColor: '#3BBA9C', margin: '10px', padding: '10px 20px', fontWeight: 'bold', borderRadius: '0px' }}>
        <Link to="/learning-style" style={{ color: '#fff', textDecoration: 'none' }}>
          Learning Style
        </Link>
      </Button>

      <Button variant="contained" color="primary" style={{ backgroundColor: '#3BBA9C', margin: '10px', padding: '10px 20px', fontWeight: 'bold', borderRadius: '0px' }}>
        <Link to="/progress" style={{ color: '#fff', textDecoration: 'none' }}>
          Progress
        </Link>
      </Button>

      <Button variant="contained" color="primary" style={{ backgroundColor: '#3BBA9C', margin: '10px', padding: '10px 20px', fontWeight: 'bold', borderRadius: '0px' }}>
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
          Student Dashboard
        </Link>
      </Button>

      <Button variant="contained" color="primary" style={{ backgroundColor: '#3BBA9C', margin: '10px', padding: '10px 20px', fontWeight: 'bold', borderRadius: '0px' }}>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>
          About
        </Link>
      </Button>

    </Container>
  );
};

export default Home;
