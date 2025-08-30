import React, { useState, useEffect } from 'react';
import { skillsData, seniorityLevels } from '../data/skillsData.js';

const SkillsGrid = ({ selectedStack, skillLevels, onSkillLevelChange }) => {
  const [tooltipSkill, setTooltipSkill] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });


  // Handle Escape key to close tooltip
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && tooltipSkill) {
        closeTooltip();
      }
    };

    if (tooltipSkill) {
      document.addEventListener('keydown', handleEscapeKey);
      // Disable body scrolling when tooltip is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      // Re-enable body scrolling when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, [tooltipSkill]);


  if (!selectedStack) return null;

  const stackSkills = skillsData[selectedStack];

  const handleInfoClick = (skillName, event) => {
    event.stopPropagation(); // Prevent event bubbling
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setTooltipSkill(tooltipSkill === skillName ? null : skillName);
  };

  const closeTooltip = () => {
    setTooltipSkill(null);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
  };


  return (
    <div className="card">
      <h2 className="subtitle">Step 2: Carga tu nivel de conocimiento en {stackSkills.name}</h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        Elegi tu nivel de conocimiento para cada habilidad. Click en el ícono <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 2px' }}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg> para ver la descripción detallada de cada skill.
      </p>
      
      {stackSkills.skillGroups.map((group) => (
        <div key={group.name} style={{ marginBottom: '30px' }}>
          <h3 style={{ 
            fontSize: '1.3rem', 
            fontWeight: '600', 
            color: '#2d3748', 
            marginBottom: '15px',
            padding: '10px 0',
            borderBottom: '2px solid #e2e8f0'
          }}>
            {group.name}
          </h3>
          
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-title">
                  {skill.name}
                  <button 
                    className="info-icon"
                    onClick={(e) => handleInfoClick(skill.name, e)}
                    title="Click para ver descripción"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="seniority-levels">
                  {seniorityLevels.map((level) => (
                    <button
                      key={level.level}
                      className={`level-btn ${
                        skillLevels[skill.name] === level.level ? 'selected' : ''
                      }`}
                      onClick={() => onSkillLevelChange(skill.name, level.level)}
                      title={`${level.name}: ${level.description}`}
                    >
                      {level.level} - {level.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Tooltip */}
      {tooltipSkill && (
        <div 
          className="skill-tooltip"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="tooltip-content">
            <div className="tooltip-header">
              <h4>{tooltipSkill}</h4>
              <button 
                className="tooltip-close"
                onClick={closeTooltip}
              >
                ×
              </button>
            </div>
            <div className="tooltip-body">
              {skillsData[selectedStack].skillGroups
                .flatMap(group => group.skills)
                .find(skill => skill.name === tooltipSkill)?.description || 'No description available'}
            </div>
          </div>
        </div>
      )}

      {/* Backdrop to close tooltip when clicking outside */}
      {tooltipSkill && (
        <div 
          className="tooltip-backdrop"
          onClick={closeTooltip}
        />
      )}
    </div>
  );
};

export default SkillsGrid;
