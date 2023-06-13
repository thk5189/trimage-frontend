import axios from 'axios';

const baseURL = 'http://localhost:4000'; // Replace with your backend server URL

const api = axios.create({
  baseURL: baseURL,
});

// Define API methods to interact with your backend routes
const albumAPI = {
  getAlbums: () => api.get('/album'),
  createAlbum: (albumData) => api.post('/album', albumData),
  updateAlbum: (albumId, albumData) => api.put(`/album/${albumId}`, albumData),
  deleteAlbum: (albumId) => api.delete(`/album/${albumId}`),
  getAlbumById: (albumId) => api.get(`/album/${albumId}`),
  addImageToAlbum: (albumId, imageData) => api.post(`/album/${albumId}/image`, imageData),
};

export default albumAPI;
