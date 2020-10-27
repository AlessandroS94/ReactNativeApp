import React from 'react';
import {Text} from 'react-native';

const InputLabel = function(props) {
    const {text} = props;
    return (
        <Text style={style}>{text}</Text>
    );
};

const style = {
    fontSize: 12,
    color: 'rgb(201,201,201)',
};

export default InputLabel;

