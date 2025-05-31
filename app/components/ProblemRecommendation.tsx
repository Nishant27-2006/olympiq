import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const ProblemRecommendation = ({ userId }: { userId: string }) => {
  const [recommendedProblems, setRecommendedProblems] = useState<string[]>([]);

  useEffect(() => {
    const fetchOlympiads = async () => {
      const { data, error } = await supabase
        .from('user_olympiads')
        .select('olympiads')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching olympiads:', error);
        return;
      }

      // Simulate problem recommendations based on olympiad selections
      const problems = data.olympiads.map((olympiad: string) => `Recommended problem for ${olympiad}`);
      setRecommendedProblems(problems);
    };

    fetchOlympiads();
  }, [userId]);

  return (
    <div>
      <h2>Recommended Problems</h2>
      <ul>
        {recommendedProblems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemRecommendation; 