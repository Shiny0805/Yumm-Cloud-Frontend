import { useContext } from 'react';
import { ControlsContext } from '../context/ControlsContext';

const useControls = () => useContext(ControlsContext);

export default useControls;