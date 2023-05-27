import React, { useState } from 'react';

function Editor() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleApplyFilter = () => {
    // Apply filter logic here
  };

  const handleSaveImage = () => {
    // Save image logic here
  };

  return (
    <div>
      <h1>Photo Editor</h1>

      <input type="file" onChange={handleImageUpload} />

      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" />

          <button onClick={handleApplyFilter}>Apply Filter</button>
          <button onClick={handleSaveImage}>Save Image</button>
        </div>
      )}
    </div>
  );
}

export default Editor;
