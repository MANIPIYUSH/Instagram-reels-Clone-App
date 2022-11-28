import React ,{useContext,useEffect,useState} from 'react'
import { TextField } from '@mui/material';

import Image from "next/image";
import insta from "../../assets/insta.jpg"
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel';
import bg1 from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"
import {carouselProvider,Slider,Slide,Image as Img} from "pure-react-carousel";
import {useRouter} from 'next/router';
import {AuthContext} from "../../context/auth"
function index() {
const router = useRouter()     //conditional routing
const [email,setEmail]=React.useState('')
const [password,setPassword] = React.useState('')
const [error,setError] = React.useState('')
const [loading,setLoading]=React.useState(false)
const{login,user} =useContext(AuthContext)
const handleClick = async() =>{
     try{
          setLoading(true)
          setError('')
          await login(email,password)
          console.log("Logged in")
     }catch(err){
          console.log(err)
          setError(err.message)
          setTimeout(()=>{
               setError('')
          },2000)
     }
     setLoading(false)
}
useEffect(() => {
     if(user){
          router.push('/')
     }else{
          console.log("Not Logged in");
     }     
},  [user]);

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
         <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="E-Mail" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <TextField id="outlined-basic" fullWidth margin='dense' size='small' label="Password" type="password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      {
          errror != '' && 
          <div style={{color:'red'}}>{error}</div>
      }
      <Button variant="contained" fullWidth component="span" style={{marginTop:"1rem"}} onClick={handleClick} disabled={loading}>
           Log In
      </Button>
      <div>
           <span style={{color:"blue", marginTop:"0.5rem"}}>Forgot Password?</span>
           </div>
      </div> 
           <div className='bottom-card'>
            Dont't Have an Account?<span style={{color:"blue"}}>Sign Up</span>
           </div>
           </div>
      </div>
  )
}

export default index
