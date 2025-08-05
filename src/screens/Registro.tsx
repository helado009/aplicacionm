import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function Registro({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <TextInput placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}/>
      <TextInput
        placeholder="Usuario"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}/>
      <TextInput
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}/>

      <Button title="Volver a Iniciar Sesión" onPress={() => navigation.navigate('IniciarSesion')} />
    </View>
  );
}
