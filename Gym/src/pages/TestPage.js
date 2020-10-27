import React from 'react';
import {View, Text, TextInput, Platform} from 'react-native';
import firebase from 'firebase';

import MyText from '../components/MyText';
import {LoginButton, CardItem, Card} from '../components';

class TestPage extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            defaultValueText: 'Ciao',
            valueText: '',
        };
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <MyText text="Login" yesorno/>
                <MyText yesorno={true} text={this.state.valueText}/>
                <MyText yesorno />
                <Text style={{fontSize: 20,}}>Ciao Mondo</Text>

                <TextInput
                    style={styles.textInput}
                    defaultValue={this.state.defaultValueText}
                    value={this.state.valueText}
                    onChangeText={(text) => {
                        this.setState({
                            valueText: text.indexOf('s') !== -1 ? "------" : text,
                        });
                    }}
                />
                <Card>
                    <CardItem>
                        <LoginButton onPress={() => {
                            firebase.auth().signOut();
                        }} text={'logout'}/>
                    </CardItem>
                </Card>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        height: 100,
        paddingTop: Platform.OS === 'ios' ? 40 : 0,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row'
    },
    textInput: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid'
    }
};

export default TestPage;
