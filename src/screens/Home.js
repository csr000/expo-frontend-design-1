import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';
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
    height: 150,
    borderRadius: 30,
  },
  balanceAmt: {
    fontWeight: 'bold',
  },
  TCard: {
    backgroundColor: colors.gray,
    padding: 20,
    borderRadius: 20,
  },
  TCardLabel: {
    marginTop: 5,
  },
  accentBg: {
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

const TCard = props => {
  return (
    <Block center>
      <Block style={styles.TCard}>{props.icon}</Block>
      {props.label}
    </Block>
  );
};

export const Home = ({ navigation }) => {
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
        <AntDesign name="menuunfold" size={24} color="black" />
        <Pressable onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="account-circle" size={30} color="black" />
        </Pressable>
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Block>
          <Text bold size={24} style={{ marginVertical: 24 }}>
            Your Balance
          </Text>
        </Block>
        <Pressable onPress={() => navigation.navigate('Card')}>
          <Block row center space="around" style={styles.card}>
            <Block>
              <Text light size={14}>
                June 14, 2020
              </Text>
              <Text style={styles.balanceAmt} size={36}>
                $24,802.05
              </Text>
            </Block>
            <Block>
              <Text light size={18}>
                15%
                <AntDesign name="arrowup" size={24} color="black" />
              </Text>
            </Block>
          </Block>
        </Pressable>
        <Block row space="between" style={{ marginVertical: 24 }}>
          <TCard
            icon={<FontAwesome name="arrow-up" size={24} color="red" />}
            label={<Text style={styles.TCardLabel}>Send</Text>}
          />
          <TCard
            icon={<FontAwesome name="arrow-down" size={24} color="green" />}
            label={<Text style={styles.TCardLabel}>Recieve</Text>}
          />
          <TCard
            icon={
              <FontAwesome5
                name="file-invoice-dollar"
                size={24}
                color="darkgoldenrod"
              />
            }
            label={<Text style={styles.TCardLabel}>Loan</Text>}
          />
          <TCard
            icon={<AntDesign name="cloudupload" size={24} color="royalblue" />}
            label={<Text style={styles.TCardLabel}>Topup</Text>}
          />
        </Block>
        <Block row space="between">
          <Block>
            <Text bold size={20}>
              Activities
            </Text>
          </Block>
          <Block
            middle
            style={{
              backgroundColor: colors.gray,
              paddingHorizontal: 10,
              borderRadius: 20,
            }}
          >
            <Text light size={10}>
              This Week
            </Text>
          </Block>
        </Block>
        <Block>
          <LineChart
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 40} // from react-native
            height={400}
            yAxisLabel="$"
            yAxisSuffix="k"
            // yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: colors.gray,
              backgroundGradientTo: colors.gray,
              color: (opacity = 1) => `rgba(163, 167, 247, ${opacity})`,
              labelColor: (opacity = 0.1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: colors.accent,
              },
            }}
            bezier
            style={{
              marginVertical: 18,
              borderRadius: 16,
              color: '#000',
            }}
          />
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};
