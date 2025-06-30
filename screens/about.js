import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import {Box, HStack, VStack} from "native-base"

const AboutScreen = () => {
  return (
    
    <Box flex={1} pl={6} pt={4}>
      <Text style={styles.h3}>Welcome to</Text>
      <Text style={styles.h1}>Koin Info</Text>
      <Text style={styles.h6}>informasi seputar cryptocurrency</Text>

      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text>
            <Text style={styles.bold} >Koinfo</Text>
            <Text>
              {' '}
              Adalah mobile apps yang{'\n'}dapat menampilkan informasi terkait
              {'\n'}data Coin crypto yang ada dalam{'\n'}pasar dan juga harga
              terkini !
            </Text>
          </Text>
        </View>
      </View>
      <Image source={require('../assets/gambar.png')} style={styles.image}/>
      <Text style={styles.team}>Team Developer</Text>
      <View style={styles.vector}/>
      <Text style={styles.txt}>
        <Text style={styles.text}>
          Aplikasi Mobile ini kami buat bersama demi memenuhi{'\n'}Tugas Besar
          Pengembangan Aplikasi Bergerak,{'\n'}Manajemen Proyek dan RPL Casptone
          Project{'\n'}
          Adapun anggota dari
        </Text>
        <Text style={styles.text2}> Kelompok 6:</Text>
      </Text>
      <Text style={styles.bantuan}>
        <Text style={styles.bullet}>• </Text>
        <Text style={styles.nameAnggta}>Rama Prihandana Pangestu</Text>
        <Text style={styles.nim}>1204200014</Text>
      </Text>
      <Text style={styles.bantuan}>
        <Text style={styles.bullet}>• </Text>
        <Text style={styles.nameAnggta}>Johan Calvin Teurupun </Text>
        <Text style={styles.nim}>      1204202070</Text>
      </Text>
      <Text style={styles.bantuan}>
        <Text style={styles.bullet}>• </Text>
        <Text style={styles.nameAnggta}>Naufal Yafi Wliyyuddin </Text>
        <Text style={styles.nim}>     1204200132</Text>
      </Text>
      <Text style={styles.bantuan}>
        <Text style={styles.bullet}>• </Text>
        <Text style={styles.nameAnggta}>Zidane Azrulluddin Fachir </Text>
        <Text style={styles.nim}> 1204200139</Text>
      </Text>
      <Text style={styles.bantuan}>
        <Text style={styles.bullet}>• </Text>
        <Text style={styles.nameAnggta}>Goldy Praba Chandra S </Text>
        <Text style={styles.nim}>     1204200119</Text>
      </Text>
      <Text style={styles.apis}>APIs</Text>
      <View style={styles.vector2}/>
      <Text style={styles.bantuan2}>
        <Text style={styles.ket}>Crypto Data{'\n'}</Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://binance-docs.github.io/apidocs/spot/en/#api-key-setup')
          }>
          https://binance-docs.github.io/apidocs/spot/en/#api-key-setup
        </Text>
      </Text>
      <Text style={styles.bantuan2}>
        <Text style={styles.ket}>24 hr Cryptocurrency Data{'\n'}</Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://api2.binance.com/api/v3/ticker/24hr')
          }>
          https://api2.binance.com/api/v3/ticker/24hr
        </Text>
      </Text>
      <Text style={styles.bantuan2}>
        <Text style={styles.ket}>Cryptocurrency Data{'\n'}</Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://api.binance.com/api/v3/klines?symbol=BTCBIDR&interval=1h')
          }>
          https://api.binance.com/api/v3/klines
        </Text>
      </Text>
    </Box>
  
  );
};

const styles = StyleSheet.create({
  h3: {
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontWeight: 'regular',
    shadowColor: '#FEC432',
    // shadowOffset: { width: -100, height: 0 },
    shadowOpacity: 0.2,
    paddingBottom: 5,
    
  },
  h1: {
    fontFamily: 'Montserrat',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4C00',
    opacity: 0.9,
  },
  h6: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    marginTop: -5,
  },
  tableContainer: {
    flexDirection: 'column',
    borderWidth: 3,
    borderColor: '#FE0000',
    marginTop: 20,
    width: 280,
    height: 120,
    borderRadius: 8,
    opacityColor: 0.3,
  },
  tableRow: {
    flexDirection: 'row',
    fontFamily: 'Montserrat',
    fontSize: 13,
    fontWeight: 'regular',
    padding: 8,
  },
  bold: {
    fontFamily: 'Montserrat',
    fontSize: 17,
    fontWeight: 'bold',
  },
  team: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4C00',
    opacity: 0.9,
    marginTop: 24,
    shadowColor: '#FEC432',
    // shadowOffset: { width: -100, height: 0 },
    shadowOpacity: 0.2,
  },
  vector: {
    width: 100,
    height: 3,
    backgroundColor: '#FFB935',
    marginTop: 12,
  },
  txt: {
    marginTop: 12,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    letterSpacing: 0.02,
    fontWeight: 'regular',
    textAlign: 'center',
  },
  text2: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    letterSpacing: 0.02,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bantuan: {
    paddingLeft: 15,
  },
  bullet: {
    color: '#FF4C00',
    opacity: 0.9,
  },
  nameAnggta: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 'medium',
  },
  nim: {
    marginLeft: 13,
    textAlign: 'justify',
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 'medium',
  },
  apis: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4C00',
    opacity: 0.9,
    marginTop: 24,
    shadowColor: '#FEC432',
    // shadowOffset: { width: -100, height: 0 },
    shadowOpacity: 0.2,
  },
  vector2: {
    width: 50,
    height: 3,
    backgroundColor: '#FFB935',
    marginTop: 12,
  },
  image: {
    width: 160,
    height: 140,
    position: 'absolute',
    top: 120,
    right: -30,
  },
  ket: {
    fontFamily: 'Montserrat',
    fontSize: 13,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    fontFamily: 'Montserrat',
    fontSize: 14,
  },
  bantuan2: {
    paddingTop: 10,
  },
});

export default AboutScreen;
