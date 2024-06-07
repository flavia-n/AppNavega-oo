import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen(props) {
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

function SobreScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sobre Screen</Text>
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

function ProdutosScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Produtos Screen</Text>
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

function ContatosScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Contatos Screen</Text>
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
        <Stack.Screen name="Contatos" component={ContatosScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;