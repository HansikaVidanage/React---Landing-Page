import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 640,
    margin:'20px'
  },
  media: {
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "green",
  },
});

export default function ImageCard({ gig }) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
    
        <CardMedia
          className={classes.media}
          image={gig.imageUrl}
          title="Kristina Elina"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {gig.title} 
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {gig.desc} 
          </Typography>
        </CardContent>
     
    </Card>
  );
}
