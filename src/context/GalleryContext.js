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
const GalleryContext = createContext({
  ...initialState,
  openGalleryModal: () => Promise.resolve(),
  closeGalleryModal: () => Promise.resolve(),
});

//  Provider
function GalleryProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openGalleryModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeGalleryModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <GalleryContext.Provider
      value={{
        ...state,
        openGalleryModal,
        closeGalleryModal,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryContext, GalleryProvider };