import { createStackNavigator } from '@react-navigation/stack';
import IniciarSesion from '../screens/IniciarSesion';
import Registro from '../screens/Registro';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
      <Stack.Screen  name="Registro" component={Registro}/>
    </Stack.Navigator>
  );
}