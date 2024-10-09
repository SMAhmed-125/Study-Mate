import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Adjust the path as necessary

const LearningStyle = () => {
  const [learningStyles, setLearningStyles] = useState([]);

  useEffect(() => {
    api.get('/Learningstyles') // Use `api.get` instead of `axios.get`
      .then(response => setLearningStyles(response.data))
      .catch(error => console.error("Error fetching learning styles:", error));
  }, []);

  return (
    <div>
      <h1>Learning Styles</h1>
      {learningStyles.map(style => (
        <div key={style._id}>
          <p>{style.style}: {style.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LearningStyle;
