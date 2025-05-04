import Icon from '@react-native-vector-icons/ionicons'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

function Button ({ children, variant = 'default', icon, onPress }) {
  const variantStyle = styles[variant] || styles.default

  return (
    <TouchableOpacity style={[styles.button, variantStyle]} onPress={onPress}>
      <Icon name={`${icon}-outline`} size={16} style={variantStyle} />
      <Text style={[styles.text, variantStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  text: {
    fontWeight: 'regular',
    fontSize: 16
  },
  default: {
    backgroundColor: '#9ca3af'
  },
  success: {
    backgroundColor: '#4ade80'
  },
  danger: {
    backgroundColor: '#f87171'
  },
  warning: {
    backgroundColor: '#fb923c'
  },
  info: {
    backgroundColor: '#60a5fa'
  },
  brand: {
    backgroundColor: '#B2DBBF',
    color: 'white'
  },
  assist: {
    backgroundColor: '#70C1B3',
    color: 'white'
  },
  accent: {
    backgroundColor: '#F3FFBD',
    color: '#536600'
  }
})

export default Button
