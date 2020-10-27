import React, {Component, useEffect} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import VideoItem from './partial/VideoItem';
import {Card,PageTitle} from '../components';
import {sVideosLoading, sLoadedVideos} from '../reducers/selectors';
import {videoFetch, videoFetched} from '../actions';



export default function({navigation}) {
    const videos = useSelector(sLoadedVideos);
    const loading = useSelector(sVideosLoading);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(videoFetch());
    }, []);

    if (loading || videos === null) {
        return (
            <View
                style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={'large'} color={'red'} />
            </View>
        );
    }
    if (videos.length === 0) {
        return <Text>Empty Video List</Text>;
    }

    return (
        <View style={styles.container}>
            <Card>
                <PageTitle>ESERCIZI CHE PUOI SVOLGERE</PageTitle>
            </Card>
            <ScrollView>

                    {videos.map((video, key) => (
                        <VideoItem
                            key={`video-item-${video.id.replace(/ /g, '-').toLowerCase()}`}
                            video={video}
                        />
                    ))}

            </ScrollView>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        paddingVertical: 15,
    },
    title: {
        textAlign: 'center',
        fontSize:18
    }
};
