import React from 'react';
import NavigationTab from '../../Components/NavigationTab';
import { useRouter } from 'next/router';

function projects() {
  const router = useRouter();
  console.log(router);

  return (
    <>
        <div className="coming-soon">
          <h2>Coming Soon...</h2>
          <img src="./images/svgs/clock.svg" alt="clock" />
        </div>
    </>
  );
}

export default projects;
