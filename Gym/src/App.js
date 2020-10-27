import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import f from './firebase/firebase';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {userLogin, userLogout} from './actions';
import RootNavigator from './navigator/RootNavigator';

class BackgroundService extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        f.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.userLogin(user);
            } else {
                this.props.userLogout();
            }
        });
    }

    render() {
        return null;
    }
}

export default App = function () {
    const dispatch = useDispatch();
    return (
        <>
            <BackgroundService
                userLogin={(user) => {
                    dispatch(userLogin(user));
                }}
                userLogout={() => {
                    dispatch(userLogout());
                }}
            />
            <SafeAreaProvider>
                <RootNavigator/>
            </SafeAreaProvider>
        </>
    );
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(255,0,0)',
    },
};
