import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import TicketViewsSidebar from './components/TicketViewsSidebar';
import TicketList from './components/TicketList';
import TicketContent from './components/TicketContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper">
        <TopNav />
        <div className="dashboard-container">
          <TicketViewsSidebar />
          <TicketList />
          <TicketContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
