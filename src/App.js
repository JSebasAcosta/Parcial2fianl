import React from 'react';
import { AppProvider } from './AppContext';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealPreviwGrid from './components/mealPreviwGrid';

function App() {
  return (
    <div className='App'>
      <Navbar>
        <SearchBox />
      </Navbar>
      <Home />
    </div>
  );
}

export default function AppWithContext() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
