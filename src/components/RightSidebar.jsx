import React, { useState } from 'react';
import './RightSidebar.css';
import { X, ChevronDown, MinusCircle, AlertCircle, ArrowDownCircle, UserPlus, Calendar, Plus, ChevronRight, CheckSquare } from 'lucide-react';

const RightSidebar = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    'TASKS': false,
    'COLLECTED FIELDS': false,
    'LINKED TICKETS': false,
    'HISTORY': false
  });
  
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const [data, setData] = useState({
    status: 'To Do',
    priority: 'Medium',
    assignee: 'Allie Harmon',
    assigneeImg: 'https://i.pravatar.cc/150?img=47',
    project: 'Administrative',
    ticketType: 'Task',
    dueDate: 'mm/dd/yyyy',
    reporter: 'Allie Harmon',
    reporterImg: 'https://i.pravatar.cc/150?img=47',
    tags: []
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleDropdown = (dropdown, e) => {
    e.stopPropagation();
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  };

  const updateData = (key, value, extra = {}) => {
    setData(prev => ({ ...prev, [key]: value, ...extra }));
    setActiveDropdown(null);
  };

  const handleAssignToMe = () => {
    setData(prev => ({ ...prev, assignee: 'You', assigneeImg: 'https://i.pravatar.cc/150?img=11' }));
  };

  const handleAddTag = () => {
    setData(prev => ({ ...prev, tags: [...prev.tags, 'New Tag'] }));
  };



  React.useEffect(() => {
    const handleOutsideClick = () => setActiveDropdown(null);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className={`right-sidebar ${!isOpen ? 'closed' : ''}`}>
      <div className="rs-header">
        <button className="status-button" onClick={(e) => toggleDropdown('status', e)} style={{position: 'relative'}}>
          {data.status} <ChevronDown size={14} className="ml-2" style={{ transform: activeDropdown === 'status' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          {activeDropdown === 'status' && (
            <div className="dropdown-menu" style={{top: '120%', fontWeight: 'normal', textAlign: 'left', color: 'var(--text-dark)'}}>
              <div className="dropdown-item" onClick={() => updateData('status', 'To Do')}>To Do</div>
              <div className="dropdown-item" onClick={() => updateData('status', 'In Progress')}>In Progress</div>
              <div className="dropdown-item" onClick={() => updateData('status', 'Done')}>Done</div>
            </div>
          )}
        </button>
        <button className="close-btn" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="rs-content">
        <div className="property-group">
          <div className="property-label">Priority</div>
          <div className={`custom-select ${activeDropdown === 'priority' ? 'active' : ''}`} onClick={(e) => toggleDropdown('priority', e)}>
            <div className="select-value">
              <MinusCircle size={16} className={`priority-icon ${data.priority === 'High' ? 'high' : data.priority === 'Low' ? 'low' : 'medium'}`} />
              <span>{data.priority}</span>
            </div>
            <ChevronDown size={14} className="select-arrow" style={{ transform: activeDropdown === 'priority' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            {activeDropdown === 'priority' && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => updateData('priority', 'High')}><AlertCircle size={14} className="mr-2" style={{color: 'var(--danger-red)'}} /> High</div>
                <div className="dropdown-item" onClick={() => updateData('priority', 'Medium')}><MinusCircle size={14} className="mr-2" style={{color: 'var(--success-green)'}} /> Medium</div>
                <div className="dropdown-item" onClick={() => updateData('priority', 'Low')}><ArrowDownCircle size={14} className="mr-2" style={{color: 'var(--primary-blue)'}} /> Low</div>
              </div>
            )}
          </div>
        </div>

        <div className="property-group">
          <div className="property-header">
            <div className="property-label">Assigned To</div>
            <div className="property-action" onClick={handleAssignToMe}>Assign to me</div>
          </div>
          <div className={`custom-select ${activeDropdown === 'assignee' ? 'active' : ''}`} onClick={(e) => toggleDropdown('assignee', e)}>
            <div className="select-value">
              {data.assignee !== 'Unassigned' ? <img src={data.assigneeImg} alt={data.assignee} className="prop-avatar" /> : <UserPlus size={16} className="mr-2 text-muted" />}
              <span>{data.assignee}</span>
            </div>
            <ChevronDown size={14} className="select-arrow" style={{ transform: activeDropdown === 'assignee' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            {activeDropdown === 'assignee' && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => updateData('assignee', 'Allie Harmon', { assigneeImg: 'https://i.pravatar.cc/150?img=47' })}><img src="https://i.pravatar.cc/150?img=47" alt="Allie" className="prop-avatar" /> Allie Harmon</div>
                <div className="dropdown-item" onClick={() => updateData('assignee', 'Danny Amacher', { assigneeImg: 'https://i.pravatar.cc/150?img=33' })}><img src="https://i.pravatar.cc/150?img=33" alt="Danny" className="prop-avatar" /> Danny Amacher</div>
                <div className="dropdown-item" onClick={() => updateData('assignee', 'Unassigned', { assigneeImg: null })}><UserPlus size={14} className="mr-2" /> Unassigned</div>
              </div>
            )}
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Project</div>
          <div className={`custom-select ${activeDropdown === 'project' ? 'active' : ''}`} onClick={(e) => toggleDropdown('project', e)}>
            <div className="select-value">
              <span>{data.project}</span>
            </div>
            <ChevronDown size={14} className="select-arrow" style={{ transform: activeDropdown === 'project' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            {activeDropdown === 'project' && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => updateData('project', 'Administrative')}>Administrative</div>
                <div className="dropdown-item" onClick={() => updateData('project', 'Marketing')}>Marketing</div>
                <div className="dropdown-item" onClick={() => updateData('project', 'Engineering')}>Engineering</div>
              </div>
            )}
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Ticket Type</div>
          <div className={`custom-select ${activeDropdown === 'ticketType' ? 'active' : ''}`} onClick={(e) => toggleDropdown('ticketType', e)}>
            <div className="select-value">
              <CheckSquare size={16} className="type-icon" />
              <span>{data.ticketType}</span>
            </div>
            <ChevronDown size={14} className="select-arrow" style={{ transform: activeDropdown === 'ticketType' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            {activeDropdown === 'ticketType' && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => updateData('ticketType', 'Task')}><CheckSquare size={14} className="mr-2" /> Task</div>
                <div className="dropdown-item" onClick={() => updateData('ticketType', 'Bug')}><AlertCircle size={14} className="mr-2" /> Bug</div>
                <div className="dropdown-item" onClick={() => updateData('ticketType', 'Feature')}><Plus size={14} className="mr-2" /> Feature</div>
              </div>
            )}
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Due Date</div>
          <div className="custom-select" onClick={() => updateData('dueDate', new Date().toLocaleDateString())}>
            <div className="select-value text-muted" style={{color: data.dueDate !== 'mm/dd/yyyy' ? 'var(--text-dark)' : 'var(--text-muted)'}}>
              <Calendar size={16} className="mr-2" />
              <span>{data.dueDate}</span>
            </div>
            <ChevronDown size={14} className="select-arrow" />
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Reporter</div>
          <div className={`custom-select ${activeDropdown === 'reporter' ? 'active' : ''}`} onClick={(e) => toggleDropdown('reporter', e)}>
            <div className="select-value">
              <img src={data.reporterImg} alt={data.reporter} className="prop-avatar" />
              <span>{data.reporter}</span>
            </div>
            <ChevronDown size={14} className="select-arrow" style={{ transform: activeDropdown === 'reporter' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            {activeDropdown === 'reporter' && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => updateData('reporter', 'Allie Harmon', { reporterImg: 'https://i.pravatar.cc/150?img=47' })}><img src="https://i.pravatar.cc/150?img=47" alt="Allie" className="prop-avatar" /> Allie Harmon</div>
                <div className="dropdown-item" onClick={() => updateData('reporter', 'Danny Amacher', { reporterImg: 'https://i.pravatar.cc/150?img=33' })}><img src="https://i.pravatar.cc/150?img=33" alt="Danny" className="prop-avatar" /> Danny Amacher</div>
              </div>
            )}
          </div>
        </div>

        <div className="property-group">
          <div className="property-label">Tags</div>
          <div className="tags-container" style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px'}}>
            {data.tags.map((tag, i) => (
               <span key={i} style={{background: '#e2e8f0', color: '#475569', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', display: 'flex', alignItems: 'center'}}>
                 {tag}
                 <X size={12} style={{marginLeft: '4px', cursor: 'pointer'}} onClick={() => setData(prev => ({...prev, tags: prev.tags.filter((_, index) => index !== i)}))} />
               </span>
            ))}
          </div>
          <div className="add-tag" onClick={handleAddTag}>
            Add Tag <Plus size={14} />
          </div>
        </div>
      </div>

      <div className="rs-accordions">
        <div className="accordion-wrapper">
          <div className="accordion-item" onClick={() => toggleSection('TASKS')}>
            <span>TASKS</span>
            <ChevronRight size={16} style={{ transform: expandedSections['TASKS'] ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
          </div>
          <div className={`accordion-body ${expandedSections['TASKS'] ? 'expanded' : ''}`}>No active tasks.</div>
        </div>
        
        <div className="accordion-wrapper">
          <div className="accordion-item" onClick={() => toggleSection('COLLECTED FIELDS')}>
            <span>COLLECTED FIELDS</span>
            <ChevronRight size={16} style={{ transform: expandedSections['COLLECTED FIELDS'] ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
          </div>
          <div className={`accordion-body ${expandedSections['COLLECTED FIELDS'] ? 'expanded' : ''}`}>No fields collected yet.</div>
        </div>

        <div className="accordion-wrapper">
          <div className="accordion-item" onClick={() => toggleSection('LINKED TICKETS')}>
            <span>LINKED TICKETS <span className="acc-badge">2</span></span>
            <ChevronRight size={16} style={{ transform: expandedSections['LINKED TICKETS'] ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
          </div>
          <div className={`accordion-body ${expandedSections['LINKED TICKETS'] ? 'expanded' : ''}`}>• #OPS-99 System down<br/>• #APPS-19 Slow loading</div>
        </div>

        <div className="accordion-wrapper">
          <div className="accordion-item" onClick={() => toggleSection('HISTORY')}>
            <span>HISTORY</span>
            <ChevronRight size={16} style={{ transform: expandedSections['HISTORY'] ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
          </div>
          <div className={`accordion-body ${expandedSections['HISTORY'] ? 'expanded' : ''}`}>Created on 11/14/22</div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
