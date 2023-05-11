import React, { useState } from 'react'
import { Button,Card,Typography, CardActions, CardContent, IconButton, Tooltip, Popover, Snackbar } from '@mui/material';
import { WhatsappShareButton, WhatsappIcon,
      TelegramShareButton, TelegramIcon,
    FacebookMessengerShareButton, FacebookMessengerIcon
   } from 'react-share';


function Paper({data, openPdf, closePdf, material}) {
  
  const {className, downloadLink, sem, viewLink, year, subject, topic, ...rest} = data;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnack, setOpenSnack] = useState(false)

  let isYear, isSubject, isTopic = false;

  if(material === "previous%20year"){
    isYear = true;
  }
  else if(material === "programs"){
    isTopic = true;
  }
  else if(material === "study%20material"){
    isTopic = true;
    isSubject = true;
  }
  else{
    isSubject = true;
  }

  const handleCopyClick = () => {
    setOpenSnack(true)
    navigator.clipboard.writeText(window.location.toString())
    handleClose()
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
    <Card className='card' variant="outlined" sx={{ color:'white', width: "20rem", backgroundColor: '#151515', minHeight:120,  mb:5}}>
      <CardContent sx={{pb:0}}>
        {isYear && <h5>
          {year} Papers
        </h5>
        }
        {isSubject && <h5>
          {subject}
        </h5>}
        {isTopic && <h5>
          {topic}
        </h5>}
      </CardContent>
      <CardActions>
      <Tooltip title="View">
      <IconButton onClick={()=> {
        openPdf(viewLink)
        }} sx ={{color:'#a8bbd9'}} aria-label="add to shopping cart">
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
        <IconButton sx={{p:0}} onClick={handleCopyClick}>
        <i class="ph-bold ph-copy"></i>
        </IconButton>
        </Tooltip>
        <Tooltip title="Whatsapp">
        <WhatsappShareButton onClick={handleClose} title="Csmaterial: Papers, Study Material, Projects & more"  url={'/'}> 
          <WhatsappIcon size={40} round={true}/>
          </WhatsappShareButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <TelegramShareButton onClick={handleClose} url={'/'} title="Csmaterial.in: Papers, Study Material, Projects & more">
            <TelegramIcon size={40} round={true}/>
          </TelegramShareButton>
        </Tooltip>
        <Tooltip title="Messanger">
          <FacebookMessengerShareButton onClick={handleClose} url={'/'} body="Csmaterial.in: Papers, Study Material, Projects & more">
            <FacebookMessengerIcon size={40} round={true}/>
          </FacebookMessengerShareButton>
        </Tooltip>
        </div>
      </Popover>
      <Tooltip title="Share">
      <a>
      <IconButton color="secondary" aria-label="add to shopping cart" onClick={handleClick}>
        <i class="ph-bold ph-share-fat"></i>
      </IconButton>
      </a>
      </Tooltip>
      </CardActions>
    </Card>
    </>
    )
}

export default Paper