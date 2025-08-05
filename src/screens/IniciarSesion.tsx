import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function IniciarSesion({ navigation }: any) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}/>
      <TextInput placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}/>

      <Button title="Ir a Registro" onPress={() => navigation.navigate('Registro')} />
    </View>
  );
}
