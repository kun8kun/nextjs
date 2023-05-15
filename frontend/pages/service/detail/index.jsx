import React, { useState } from 'react';
import Modal from '@/common/Modal';
import { HeroDetails, OddEvenSec } from '@/common/index';
import styles from 'styles/pages/service/detail/detail.module.css'

export default function Detail() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please upload an image file (JPEG, PNG, or GIF)');
    }
  };

  const handleUploadClick = () => {
    if (selectedFile) {

      setModalOpen(true);
      const flaskApiKey = process.env.NEXT_PUBLIC_API_KEY;
      const flaskUrl = process.env.NEXT_PUBLIC_URL;
      const formData = new FormData();
      formData.append('file', selectedFile);
      fetch(flaskUrl, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'text/plain',
          'api_key': flaskApiKey // リクエストヘッダーにAPIキーを設定
        },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setImage(`data:image/png;base64,${data.image}`);
          console.log(data.message);
        });
    } else {
      alert('Please select an image file to upload');
    }
  };

  return (
    <main>
      <HeroDetails />
      <OddEvenSec keyProps='odd' marginTop="300px">
        <div className={styles.section}>
        <input type="file" accept="image/*" onChange={handleFileInputChange} />
        <button onClick={handleUploadClick}>Upload and Open Modal</button>
        <Modal
          isOpen={modalOpen}
          onClose={() => {setModalOpen(false);}}
          image={image}
        />
        </div>
      </OddEvenSec>
    </main>
  );
}