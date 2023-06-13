import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [newImage, setNewImage] = useState('');
  
  useEffect(() => {
    axios.get(`https://trimage-backend.herokuapp.com/album/${id}`) // Update the URL
      .then(response => {
        setAlbum(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const addImageToAlbum = () => {
    axios.post(`https://trimage-backend.herokuapp.com/album/${id}/image`, { image: newImage }) // Update the URL
      .then(response => {
        setAlbum(prevAlbum => ({
          ...prevAlbum,
          images: [...prevAlbum.images, newImage],
        }));
        setNewImage('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Album Detail</h2>
      <h3>Name: {album.name}</h3>
      <div>
        <h4>Images:</h4>
        <ul>
          {album.images.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newImage}
          onChange={e => setNewImage(e.target.value)}
        />
        <button onClick={addImageToAlbum}>Add Image</button>
      </div>
    </div>
  );
};

export default AlbumDetail;
