import React, { useState } from 'react';
import './TicketViewsSidebar.css';
import { ChevronDown, Headset, LayoutTemplate } from 'lucide-react';

const TicketViewsSidebar = () => {
  const [isViewsOpen, setIsViewsOpen] = useState(true);
  const [activeView, setActiveView] = useState('My Tickets');

  const views = [
    { name: 'My Tickets', count: 9, hasActiveStyle: true },
    { name: 'Past Due', count: 4, hasActiveStyle: false },
    { name: 'High Priority', count: 11, hasActiveStyle: false },
    { name: 'Unassigned', count: 98, hasActiveStyle: false },
    { name: 'All Tickets', count: '2,192', hasActiveStyle: false }
  ];

  return (
    <div className="views-sidebar">
      <div className="views-section">
        <div className="section-header" onClick={() => setIsViewsOpen(!isViewsOpen)}>
          <ChevronDown size={14} className="section-icon" style={{ transform: isViewsOpen ? 'none' : 'rotate(-90deg)', transition: 'transform 0.2s' }} />
          <span className="section-title">TICKET VIEWS</span>
        </div>
        
        <div className={`views-list-container ${!isViewsOpen ? 'closed' : ''}`}>
          <ul className="views-list">
            {views.map(view => (
              <li 
                key={view.name}
                className={`view-item ${activeView === view.name ? 'active' : ''}`}
                onClick={() => setActiveView(view.name)}
              >
                <span className="view-name">{view.name}</span>
                <span className={`view-count ${view.hasActiveStyle && activeView === view.name ? 'active-count' : ''}`}>{view.count}</span>
              </li>
            ))}
          </ul>
        </div>
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
