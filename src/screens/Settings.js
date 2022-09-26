import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  Entypo,
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import Block from '../components/Block';
import Text from '../components/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.gray,
    height: 200,
    borderRadius: 30,
    marginBottom: 20,
  },
  accentBg: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

const TRow = props => {
  return (
    <Block row style={{ marginVertical: 10 }}>
      {props.icon}
      <Block middle style={{ marginLeft: 10 }}>
        <Text light size={25}>
          {props.name}
        </Text>
      </Block>
    </Block>
  );
};

export const Settings = ({ navigation }) => {
  const icon = { size: 40, color: 'black' };
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[colors.accent, 'transparent', colors.accent]}
        style={styles.accentBg}
        start={[0, 1]}
        end={[1, 0]}
        locations={[0, 0.25, 0.9]}
      />
      <Block row right>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <AntDesign name="closecircle" size={30} color="#fff" />
        </Pressable>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <MaterialIcons name="account-circle" size={100} color="black" />
        <Block row center>
          <Text bold size={24} style={{ marginVertical: 14 }}>
            Omarion Kellys
          </Text>

          <MaterialCommunityIcons
            name="check-decagram"
            size={24}
            color="black"
          />
          <Block
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              // width: '50%',
              // paddingVertical: 20,
            }}
          />
        </Block>
        <TRow
          name="Account"
          icon={
            <AntDesign name="setting" size={icon.size} color={icon.color} />
          }
        />
        <TRow
          name="Security"
          icon={
            <MaterialIcons
              name="security"
              size={icon.size}
              color={icon.color}
            />
          }
        />
        <TRow
          name="Fingerprint"
          icon={
            <FontAwesome5
              name="fingerprint"
              size={icon.size}
              color={icon.color}
            />
          }
        />
        <TRow
          name="Utilities"
          icon={
            <FontAwesome5 name="tools" size={icon.size} color={icon.color} />
          }
        />
        <TRow
          name="Terms & Conditions"
          icon={
            <Ionicons
              name="document-text"
              size={icon.size}
              color={icon.color}
            />
          }
        />
        <TRow
          name="About"
          icon={
            <Entypo
              name="info-with-circle"
              size={icon.size}
              color={icon.color}
            />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};
