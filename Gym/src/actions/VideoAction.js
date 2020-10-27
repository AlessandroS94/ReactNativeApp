import {
    VIDEO_FETCH,
    VIDEO_FETCH_FAIL,
    VIDEO_FETCH_SUCCESS,
} from '../stores/ActionType';
import * as API from '../api/Api'

export function videoFetched(videos) {
    return {
        type: VIDEO_FETCH_SUCCESS,
        payload: {
            videos
        }
    }
}
export function videoFetchOLD() {
    return function (dispatch) {
        dispatch({type: VIDEO_FETCH});
        API.getVideos().
        then(videos => dispatch(videoFetched(videos))).
        catch(err => dispatch({type: VIDEO_FETCH_FAIL}));
    }
}

export function videoFetch() {
    return {
        type: VIDEO_FETCH,
        payload: API.getVideos().then(v => ({videos: v}))
    };
}
