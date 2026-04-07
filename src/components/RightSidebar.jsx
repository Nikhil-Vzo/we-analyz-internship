import React from 'react';
import './RightSidebar.css';
import { X, ChevronDown, MinusCircle, UserPlus, Calendar, Plus, ChevronRight, CheckSquare } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="rs-header">
        <button className="status-button">
          To Do <ChevronDown size={14} className="ml-2" />
        </button>
        <button className="close-btn">
          <X size={18} />
        </button>
      </div>

      <div className="rs-content">
        <div className="property-group">
          <div className="property-label">Priority</div>
          <div className="custom-select">
            <div className="select-value">
              <MinusCircle size={16} className="priority-icon medium" />
              <span>Medium</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-header">
            <div className="property-label">Assigned To</div>
            <div className="property-action">Assign to me</div>
          </div>
          <div className="custom-select">
            <div className="select-value">
              <img src="https://i.pravatar.cc/150?img=47" alt="Allie" className="prop-avatar" />
              <span>Allie Harmon</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Project</div>
          <div className="custom-select">
            <div className="select-value">
              <span>Administrative</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Ticket Type</div>
          <div className="custom-select">
            <div className="select-value">
              <CheckSquare size={16} className="type-icon" />
              <span>Task</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Due Date</div>
          <div className="custom-select">
            <div className="select-value text-muted">
              <Calendar size={16} className="mr-2" />
              <span>mm/dd/yyyy</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Reporter</div>
          <div className="custom-select">
            <div className="select-value">
              <img src="https://i.pravatar.cc/150?img=47" alt="Allie" className="prop-avatar" />
              <span>Allie Harmon</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Tags</div>
          <div className="add-tag">
            Add Tag <Plus size={14} />
          </div>
        </div>
      </div>

      <div className="rs-accordions">
        <div className="accordion-item">
          <span>TASKS</span>
          <ChevronRight size={16} />
        </div>
        <div className="accordion-item">
          <span>COLLECTED FIELDS</span>
          <ChevronRight size={16} />
        </div>
        <div className="accordion-item">
          <span>LINKED TICKETS <span className="acc-badge">2</span></span>
          <ChevronRight size={16} />
        </div>
        <div className="accordion-item">
          <span>HISTORY</span>
          <ChevronRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
