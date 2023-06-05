import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Visibility, Download, Share, ContentCopy } from '@mui/icons-material';
import {
  Button,
  Card,
  Typography,
  CardActions,
  CardContent,
  IconButton,
  Tooltip,
  Popover,
  Snackbar,
} from '@mui/material';
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from 'react-share';
import addSuffix from '../../../Utility/addSuffix';

function Paper({ data, openPdf, closePdf }) {
  const router = useRouter();
  const { query } = router;

  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [url, setUrl] = useState(null);

  console.log(router.pathname);
  console.log(data);

  useEffect(() => {
    setUrl(window.location.toString());
  }, []);

  const handleCopyClick = () => {
    setOpenSnack(true);
    navigator.clipboard.writeText(url);
    handleClose();
  };
  const handleShareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Card
        className="card"
        variant="outlined"
        sx={{
          color: 'white',
          width: '20rem',
          backgroundColor: '#151515',
          minHeight: 120,
          mb: 5,
        }}
      >
        <CardContent sx={{ pb: 0, fontWeight: 600 }}>
          {data.mat === 'Previous Year' && data.year + ' papers'}
          {data.mat === 'Syllabus' && data.subject}
          {(data.mat === 'Study Material' || data.mat === 'Programs') &&
            data.topic}
        </CardContent>
        <CardActions>
          <Tooltip title="View">
            <a>
              <IconButton
                onClick={() => {
                  openPdf(data.viewLink);
                }}
                sx={{ color: '#a8bbd9' }}
                aria-label="view pdf"
              >
                <Visibility fontSize="medium" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Download">
            <a href={data.downloadLink} download>
              <IconButton sx={{ color: '#a8bbd9' }} aria-label="download pdf">
                <Download fontSize="medium" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Share">
            <a>
              <IconButton
                onClick={handleShareClick}
                sx={{ color: '#a8bbd9' }}
                aria-label="share pdf"
              >
                <Share fontSize="medium" />
              </IconButton>
            </a>
          </Tooltip>
          <Snackbar
            open={openSnack}
            onClose={() => setOpenSnack(false)}
            autoHideDuration={2000}
            message="Copied to clipboard"
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className="share">
              <IconButton sx={{ p: 0 }} onClick={handleCopyClick}>
                <ContentCopy fontSize="large" />
              </IconButton>
              <WhatsappShareButton
                onClick={handleClose}
                title={`${query.class} ${addSuffix(query.sem)} Sem ${
                  query.mat
                }- `}
                url={url}
              >
                <WhatsappIcon size={40} round={true} />
              </WhatsappShareButton>
              <TelegramShareButton
                onClick={handleClose}
                url={url}
                title={`${query.class} ${addSuffix(query.sem)} Sem ${
                  query.mat
                }- `}
              >
                <TelegramIcon size={40} round={true} />
              </TelegramShareButton>
              <FacebookMessengerShareButton
                onClick={handleClose}
                url={url}
                body={`${query.class} ${addSuffix(query.sem)} Sem ${
                  query.mat
                }- `}
              >
                <FacebookMessengerIcon size={40} round={true} />
              </FacebookMessengerShareButton>
            </div>
          </Popover>
        </CardActions>
        {/* <CardActions>
          <Tooltip title="View">
            <IconButton
              onClick={() => {
                openPdf(viewLink);
              }}
              sx={{ color: '#a8bbd9' }}
              aria-label="add to shopping cart"
            >
              <i class="ph-bold ph-eye"></i>
            </IconButton>
          </Tooltip>
          <Tooltip title="Download">
            <a href={downloadLink}>
              <IconButton color="secondary" aria-label="add to shopping cart">
                <i class="ph-bold ph-download-simple"></i>
              </IconButton>
            </a>
          </Tooltip>
          <Snackbar
            open={openSnack}
            onClose={() => setOpenSnack(false)}
            autoHideDuration={2000}
            message="Copied to clipboard"
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className="share">
              <Tooltip title="Copy">
                <IconButton sx={{ p: 0 }} onClick={handleCopyClick}>
                  <i class="ph-bold ph-copy"></i>
                </IconButton>
              </Tooltip>
              <Tooltip title="Whatsapp">
                <WhatsappShareButton
                  onClick={handleClose}
                  title="Csmaterial: Papers, Study Material, Projects & more"
                  url={'/'}
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
              </Tooltip>
              <Tooltip title="Telegram">
                <TelegramShareButton
                  onClick={handleClose}
                  url={'/'}
                  title="Csmaterial.in: Papers, Study Material, Projects & more"
                >
                  <TelegramIcon size={40} round={true} />
                </TelegramShareButton>
              </Tooltip>
              <Tooltip title="Messanger">
                <FacebookMessengerShareButton
                  onClick={handleClose}
                  url={'/'}
                  body="Csmaterial.in: Papers, Study Material, Projects & more"
                >
                  <FacebookMessengerIcon size={40} round={true} />
                </FacebookMessengerShareButton>
              </Tooltip>
            </div>
          </Popover>
          <Tooltip title="Share">
            <a>
              <IconButton
                color="secondary"
                aria-label="add to shopping cart"
                onClick={handleClick}
              >
                <i class="ph-bold ph-share-fat"></i>
              </IconButton>
            </a>
          </Tooltip>
        </CardActions> */}
      </Card>
    </>
  );
}

export default Paper;
