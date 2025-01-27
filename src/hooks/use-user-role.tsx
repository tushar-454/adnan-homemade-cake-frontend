'use client';

import { BASE_URL2 } from '@/constant';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useUserRole = () => {
  const [role, setRole] = useState<string | null>(null);
  const { data: user } = useSession();

  useEffect(() => {
    if (user) {
      fetch(`${BASE_URL2}/auth/user/${user.user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data.data.role);
        });
    }
  }, [user]);

  return role;
};

export { useUserRole };
