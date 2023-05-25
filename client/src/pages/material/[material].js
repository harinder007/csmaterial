import React from 'react';
import NavigationTab from '../../Components/NavigationTab';
import { useRouter } from 'next/router';
import Hero from '../../Components/Home/Hero';
import Material from '../../Components/Home/Material';

function material(props) {
  return (
    <>
      <NavigationTab>
        <Hero isHome={false} />
        <Material data={props.data} metaData={props.metaData} />
      </NavigationTab>
    </>
  );
}

export async function getStaticPaths() {
  const classes = ['mca', 'mscds', 'msc'];
  const semesters = [1, 2, 3, 4];
  const materials = ['papers', 'programs', 'syllabuses', 'studyMaterial'];

  let paths = [];
  classes.map((className) => {
    semesters.map((sem) => {
      materials.map((mat) => {
        paths.push({ params: { material: `${className}-${sem}-${mat}` } });
      });
    });
  });

  console.log(paths);

  return {
    fallback: false,
    paths: paths
  };
}

export async function getStaticProps(context) {
  let data = null;
  const material = context.params.material.split('-');

  const metaData = {
    class: material[0].toUpperCase(),
    sem: material[1],
    mat:
      (material[2] === 'papers' && 'Previous Year') ||
      (material[2] === 'syllabuses' && 'Syllabus') ||
      (material[2] === 'programs' && 'Programs') ||
      (material[2] === 'studyMaterial' && 'Study Material'),
  };
  const apiRoute = process.env.REACT_APP_URL + `/api/${material[2]}`;
  console.log(process.env.REACT_APP_URL + `/api/${material[2]}`);

  try {
    const res = await fetch(apiRoute);
    data = await res.json();
    data = data.filter((paper) => {
      return (
        paper.sem == material[1] && paper.className.toLowerCase() == material[0]
      );
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      metaData: metaData,
      data: data,
    },
    revalidate: 60,
  };
}

export default material;
