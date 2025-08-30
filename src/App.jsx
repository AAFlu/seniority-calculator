import React, { useState, useEffect } from 'react';
import StackSelector from './components/StackSelector';
import SkillsGrid from './components/SkillsGrid';
import RankingDisplay from './components/RankingDisplay';
import { skillsData } from './data/skillsData';

function App() {
  const [selectedStack, setSelectedStack] = useState('');
  const [skillLevels, setSkillLevels] = useState({});

  // Initialize skill levels when stack changes
  useEffect(() => {
    if (selectedStack) {
      const stackSkills = skillsData[selectedStack];
      const initialLevels = {};
      stackSkills.skillGroups.forEach(group => {
        group.skills.forEach(skill => {
          initialLevels[skill.name] = 0;
        });
      });
      setSkillLevels(initialLevels);
    }
  }, [selectedStack]);

  const handleStackSelect = (stackId) => {
    setSelectedStack(stackId);
  };

  const handleSkillLevelChange = (skillName, level) => {
    setSkillLevels(prev => ({
      ...prev,
      [skillName]: level
    }));
  };

  const handleReset = () => {
    setSelectedStack('');
    setSkillLevels({});
  };

  return (
    <div className="container">
      <h1 className="title">🚀 Technical Seniority Calculator</h1>
      
      <StackSelector 
        selectedStack={selectedStack} 
        onStackSelect={handleStackSelect} 
      />
      
      <SkillsGrid 
        selectedStack={selectedStack}
        skillLevels={skillLevels}
        onSkillLevelChange={handleSkillLevelChange}
      />
      
      <RankingDisplay 
        skillLevels={skillLevels}
        selectedStack={selectedStack}
      />
      
      {selectedStack && (
        <div style={{ textAlign: 'center' }}>
          <button className="reset-btn" onClick={handleReset}>
            🔄 Start Over
          </button>
        </div>
      )}
      
      <div className="author-section">
        <div className="author-info">
          <p><strong>Author:</strong> Espacio de Talento @ Departamento de Tecnología</p>
          <p className="credits">Proudly made in 2.5 hours with Cursor & GPT-5</p>
        </div>
      </div>
    </div>
  );
}

export default App;
