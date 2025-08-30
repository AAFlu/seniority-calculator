/**
 * Calculates the normalized score (0-100) using skill levels and stack data
 * @param {Object} skillLevels - Object with skill names as keys and levels (1-5) as values
 * @param {Object} stackData - Stack data containing skill groups and their weights
 * @returns {number} Normalized score from 0 to 100
 */
export const calculateNormalizedScore = (skillLevels, stackData) => {
  let normalizedScore = 0;

  // For each group
  stackData.skillGroups.forEach(group => {
    let groupTotal = 0;

    // For each skill in the group
    group.skills.forEach(skill => {
      const skillLevel = skillLevels[skill.name] || 0;
      // Multiply level informed by user by skillWeight
      groupTotal += skillLevel * skill.weight;
    });

    // Calculate group score: groupTotal * (groupWeight / 100)
    const groupScore = groupTotal * (group.groupWeight / 100);
    
    // Add to normalized score
    normalizedScore += groupScore;
  });

  return Math.round(normalizedScore);
};
