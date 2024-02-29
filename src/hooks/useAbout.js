import { useContext } from 'react';
import { AboutContext } from '../context/AboutContext';

const useAbout = () => useContext(AboutContext);

export default useAbout;