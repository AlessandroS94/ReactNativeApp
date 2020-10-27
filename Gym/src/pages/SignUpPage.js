import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import firebase from 'firebase';

import {
    PageTitle,
    Card,
    CardItem,
    InputLabel,
    Input,
    LoginButton,
    LinkButton,
} from '../components';
import {connect} from 'react-redux';


const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
};

class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeAttributes = this.handleChangeAttributes.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.onSignUpSuccess = this.onSignUpSuccess.bind(this);
        this.onSignUpFailure = this.onSignUpFailure.bind(this);
        this.goToSignIn = function () {
            this.props.navigation.navigate('Accedi');
        }.bind(this);
    }

    handleChangeEmail(value) {
        this.setState({
            email: value,
        });
    }

    handleChangePassword(value) {
        this.setState({
            password: value,
        });
    }

    handleChangeAttributes(name, value) {
        this.setState({
            [name]: value,
        });
    }

    onSignUpSuccess() {
        this.setState(INITIAL_STATE);
    }

    onSignUpFailure(error) {
        this.setState({
            loading: false,
            error,
        });
    }

    handlePress() {
        this.setState({
            loading: true,
        });

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(this.onSignUpSuccess).catch((error) => {
            // Handle Errors here.
            console.log(error.code, error.message);
            this.onSignUpFailure(error.message);
        });
    }

    render() {
        const {goToSignIn} = this.props;
        return (
            <View style={styles.pageContainer}>
                <ImageBackground source={require('../asset/backgroundWork.jpg')} style={styles.image}>
                    <Card>
                        <CardItem>
                            <PageTitle>Registrati</PageTitle>
                        </CardItem>
                        <CardItem propStyle={{marginBottom: 0}}>
                            <InputLabel text={'Email'}/>
                        </CardItem>
                        <CardItem>
                            <Input
                                placeholder={'email@email.it'}
                                handleChangeText={this.handleChangeEmail}
                            />
                        </CardItem>
                        <CardItem noMargin>
                            <InputLabel text={'Password'}/>
                        </CardItem>
                        <CardItem>
                            <Input
                                placeholder={'Password'}
                                handleChangeText={this.handleChangePassword}
                                secureTextEntry
                            />
                        </CardItem>

                        {!!this.state.error && (
                            <CardItem
                                noMargin
                            >
                                <Text style={{color: 'red'}}>{this.state.error}</Text>
                            </CardItem>
                        )}

                        <CardItem>
                            <LoginButton
                                onPress={this.handlePress}
                                inLoading={this.state.loading}
                                text={'Registrati'}
                            />
                        </CardItem>
                        <CardItem>
                            <LinkButton text={'Sei già registrato? Accedi'} onPress={this.goToSignIn}/>
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
        resizeMode: "cover",
        justifyContent: "center"
    },
};

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(null, mapDispatchToProps)(SignUpPage);
