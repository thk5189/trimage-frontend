import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');

  useEffect(() => {
    // Fetch all albums
    axios.get('http://localhost:4000/album')
      .then(response => {
        setAlbums(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const createAlbum = () => {
    // Create a new album
    axios.post('http://localhost:4000/album', { name: newAlbumName })
      .then(response => {
        setAlbums(prevAlbums => [...prevAlbums, response.data.data]);
        setNewAlbumName('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteAlbum = (id) => {
    // Delete an album
    axios.delete(`http://localhost:4000/album/${id}`)
      .then(response => {
        setAlbums(prevAlbums => prevAlbums.filter(album => album._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album._id}>
            <Link to={`/Album/${album._id}`}>{album.name}</Link>
            <button onClick={() => deleteAlbum(album._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newAlbumName}
        onChange={(e) => setNewAlbumName(e.target.value)}
      />
      <button onClick={createAlbum}>Create Album</button>
    </div>
  );
};

export default Album;
