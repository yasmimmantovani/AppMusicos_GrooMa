import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ListScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [musicos, setMusicos] = useState([]); // Estado para os dados
  const [carregando, setCarregando] = useState(true); // Estado de Loading

  //Função para buscar dados da API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      setMusicos(json);
      setCarregando(false);
    })
    .catch((error) => {
      console.error(error);
      setCarregando(false);
    });
  }, []);

  // Componente que renderiza cada item da lista
  const renderMusico = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detalhes', { musicoId: item.id })}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        
        <View style={styles.badge}>
          <Text style={styles.badgeText}>DISPONÍVEL</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.musicoName}>{item.name}</Text>
        <Text style={styles.musicoInstrumento}> 
          {item.company.bs.split(' ')[0].toUpperCase()}
        </Text>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.locationText}>📍 {item.address.city}</Text>
        <Text style={styles.viewMore}>Ver perfil ➔</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.headerTitle}>Músicos disponíveis</Text>

      {carregando ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#BB86FC" />
          </View>
        ) : (
        <FlatList 
          data={musicos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMusico}
          contentContainerStyle={styles.listPadding}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A'
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '700',
    padding: 20,
    marginTop: 10
  }, 

  listPadding: {
    paddingHorizontal: 20,
    paddingBottom: 40
  },

    card: {
    backgroundColor: '#161616', // Um cinza quase preto, mas que destaca do fundo
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#252525',
    elevation: 4
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 18, 
    backgroundColor: '#BB86FC',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#BB86FC',
    shadowOpacity: 0.5,
    shadowRadius: 10
  },

  avatarText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold'
  },

  badge: {
    backgroundColor: 'rgba(3, 218, 198, 0.1)', // Verde água com transparência
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#03DAC6'
  },

  badgeText: {
    color: '#03DAC6',
    fontSize: 10,
    fontWeight: 'bold'
  },

  cardBody: {
    marginBottom: 15,
  },

  musicoName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },

  musicoInstrumento: {
    color: '#A0A0A0',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '500'
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#252525',
    paddingTop: 15
  },

  locationText: {
    color: '#666',
    fontSize: 12
  },

  viewMore: {
    color: '#BB86FC',
    fontSize: 12,
    fontWeight: '700'
  },
})