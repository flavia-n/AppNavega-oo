import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'> 
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
        <Tab.Screen name="Produtos" component={ProdutosScreen} />
        <Tab.Screen name="Contatos" component={ContatosScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;