import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';
import { ThemeContext } from './context/ThemeContext';

import { Toaster } from 'react-hot-toast';

import NotFound from './pages/NotFound';

const App = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row ${isDarkMode ? 'dark' : ''}`}>
      <Toaster />
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App