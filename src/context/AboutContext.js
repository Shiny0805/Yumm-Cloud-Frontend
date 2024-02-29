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
const AboutContext = createContext({
  ...initialState,
  openAboutModal: () => Promise.resolve(),
  closeAboutModal: () => Promise.resolve(),
});

//  Provider
function AboutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openAboutModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeAboutModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <AboutContext.Provider
      value={{
        ...state,
        openAboutModal,
        closeAboutModal,
      }}
    >
      {children}
    </AboutContext.Provider>
  );
}

export { AboutContext, AboutProvider };