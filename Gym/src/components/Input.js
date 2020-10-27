import React, {Component} from 'react';
import {TextInput} from 'react-native';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        const {handleChangeText} = props;

        const thisHandleChangeText = this.handleChangeText.bind(this);

        this.handleChangeText = (function(text) {
            thisHandleChangeText(text);
            handleChangeText(text);
        }).bind(this);
    }

    handleChangeText(text) {
        this.setState({
            text,
        });
    }

    handleChange = (text) => {
        this.setState({
            text,
        });
    };

    render() {
        const {placeholder, ...rest} = this.props;

        return (
            <TextInput
                {...rest}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={styles.placeholderColor}
                value={this.props.value ? this.props.value : this.state.text}
                // onChangeText={(text) => {
                //   console.log('change');
                //   this.setState({
                //     text,
                //   })
                // }}
                onChangeText={this.handleChangeText}
                // onChangeText={this.handleChange}
                autoCapitalize={'none'}
            />
        );
    }
}

const styles = {
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderBottomColor: '#000000',
        fontSize: 18,
        height: 35,
        paddingHorizontal: 5,
        color: 'black',
    },
    placeholderColor: 'rgb(201,201,201)',
};
