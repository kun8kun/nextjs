import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/common/Modal/Modal.module.css';

const Modal = ({ isOpen, onClose, image }) => {
  const [showImage1, setShowImage1] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval;
    if (startTime !== null && progress < 100) {
      interval = setInterval(() => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const duration = 15000; // 5秒で完了するように設定
        setProgress(Math.min((elapsedTime / duration) * 100, 100));
      }, 100);
    } else {
      setShowCloseButton(true);
    }
    return () => clearInterval(interval);
  }, [startTime, progress]);

  const handleCloseClick = () => {
    setShowImage1(false);
  };

  useEffect(() => {
    if (isOpen) {
      setStartTime(Date.now());
      setShowImage1(true);
      setProgress(0);
      setShowCloseButton(false);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modal}
      onClick={() => {
        onClose();
        setShowImage1(true);
        setProgress(0);
        setShowCloseButton(false);
      }}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {showImage1 ? (
          <div className={styles.adImage}>
          <img className={styles.image1} src="/images/common/banner/banner-housing-02.jpg" alt="Image 1" />
          {showCloseButton ? (
            <button className={styles.adCloseButton} onClick={handleCloseClick}>
              Close
            </button>
          ) : (
            <div className={styles.progresBarContainer}>
              <div className={styles.progressBar} style={{ width: `calc(${progress}% - 4px)` }}></div>
            </div>
          )}
          </div>
        ) : (
          <>
            <img className={styles.image1} src={image} />
            <a href={image} download="image.png">
              download
            </a>
          </>
        )}


        <button
          className="closeButton"
          onClick={() => {
            onClose();
            setShowImage1(true);
            setProgress(0);
            setShowCloseButton(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
