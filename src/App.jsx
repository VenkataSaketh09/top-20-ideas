import { useState } from 'react';
import Home from './Screens/Home/HomeScreen';
import { ThemeContext } from './context/ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // Set a default theme like 'light' or 'dark'
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='flex flex-col items-center p-4 md:p-10' data-theme={theme.toLowerCase()}>
        <div className='max-w-2xl w-full items-center'>
          <Home />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
