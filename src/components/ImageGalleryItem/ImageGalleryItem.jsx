import React from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImg, bigImg }) => {
  return (
    <GalleryItem>
      <GalleryImg src={smallImg} alt="serchedImage" />
    </GalleryItem>
  );
};
