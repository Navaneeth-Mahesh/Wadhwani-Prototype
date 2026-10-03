import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';
import { MENTOR_KNOWLEDGE_BASE } from '../../data/careerData';

export function AiMentorTab({ targetRole, readinessScore, userName }) {
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: `Hello ${userName || 'there'}! I am your AI Career Twin mentor. I am continuously grounded in your ${targetRole.title} trajectory, your active skill gaps, and your current ${readinessScore}% readiness score. How can I guide you today?`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const newMsgs = [...messages, { sender: 'user', text: query }];
    setMessages(newMsgs);
    setInputVal('');

    // Formulate response
    setTimeout(() => {
      let reply = MENTOR_KNOWLEDGE_BASE[query];

      if (!reply) {
        // Dynamic contextual response
        const topGap = [...targetRole.skills].sort(
          (a, b) => (b.target - b.current) - (a.target - a.current)
        )[0];

        const queryLower = query.toLowerCase();
        if (queryLower.includes('salary') || queryLower.includes('pay') || queryLower.includes('compensation')) {
          reply = `For ${targetRole.title}, target market compensation typically benchmarks at ${targetRole.salaryRange}. Closing your ${topGap.name} gap is the fastest route to commanding the top 10% quartile of that bracket.`;
        } else if (queryLower.includes('interview') || queryLower.includes('prep')) {
          reply = `During ${targetRole.title} interviews, evaluators will scrutinize your ${targetRole.project.title}. Ensure you are prepared to walk through your trade-offs, metrics, and technical constraints.`;
        } else if (queryLower.includes('time') || queryLower.includes('how long')) {
          reply = `With dedicated 8-10 hours per week, students transitioning to ${targetRole.title} typically achieve job-ready proficiency in 4 to 6 months by executing the 6 roadmap milestones.`;
        } else {
          reply = `That is a great strategic question regarding ${targetRole.title}. Based on your twin metrics, your biggest leverage point is improving ${topGap.name} (currently ${topGap.current}%, target ${topGap.target}%). Focus on delivering tangible artifacts for your capstone project to demonstrate real mastery.`;
        }
      }

      setMessages(prev => [...prev, { sender: 'assistant', text: reply }]);
    }, 450);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h2>Autonomous AI Career Mentor</h2>
          <span className="tag tag-ok">Live Guidance</span>
        </div>
        <p className="text-mut">
          Ask questions about your career path, interview readiness, skill gaps, or project architecture.
        </p>
      </div>

      <div className="card elevated">
        {/* Chat window */}
        <div className="chat-window">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-bubble ${msg.sender}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px', fontSize: '0.74rem', opacity: 0.8, textTransform: 'uppercase', fontWeight: 700 }}>
                {msg.sender === 'assistant' ? (
                  <>
                    <Bot size={13} color="var(--ac)" />
                    <span>Career Twin AI</span>
                  </>
                ) : (
                  <>
                    <User size={13} />
                    <span>{userName || 'You'}</span>
                  </>
                )}
              </div>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{ marginTop: '16px', borderTop: '1px solid var(--line)', paddingTop: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--mut)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>
            <Sparkles size={12} color="var(--ac)" />
            <span>Recommended Strategic Inquiries</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {Object.keys(MENTOR_KNOWLEDGE_BASE).map((k, idx) => (
              <button
                key={idx}
                type="button"
                className="chip"
                style={{ fontSize: '0.82rem', padding: '6px 12px' }}
                onClick={() => handleSendMessage(k)}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* Input box */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
          <input
            type="text"
            placeholder="Type your question or query here..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button
            type="button"
            className="btn"
            onClick={() => handleSendMessage()}
          >
            <Send size={16} />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
