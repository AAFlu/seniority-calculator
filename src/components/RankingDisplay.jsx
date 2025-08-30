import React from 'react';
import { skillsData } from '../data/skillsData.js';
import { calculateNormalizedScore } from '../utils/scoreCalculator.js';

// Constants for ranking states
const RANKING_STATES = {
  INCOMPLETE: 'Carga incompleta',
  NO_SKILLS: 'No hay skills cargadas'
};

const RankingDisplay = ({ skillLevels, selectedStack }) => {
  const calculateRanking = () => {
    const selectedSkills = Object.values(skillLevels).filter(level => level > 0);
    const totalSkills = Object.keys(skillLevels).length;
    
    if (selectedSkills.length === 0) {
      return { score: 0, level: RANKING_STATES.NO_SKILLS, description: 'Por favor cargá tus skills' };
    }
    
    if (selectedSkills.length < totalSkills) {
      const remainingSkills = totalSkills - selectedSkills.length;
      return { 
        score: 0, 
        level: RANKING_STATES.INCOMPLETE, 
        description: `Por favor evaluá todas las ${remainingSkills} skills restantes para obtener tu ranking` 
      };
    }

    // Get stack-specific ranking ranges
    const stackData = skillsData[selectedStack];
    const rankingRanges = stackData.rankingRanges;

    // Calculate normalized score using utility function
    const normalizedScore = calculateNormalizedScore(skillLevels, stackData);
    
    // Find the ranking range
    const ranking = rankingRanges.find(range => 
      normalizedScore >= range.min && normalizedScore <= range.max
    ) || rankingRanges[rankingRanges.length - 1];

    return {
      score: normalizedScore,
      level: ranking.level,
      description: ranking.description
    };
  };

  const ranking = calculateRanking();
  const selectedSkillsCount = Object.values(skillLevels).filter(level => level > 0).length;

  if (!selectedStack) return null;

  const isComplete = ranking.level !== RANKING_STATES.INCOMPLETE && ranking.level !== RANKING_STATES.NO_SKILLS;
  
  return (
    <div className={`ranking-section ${!isComplete ? 'incomplete' : ''}`} 
         style={!isComplete ? { background: 'linear-gradient(135deg, #f56565 0%, #e53e3e 100%)' } : {}}>
      <h2 className="subtitle" style={{ color: 'white', marginBottom: '20px' }}>
        Step 3: Tu ranking de seniority
      </h2>
      
      {isComplete ? (
        <>
          <div className="ranking-score">{ranking.score}</div>
          <div className="ranking-level">{ranking.level}</div>
          <div className="ranking-description">{ranking.description}</div>
        </>
      ) : (
        <>
          <div className="ranking-score" style={{ fontSize: '2rem' }}>⚠️</div>
          <div className="ranking-level">{ranking.level}</div>
          <div className="ranking-description">{ranking.description}</div>
        </>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '0.9rem', opacity: 0.8 }}>
        Skills assessed: {selectedSkillsCount} / {Object.keys(skillLevels).length}
        {selectedSkillsCount < Object.keys(skillLevels).length && (
          <div style={{ marginTop: '5px' }}>
            <div style={{ 
              width: '100%', 
              height: '8px', 
              background: 'rgba(255,255,255,0.3)', 
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${(selectedSkillsCount / Object.keys(skillLevels).length) * 100}%`, 
                height: '100%', 
                background: 'rgba(255,255,255,0.8)',
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Ranking Ranges Display */}
      <div className="ranking-ranges-section">
        <h3 style={{ 
          color: 'white', 
          fontSize: '1.1rem', 
          marginBottom: '15px',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          📊 Rangos de seniority para {skillsData[selectedStack].name}
        </h3>
        <div className="ranges-grid">
          {skillsData[selectedStack].rankingRanges.map((range, index) => (
            <div 
              key={index} 
              className={`range-card ${ranking.score >= range.min && ranking.score <= range.max ? 'current-range' : ''}`}
            >
              <div className="range-header">
                <span className="range-level">{range.level}</span>
                <span className="range-score">{range.min} - {range.max}</span>
              </div>
              <div className="range-description">{range.description}</div>
              {ranking.score >= range.min && ranking.score <= range.max && (
                <div className="current-indicator">🎯 Seniority actual</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {ranking.score > 0 && (
        <div style={{ marginTop: '15px', fontSize: '0.9rem', opacity: 0.8 }}>
          <strong>Tus skills fuertes:</strong>
          <div style={{ marginTop: '5px' }}>
            {Object.entries(skillLevels)
              .filter(([_, level]) => level >= 4)
              .map(([skill, level]) => (
                <span key={skill} style={{ 
                  display: 'inline-block', 
                  background: 'rgba(255,255,255,0.2)', 
                  padding: '2px 8px', 
                  borderRadius: '12px', 
                  margin: '2px',
                  fontSize: '0.8rem'
                }}>
                  {skill} (Level {level})
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RankingDisplay;
