import {View, Text, Button} from "react-native";
import 'react-native-gesture-handler';
export default function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='ir para sobre'
          onPress={() => props.navigation.navigate ('Sobre')}
        />
        <Button title= 'ir para Produtos'
         onPress={() => props.navigation.navigate ('Produtos')}
          />
           <Button title= 'ir para Contato'
         onPress={() => props.navigation.navigate ('Contatos')}
          />
      </View>
    );
  }