import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import api from '../services/api';

const Progress = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    api.get('/Progress')
      .then(response => setProgress(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Grid2 container spacing={3}>
      {progress.map(p => (
        <Grid2 item xs={12} sm={6} md={4} key={p._id}>
          <Card>
            <CardContent>
              <Typography variant="h6">Student ID: {p.student}</Typography>
              <Typography variant="body2">Progress: {p.progressPercentage}%</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Progress;
