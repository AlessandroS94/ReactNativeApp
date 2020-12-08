import axios from 'axios';
import firebase, {firestore} from '../firebase/firebase';

const URL_VIDEO = 'https://www.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet&maxResults=10&playlistId=PLA21FAE7C8EE25330&key=';

export const getVideos = function () {
    return axios.get(URL_VIDEO).
    then(response => response.data.items).
    catch(error => {
        throw error;
    });
};
