import actions from "./BeatActions.json";
import API from "./BeatsAPI.js";
import { Provider, useContext, refreshOnLoad } from "./BeatState.jsx";

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