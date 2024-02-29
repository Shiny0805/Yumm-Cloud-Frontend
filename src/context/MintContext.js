import React, { createContext, useReducer } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  modalIsOpened: false,
};

const handlers = {
  SET_MODAL_IS_OPENED: (state, action) => {
    return {
      ...state,
      modalIsOpened: action.payload
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const MintContext = createContext({
  ...initialState,
  openMintModal: () => Promise.resolve(),
  closeMintModal: () => Promise.resolve(),
});

//  Provider
function MintProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openMintModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeMintModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <MintContext.Provider
      value={{
        ...state,
        openMintModal,
        closeMintModal,
      }}
    >
      {children}
    </MintContext.Provider>
  );
}

export { MintContext, MintProvider };