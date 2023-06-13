import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import albumAPI from '../api.js';
import '../css/AlbumDetail.css';

function AlbumDetail() {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [currentPage, setCurrentPage] = useState(0); 
  const imagesPerPage = 20; 

  useEffect(() => {
    fetchAlbum();
  }, []);

  const fetchAlbum = async () => {
    try {
      const response = await albumAPI.getAlbumById(albumId);
      setAlbum(response.data.data);
    } catch (error) {
      console.error('Error fetching album:', error);
    }
  };

  const handleAddImage = async () => {
    try {
      await albumAPI.addImageToAlbum(albumId, { image: newImageUrl });
      setAlbum({ ...album, images: [...album.images, newImageUrl] });
      setNewImageUrl('');
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div className="album-detail__container">
      <h2>{album.name}</h2>
      <div className="album-detail__image-list">
        {album.images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage).map((image, index) => (
          <div key={index} className="album-detail__card">
            <img src={image} alt={`Photo ${index}`} className="album-detail__image-item"/>
          </div>
        ))}
      </div>
      <div className="album-detail__add-image-container">
        <input
          type="text"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          placeholder="Enter image URL"
          className="album-detail__input"
        />
        <button onClick={handleAddImage} className="album-detail__add-button">Add Image</button>
      </div>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0} className="album-detail__pagination-button">Previous</button>
      <button onClick={() => setCurrentPage(currentPage + 1)} disabled={(currentPage + 1) * imagesPerPage >= album.images.length} className="album-detail__pagination-button">Next</button>
    </div>
  );
}

export default AlbumDetail;
