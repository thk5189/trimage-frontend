import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/album.css';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [editedAlbumName, setEditedAlbumName] = useState('');
  const [editAlbumId, setEditAlbumId] = useState('');

  useEffect(() => {
    // Fetch all albums
    axios.get('https://trimage-backend.herokuapp.com/album') // Update the URL
      .then(response => {
        setAlbums(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const createAlbum = () => {
    // Create a new album
    axios.post('https://trimage-backend.herokuapp.com/album', { name: newAlbumName }) // Update the URL
      .then(response => {
        setAlbums(prevAlbums => [...prevAlbums, response.data.data]);
        setNewAlbumName('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const saveEditedAlbum = (id) => {
    // Save the edited album
    axios.put(`https://trimage-backend.herokuapp.com/album/${id}`, { name: editedAlbumName }) // Update the URL
      .then(response => {
        setAlbums(prevAlbums => prevAlbums.map(album => {
          if (album._id === id) {
            album.name = editedAlbumName;
          }
          return album;
        }));
        setEditAlbumId('');
        setEditedAlbumName('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const deleteAlbum = (id) => {
    // Delete an album
    axios.delete(`https://trimage-backend.herokuapp.com/album/${id}`) // Update the URL
      .then(response => {
        setAlbums(prevAlbums => prevAlbums.filter(album => album._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="albumpage">
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album._id} className="album-item">
            <div className="album-details">
              {editAlbumId === album._id ? (
                <input
                  type="text"
                  value={editedAlbumName}
                  onChange={(e) => setEditedAlbumName(e.target.value)}
                  className="album-name"
                />
              ) : (
                <Link to={`/Album/${album._id}`} className="album-name">{album.name}</Link>
              )}
            </div>
            <div className="album-actions">
              {editAlbumId === album._id ? (
                <button onClick={() => saveEditedAlbum(album._id)}>Done</button>
              ) : (
                <button onClick={() => setEditAlbumId(album._id)}>Edit</button>
              )}
              <button onClick={() => deleteAlbum(album._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newAlbumName}
        onChange={(e) => setNewAlbumName(e.target.value)}
        className="album-name"
      />
      <button className="create-album-button" onClick={createAlbum}>
        Create Album
      </button>
    </div>
  );
};

export default Album
