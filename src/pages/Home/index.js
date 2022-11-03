import { StyleSheet, View, Text, FlatList } from "react-native"

import Header from '../../components/Header/index'
import Balance from '../../components/Balance/index'
import Movements from "../../components/Movements"
import Action from "../../components/Actions"

const list = [
    {
        id: 1,
        label: 'Luz',
        value: '390,25',
        date: '14/11/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix Cliente',
        value: '79,99',
        date: '17/11/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '20/11/2022',
        type: 1
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Gustavo dos Santos" />

        <Balance saldo="9.250,90" gastos="-527,00" />
        
        <Action />

        <Text style={styles.title}>Ultimas movimentações</Text> 

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={item} /> }
          />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
