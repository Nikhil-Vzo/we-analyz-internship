import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import TicketViewsSidebar from './components/TicketViewsSidebar';
import TicketList from './components/TicketList';
import TicketContent from './components/TicketContent';
import RightSidebar from './components/RightSidebar';

function App() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = () => {
    setIsModalOpen(false);

  };

  return (
    <div className="app-container">
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Create New Ticket</h2>
              <span className="modal-close" onClick={() => setIsModalOpen(false)}>×</span>
            </div>
            <div className="modal-body">
              <input type="text" className="modal-input" placeholder="Ticket Title..." autoFocus />
              <textarea className="modal-input" placeholder="Describe the issue..." rows="4" style={{resize: 'none'}} />
              <select className="modal-input">
                <option>Assign to...</option>
                <option>Allie Harmon</option>
                <option>Danny macher</option>
              </select>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleCreate}>Create Ticket</button>
            </div>
          </div>
        </div>
      )}
      <Sidebar />
      <div className="main-wrapper">
        <TopNav 
          toggleRightSidebar={() => setIsRightSidebarOpen(!isRightSidebarOpen)} 
          openCreateModal={() => setIsModalOpen(true)}
        />
        <div className="dashboard-container">
          <TicketViewsSidebar />
          <TicketList />
          <TicketContent />
          <RightSidebar isOpen={isRightSidebarOpen} onClose={() => setIsRightSidebarOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;
