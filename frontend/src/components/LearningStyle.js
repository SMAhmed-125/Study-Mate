import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LearningStyle = () => {
  const [learningStyles, setLearningStyles] = useState([]);

  useEffect(() => {
    axios.get('/api/learningstyles')
      .then(response => setLearningStyles(response.data))
      .catch(error => console.error(error));
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