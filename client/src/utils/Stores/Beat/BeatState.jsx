import React, { createContext, useReducer, useContext, useEffect } from "react";
import API from "./BeatsAPI";
import actions from "./BeatActions.json";
const { BEATS_LOADING,
  SET_BEATS,
  ADD_BEAT,
  BEATS_ERROR,
  CLEAR_BEATS_ERROR } = actions;

const BeatContext = createContext();
const { Provider } = BeatContext;

const reducer = (state, action) => {
  switch (action.type) {
    case BEATS_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_BEATS:
      return {
        ...state,
        beats: action.beats,
        loading: false,
        pageLoading: false
      };

    case ADD_BEAT:
      return {
        ...state,
        beats: [action.beat, ...state.beats],
        loading: false
      };

    case BEATS_ERROR:
      return {
        ...state,
        error: action.message,
        loading: false
      };

    case CLEAR_BEATS_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

const BeatProvider = ({ value = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    beats: [],
    pageLoading: true,
    loading: false,
    error: null
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useBeatContext = () => {
  return useContext(BeatContext);
};

const refreshBeats = () => {
  const [{ loading }, beatsDispatch] = useBeatContext();
  useEffect(() => {
    if (loading) {
      return;
    }
    beatsDispatch({ type: BEATS_LOADING });
    API.getBeats().then(beats => {
      beatsDispatch({ type: SET_BEATS, beats });
    });
  }, []);
};

export { BeatProvider as Provider, useBeatContext as useContext, refreshBeats as refreshOnLoad };
