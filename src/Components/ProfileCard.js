import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function ProfileCard(post) {
    const {currentUser,logout}=React.useContext(AuthContext)
    console.log(post.post.post.profile_photo)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`http://localhost:8000/${post.post.post.profile_photo}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {post.post.post.user_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
       <strong>Email :</strong> {post.post.post.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         {post.post.post.user_name}
        </Typography>
        <Typography gutterBottom  component="div">
        <h5 style={{color:"red"}}>About Me</h5> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link to="/login">Login</Link></Button>
        <Button size="small" onClick={logout}>Logout</Button>
      </CardActions>
    </Card>
  );
}