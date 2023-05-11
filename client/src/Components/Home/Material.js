import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import addSuffix from '../../Utility/addSuffix';
import {ArrowBack, Close} from '@mui/icons-material';
import {
  Typography,
  Fab,
  CircularProgress,
  Box,
  LinearProgress,
} from '@mui/material';
import Paper from './Material/Paper';

function Material() {
  const router = useRouter();
  const { query } = router;
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const backBtnHandler = () => {
    router.push(`/?class=${query.class}&sem=${query.sem}`);
  };

  const openPdf = (url) => {
    setPdfUrl(url);
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setPdfUrl(null);
    setIsPdfOpen(false);
  };

  const data = {
    downloadLink:
      'https://drive.google.com/uc?export=download&id=1Z-Rp6ovYZHx__lcvaqd6-aNU9851zI8r',
    viewLink:
      'https://drive.google.com/file/d/1Z-Rp6ovYZHx__lcvaqd6-aNU9851zI8r/preview',
    year: 2021,
    subject: 'IOT',
    topic: 'Sensors',
  };

  return (
    <section className="selector">
      <span className="back-btn">
        <Fab onClick={backBtnHandler} color="primary" aria-label="back">
          <ArrowBack />
        </Fab>
      </span>
      <div className="selection-header">
        <h1>{`${query.class} ${addSuffix(query.sem)} Sem ${query.mat}`}</h1>
      </div>
      <div className="results">
        <Paper data={data} openPdf={openPdf} closePdf={closePdf} />
      </div>
      {isPdfOpen && (
        <div className="pdf-viewer">
          <iframe src={pdfUrl} allow="autoplay"></iframe>
          <span className="pdf-close" onClick={() => closePdf()}>
           <Close fontSize='large'/>
          </span>
        </div>
      )}
    </section>
  );
}

export default Material;
