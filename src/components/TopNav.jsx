import React from 'react';
import './TopNav.css';
import { Search, ChevronDown, HelpCircle, Gift } from 'lucide-react';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="top-nav-left">
        <h1 className="nav-title">Helpdesk</h1>
      </div>
      
      <div className="top-nav-center">
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search Capacity..." className="search-input" />
        </div>
      </div>
      
      <div className="top-nav-right">
        <button className="create-button">
          Create <ChevronDown size={14} className="dropdown-icon" />
        </button>
        
        <div className="nav-icon-action">
          <HelpCircle size={20} />
        </div>
        <div className="nav-icon-action">
          <Gift size={20} />
        </div>
        
        <div className="profile-container">
          <img 
            src="https://i.pravatar.cc/150?img=47" 
            alt="Profile Avatar" 
            className="profile-avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
