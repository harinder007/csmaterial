import React, { useEffect, useState } from 'react';

function VisitCount() {
  const [count, setCount] = useState('...');
  useEffect(() => {
    const increamentCount = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/visits', {
        method: 'POST',
      });
      const data = await res.json();
      console.log(data);
      setCount(data.count);
    };
    increamentCount();
  }, []);

  return <h6 className="visits">Total visitors: {count}</h6>;
}

export default VisitCount;
