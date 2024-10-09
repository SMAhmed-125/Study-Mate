import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Study Mate
      </Typography>
      <Typography variant="h5" component>
        Your personal dashboard for tracking your learning style and progress.
      </Typography>

      <Button variant="contained" color="primary" style={{ margin: '10px' }}>
        <Link to="/learning-style" style={{ color: '#fff', textDecoration: 'none' }}>
          Learning Style
        </Link>
      </Button>

      <Button variant="contained" color="primary" style={{ margin: '10px' }}>
        <Link to="/progress" style={{ color: '#fff', textDecoration: 'none' }}>
          Progress
        </Link>
      </Button>

      <Button variant="contained" color="primary" style={{ margin: '10px' }}>
        <Link to="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
          Student Dashboard
        </Link>
      </Button>
    </Container>
  );
};

export default Home;
