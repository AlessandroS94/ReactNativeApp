import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {CardItem} from '../../components';
import Card from '../../components/Card';

export default class ExerciseItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const {exercise: {title, description, date }} = this.props;
            return (
                <Card>
                    <View style={styles.container}>
                        <CardItem>
                            <Text>{title}</Text>
                        </CardItem>
                        <TouchableOpacity onPress={this.props.onPress}
                                          style={[styles.actionButton, styles.actionContainer]}>
                            <Image style={styles.trashIcon} source={require('../../asset/trash.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <CardItem>
                        <Text>{description}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>{date}</Text>
                    </CardItem>
                </Card>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerText: {
        justifyContent: 'space-around',
    },
    thumb: {
        height: 50,
        width: 50,
    },
    image: {
        height: 200,
        width: 200,
    },
    button: {
        width: 100,
    },
    actionContainer: {
        width:50,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.1)',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    actionButton: {
        height: 45,
        justifyContent: 'center',
        paddingHorizontal: 12.5,
        paddingBottom:12.5
    },
    trashIcon:{
        height:25,
        width: 25,
        justifyContent: 'center',
    },
    noElementText: {
        textAlign: 'center',
        fontSize: 14,
    },
};
