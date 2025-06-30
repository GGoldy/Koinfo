import React, { Component } from "react";
import { StatusBar, Text, Box, Pressable, FlatList, Spinner, Image, NativeBaseProvider, HStack, Center, ScrollView} from 'native-base';
import { RefreshControl } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { formatCurrency, getSupportedCurrencies } from "react-native-format-currency";

class CoinScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      err: '',
      dataUSD: [],
      refreshing: false,
      showIDR: true,
    };
  }

  async getCoinInfo() {
    try {
      const response = await fetch(
        'https://api2.binance.com/api/v3/ticker/24hr'
      );
      const json = await response.json();
      this.setState({ data: [json[834], json[835], json[836], json[838], json[978], json[1189], json[1429], json[1457], json[1503], json[1608], json[1619], json[1620], json[1630], json[1820], json[1955]]});
      this.setState({ dataUSD: [json[614], json[632], json[613], json[953], json[804], json[879], json[802], json[655], json[631], json[780], json[1138], json[1468], json[943], json[1956], json[634], json[635], json[636], json[649], json[650], json[654], json[665], json[674], json[675], json[715], json[720], json[724], json[725], json[726], json[727], json[728]]})
    } catch (error) {
      console.error(error);
      this.setState({ err: error });
    } finally {
      this.givePic(this.state.data);
      this.giveName(this.state.data);
      this.givePic(this.state.dataUSD);
      this.giveName(this.state.dataUSD);
      this.setState({ isLoading: false });
      //console.log(this.state.dataUSD);
    }
  }

  givePic(x){
    this.newData = x
    
    for (let i=0; i<this.newData.length; i++){
      if (this.newData[i]["symbol"].includes("BTC")){
        this.newData[i]["images"] = "https://i.ibb.co/QmJFPcB/p1.png"
      } else if (this.newData[i]["symbol"].includes("ETH")){
        this.newData[i]["images"] = "https://i.ibb.co/gT8pJpZ/p2.png"
      } else if (this.newData[i]["symbol"].includes("BNB")){
        this.newData[i]["images"] = "https://i.ibb.co/vDDLKtV/p3.png"
      } else if (this.newData[i]["symbol"].includes("NBT")){
        this.newData[i]["images"] = "https://i.ibb.co/7nLF6ZK/p15.png"
      } else if (this.newData[i]["symbol"].includes("USDT")){
        this.newData[i]["images"] = "https://i.ibb.co/FXvjgKv/p4.png"
      } else if (this.newData[i]["symbol"].includes("DOT")){
        this.newData[i]["images"] = "https://i.ibb.co/PrTTkTJ/p5.png"
      } else if (this.newData[i]["symbol"].includes("ZIL")){
        this.newData[i]["images"] = "https://i.ibb.co/PN6Cp13/p6.png"
      } else if (this.newData[i]["symbol"].includes("DOGE")){
        this.newData[i]["images"] = "https://i.ibb.co/SrbycbF/p7.png"
      } else if (this.newData[i]["symbol"].includes("MATIC")){
        this.newData[i]["images"] = "https://i.ibb.co/DQTxpnj/p8.png"
      } else if (this.newData[i]["symbol"].includes("ADA")){
        this.newData[i]["images"] = "https://i.ibb.co/f2dLNKN/p9.png"
      } else if (this.newData[i]["symbol"].includes("XRP")){
        this.newData[i]["images"] = "https://i.ibb.co/kXwMRJw/p10.png"
      } else if (this.newData[i]["symbol"].includes("SOL")){
        this.newData[i]["images"] = "https://i.ibb.co/y4njPjC/p11.png"
      } else if (this.newData[i]["symbol"].includes("AXS")){
        this.newData[i]["images"] = "https://i.ibb.co/5WBzRc7/p12.png"
      } else if (this.newData[i]["symbol"].includes("FTM")){
        this.newData[i]["images"] = "https://i.ibb.co/CW94q5n/p13.png"
      } else if (this.newData[i]["symbol"].includes("SAND")){
        this.newData[i]["images"] = "https://i.ibb.co/gSmY5dL/p14.png"
      } else if (this.newData[i]["symbol"].includes("NEO")){
        this.newData[i]["images"] = "https://i.ibb.co/tcD92Xf/NEO.png"
      } else if (this.newData[i]["symbol"].includes("LTC")){
        this.newData[i]["images"] = "https://i.ibb.co/xqXk3qn/LTC.png"
      } else if (this.newData[i]["symbol"].includes("LINK")){
        this.newData[i]["images"] = "https://i.ibb.co/r0LfdBf/LINK.png"
      } else if (this.newData[i]["symbol"].includes("ICX")){
        this.newData[i]["images"] = "https://i.ibb.co/JKVmqGf/ICX.png"
      } else if (this.newData[i]["symbol"].includes("ETC")){
        this.newData[i]["images"] = "https://i.ibb.co/G5T9qmY/ETC.png"
      } else if (this.newData[i]["symbol"].includes("EOS")){
        this.newData[i]["images"] = "https://i.ibb.co/j4cFzzN/EOS.png"
      } else if (this.newData[i]["symbol"].includes("DASH")){
        this.newData[i]["images"] = "https://i.ibb.co/PWt2210/Dash.png"
      } else if (this.newData[i]["symbol"].includes("BNT")){
        this.newData[i]["images"] = "https://i.ibb.co/Wc7Tx1K/BNT.png"
      } else if (this.newData[i]["symbol"].includes("BCH")){
        this.newData[i]["images"] = "https://i.ibb.co/zXPrqxM/BCH.png"
      } else if (this.newData[i]["symbol"].includes("ATOM")){
        this.newData[i]["images"] = "https://i.ibb.co/XCsq3WD/ATOm.png"
      } else if (this.newData[i]["symbol"].includes("XTZ")){
        this.newData[i]["images"] = "https://i.ibb.co/ggP3fsv/XTZ.png"
      } else if (this.newData[i]["symbol"].includes("XLM")){
        this.newData[i]["images"] = "https://i.ibb.co/pvvYHtY/XLM.png"
      } else if (this.newData[i]["symbol"].includes("VET")){
        this.newData[i]["images"] = "https://i.ibb.co/yRd0M02/VET.png"
      } else if (this.newData[i]["symbol"].includes("WAVES")){
        this.newData[i]["images"] = "https://i.ibb.co/3mR7jyG/WAVES.png"
      } else if (this.newData[i]["symbol"].includes("TRX")){
        this.newData[i]["images"] = "https://i.ibb.co/c8FjSnS/TRX.png"
      } else if (this.newData[i]["symbol"].includes("QTUM")){
        this.newData[i]["images"] = "https://i.ibb.co/4tQdLCW/QTUM.png"
      } 
    }
    
    this.setState({x: this.newData})    
  }

  giveName(x){
    this.newData = x

    for(let i=0; i<this.newData.length; i++){
      this.newString = this.newData[i]["symbol"]
      this.newData[i]["name"] = this.newString.substr(0, this.newString.length-4)
    }

    this.setState({x: this.newData})  
  }

  componentDidMount() {
    this.getCoinInfo();
  }

  makeBox = ({ item}) => {
    const { navigation } = this.props;
    
    var valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol

    if (item.symbol.includes("BIDR")){
      [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: item.lastPrice, code: "IDR" })
    } else {
      var num = Number(Number(item.lastPrice).toFixed(2));
      [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: num, code: "USD" })
    }
    var upOrDown
    

    if (item.priceChangePercent >= 0){
      upOrDown = true
    } else {
      upOrDown = false
    }


    return (
      <Box alignItems="center" width="95%" mx="auto" my={1}>
        <Pressable
          onPress={() => navigation.navigate('DetailScreen', { data: item })}
          rounded="8"
          overflow="hidden"
          borderWidth="1"
          borderColor="coolGray.300"
          maxW="96"
          shadow="3"
          bg="coolGray.100"
          p="3"
          width="100%">
          <HStack space={4} alignItems="center">
            <Image source={{uri: item.images}} size={30} width={30} height={30} alt="Gambar Koin"/>
            <Text fontSize={13} color="#FF4C00CC" fontWeight="bold" flex={1} >
              {item.name}
            </Text>
            <Text fontSize={10} color="coolGray.800" my="2" flex={2}>
              {valueFormattedWithSymbol}
            </Text>
            {upOrDown ? (
              <HStack alignItems="center" bgColor="lightgreen" p="1" rounded="8" textAlignt="right" my="2">
                <FontAwesome5 name="arrow-up" color={"green"}/>
                <Text pl="1" fontSize={10}>{item.priceChangePercent}%</Text>
              </HStack>
            ) : (
              <HStack alignItems="center" bgColor="#fc7d7d" p="1" rounded="8" textAlignt="right" my="2">
                <FontAwesome5 name="arrow-down" color={"red"}/>
                <Text pl="1" fontSize={10}>{item.priceChangePercent}%</Text>
              </HStack>
            )}
          </HStack>
        </Pressable>
      </Box>
    );
  };

  onRefresh = () => {
    this.setState({refreshing: true})
    this.getCoinInfo();
    setTimeout(() => {
      this.setState({refreshing: false})
    }, 2000)
  }

  idrToUSD = () => {
    if (this.state.showIDR){
      this.setState({showIDR: false})
    }
  }

  usdToIDR = () => {
    if (!this.state.showIDR){
      this.setState({showIDR: true})
    }
  }

  render(){
    const { data, isLoading, err, refreshing, dataUSD, showIDR} = this.state;
    
    return(
      <Box flex={1}>
        
        {isLoading ? (
          <Center flex={1}>
            <Spinner color="warning.500" size={50}/>
          </Center>
        ) : (
          <Box>
            <HStack alignItems="center" bgColor="#E3E3E3" p="1" w={window.width}>
              <Pressable onPress={this.usdToIDR} bgColor="#FF4C00CC" m="2" ml="2" rounded="8" p="2" flex={1} textAlign="center">
                <Text mx="auto" color="white">IDR</Text>
              </Pressable>
              <Pressable onPress={this.idrToUSD} bgColor="#FF4C00CC" m="2" rounded="8" p="2" flex={1} textAlign="center">
                <Text mx="auto" color="white">USD</Text>
              </Pressable>
            </HStack>
            <ScrollView 
            refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />
            }
            >
              {showIDR ? (
                <FlatList data={data} renderItem={this.makeBox} mb="70"/>
              ) : (
                <FlatList data={dataUSD} renderItem={this.makeBox} mb="70"/>
              )
              }
            </ScrollView>
          </Box>
        )}
      </Box>
    )
  }
}

export default CoinScreen