import React from 'react';
import {Text} from 'react-native';

class PageTitle extends React.Component {
    render() {
        const {children} = this.props;

        return (
            <Text style={style}>{children}</Text>
        );
    }
}

const style = {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign:'center'
};

export default PageTitle;
