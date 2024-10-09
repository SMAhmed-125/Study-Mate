import Index from './index.css'
import LearningStyle from './pages/LearningStyle';
import Progress from './pages/Progress';
import StudentDashboard from './pages/StudentDashboard';
import Resources from './pages/Resources';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

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
            <div className="flex flex-col items-center mt-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learning-style" element={<LearningStyle />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/dashboard" element={<StudentDashboard />} />
                <Route path="/resources" element={<Resources />} />
              </Routes>
            </div>
          </header>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

