import { useContext } from 'react';
import { GalleryContext } from '../context/GalleryContext';

const useGallery = () => useContext(GalleryContext);

export default useGallery;