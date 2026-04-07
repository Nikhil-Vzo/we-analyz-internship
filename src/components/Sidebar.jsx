import React from 'react';
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
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">C</div>
      </div>
      
      <div className="sidebar-icons">
        <div className="icon-wrapper active">
          <Inbox size={20} className="icon active-icon" />
        </div>
        <div className="icon-wrapper">
          <Lightbulb size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <ClipboardList size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <FileText size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <Calculator size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <LayoutGrid size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <Layers size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <Crown size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <Database size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <History size={20} className="icon" />
        </div>
        <div className="icon-wrapper">
          <BarChart2 size={20} className="icon" />
        </div>
        <div className="icon-wrapper last-icon">
          <Settings size={20} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
