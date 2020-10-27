import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WeightAddPage from '../pages/WeightAddPage';
import Logout from '../pages/LogoutPage';
import WeightListPage from '../pages/WeightListPage';
import DayWorkGym from '../pages/DayWorkGymPage';
import DayWorkGymListPage from '../pages/DayWorkGymListPage';
import Video from '../pages/VideoListPage';
const GymStack = createDrawerNavigator();

export default function () {
    return (

    <GymStack.Navigator>
        <GymStack.Screen name={'Esercizi che puoi svolgere'} component={Video}/>
        <GymStack.Screen name={'Lista pesate'} component={WeightListPage}/>
        <GymStack.Screen name={'Aggiungi Peso'} component={WeightAddPage}/>
        <GymStack.Screen name={'Aggiungi esercizio di giornata'} component={DayWorkGym}/>
        <GymStack.Screen name={'Lista esercizi svolti '} component={DayWorkGymListPage}/>
        <GymStack.Screen name={'Logout'} component={Logout}/>
    </GymStack.Navigator>
)
    ;
}
