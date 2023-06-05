import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hero from './Home/Hero';
import Options from './Home/Options';
import { Breadcrumbs, Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import addSuffix from '../Utility/addSuffix';

function Home() {
  const [pageNo, setPageNo] = useState(0);

  const router = useRouter();
  console.log(router);

  const { query } = router;

  const options = [
    ['MCA', 'MSC', 'MSC DS'],
    [1, 2, 3, 4],
    ['Previous Year', 'Programs', 'Study Material', 'Syllabus'],
  ];

  const headers = [
    'Get started, choose your class',
    'Now choose your semester',
    `${query.class} ${addSuffix(query.sem)} sem material`,
  ];

  const incPage = (value) => {
    console.log(value);
    switch (pageNo) {
      case 0:
        router.push(`${router.asPath}?class=${value}`);
        break;
      case 1:
        router.push(`${router.asPath}&sem=${value}`);
        break;
      case 2:
        console.log(value.toLowerCase())
        router.push(
          `/material/${query.class.toLowerCase() === 'msc ds' && 'mscds' || query.class.toLowerCase()}-${query.sem}-${
            (value.toLowerCase() === 'previous year' && 'papers') ||
            (value.toLowerCase() === 'syllabus' && 'syllabuses') ||
            (value.toLowerCase() === 'programs' && 'programs') ||
            (value.toLowerCase() === 'study material' && 'studyMaterial')
          }`
        );
        break;
    }
  };

  const decPage = () => {
    console.log('hi');
    switch (pageNo) {
      case 1:
        router.push(`/`);
        break;
      case 2:
        router.push(`?class=${query.class}`);
        break;
    }
  };

  useEffect(() => {
    if (query.class) {
      console.log(query);
      setPageNo(1);
      console.log(pageNo);
      if (query.sem) {
        setPageNo(2);
      }
    } else {
      setPageNo(0);
    }
  }, [query]);

  console.log(pageNo);

  return (
    <>
      <Hero isHome={true} />
      <section className="selector">
        {pageNo > 0 && (
          <span className="back-btn">
            <Fab onClick={decPage} color="primary" aria-label="back">
              <ArrowBackIcon />
            </Fab>
          </span>
        )}
        <div className="selection-header">
          <h1>{headers[pageNo]}</h1>
          <Breadcrumbs color="#fff" aria-label="breadcrumb">
            <Link href="/">
              <button className={`bread-button ${pageNo == 0 && 'btn-active'}`}>
                / Class
              </button>
            </Link>
            {pageNo >= 1 && (
              <Link href={`?class=${query.class}`}>
                <button
                  className={`bread-button ${pageNo == 1 && 'btn-active'}`}
                >
                  Sem
                </button>
              </Link>
            )}
            {pageNo >= 2 && (
              <Link href={`${router.asPath}`}>
                <button className="bread-button btn-active">Material</button>
              </Link>
            )}
          </Breadcrumbs>
        </div>
        <div className="home-btns">
          <Options
            values={options[pageNo]}
            incPage={incPage}
            // setValue={setStream}
          />
        </div>
      </section>
    </>
  );
}

export default Home;
