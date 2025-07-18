import { useState, useEffect } from 'react';

const useSkeleton = (duration = 100) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return loading;
};

export default useSkeleton;
