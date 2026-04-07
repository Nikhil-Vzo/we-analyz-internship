import React from 'react';
import './TicketViewsSidebar.css';
import { ChevronDown, Headset, LayoutTemplate } from 'lucide-react';

const TicketViewsSidebar = () => {
  return (
    <div className="views-sidebar">
      <div className="views-section">
        <div className="section-header">
          <ChevronDown size={14} className="section-icon" />
          <span className="section-title">TICKET VIEWS</span>
        </div>
        
        <ul className="views-list">
          <li className="view-item active">
            <span className="view-name">My Tickets</span>
            <span className="view-count active-count">9</span>
          </li>
          <li className="view-item">
            <span className="view-name">Past Due</span>
            <span className="view-count">4</span>
          </li>
          <li className="view-item">
            <span className="view-name">High Priority</span>
            <span className="view-count">11</span>
          </li>
          <li className="view-item">
            <span className="view-name">Unassigned</span>
            <span className="view-count">98</span>
          </li>
          <li className="view-item">
            <span className="view-name">All Tickets</span>
            <span className="view-count">2,192</span>
          </li>
        </ul>
      </div>

      <div className="additional-links">
        <div className="link-item">
          <Headset size={16} className="link-icon" />
          <span className="link-name">LIVE CHATS</span>
        </div>
        <div className="link-item">
          <LayoutTemplate size={16} className="link-icon" />
          <span className="link-name">BOARDS</span>
        </div>
      </div>
    </div>
  );
};

export default TicketViewsSidebar;
