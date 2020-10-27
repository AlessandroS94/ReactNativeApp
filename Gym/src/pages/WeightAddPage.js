import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeArea} from 'react-native-safe-area-context';

import {ListButton, Card, CardItem, Input,PageTitle} from '../components';
import {sWeightText} from '../reducers/WeightReducer';
import {WeightAdd, WeightTextChange} from '../actions/WeightActions';

export default function() {
    let newWeightText = useSelector(sWeightText);
    const dispatch = useDispatch();
    const inset = useSafeArea();
    return (
        <View style={[styles.pageContainer, {paddingBottom: inset.bottom}]}>
            <View style={{paddingTop: 10}}>
                <Card>
                    <PageTitle>AGGIUNGI PESO</PageTitle>
                </Card>
                <Card>
                    <CardItem>
                        <Text>Aggiungi peso </Text>
                    </CardItem>
                    <CardItem>
                        <Input
                            placeholder={'Peso'}
                            value={newWeightText}
                            handleChangeText={(value) => {
                                dispatch(WeightTextChange(value));
                            }}
                        />
                    </CardItem>
                </Card>
            </View>
            <View>
                <Card>
                    <CardItem noMargin>
                        <ListButton text={'Aggiungi'}
                                    onPress={() => {dispatch(WeightAdd());}} />
                    </CardItem>
                </Card>
            </View>
        </View>
    );
}

const styles = {
    pageContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize:18
    }
};
