import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {IN_LOADING} from '../stores/ActionType';

export const LoadingPage = function() {
    return (
        <View style={styles.pageContainer}>
            <ActivityIndicator
                size={'large'}
                color={'rgb(250,92,92)'}
            />
        </View>
    );
};

class LoadingPageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {loading, inLoading} = this.props;
        setTimeout(function() {
            inLoading();
        }, 1000);
    }

    render() {
        return <LoadingPage />;
    }

}

function mapStateToProps(state) {
    const {loading} = state.app;
    return {
        loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inLoading: function() {
            dispatch({
                type: IN_LOADING,
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPageContainer);

const styles = {
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};
