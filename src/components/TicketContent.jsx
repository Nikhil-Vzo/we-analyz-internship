import React, { useState } from 'react';
import './TicketContent.css';
import { Mail, Eye, MoreHorizontal, CheckCircle2, Navigation, Bold, Italic, Underline, Image as ImageIcon, Paperclip, Link2, PlusSquare, MessageSquare } from 'lucide-react';

const TicketContent = () => {
  const [activeTab, setActiveTab] = useState('Public Reply');
  const [showRecipient, setShowRecipient] = useState(true);
  const [showToast, setShowToast] = useState(false);

  const handleSendReply = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="ticket-content">
      <div className="content-header">
        <div className="content-header-main">
          <h2 className="content-title">Laudantium neque veritatis</h2>
          <div className="content-meta">
            <span className="badge-id">OPS-102 (100669518)</span>
            <span className="meta-divider">|</span>
            <span className="meta-date">Created 11/14/22 12:32 PST</span>
          </div>
        </div>
        
        <div className="content-actions">
          <Mail size={18} className="action-icon" />
          <div className="action-view">
            <Eye size={18} className="action-icon" />
            <span>2</span>
          </div>
          <MoreHorizontal size={18} className="action-icon" />
          <div className="avatar-group-small">
            <img src="https://i.pravatar.cc/150?img=33" alt="user" />
            <img src="https://i.pravatar.cc/150?img=47" alt="user" />
          </div>
          <div className="action-ok">OK</div>
        </div>
      </div>

      <div className="content-scroll">
        <div className="reply-box">
          <div className="reply-tabs">
            <button className={`tab ${activeTab === 'Public Reply' ? 'active' : ''}`} onClick={() => setActiveTab('Public Reply')}>Public Reply</button>
            <button className={`tab ${activeTab === 'Private Comment' ? 'active' : ''}`} onClick={() => setActiveTab('Private Comment')}>Private Comment</button>
          </div>
          
          <div className="reply-form">
            {showRecipient && activeTab === 'Public Reply' && (
              <div className="reply-to">
                <span className="to-label">To:</span>
                <div className="to-badge">
                  <img src="https://i.pravatar.cc/150?img=47" alt="Allison" className="to-avatar" />
                  <span>Allison Westervelt &lt;awestervelt@email.com&gt;</span>
                  <span className="to-close" onClick={() => setShowRecipient(false)}>×</span>
                </div>
                <span className="cc-label">Cc</span>
              </div>
            )}
            
            <textarea 
              className="reply-textarea" 
              placeholder={activeTab === 'Public Reply' ? "Add a reply..." : "Add a private internal note..."}
              style={{ backgroundColor: activeTab === 'Private Comment' ? '#fffbeb' : 'transparent', padding: activeTab === 'Private Comment' ? '8px' : '0' }}
            ></textarea>
            
            <div className="reply-toolbar">
              <div className="toolbar-left">
                <button className="tool-btn"><Bold size={16} /></button>
                <button className="tool-btn"><Italic size={16} /></button>
                <button className="tool-btn"><Underline size={16} /></button>
                <button className="tool-btn"><ImageIcon size={16} /></button>
                <button className="tool-btn"><Paperclip size={16} /></button>
                <button className="tool-btn"><Link2 size={16} /></button>
                <button className="tool-btn"><PlusSquare size={16} /></button>
                <button className="tool-btn"><MessageSquare size={16} /></button>
              </div>
              
              <div className="toolbar-right">
                <div className="checkbox-wrap">
                  <span className="kb-label">Add to KB</span>
                  <input type="checkbox" className="kb-checkbox" />
                </div>
                <button className="send-btn" onClick={handleSendReply}>
                  <Navigation size={14} className="send-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {showToast && (
          <div className="toast-notification">
            <CheckCircle2 size={16} /> 
            <span>Reply sent successfully!</span>
          </div>
        )}

        <div className="message-thread">
          <div className="message-card">
            <div className="message-header">
              <div className="msg-user">
                <img src="https://i.pravatar.cc/150?img=47" alt="Allie" className="msg-avatar" />
                <div>
                  <div className="msg-name">Allie Harmon</div>
                  <div className="msg-to">To Danny Amacher &lt;danny@capacity.com&gt;</div>
                </div>
              </div>
              <div className="msg-time">
                Feb 9, 2022 10:31 AM
                <ChevronDownIcon /> 
              </div>
            </div>
            <div className="message-body">
              <p>Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut. Deserunt totam aut nihil quo beatae. Quas non delectus praesentium est illum vitae nemo iure.</p>
              <div className="attachments">
                <div className="attachment">
                  <div className="att-name">Screen_shot.png</div>
                  <div className="att-size">16 Jun 2022, 1:30 PM</div>
                </div>
                <div className="attachment">
                  <div className="att-name">Screen_shot.png</div>
                  <div className="att-size">16 Jun 2022, 1:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="message-card">
            <div className="message-header">
              <div className="msg-user">
                <img src="https://i.pravatar.cc/150?img=47" alt="Allie" className="msg-avatar" />
                <div>
                  <div className="msg-name">Allie Harmon</div>
                  <div className="msg-to">To Danny Amacher &lt;danny@capacity.com&gt;</div>
                </div>
              </div>
              <div className="msg-time">
                Feb 9, 2022 10:31 AM
                <ChevronDownIcon /> 
              </div>
            </div>
            <div className="message-body">
              <p>Dolorem similique et aliquid illum dolor. Vel quo magnam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default TicketContent;
