import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/AlbumDetail.css';

const AlbumDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    axios
      .get(`https://trimage-backend.herokuapp.com/album/${id}`)
      .then(response => {
        setAlbum(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const addImageToAlbum = () => {
    axios
      .post(`https://trimage-backend.herokuapp.com/album/${id}/image`, { image: newImage })
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
    <div className="album-detail__container">
      <h2>Album Detail</h2>
      <h3>Name: {album.name}</h3>
      <div className="album-detail__image-list">
        {album.images.map((image, index) => (
          <div className="album-detail__card" key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="album-detail__image-item" />
          </div>
        ))}
      </div>
      <div className="album-detail__add-image-container">
        <input
          type="text"
          value={newImage}
          onChange={e => setNewImage(e.target.value)}
          className="album-detail__input"
          placeholder="Enter image URL"
        />
        <button onClick={addImageToAlbum} className="album-detail__add-button">
          Add Image
        </button>
      </div>
    </div>
  );
};

export default AlbumDetail;
