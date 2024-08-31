import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import Colors from '@/constants/Colors';
import RoundBtn from '@/components/RoundBtn';
import Dropdown from '@/components/Dropdown';

const Page = () => {

  const balance = 1420;
  const onAddMoney = () => {

  }

  return (
    <ScrollView style={{backgroundColor: Colors.background}}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>R$</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={'add'} text={'Add money'} onPress={onAddMoney}/>
        <RoundBtn icon={'refresh'} text={'Exchange'}/>
        <RoundBtn icon={'list'} text={'Details'}/>
        <Dropdown/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10
  },
  balance: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  currency: {
    fontSize: 20,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  }
});
export default Page