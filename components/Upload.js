import React from 'react'
import {Button} from "@mui/material"
import MovieIcon from "@mui/icons-material/Movie"
import LinearProgress from '@mui/material/LinearProgress';


function Upload() {
  return (
    <div className="upload-btn">
      <Button variant="outlined" startIcon={<MovieIcon/>} fullWidth component="label" style={{marginTop:"1rem"}}  >
           Upload
          <input accept="image/*" type="file" style={{display:"none"}} />
      </Button>
      <LinearProgress variant="determinate" value={20} style={{marginTop:"0.2rem"}} />
    </div>
  )
}

export default Upload
