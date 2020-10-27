import React, {Component} from 'react';
import {Text} from 'react-native';
import YouTube from 'react-native-youtube';
import {Card} from '../../components';
import CardItem from '../../components/CardItem';

export default class VideoItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    render() {
        const {video: {snippet: {title, resourceId: {videoId}}}} = this.props;
        return (
            <Card>
                <CardItem>
                    <Text>{title}</Text>
                </CardItem>

                <YouTube
                    apiKey={'AIzaSyAYVriqGxTsWgVFx7YG6czyMAOtp7IrUzI'}
                    videoId={videoId} // The YouTube video ID
                    loop // control whether the video should loop when ended
                    style={{alignSelf: 'stretch', height: 300}}

                />

            </Card>
        );
    }
}
