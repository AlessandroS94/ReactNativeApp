import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import Card from '../components/Card';
import {getToday} from 'react-native-modern-datepicker';
import {CardItem, Input, ListButton, LoginButton, PageTitle} from '../components';

import SubPageTitle from '../components/SubPageTitle';
import {sExerciseDate, sExerciseDescription,sExerciseTitle} from '../reducers/ExerciseReducer';
import {appExerciseFormSet,appExerciseChangeTitle, appExerciseFormChangeDescription,appExerciseFormChangeDate, appExerciseFormReset} from '../actions';
import {connect} from 'react-redux';

class DayWorkGymPage extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };

        this.handlePress = this.handlePress.bind(this);

        this.props.resetForm();
    }

    handlePress() {
        const {title, description,date} = this.props;
        this.setState({
            loading: true,
        });
        this.props.FormSet();
        this.setState({
            loading: false,
        });

    }

    render() {
        return (
            <View style={[styles.pageContainer]}>
                <ScrollView>
                    <Card>
                        <PageTitle>AGGIUNGI ESERCIZIO DI GIORNATA</PageTitle>
                    </Card>
                    <Card>
                        <CardItem>
                            <SubPageTitle>Aggiungi Esercizio </SubPageTitle>
                        </CardItem>
                        <CardItem>
                            <Input
                                placeholder={'Attrezzo o Esercizio'}
                                handleChangeText={this.props.handleChangeTitle}
                                value={this.props.title}
                            />
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <SubPageTitle>Aggiungi Nota </SubPageTitle>
                        </CardItem>
                        <CardItem>
                            <Input
                                placeholder={'Descrizione'}
                                handleChangeText={this.props.handleChangeDescription}
                                value={this.props.description}
                            />
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem>
                            <SubPageTitle>Aggiungi data </SubPageTitle>
                        </CardItem>
                        <DatePicker
                            mode="datepicker"
                            selected={getToday()}
                            options={{
                                selectedTextColor: 'blue',
                                textSecondaryColor: 'red',
                            }}
                            onSelectedChange={this.props.handleChangeDate }
                        />
                    </Card>
                    <Card>
                        <CardItem noMargin>
                            <ListButton text={'Aggiungi'}
                                        onPress={this.handlePress}
                                        inLoading={this.state.loading}
                            />
                        </CardItem>
                    </Card>
                </ScrollView>
            </View>
        );
    }

}
const styles = {
    pageContainer: {
        paddingTop: 10,
        flex: 1,
    },
    noElementText: {
        textAlign: 'center',
        fontSize: 14,
    },
};


function mapStateToProps(state) {
    return {
        title: sExerciseTitle(state),
        description: sExerciseDescription(state),
        date: sExerciseDate(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleChangeTitle: function (value) {
            dispatch(appExerciseChangeTitle(value));
        },
        handleChangeDescription: function (value) {
            dispatch(appExerciseFormChangeDescription(value));
        },
        handleChangeDate: function (value) {
            dispatch(appExerciseFormChangeDate(value));
        },
        resetForm: function () {
            dispatch(appExerciseFormReset());
        },
        FormSet() {
            dispatch(appExerciseFormSet());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DayWorkGymPage);
