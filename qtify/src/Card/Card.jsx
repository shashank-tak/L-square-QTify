import React from 'react';
import './Card.module.css'; 
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';

const AlbumCard = ({ image, follows }) => {
  return (
    <Card sx={{ width: 200, borderRadius: 2, height:250}}>
      <CardMedia
        component="img"
        height="80%"
        image={image}
        alt="Album image"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>
        <Chip label={`${follows} Follows`} sx={{ alignSelf: 'start', backgroundColor: 'black', color:'white', fontSize: '0.75rem', height:'25px' ,minWidth: 'fit-content' }}/>
      </CardContent>
    </Card>
  );
};

// const DummyAlbumCard = () => {
//   const dummyImage = 'https://via.placeholder.com/200';
//   const dummyFollows = 1200;
//   const dummyAlbumName = 'Sample Album';

//   return (
//     <AlbumCard 
//       image={dummyImage} 
//       follows={dummyFollows} 
//       albumName={dummyAlbumName} 
//     />
//   );
// };

export default AlbumCard;
