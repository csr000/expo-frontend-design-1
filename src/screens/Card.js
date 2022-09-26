import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import Block from '../components/Block';
import Text from '../components/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
    <Block
      row
      space="between"
      style={{
        marginVertical: 15,
        backgroundColor: colors.gray,
        padding: 10,
        borderRadius: 20,
      }}
    >
      <Block row>
        <MaterialCommunityIcons
          name="bank-transfer"
          size={50}
          color="black"
          style={{ marginRight: 20 }}
        />
        <Block>
          <Text bold size={24}>
            {props.name}
          </Text>
          <Text light size={12}>
            {props.date}
          </Text>
        </Block>
      </Block>
      <Block middle>
        <Text size={20}>{props.amt}</Text>
      </Block>
    </Block>
  );
};

export const Card = ({ navigation }) => {
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
      <Block row space="between">
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Block>
          <Text bold size={24} style={{ marginVertical: 24 }}>
            Your Cards
          </Text>
        </Block>
        <Block row center space="around" style={styles.card}>
          <Image
            style={{ width: 315, height: 198 }}
            source={require('../../assets/mastercard.png')}
          />
        </Block>
        <Block row space="between">
          <Block>
            <Text bold size={20}>
              Recent Transactions
            </Text>
          </Block>
        </Block>
        <TRow name="KFC" date="June 26" amt="-₵1000" />
        <TRow name="Salary" date="June 26" amt="+₵9000" />
        <TRow name="Groceries" date="June 26" amt="-₵2100" />
        <TRow name="Car Repair" date="June 26" amt="-₵2600" />
        <TRow name="Allowance" date="June 26" amt="+₵2600" />
        <TRow name="Taxes" date="June 26" amt="+₵1110" />
      </ScrollView>
    </SafeAreaView>
  );
};
