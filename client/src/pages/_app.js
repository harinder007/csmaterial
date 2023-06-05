import '../index.css';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import VisitCount from '../Components/VisitCount';
import { useRouter } from 'next/router';
import NavigationTab from '../Components/NavigationTab';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const THEME = createTheme({
  palette: {
    primary: {
      light: '#66646d',
      main: '#24222F',
      dark: '#191821',
      contrastText: '#D4CDF4',
    },
    secondary: {
      light: '#c2cfe4',
      main: '#a8bbd9',
      dark: '#647082',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif;`,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      setIsLoading(true);
      setProgress((prevProgress) => {
        return prevProgress + 40;
      });
    });
    router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false);
      setProgress(100);
    });

    router.events.on('routeChangeError', (url) => {
      setIsLoading(false);
      setProgress(100);
    });
  }, [router]);

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
      </Head>
      <ThemeProvider theme={THEME}>
        {isLoading && (
          <LoadingBar
            color="#d4cdf4"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
            height={7}
          />
        )}

        <NavigationTab>
          <Component {...pageProps} />
          <VisitCount />
        </NavigationTab>
      </ThemeProvider>
    </>
  );
}

export default App;
