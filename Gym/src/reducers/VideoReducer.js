import {
    VIDEO_FETCH,
    VIDEO_FETCH_FAIL,
    VIDEO_FETCH_SUCCESS,
} from '../stores/ActionType';

const sVideo = (state) => state.video;
export const sLoadedVideos = state => sVideo(state).videos;
export const sVideosLoading = state => sVideo(state).loading;

const INITIAL_STATE = {
    videos: null,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${VIDEO_FETCH}_PENDING`:
            return {
                ...state,
                loading: true,
            };
        case `${VIDEO_FETCH}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${VIDEO_FETCH}_FULFILLED`:
            return {
                ...state,
                videos: action.payload.videos,
                loading: false,
            };
        default:
            return state;
    }
}
