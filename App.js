import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Modal, TouchableHighlight } from 'react-native';
import CarItem from './components/Caritem/index'
import CarsList from './components/CarsList'

export default function App() {

  const [modalVisible, setModalVisible] = useState(true);
  const onPress = () => setModalVisible(!modalVisible);

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.hcarContainer}>
          <ImageBackground source={require('./assets/images/jk.jpg')}
            style={styles.himage}
          />

          <View style={styles.htitles}>
            <Text style={styles.htitle}>Let's build your car</Text>
            <TouchableHighlight onPress={onPress}>
              <View style={styles.button}
              >
                <Text style={styles.hsubtitle}>close</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>
      </Modal>

      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hcarContainer: {
    width: '100%',
    height: '100%',
  },
  htitles: {
    position: 'absolute',
    bottom: 170,
    width: '100%',
    alignItems: 'center',
  },
  htitle: {
    fontSize: 35,
    fontWeight: '700',
    color: 'white'

  },
  hsubtitle: {
    fontSize: 18,
    color: '#e0e0e0',
    paddingTop: 8,

  },
  himage: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
});
