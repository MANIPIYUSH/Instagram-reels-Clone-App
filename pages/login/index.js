import React from 'react'
import TextField from '@mui/material/TextField';
import Image from "next/image";
import insta from "../../assets/insta.jpg"
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import bg1 from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"


function index() {
  return (
    <div className='login-container'>
         <div className='carbg'>
              <div className='car'>
               <Carousel showIndicators={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                 interval={2000}
                 autoPlay={true}
                 showArrows={false}>
                <Image src ={bg1}/>
                <Image src ={bg2}/>
                <Image src ={bg3}/>
               </Carousel>
              </div>
         </div>
     <div>
      <div className='login-card'>
        <Image src={insta}/>
         <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="E-Mail" variant="outlined" />
         <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="Password" type="password" variant="outlined" />
      
        <div>
           <span style={{color:"red", marginTop:"0.5rem"}}>error</span>
        </div>
      <Button variant="contained" fullWidth component="span" style={{marginTop:"1rem"}}  >
           Log In
      </Button>
      <div>
           <span style={{color:"blue", marginTop:"0.5rem"}}>Forgot Password?</span>
           </div>
      </div>
           <div className='bottom-card'>
            Dont't Have an Account?<span style={{color:"blue"}}>Log In</span>
           </div>
           </div>
      </div>
  )
}

export default index
