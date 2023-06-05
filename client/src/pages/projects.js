import React from 'react';
import NavigationTab from '../Components/NavigationTab';
import { useRouter } from 'next/router';

function projects() {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <NavigationTab>
        <div className="coming-soon">
          <h2>Coming Soon...</h2>
          <img src="./images/svgs/clock.svg" alt="clock" />
        </div>
      </NavigationTab>
    </>
  );
}

export default projects;
