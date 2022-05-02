import React, { useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button, Collapse} from '@material-ui/core'


const useStyles=makeStyles((theme) => ({

home:{
display:'flex',
justifyContent:'center',
alignItems:'center',
height:'100vh',


},
appbar:{
 backgroundColor:'#0fcc18'
},
appbarWrapper:{
 width:'80%',
 margin:'0 auto'
},
button1:{
    marginLeft:'auto'
},
button2:{
    marginLeft:'10px'
},
text:{
  color:'green',
  justifyContent:'center'
}
}));


export default function Header() {
  const classes=useStyles();
  const [checked,setChecked]=useState(false);
  useEffect(()=>{
    setChecked(true);
  },[])
  return (
  <div className={classes.home}>
     
      <AppBar className={classes.appbar} elevation={0}>
         <Toolbar className={classes.appbarWrapper}>
           <Typography> <h1>Doodus</h1></Typography>
           <Button variant="contained" className={classes.button1}>Login</Button>
           <Button variant="contained" className={classes.button2}>SignUp</Button>
         </Toolbar>
      </AppBar>
     
     <Collapse 
     in={checked}
     {...(checked ? {timeout:1000}:{})}
    collapsedHeight={50}
     >
     <div>
      <h1 className={classes.text}>
          Find the Perfect Freelance Services <br/> For Your Needs
      </h1>
      <input type='text' placeholder='Search..'/>
      </div>       
     
     </Collapse>
     
    </div>
  );
}

