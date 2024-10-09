import logo from './logo.svg';
import './App.css';
import LearningStyle from './components/LearningStyle';
import Progress from './components/Progress';
import StudentDashboard from './components/StudentDashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text-4xl font-bold text-center">Study Mate Dashboard</h1>
            <p className="mt-4 text-center">
              Track your learning style and progress below.
            </p>
            <div className="flex flex-col items-center mt-8">
              <Routes>
                <Route path="/learning-style" component={LearningStyle} />
                <Route path="/progress" component={Progress} />
                <Route path="/dashboard" component={StudentDashboard} />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


