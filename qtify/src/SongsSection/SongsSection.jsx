import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, Typography, Grid } from '@mui/material';
import AlbumCard from '../Card/Card'; 
import styles from './SongsSection.module.css';

const SongsSection = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [songs, setSongs] = useState([]);

  // Fetch genres for the tabs
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
        setGenres(['All', ...response.data]);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleGenreChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  // Filter songs based on the selected genre
  const filteredSongs = selectedGenre === 'All' ? songs : songs.filter(song => song.genre === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <Typography variant="h4" color="white" gutterBottom>
        Songs
      </Typography>
      <Tabs value={selectedGenre} onChange={handleGenreChange} variant="scrollable" scrollButtons="auto">
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {filteredSongs.map((song) => (
          <Grid item key={song.id} xs={12} sm={6} md={4} lg={3}>
            <AlbumCard image={song.image} follows={song.likes} />
            <p>{song.title}</p>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SongsSection;
