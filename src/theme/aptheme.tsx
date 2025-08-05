// src/theme/app.theme.ts
import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#0066CC',
  background: '#F2F2F2',
  surface: '#FFFFFF',
  text: '#333333',
  placeholder: '#999999',
};

export const Metrics = {
  margin: 16,
  inputHeight: 48,
  borderRadius: 8,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Metrics.margin,
    justifyContent: 'center',
  },
  input: {
    height: Metrics.inputHeight,
    backgroundColor: Colors.surface,
    borderColor: Colors.placeholder,
    borderWidth: 1,
    borderRadius: Metrics.borderRadius,
    marginBottom: Metrics.margin,
    paddingHorizontal: Metrics.margin,
  },
  button: {
    height: Metrics.inputHeight,
    backgroundColor: Colors.primary,
    borderRadius: Metrics.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Metrics.margin,
  },
  buttonText: {
    color: Colors.surface,
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    textAlign: 'center',
    color: Colors.primary,
    marginTop: Metrics.margin / 2,
    fontSize: 14,
  },
});
