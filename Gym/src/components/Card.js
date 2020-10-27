import React from 'react';
import {View} from 'react-native';

export default class Card extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }
}

const styles = {
    container: {
        marginHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        minHeight: 50
    }
};
