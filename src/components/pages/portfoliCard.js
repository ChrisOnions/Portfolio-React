import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  return (
    <div class="cardContainer">
      <div className="card " style={cardStyle}>
        <img class='cardImg' src={props.image}
          className={props.img}
          alt="Card cap"

        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="/" className="btn btn-primary">
            Adopt {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard(props) {
//   const classes = useStyles();

//   return (
//     <Card id='cardAround' className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.image}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {props.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

