import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import api from '../services/api';

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/Student') 
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setError("Failed to load student data");
      });
  }, []);

  return (
    <Grid2 container spacing={3}>
      {error && <Typography color="error">{error}</Typography>}
      {students.map(student => (
        <Grid2 item xs={12} sm={6} md={4} key={student._id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{student.name}</Typography>
              <Typography variant="body2">ID: {student._id}</Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default StudentDashboard;

