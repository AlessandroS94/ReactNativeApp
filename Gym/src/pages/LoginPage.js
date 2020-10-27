import React from 'react';
import {ImageBackground, View, Text} from 'react-native';

import {connect} from 'react-redux';

import {
    PageTitle,
    Card,
    CardItem,
    InputLabel,
    Input,
    LoginButton,
    LinkButton,
} from '../components';
import {
    appFirebaseSignIn,
    appGuestFormChangeEmail,
    appGuestFormChangePassword, appGuestFormReset,
} from '../actions';
import {sAppGuestFormEmail, sAppGuestFormPassword} from '../reducers/selectors';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };

        this.handlePress = this.handlePress.bind(this);

        this.props.resetForm();

        this.goToSignUp = function () {
            this.props.navigation.navigate('Registrati');
        }.bind(this);
    }

    handlePress() {
        const {email, password} = this.props;
        this.setState({
            loading: true,
        });
        this.props.firebaseSignIn();
        this.setState({
            loading: false,
        });
    }

    render() {
        return (
            <View style={styles.pageContainer}>
                <ImageBackground source={require('../asset/backgroundWork.jpg')} style={styles.image}>
                    <Card>
                        <CardItem>
                            <PageTitle>Accedi</PageTitle>
                        </CardItem>
                        <CardItem propStyle={{marginBottom: 0}}>
                            <InputLabel text={'Email'}/>
                        </CardItem>
                        <CardItem>
                            <Input
                                placeholder={'email@email.it'}
                                handleChangeText={this.props.handleChangeEmail}
                                value={this.props.email}
                            />
                        </CardItem>
                        <CardItem noMargin>
                            <InputLabel text={'Password'}/>
                        </CardItem>
                        <CardItem>
                            <Input
                                placeholder={'Password'}
                                handleChangeText={this.props.handleChangePassword}
                                value={this.props.password}
                                secureTextEntry
                            />
                        </CardItem>
                        <CardItem>
                            <LoginButton
                                onPress={this.handlePress}
                                inLoading={this.state.loading}
                            />
                        </CardItem>
                        <CardItem>
                            <LinkButton text={'Non sei Registrato ? Registrati'} onPress={this.goToSignUp}/>
                        </CardItem>
                    </Card>
                </ImageBackground>
            </View>
        );
    }
}

const styles = {
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
};

function mapStateToProps(state) {
    return {
        email: sAppGuestFormEmail(state),
        password: sAppGuestFormPassword(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleChangeEmail: function (value) {
            dispatch(appGuestFormChangeEmail(value));
        },
        handleChangePassword: function (value) {
            dispatch(appGuestFormChangePassword(value));
        },
        resetForm: function () {
            dispatch(appGuestFormReset());
        },
        firebaseSignIn() {
            dispatch(appFirebaseSignIn());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
