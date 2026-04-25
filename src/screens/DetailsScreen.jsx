import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DetailsScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { musicoId } = route.params; // Capturando o ID vindo daa Navegação

  const [detalhes, setDetalhes] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Buscando apenas um usuário pelo ID
    fetch(`https://jsonplaceholder.typicode.com/users/${musicoId}`)
    .then((response) => response.json())
    .then((json) => {
      setDetalhes(json);
      setCarregando(false);
    })
    .catch((error) => {
      console.error(error);
      setCarregando(false);
    });
}, [musicoId]);

  if (carregando) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="BB86FC" />
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>← Voltar</Text>
      </TouchableOpacity>

      {detalhes && (
        <>
          <View style={styles.header}>
            <View style={styles.avatarLarge}>
              <Text style={styles.avatarText}>{detalhes.name ? detalhes.name.charAt(0) : '?'}</Text>
            </View>
            <Text style={styles.name}>{detalhes.name}</Text>
            <Text style={styles.username}>@{detalhes.username}</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>SOBRE O PROFISSIONAL</Text>

            <View style={styles.infoCard}>
              <Text style={styles.label}>E-MAIL</Text>
              <Text style={styles.value}>{detalhes?.email?.toLowerCase() || 'Carregando...'}</Text>

              <View style={styles.divider} />

              <Text style={styles.label}>TELEFONE</Text>
              <Text style={styles.value}>{detalhes?.phone || 'Carregando...'}</Text>

              <View style={styles.divider} />
              
              <Text style={styles.label}>LOCALIZAÇÃO</Text>
              <Text style={styles.value}>{detalhes?.address?.city}, {detalhes?.address?.street}</Text>
            </View>

            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>Entrar em Contato</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A'
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  backButton: {
    padding: 20
  },

  backText: {
    color: '#BB86FC',
    fontSize: 16,
    fontWeight: '600'
  },

  header: {
    alignItems: 'center',
    marginBottom: 30
  },

  avatarLarge: {

    width: 120,
    height: 120,
    borderRadius: 40,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#BB86FC', marginBottom: 20
  },

  avatarText: {
    fontSize: 50, 
    color: '#FFF',
    fontWeight: 'bold'
  },

  name: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold'
  },

  username: {
    color: '#03DAC6',
    fontSize: 28,
    fontWeight: 'bold'
  },

  infoSection: {
    paddingHorizontal: 25
  },

  sectionTitle: {
    color: '#444',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 15,
    letterSpacing: 2
  },

  infoCard: {
    backgroundColor: '#161616',
    padding: 25,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#222'
  },

  label: {
    color: '#BB86FC',
    fontSize: 10,
    fontWeigth: '800',
    marginBottom: 5
  },

  value: {
    color: '#E0E0E0',
    fontSize: 10,
    marginBottom: 15,
    fontWeigth: '500'
  },

  divider: {
    height: 1,
    backgroundColor: '#252525',
    marginBottom: 15
  },

  contactButton: {
    backgroundColor: '#FFF',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 30,
    marginBottom:50
  },

  contactButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700'
  }
});