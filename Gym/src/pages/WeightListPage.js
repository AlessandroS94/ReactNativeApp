import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeArea} from 'react-native-safe-area-context';

import {ListButton, Card, CardItem, Input} from '../components';
import {sWeightList, sWeightNewText} from '../reducers/WeightReducer';
import {WeightRemove} from '../actions/WeightActions';
import WeightItem from './partial/WeightItem';

export default function({navigation}) {
  const weights = useSelector(sWeightList);

  const dispatch = useDispatch();
  const inset = useSafeArea();
  return (
      <View style={[styles.pageContainer, {paddingBottom: inset.bottom}]}>
        <FlatList
            style={{paddingTop: 10, flex: 1}}
            data={weights}
            ListEmptyComponent={() => <Text style={styles.noElementText}>Nessun elemento</Text>}
            keyExtractor={weight => `weight-${weight.id}`}
            renderItem={({item: weight, index, separator}) => (
                <Card>
                  <CardItem noMargin>
                    <WeightItem weight={weight} onPress={() => {dispatch(WeightRemove(weight));}}/>
                  </CardItem>
                </Card>
            )}
        />
      </View>
  );
}

const styles = {
  pageContainer: {
    flex: 1,
  },
  noElementText:{
      textAlign: 'center',
      fontSize: 14
  }
};
