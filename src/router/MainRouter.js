// ini file untuk router utama untuk mengatur navigasi di aplikasi

import React from 'react';
import {View, Text} from 'react-native';
// untuk import icon dari material vector icons
// karen icons sangat banget yang menyediakan, maka kita pilih yang paling lengkap
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// node_moduels --> react-native-vector-icon--> material comunity.js --> klik di materialcomunityicons.json --> klik kanan goto definition || untuk mengetahui nama dari sebuah icons dari penyedia MaterialCommunityIcons
// node_moduels --> react-native-vector-icon--> masuk folder glyphmaps || untuk masuk ke barbagai sumber penyedia icons
// tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const MainTab = createBottomTabNavigator();

// screens
import Feed from '../screens/Feed/Feed';
import Add from '../screens/Add/Add';
import Account from '../screens/Account/Account';

const MainRouter = () => {
  return (
    // container screen
    <MainTab.Navigator
      tabBarOptions={{showLabel: false}}
      initialRouteName="Feed">
      {/* urutan penulisan mempengaruhi */}
      <MainTab.Screen
        // nama yang tertulis di navigasi bawah
        name="Feed"
        // nah nama di navigasi bawah itu menunjuk ke component apa
        component={Feed}
        // untuk mengganti icon tabs, disini kita menggunakan icons dari react-vector-icons
        // Dapat mengganti icon tab menggunakan propery options
        options={{
          // tanBarIcon menerima function yang harus me return sebuah component
          // dalam case ini adalah component Icon dari rect-vector-icons
          // untuk mengetahui secara pasti kode icon yang dapat digunakan dapat melihat ke salah satu file json yang ada di alamat berikut:
          // alamat ./node_modules/react-native-vector-icons/gylphmaps
          // focused akan bernilai true jika kita sedang membuka screen ini
          tabBarIcon: ({focused}) => {
            // jika focused bernilai true, iconName = 'animation'
            // jika focused bernilai false, iconName = 'animation-outline'
            const iconName = focused ? 'animation' : 'animation-outline';
            return <Icon name={iconName} size={27} />;
          },
        }}
      />
      <MainTab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'tooltip-plus' : 'tooltip-plus-outline';
            return <Icon name={iconName} size={27} />;
          },
        }}
      />
      <MainTab.Screen
        name="AccountTab"
        component={AccountTab}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return <Icon name="account-box" size={27} />;
            } else {
              return <Icon name="account-box-outline" size={27} />;
            }
          },
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainRouter;
