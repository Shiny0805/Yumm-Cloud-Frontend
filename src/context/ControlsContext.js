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
const ControlsContext = createContext({
  ...initialState,
  openControlsModal: () => Promise.resolve(),
  closeControlsModal: () => Promise.resolve(),
});

//  Provider
function ControlsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openControlsModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeControlsModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <ControlsContext.Provider
      value={{
        ...state,
        openControlsModal,
        closeControlsModal,
      }}
    >
      {children}
    </ControlsContext.Provider>
  );
}

export { ControlsContext, ControlsProvider };