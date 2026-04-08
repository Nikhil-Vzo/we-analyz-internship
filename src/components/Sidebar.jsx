import React, { useState } from 'react';
import './Sidebar.css';
import {
  Inbox,
  Lightbulb,
  ClipboardList,
  FileText,
  Calculator,
  LayoutGrid,
  Layers,
  Crown,
  Database,
  History,
  BarChart2,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [
    { component: Inbox },
    { component: Lightbulb },
    { component: ClipboardList },
    { component: FileText },
    { component: Calculator },
    { component: LayoutGrid },
    { component: Layers },
    { component: Crown },
    { component: Database },
    { component: History },
    { component: BarChart2 }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">C</div>
      </div>
      
      <div className="sidebar-icons">
        {icons.map((IconClass, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`icon-wrapper ${isActive ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <IconClass.component size={20} className={`icon ${isActive ? 'active-icon' : ''}`} />
            </div>
          );
        })}
        <div className="icon-wrapper last-icon">
          <Settings size={20} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
