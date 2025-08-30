import React from 'react';

const StackSelector = ({ selectedStack, onStackSelect }) => {
  const stacks = [
    { id: 'frontend', name: 'Frontend', icon: '🌐' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'devops', name: 'DevOps', icon: '🚀' }
  ];

  return (
    <div className="card">
      <h2 className="subtitle">Step 1: Elegí tu stack principal</h2>
      <div className="stack-grid">
        {stacks.map((stack) => (
          <div
            key={stack.id}
            className={`stack-card ${selectedStack === stack.id ? 'selected' : ''}`}
            onClick={() => onStackSelect(stack.id)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              {stack.icon}
            </div>
            {stack.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSelector;
