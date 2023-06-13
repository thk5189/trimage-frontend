import React, { useEffect } from 'react';
import '../css/Editor.css'; // Import your custom CSS file

const Editor = () => {
  
  useEffect(() => {
    let upload_img_box = document.querySelector('.upload_img_box');
    let selectedImage = document.querySelector('#selectedImage');
    let choose_image = document.querySelector('.choose_image');

    let image_holder = document.querySelector('.image_holder');
    let image = document.querySelector('#image');

    let slider = document.querySelectorAll('.slider');
    // let show_value = document.querySelectorAll('.show_value');

    let list_options = document.querySelectorAll('ul li');

    let options = document.querySelector('.options');
    let option = document.querySelectorAll('.option');

    let clearAll = document.querySelector('#clearAll');
    let remove_img_btn = document.querySelector('#remove_img_btn');

    let canvas = document.querySelector('#image_canvas');
    const context = canvas.getContext('2d');

    let File_Name;
    let Edited = false;

    /*handle choose image event*/
    upload_img_box.addEventListener('click', function () {
      selectedImage.click();
    });

    /*choose image event*/
    selectedImage.addEventListener('change', function () {
      const file = this.files[0];

      if (file) {
        const reader = new FileReader();
        File_Name = file.name;

        choose_image.style.display = 'none';
        image_holder.style.display = 'block';

        reader.addEventListener('load', function () {
          image.setAttribute('src', this.result);
        });

        reader.readAsDataURL(file);
        remove_img_btn.style.display = 'block';
      }

      if (Edited === false) {
        Edited = true;
      }
    });

    /*function call when slider value change*/
    for (let i = 0; i <= slider.length - 1; i++) {
      slider[i].addEventListener('input', editImage);
    }

    function editImage() {
      let bright = document.querySelector('#brightness');
      let blur = document.querySelector('#blur');
      let grey = document.querySelector('#greyScale');
      let hue = document.querySelector('#hue');
      let saturation = document.querySelector('#saturation');

      let brightValShow = document.querySelector('#brightVal');
      let blurValShow = document.querySelector('#blurVal');
      let greyValShow = document.querySelector('#greyVal');
      let hueValShow = document.querySelector('#hueVal');
      let saturationValShow = document.querySelector('#saturationVal');

      let brightVal = bright.value;
      let greyVal = grey.value;
      let blurVal = blur.value;
      let hueVal = hue.value;
      let satuVal = saturation.value;

      brightValShow.innerHTML = brightVal;
      blurValShow.innerHTML = blurVal;
      greyValShow.innerHTML = greyVal;
      hueValShow.innerHTML = hueVal;
      saturationValShow.innerHTML = satuVal;

      image.style.filter =
        'grayscale(' +
        greyVal +
        '%) hue-rotate(' +
        hueVal +
        'deg) brightness(' +
        brightVal +
        '%) blur(' +
        blurVal +
        'px) saturate(' +
        satuVal +
        ')';
      context.filter =
        'grayscale(' +
        greyVal +
        '%) hue-rotate(' +
        hueVal +
        'deg) brightness(' +
        brightVal +
        '%) blur(' +
        blurVal +
        'px) saturate(' +
        satuVal +
        ')';

      clearAll.style.transform = 'translateY(0px)';
    }

  /*handle each option click event*/
    list_options.forEach((list_option, index) => {
      list_option.addEventListener('click', function () {
        if (image.getAttribute('src') === '') {
          alert('Choose Image First');
        } else {
          options.style.transform = 'translateY(0px)';

          if (Edited === true) {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;

            for (let i = 0; i <= 4; i++) {
              if (index !== i) {
                list_options[i].classList.remove('active_option');
                option[i].classList.remove('active_controller');
              } else {
                this.classList.add('active_option');
                option[i].classList.add('active_controller');
              }
            }
          } else {
            alert('Edit Your Image First');
          }
        }
      });
    });

  /*download image btn click*/
  function Download_btn() {
    if (image.getAttribute('src') !== '') {
      if (Edited === true) {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        var jpegUrl = canvas.toDataURL('image/jpg');

        const link = document.createElement('a');
        document.body.appendChild(link);

        link.setAttribute('href', jpegUrl);
        link.setAttribute('download', File_Name);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  /*clear or reset range value*/
  clearAll.addEventListener('click', function () {
      clearAllRangeValue();
    });

  function clearAllRangeValue() {
      image.style.filter = 'none';
      context.filter = 'none';

      for (let i = 0; i <= slider.length - 1; i++) {
        if (i === 0) {
          slider[i].value = '100';
        } else {
          slider[i].value = '0';
        }
      }

      editImage();
      clearAll.style.transform = 'translateY(150px)';
  }

  /*remove image btn click*/
  remove_img_btn.addEventListener('click', function () {
      image.src = '';
    this.style.display = 'none';
      choose_image.style.display = 'block';
      image_holder.style.display = 'none';
      options.style.transform = 'translateY(80px)';
      clearAllRangeValue();
    });
  }, []);

const handleDownload = () => {
  // Implement the download logic here
};



  return (
    <div className='editor'>
      <div className="main">
        <div className="Tools">
          <ul>
            <li>
              <i className="bx bxs-brightness-half"></i>
              <p>Brightness</p>
            </li>
            <li>
              <i className="bx bxs-brush"></i>
              <p>Blur</p>
            </li>
            <li>
              <i className="bx bxs-collection"></i>
              <p>Greyscale</p>
            </li>
            <li>
              <i className="bx bxs-color-fill"></i>
              <p>Hue Rotate</p>
            </li>
            <li>
              <i className="bx bxs-magic-wand"></i>
              <p>Saturation</p>
            </li>
          <li onClick={handleDownload}>
  <i className="bx bx-export"></i>
  <p>Export</p>
          </li>
          </ul>
        </div>
        <div className="content">
          <p id="logo">Photo Editor</p>
          <div className="choose_image">
            <div className="upload_img_box">
            <i className="bx bxs-image-add"></i>
            <br />
            <input type="file" name="selectedImage" id="selectedImage" accept="image/jpeg, image/png" />
            <p id="hint">Choose Image from folder</p>
            </div>
        </div>
        <canvas id="image_canvas"></canvas>
            <div className="image_holder">
          <button id="remove_img_btn">
            <i className="bx bxs-message-square-x"></i>
          </button>
          <img src="" alt="img" id="image" />
          </div>
          <div className="options">
          <div className="option">
            <input type="range" max="200" min="0" value="100" id="brightness" className="slider" />
            <p id="brightVal" className="show_value">100</p>
            </div>
            <div className="option">
            <input type="range" max="40" min="0" value="0" id="blur" className="slider" />
            <p id="blurVal" className="show_value">0</p>
            </div>
            <div className="option">
            <input type="range" max="100" min="0" value="0" id="greyScale" className="slider" />
            <p id="greyVal" className="show_value">0</p>
            </div>
            <div className="option">
            <input type="range" max="100" min="0" value="0" id="hue" className="slider" />
            <p id="hueVal" className="show_value">0</p>
            </div>
            <div className="option">
            <input type="range" max="100" min="1" value="1" id="saturation" className="slider" />
            <p id="saturationVal" className="show_value">1</p>
            </div>
          </div>
        <button id="clearAll">
          <span>Reset</span>
          <i className="bx bx-reset"></i>
            </button>
          </div>
        </div>
    </div>
  );
};

export default Editor;
