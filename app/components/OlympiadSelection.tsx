import React, { useState, useEffect } from 'react';
import { supabase, storeUserOlympiads } from '../../lib/supabase';

const OlympiadSelection = ({ userId }: { userId: string }) => {
  const [selectedOlympiads, setSelectedOlympiads] = useState<string[]>([]);
  const olympiadOptions = ['Math', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];

  const handleOlympiadChange = (olympiad: string) => {
    setSelectedOlympiads(prev => 
      prev.includes(olympiad) 
        ? prev.filter(o => o !== olympiad) 
        : [...prev, olympiad]
    );
  };

  const handleSubmit = async () => {
    try {
      await storeUserOlympiads(userId, selectedOlympiads);
      alert('Olympiad selections saved successfully!');
    } catch (error) {
      console.error('Error saving olympiad selections:', error);
      alert('Failed to save olympiad selections.');
    }
  };

  return (
    <div>
      <h2>Select Olympiads</h2>
      {olympiadOptions.map(olympiad => (
        <label key={olympiad}>
          <input
            type="checkbox"
            checked={selectedOlympiads.includes(olympiad)}
            onChange={() => handleOlympiadChange(olympiad)}
          />
          {olympiad}
        </label>
      ))}
      <button onClick={handleSubmit}>Save Selections</button>
    </div>
  );
};

export default OlympiadSelection; 