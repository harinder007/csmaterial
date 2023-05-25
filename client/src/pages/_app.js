import '../index.css';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
