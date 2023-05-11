import '../index.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="CSMATERIAL - Resource hub for CS students"
        />
        <meta
          name="description"
          content="A one-stop solution for computer science students, providing access to previous year question papers, study material, syllabus and more."
        />
        <meta
          name="keywords"
          content="csmaterial,computer science notes,mdu papers,mdu mca papers,mdu mca papers,mdu question paper,mca question paper,msc question paper,mdu syllabus,mca notes,msc notes,computer science project,computer science project ideas"
        />
        <title>CSMATERIAL - Resource hub for CS students</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
