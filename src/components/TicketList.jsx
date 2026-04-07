import React from 'react';
import './TicketList.css';
import { Search, Circle, MinusCircle, AlertCircle, ArrowDownCircle, CheckCircle2 } from 'lucide-react';

const mockTickets = [
  {
    id: 'APPS-216',
    title: 'Soluta quam velit',
    date: 'Jun 2',
    status: 'To Do',
    priority: 'high',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    tag: 2,
    active: false,
  },
  {
    id: 'OPS-102',
    title: 'Laudantium neque veritatis',
    date: 'Jun 2',
    status: 'To Do',
    priority: 'high',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    tag: 2,
    active: true,
  },
  {
    id: 'APPS-216',
    title: 'Molestiae saepe illum',
    date: 'Jun 1',
    status: 'To Do',
    priority: 'high',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  },
  {
    id: 'APPS-216',
    title: 'Dignissimos maiores porro',
    date: 'May 31',
    status: 'To Do',
    priority: 'medium',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  },
  {
    id: 'APPS-216',
    title: 'Nihil porro repudiandae',
    date: 'May 31',
    status: 'To Do',
    priority: 'medium',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  },
  {
    id: 'APPS-216',
    title: 'Aspernatur cumque ipsum',
    date: 'May 30',
    status: 'To Do',
    priority: 'medium',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  },
  {
    id: 'APPS-216',
    title: 'Culpa quos aliquam',
    date: 'May 30',
    status: 'To Do',
    priority: 'low',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  },
  {
    id: 'APPS-216',
    title: 'Atque incidunt autem',
    date: 'May 30',
    status: 'To Do',
    priority: 'low',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  },
  {
    id: 'APPS-216',
    title: 'Ut sapiente sunt',
    date: 'May 29',
    status: 'Done',
    priority: 'low',
    avatars: ['https://i.pravatar.cc/150?img=33', 'https://i.pravatar.cc/150?img=47'],
    active: false,
  }
];

const PriorityIcon = ({ type }) => {
  if (type === 'high') return <AlertCircle size={16} className="priority-high" />;
  if (type === 'medium') return <MinusCircle size={16} className="priority-medium" />;
  if (type === 'low') return <ArrowDownCircle size={16} className="priority-low" />;
  return null;
};

const TicketList = () => {
  return (
    <div className="ticket-list-container">
      <div className="ticket-search-box">
        <div className="ticket-search-wrapper">
          <Search size={16} className="search-icon-gray" />
          <input type="text" placeholder="Search tickets" className="ticket-search-input" />
        </div>
      </div>
      
      <div className="ticket-list-scroll">
        {mockTickets.map((ticket, index) => (
          <div key={index} className={`ticket-item ${ticket.active ? 'active' : ''}`}>
            {ticket.active && <div className="active-indicator"></div>}
            
            <div className="ticket-header-row">
              <span className="ticket-title">{ticket.title}</span>
              <span className="ticket-date">{ticket.date}</span>
            </div>
            
            <div className="ticket-meta-row">
              <div className="meta-left">
                <input type="checkbox" className="ticket-checkbox" />
                <span className="ticket-id">{ticket.id}</span>
                <span className={`ticket-status ${ticket.status === 'Done' ? 'status-done' : ''}`}>
                  {ticket.status}
                </span>
                <PriorityIcon type={ticket.priority} />
              </div>
              
              <div className="meta-right">
                <div className="avatar-group">
                  {ticket.avatars.map((avatar, i) => (
                    <img key={i} src={avatar} alt="avatar" className="ticket-avatar" />
                  ))}
                  {ticket.tag && <span className="ticket-tag">{ticket.tag}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
