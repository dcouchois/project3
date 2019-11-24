import actions from "./CandleActions.json";
import API from "./BeatsAPI.js/index.js";
import { Provider, useContext, refreshOnLoad } from "./BeatState.jsx/index.js";

export default {
    actions,
    API,
    Provider, 
    useContext,
    refreshOnLoad
};

export {
    actions as beatActions,
    API as beatAPI,
    Provider as BeatProvider, 
    useContext as useBeatContext,
    refreshOnLoad as refreshBeatsOnLoad
}