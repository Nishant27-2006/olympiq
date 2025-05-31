import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const UserProfile = ({ userId }: { userId: string }) => {
  const [selectedOlympiads, setSelectedOlympiads] = useState<string[]>([]);
  const [subscriptionDetails, setSubscriptionDetails] = useState<string>('Free');

  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from('user_olympiads')
        .select('olympiads')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching user data:', error);
        return;
      }

      setSelectedOlympiads(data.olympiads);
      // Simulate fetching subscription details
      setSubscriptionDetails('Free');
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h2>User Profile</h2>
      <h3>Selected Olympiads</h3>
      <ul>
        {selectedOlympiads.map((olympiad, index) => (
          <li key={index}>{olympiad}</li>
        ))}
      </ul>
      <h3>Subscription Details</h3>
      <p>{subscriptionDetails}</p>
    </div>
  );
};

export default UserProfile; 