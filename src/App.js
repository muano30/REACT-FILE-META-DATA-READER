import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function MetadataReader() {

  const [image, setImage] = useState('');
  const [imageInfo, setImageInfo] = useState([]);
  const [blob, setBlob] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    setImageInfo([...imageInfo, image])
  }

  const showBlob = (e,type) => {
    const reader = new FileReader();
    var blob = new Blob([reader.readAsText(e.target.files[0])], { type});
    setBlob(JSON.stringify(blob))
    
  }
  
  const fileupload = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
      // console.log(event.target.files[0]);
    }

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <h1>FILE META DATA READER</h1>
        <input

          type='file'
          onChange={fileupload}
        />

        <button type="submit">Get File Data</button>

      </form>
      <ul>
        {imageInfo.map((item, index) => {
          return (
            <p key={index}  onClick={(e) => showBlob(item.type)}>
            <li>Name:  {item.name}</li>
            <li>Size:  {item.size}</li>
            <li>Type:  {item.type}</li>
            <div>
              {blob}
            </div>
          </p>

          )
        })
      }
      </ul>
    </div>

  );
}

export default MetadataReader;
