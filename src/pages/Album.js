// import React, { useEffect, useState } from 'react';
// import albumAPI from '../api.js';

// function Album() {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     try {
//       const response = await albumAPI.getAlbums();
//       setAlbums(response.data.data);
//     } catch (error) {
//       console.error('Error fetching albums:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Render your frontend components using the retrieved albums */}
//       {/* For example, you can map over the albums array and render them */}
//       {albums.map(album => (
//         <div key={album._id}>{album.name}</div>
//       ))}
//     </div>
//   );
// }

// export default Album;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import albumAPI from '../api.js';
import '../css/album.css';

function Album() {
  const [albums, setAlbums] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState('');

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await albumAPI.getAlbums();
      setAlbums(response.data.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  const handleCreateAlbum = async () => {
    try {
      const albumData = { name: newAlbumName };
      const response = await albumAPI.createAlbum(albumData);
      const createdAlbum = response.data.data;
      setAlbums([...albums, createdAlbum]);
      setNewAlbumName('');
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  const handleDeleteAlbum = async (albumId) => {
    try {
      await albumAPI.deleteAlbum(albumId);
      const updatedAlbums = albums.filter((album) => album._id !== albumId);
      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error deleting album:', error);
    }
  };

  const handleEditAlbum = async (albumId, newName) => {
    try {
      const albumData = { name: newName };
      await albumAPI.updateAlbum(albumId, albumData);
      const updatedAlbums = albums.map((album) =>
        album._id === albumId ? { ...album, name: newName } : album
      );
      setAlbums(updatedAlbums);
    } catch (error) {
      console.error('Error editing album:', error);
    }
  };

  return (
    <div className="album-container">
      <div className="create-album-container">
        <input
          type="text"
          value={newAlbumName}
          onChange={(e) => setNewAlbumName(e.target.value)}
          placeholder="Enter album name"
        />
        <button onClick={handleCreateAlbum}>Create Album</button>
      </div>
      {albums.map((album) => (
        <Link to={`/album/${album._id}`} key={album._id} className="album-link">
          <div className="album-card">
            <input
              type="text"
              value={album.name}
              onChange={(e) => handleEditAlbum(album._id, e.target.value)}
              className="album-name-input"
            />
            <button
              onClick={() => handleDeleteAlbum(album._id)}
              className="delete-album-btn"
            >
              Delete
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Album;
