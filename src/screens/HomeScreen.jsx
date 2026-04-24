import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={[styles.overlay, { paddingTop: insets.top + 40, paddingBottom: insets.bottom + 40 }]}>
        
        <View style={styles.header}>
          <View style={styles.logoDot} />
          <Text style={styles.brandName}>GrooMa</Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>Onde o som se encontra.</Text>
          <View style={styles.divider} />
          <Text style={styles.description}>
            Encontre a banda perfeita ou o palco ideal para o seu talento.
          </Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.primaryButtonText}>Começar agora</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Lista')}>
            <Text style={styles.secondaryButtonText}>Sou um contratante</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A', 
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#BB86FC',
    marginRight: 10,
  },
  brandName: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
  },
  mainContent: {
    marginTop: -60,
  },
  mainTitle: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 56,
  },
  divider: {
    width: 50,
    height: 4,
    backgroundColor: '#03DAC6',
    marginVertical: 20,
  },
  description: {
    color: '#A0A0A0',
    fontSize: 18,
    lineHeight: 26,
  },
  footer: {
    gap: 15,
  },
  primaryButton: {
    backgroundColor: '#FFF', 
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
  },
  primaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  secondaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});