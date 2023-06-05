import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import addSuffix from '../../Utility/addSuffix';
import { ArrowBack, Close } from '@mui/icons-material';
import {
  Typography,
  Fab,
  CircularProgress,
  Box,
  LinearProgress,
} from '@mui/material';
import Paper from './Material/Paper';

function Material({ data, metaData }) {
  const router = useRouter();
  const { query } = router;
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  console.log(data);
  console.log(metaData)

  const backBtnHandler = () => {
    router.push(`/?class=${metaData.class}&sem=${metaData.sem}`);
  };

  const openPdf = (url) => {
    setPdfUrl(url);
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setPdfUrl(null);
    setIsPdfOpen(false);
  };

  return (
    <section className="selector">
      <span className="back-btn">
        <Fab onClick={backBtnHandler} color="primary" aria-label="back">
          <ArrowBack />
        </Fab>
      </span>
      <div className="selection-header">
        <h1>{`${metaData.class} ${addSuffix(metaData.sem)} Sem ${metaData.mat}`}</h1>
      </div>
      <div className="result-count">
        {data.length} results found
      </div>
      <div className="results">
        {data.map((paper) => (
          <Paper data={{...paper, mat:metaData.mat}} openPdf={openPdf} closePdf={closePdf} />
        ))}
      </div>
      {isPdfOpen && (
        <div className="pdf-viewer">
          <iframe src={pdfUrl} allow="autoplay"></iframe>
          <span className="pdf-close" onClick={() => closePdf()}>
            <Close fontSize="large" />
          </span>
        </div>
      )}
    </section>
  );
}

export default Material;
