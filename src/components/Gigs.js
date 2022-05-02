import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard';
import Posts from '../static/Posts'


const useStyles=makeStyles((theme)=>({
root:{
    minheight:'100vh',
    backgroundColor:'white',
    display:'flex', 
    justifyContent:'center',
    alignItems:'center'
}
}));
export default function(){
    const classes=useStyles();
    return <div className={classes.root}>
        <h1>Most Recent Gigs</h1>
  <ImageCard gig={Posts[1]}/>
  <ImageCard gig={Posts[0]}/>
    </div>
    
}