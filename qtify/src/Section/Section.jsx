import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumCard from '../Card/Card';
import { Grid, Typography, Button } from '@mui/material';
import styles from './Section.module.css'
import { color } from '@mui/system';
import Carousel from '../Carousel/Carousel';

const Section = ({title, apiRoute}) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiRoute);
        setAlbums(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.gridsection}>
      <div className={styles.sectionHeader}>
        <Typography variant="h6" color='white'>{title}</Typography>
        <Button
          variant="text"
          sx={{ color: '#34c94b' }}
          onClick={() => setIsCollapsed(!isCollapsed)} 
        >
          {isCollapsed ? 'Show All' : 'Collapse'}
        </Button>
      </div>

      {isCollapsed ? (
        <Carousel data={albums} />
      ) : (
        <Grid container rowSpacing={2} columnSpacing={2} style={{ marginTop: '20px' }}>
          {albums.map((album) => (
            <Grid item key={album.id} xs={12} sm={6} md={4} lg={2}>
              <AlbumCard image={album.image} follows={album.follows} />
              <p style={{ color: 'white', textAlign: 'left' }}>{album.title}</p>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Section;