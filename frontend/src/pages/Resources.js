import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import api from '../services/api'; // Assuming api setup is correct
import { Link } from 'react-router-dom';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/Resources') // Ensure this endpoint is correct and matches your backend
      .then((response) => {
        setResources(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resources:", error);
        setError("Failed to load resource data");
      });
  }, []);

  return (
    <Grid2 container spacing={3}>
      {error && <Typography color="error">{error}</Typography>}
      {resources.map(resource => (
        <Grid2 item xs={12} sm={6} md={4} key={resource._id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{resource.title}</Typography>
              <Typography variant="body2">Description: {resource.description}</Typography>
              <Typography variant="body2">Type: {resource.type}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Resources;
