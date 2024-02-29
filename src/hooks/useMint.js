import { useContext } from 'react';
import { MintContext } from '../context/MintContext';

const useMint = () => useContext(MintContext);

export default useMint;