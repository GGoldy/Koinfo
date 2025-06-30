import React, { Component } from 'react';

import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryCandlestick,
} from 'victory-native';

import { Dimensions } from 'react-native';

import {
  Image,
  HStack,
  VStack,
  Box,
  View,
  Text,
  Center,
  Spinner,
} from 'native-base';

import { formatCurrency } from 'react-native-format-currency';
import { FontAwesome5 } from '@expo/vector-icons';



const window = Dimensions.get('window');

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    const { route } = this.props;
    const { data } = route.params;
    this.state = {
      market: String(data.symbol),
      coinGraphData: [],
      err: '',
      isLoading: true,
      fullData: data,
    };
  }

  async getCoinGraphData() {
    try {
      const response = await fetch(
        'https://api.binance.com/api/v3/klines?symbol=' +
          this.state.market +
          '&interval=1h'
      );
      const json = await response.json();
      this.setState({
        coinGraphData: [
          json[json.length - 6],
          json[json.length - 5],
          json[json.length - 4],
          json[json.length - 3],
          json[json.length - 2],
          json[json.length - 1],
        ],
      });
    } catch (error) {
      console.error(error);
      this.setState({ err: error });
    } finally {
      this.giveTag();
      this.giveDesc();
      this.setState({ isLoading: false });

      console.log(this.state.fullData);
    }
  }

  giveTag() {
    this.newData = [
      { x: '6H' },
      { x: '5H' },
      { x: '4H' },
      { x: '3H' },
      { x: '2H' },
      { x: '1H' },
    ];
    this.newList = this.state.coinGraphData;
    for (let i = 0; i < this.newList.length; i++) {
      this.newData[i]['open'] = this.newList[i][1];
      this.newData[i]['high'] = this.newList[i][2];
      this.newData[i]['low'] = this.newList[i][3];
      this.newData[i]['close'] = this.newList[i][4];
    }

    this.setState({ coinGraphData: this.newData });
  }

  giveDesc() {
    this.newData = this.state.fullData;

    if (this.newData['symbol'].includes('BUSD')) {
      if (this.newData['symbol'].includes('BTC')) {
        this.newData['desc'] =
          "Bitcoin is the first cryptocurrency that was launched in 2009 by a person or a group of people that went by the name of Satoshi Nakamoto. It was first described in the whitepaper known as 'Bitcoin: A Peer-to-Peer Electronic Cash System' that detailed exactly how it would work. It is currently available in many crypto markets and has a high market cap.";
      } else if (this.newData['symbol'].includes('ETH')) {
        this.newData['desc'] =
          'You see, Ethereum differentiates itself due to a variety of reasons, and it has spawned numerous altcoins that run on its blockchain technology. Ethereum is quite possibly the most ambitious project the cryptocurrency industry has seen, and its decentralized products as well as services in a wide range of use-cases, far beyond just handling money.';
      } else if (this.newData['symbol'].includes('BNB')) {
        this.newData['desc'] =
          'Launched in July 2017, Binance Coin (BNB) is a utility token created for users of the Binance cryptocurrency exchange. Account holders receive a discount when they purchase BNB and use it to pay brokerage fees on the Binance cryptocurrency exchange. They can also exchange it for other crypto coins like Bitcoin (BTC). BNB runs on a “proof-of-staked authority” blockchain, a combination of proof-of-stake and proof-of-authority validation. It is a deflationary cryptocurrency with a hard supply limit of 200 million.';
      } else if (this.newData['symbol'].includes('NBT')) {
        this.newData['desc'] =
          'NanoByte is a cryptocurrency (crypto) project with a bold vision to drive the adoption of crypto and make crypto mainstream, with Indonesia as their first market. To achieve the vision of making crypto mainstream, NanoByte aims to bridge cryptocurrency to the traditional/conventional currency system, by making crypto-wallets enabled and aligned with FIAT products such as e-money, credit cards, insurance, and other investments.';
      } else if (this.newData['symbol'].includes('USDT')) {
        this.newData['desc'] =
          'Tether Limited is a company that operates a platform that issued blockchain-based assets that are linked to the price of FIAT money. Tether supports four stablecoins, including USDT, CNHT, EURT, and XAUT.';
      } else if (this.newData['symbol'].includes('DOT')) {
        this.newData['desc'] =
          'Polkadot is a project created with the intention of incentivizing a global network of computers to operate a blockchain where users can launch as well as operate their own blockchains.';
      } else if (this.newData['symbol'].includes('ZIL')) {
        this.newData['desc'] =
          'Zilliqa is a public, permissionless blockchain that is designed to offer high throughput with the ability to complete thousands of transactions per second. It seeks to solve the issue of blockchain scalability and speed by employing sharding as a second-layer scaling solution. The platform is home to many decentralized applications, and as of October 2020, it also allows for staking and yield farming. The native utility token of Zilliqa, ZIL, is used to process transactions on the network and execute smart contracts.';
      } else if (this.newData['symbol'].includes('DOGE')) {
        this.newData['desc'] =
          "Dogecoin is a cryptocurrency developed as a 'meme' based on the Litecoin fork, originally created in 2013 and then abandoned by developers. It was developed when its developers started to explore Bitcoin as well as the possibilities that the cryptocurrency world has to offer.";
      } else if (this.newData['symbol'].includes('MATIC')) {
        this.newData['desc'] =
          'Polygon (previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc. with the advantages of Ethereum’s security, vibrant ecosystem and openness.';
      } else if (this.newData['symbol'].includes('ADA')) {
        this.newData['desc'] =
          'Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change. The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair.';
      } else if (this.newData['symbol'].includes('XRP')) {
        this.newData['desc'] =
          'Ripple operates on an open-source and peer-to-peer decentralized platform that allows seamless money transfers for a variety of fiat currencies, cryptocurrencies and even commodities such as gold. Ripple is a global payments network, with major banks and financial services as customers.';
      } else if (this.newData['symbol'].includes('SOL')) {
        this.newData['desc'] =
          'Solana is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland. The Solana protocol is designed to facilitate decentralized app (DApp) creation. It aims to improve scalability by introducing a proof-of-history (PoH) consensus combined with the underlying proof-of-stake (PoS) consensus of the blockchain.';
      } else if (this.newData['symbol'].includes('AXS')) {
        this.newData['desc'] =
          'Axie Infinity is a blockchain-based trading and battling game that is partially owned and operated by its players. Inspired by popular games like Pokémon and Tamagotchi, Axie Infinity allows players to collect, breed, raise, battle and trade token-based creatures known as Axies.';
      } else if (this.newData['symbol'].includes('FTM')) {
        this.newData['desc'] =
          'Fantom is a directed acyclic graph (DAG) smart contract platform providing decentralized finance (DeFi) services to developers using its own bespoke consensus algorithm. Fantom is an open-source decentralized smart contract platform for DApps and digital assets that was created as an alternative to Ethereum. Fantom has the goal of overcoming the limitations of previous generation blockchains and balancing three components: scalability, security and decentralization. The project offers a set of tools to simplify the process of integrating existing DApps, as well as a detailed staking reward system and built-in DeFi instruments.';
      } else if (this.newData['symbol'].includes('SAND')) {
        this.newData['desc'] =
          'Launched in 2011 by Pixowl, The Sandbox is a blockchain-based virtual world allowing users to create, build, buy and sell digital assets in the form of a game. By combining the powers of decentralized autonomous organizations (DAO) and non-fungible tokens (NFTs), the Sandbox creates a decentralized platform for a thriving gaming community.';
      } else if (this.newData['symbol'].includes('NEO')) {
        this.newData['desc'] =
          "Neo bills itself as a 'rapidly growing and evolving' ecosystem whose goal is to become the foundation for the next generation of the internet - a new economy where digital payments, identity and assets come together.";
      } else if (this.newData['symbol'].includes('LTC')) {
        this.newData['desc'] =
          "LTC is a cryptocurrency designed to provide fast, secure, and inexpensive payments by leveraging the unique nature of blockchain technology. Litecoin was released through an open-source client on GitHub on October 7, 2011, and the Litecoin Network went live five days later on October 13, 2011. The cryptocurrency was created by Charlie Lee, a former Google employee, who wanted Litecoin to be a 'light version of Bitcoin', because Litecoin has the same various properties as Bitcoin—although it weighs less.";
      } else if (this.newData['symbol'].includes('LINK')) {
        this.newData['desc'] =
          'LINK is a decentralized oracle network that aims to connect smart contracts with data from the real world. Chainlink was developed by Sergey Nazarov, with Steve Ellis as the other co-founder. It held an ICO in September 2017, raised $32 million, with a total supply of 1 billion LINK tokens.';
      } else if (this.newData['symbol'].includes('ICX')) {
        this.newData['desc'] =
          "ICON Network is a tier-one blockchain focused on building scalable, chain-agnostic, and secure multi-chain connecting solutions. ICON is a hub that connects partner blockchains with all other blockchains integrated through BTP. The Blockchain Transmission Protocol (BTP) is ICON's flagship product and interoperability solution that supports cross-chain token exchanges as well as more common messaging features such as cross-chain smart contract calling. Blockchains connected to the ICON ecosystem include Binance Smart Chain, Near, Harmony, Moonriver, Polkadot, ICE/SNOW, Ethereum. ICON is a fast growing ecosystem of dApps, which includes deFi protocols (Balanced, Omm), NFT platforms (Craft), games and more.";
      } else if (this.newData['symbol'].includes('ETC')) {
        this.newData['desc'] =
          "ETC is the result of an Ethereum (ETH) hard fork launched in July 2016. Its main function is as a smart contract network, with the ability to accept and support decentralized applications (DApps). Its native token is ETC. Ethereum Classic is actually ethereum's legacy chain, and therefore its true creators are the original Ethereum developers — Vitalik Buterin and Gavin Wood.";
      } else if (this.newData['symbol'].includes('EOS')) {
        this.newData['desc'] =
          "EOS is a platform designed to enable developers to build decentralized applications. The project's goal is simple to make it as simple as possible for programmers to embrace blockchain technology and ensure that the network easier to use than competitors. The EOS platform was developed by the company Block.one, and its white paper was written by Daniel Larimer and Brendan Blumer.";
      } else if (this.newData['symbol'].includes('ETH')) {
        this.newData['desc'] =
          'You see, Ethereum differentiates itself due to a variety of reasons, and it has spawned numerous altcoins that run on its blockchain technology. Ethereum is quite possibly the most ambitious project the cryptocurrency industry has seen, and its decentralized products as well as services in a wide range of use-cases, far beyond just handling money.';
      } else if (this.newData['symbol'].includes('DASH')) {
        this.newData['desc'] =
          "Dash is an open-source blockchain and cryptocurrency focused on offering a fast and inexpensive global payment network that is decentralized. According to the project's white paper, Dash seeks to improve Bitcoin (BTC) by providing stronger privacy and faster transactions.";
      } else if (this.newData['symbol'].includes('BNT')) {
        this.newData['desc'] =
          'Bancor is the only decentralized staking protocol that allows you to monetize with a single token exposure and full protection against non-permanent losses. Launched in 2017, Bancor,” BNT. Protocol tokens allow traders to provide liquidity for pools available on the network.';
      } else if (this.newData['symbol'].includes('BCH')) {
        this.newData['desc'] =
          "BCH is a hard fork of the original Bitcoin blockchain. The Bitcoin fork took place on August 1, 2017 with the aim of updating the block size to 8MB. On November 16, 2018, BCH underwent a hard fork for the second time and was split into Bitcoin SV (Satoshi's Vision) and Bitcoin ABC. Bitcoin ABC became the dominant chain and took over the BCH symbol, as it had more hash power and the majority of computer nodes on the network.";
      } else if (this.newData['symbol'].includes('ATOM')) {
        this.newData['desc'] =
          'Cosmos as a project that solves some of the “hardest problems” facing the blockchain industry. It aims to offer a proof-of-work protocol antidote that is “slow, expensive, non-scalable and environmentally harmful”, as used by Bitcoin, by offering a connected blockchain ecosystem. Other goals of the project include making blockchain technology less complex and difficult for developers thanks to a modular framework that demystifies decentralized applications.';
      } else if (this.newData['symbol'].includes('XTZ')) {
        this.newData['desc'] =
          "Tezos is a blockchain network based on smart contracts, in a way that is not much different from Ethereum. There's a big difference, though: Tezos aims to offer a more advanced infrastructure — meaning it can evolve and improve over time without the danger of a hard fork. This is something Bitcoin and Ethereum have suffered from since they were created. People holding XTZ get to vote on proposals for protocol enhancements that have been submitted by Tezos developers.";
      } else if (this.newData['symbol'].includes('XLM')) {
        this.newData['desc'] =
          "Stellar is an open network that allows money to be moved and stored. Released in July 2014, one of its goals is to increase financial inclusion by reaching the unbanked world but soon after, its priorities shifted to helping financial companies connect with each other through blockchain technology. Jed McCaleb founded Stellar with lawyer Joyce Kim after leaving Ripple in 2013 due to a disagreement over the company's future direction.";
      } else if (this.newData['symbol'].includes('VET')) {
        this.newData['desc'] =
          'Is a blockchain-powered supply chain platform that began development in 2015 and launched June 2016. According to Coinmarketcap, VeChain uses distributed governance and Internet of Things (IoT) technology to create an ecosystem that solves some of the key problems in supply chain management. The VeChain platform has its own internal token i.e., VET which is in charge of managing and creating value based on the VeChainThor public blockchain.';
      } else if (this.newData['symbol'].includes('WAVES')) {
        this.newData['desc'] =
          "Waves is a multipurpose blockchain platform that supports a variety of use cases including decentralized applications (DApps) and smart contracts. Launched in June 2016 after one of the cryptocurrency industry's earliest initial coin offerings (ICOs), Waves initially set out to enhance blockchain-first platforms by increasing speed, utility, and user friendliness. The platform has undergone various changes and added new spin-off features to build on the original design. Waves' native token is WAVES, an unlocked supply token used for standard payouts such as block rewards.";
      } else if (this.newData['symbol'].includes('TRX')) {
        this.newData['desc'] =
          'TRON is a blockchain-based operating system that aims to ensure this technology is suitable for everyday use. While Bitcoin can handle up to six transactions per second, and Ethereum up to twenty-five, TRON claims that its network has the capacity to process 2,000 transactions per second. TRON was founded by Justin Sun, who now serves as CEO. Educated at Peking University and University of Pennsylvania.';
      } else if (this.newData['symbol'].includes('QTUM')) {
        this.newData['desc'] =
          'QTUM is an open-source blockchain platform of smart contract proof-of-stake (PoS) and value transfer protocol. It aims to unite the power of Bitcoin and Ethereum in one chain. Patrick Dai is the founder of this project and chairman of the Qtum Institute. He studied computer science at Draper University and later dropped out of a PhD at the Chinese Academy of Sciences.';
      }
    } else {
      if (this.newData['symbol'].includes('BTC')) {
        this.newData['desc'] =
          "Bitcoin adalah cryptocurrency pertama yang diluncurkan pada tahun 2009 oleh seseorang atau sekelompok orang yang menggunakan nama Satoshi Nakamoto. Ini pertama kali dijelaskan dalam whitepaper yang dikenal sebagai 'Bitcoin: A Peer-to-Peer Electronic Cash System' yang merinci dengan tepat bagaimana cara kerjanya. Saat ini tersedia di banyak pasar kripto dan memiliki kapitalisasi pasar yang tinggi.";
      } else if (this.newData['symbol'].includes('ETH')) {
        this.newData['desc'] =
          'Ethereum membedakan dirinya karena berbagai alasan, dan telah melahirkan banyak altcoin yang berjalan pada teknologi blockchain-nya. Ethereum merupakan proyek paling ambisius yang pernah dilihat industri cryptocurrency, dan produk serta layanannya yang terdesentralisasi dalam berbagai kasus penggunaan, jauh lebih dari sekadar menangani uang.';
      } else if (this.newData['symbol'].includes('BNB')) {
        this.newData['desc'] =
          "Diluncurkan pada Juli 2017, Binance Coin (BNB) adalah token utilitas yang dibuat untuk pengguna pertukaran mata uang kripto Binance. Pemegang akun menerima diskon saat mereka membeli BNB dan menggunakannya untuk membayar biaya broker di bursa mata uang kripto Binance. Mereka juga dapat menukarnya dengan koin kripto lain seperti Bitcoin (BTC). BNB berjalan pada blockchain 'proof-of-staked authority', kombinasi validasi proof-of-stake dan proof-of-authority. Ini adalah cryptocurrency deflasi dengan batas pasokan keras 200 juta.";
      } else if (this.newData['symbol'].includes('USDT')) {
        this.newData['desc'] =
          'Tether Limited adalah perusahaan yang mengoperasikan platform yang mengeluarkan aset berbasis blockchain yang terkait dengan harga uang FIAT. Tether mendukung empat stablecoin, termasuk USDT, CNHT, EURT, dan XAUT.';
      } else if (this.newData['symbol'].includes('DOT')) {
        this.newData['desc'] =
          'Polkadot adalah proyek yang dibuat dengan tujuan memberi insentif pada jaringan komputer global untuk mengoperasikan blockchain di mana pengguna dapat meluncurkan serta mengoperasikan blockchain mereka sendiri.';
      } else if (this.newData['symbol'].includes('ZIL')) {
        this.newData['desc'] =
          'Zilliqa adalah blockchain publik tanpa izin yang dirancang untuk menawarkan throughput tinggi dengan kemampuan menyelesaikan ribuan transaksi per detik. Itu berusaha untuk memecahkan masalah skalabilitas dan kecepatan blockchain dengan menggunakan sharding sebagai solusi penskalaan lapisan kedua. Platform ini adalah rumah bagi banyak aplikasi terdesentralisasi, dan mulai dari Oktober 2020, platform ini juga memungkinkan untuk mempertaruhkan dan menghasilkan pertanian. Token utilitas asli Zilliqa, ZIL, digunakan untuk memproses transaksi di jaringan dan menjalankan kontrak pintar.';
      } else if (this.newData['symbol'].includes('DOGE')) {
        this.newData['desc'] =
          "Dogecoin adalah cryptocurrency yang dikembangkan sebagai 'meme' berdasarkan garpu Litecoin, awalnya dibuat pada tahun 2013 dan kemudian ditinggalkan oleh pengembang. Ini dikembangkan ketika pengembangnya mulai mengeksplorasi Bitcoin serta kemungkinan yang ditawarkan dunia cryptocurrency.";
      } else if (this.newData['symbol'].includes('MATIC')) {
        this.newData['desc'] =
          'Polygon (sebelumnya Matic Network) adalah platform pertama yang terstruktur dengan baik dan mudah digunakan untuk penskalaan Ethereum dan pengembangan infrastruktur. Komponen intinya adalah Polygon SDK, kerangka kerja modular dan fleksibel yang mendukung pembuatan berbagai jenis aplikasi. Polygon secara efektif mengubah Ethereum menjadi sistem multi-rantai yang lengkap (alias Internet of Blockchains). Sistem multi-rantai ini mirip dengan yang lain seperti Polkadot, Cosmos, Avalanche, dll. Dengan keunggulan keamanan Ethereum, ekosistem yang dinamis, dan keterbukaan.';
      } else if (this.newData['symbol'].includes('ADA')) {
        this.newData['desc'] =
          "Cardano adalah platform blockchain bukti saham yang mengatakan bahwa tujuannya adalah untuk memungkinkan 'pembuat perubahan, inovator, dan visioner' membawa perubahan global yang positif. Proyek sumber terbuka ini juga bertujuan untuk “mendistribusikan kembali kekuasaan dari struktur yang tidak dapat dipertanggungjawabkan kepada orang-orang yang terpinggirkan” — membantu menciptakan masyarakat yang lebih aman, transparan, dan adil.";
      } else if (this.newData['symbol'].includes('XRP')) {
        this.newData['desc'] =
          'Ripple beroperasi pada platform terdesentralisasi open-source dan peer-to-peer yang memungkinkan transfer uang tanpa batas untuk berbagai mata uang fiat, cryptocurrency, dan bahkan komoditas seperti emas. Ripple adalah jaringan pembayaran global, dengan bank-bank besar dan layanan keuangan sebagai pelanggannya.';
      } else if (this.newData['symbol'].includes('SOL')) {
        this.newData['desc'] =
          'Solana adalah proyek open source yang sangat fungsional yang mengandalkan sifat tanpa izin teknologi blockchain untuk menyediakan solusi keuangan terdesentralisasi (DeFi). Sementara ide dan pengerjaan awal proyek dimulai pada tahun 2017, Solana secara resmi diluncurkan pada bulan Maret 2020 oleh Solana Foundation yang berkantor pusat di Jenewa, Swiss. Protokol Solana dirancang untuk memfasilitasi pembuatan aplikasi terdesentralisasi (DApp). Ini bertujuan untuk meningkatkan skalabilitas dengan memperkenalkan konsensus proof-of-history (PoH) yang dikombinasikan dengan konsensus proof-of-stake (PoS) yang mendasari blockchain.';
      } else if (this.newData['symbol'].includes('AXS')) {
        this.newData['desc'] =
          'Axie Infinity adalah permainan perdagangan dan pertarungan berbasis blockchain yang sebagian dimiliki dan dioperasikan oleh para pemainnya. Terinspirasi oleh game populer seperti Pokémon dan Tamagotchi, Axie Infinity memungkinkan pemain untuk mengumpulkan, membiakkan, membesarkan, bertarung, dan memperdagangkan makhluk berbasis token yang dikenal sebagai Axies.';
      } else if (this.newData['symbol'].includes('FTM')) {
        this.newData['desc'] =
          'Fantom adalah platform kontrak pintar grafik asiklik terarah (DAG) yang menyediakan layanan keuangan terdesentralisasi (DeFi) untuk pengembang menggunakan algoritme konsensus pesanannya sendiri. Fantom adalah platform kontrak pintar terdesentralisasi sumber terbuka untuk DApps dan aset digital yang dibuat sebagai alternatif untuk Ethereum. Fantom memiliki tujuan untuk mengatasi keterbatasan blockchain generasi sebelumnya dan menyeimbangkan tiga komponen: skalabilitas, keamanan, dan desentralisasi. Proyek ini menawarkan seperangkat alat untuk menyederhanakan proses pengintegrasian DApps yang ada, serta sistem hadiah staking yang mendetail dan instrumen DeFi bawaan.';
      } else if (this.newData['symbol'].includes('SAND')) {
        this.newData['desc'] =
          'Diluncurkan pada tahun 2011 oleh Pixowl, The Sandbox adalah dunia virtual berbasis blockchain yang memungkinkan pengguna untuk membuat, membangun, membeli, dan menjual aset digital dalam bentuk permainan. Dengan menggabungkan kekuatan organisasi otonom terdesentralisasi (DAO) dan token yang tidak dapat dipertukarkan (NFT), Sandbox menciptakan platform terdesentralisasi untuk komunitas game yang berkembang.';
      } else if (this.newData['symbol'].includes('NBT')) {
        this.newData['desc'] =
          'NanoByte adalah proyek cryptocurrency (kripto) dengan visi yang berani untuk mendorong adopsi kripto dan menjadikan kripto arus utama, dengan Indonesia sebagai pasar pertama mereka. Untuk mencapai visi menjadikan crypto mainstream, NanoByte bertujuan untuk menjembatani cryptocurrency ke sistem mata uang tradisional/konvensional, dengan membuat dompet crypto diaktifkan dan diselaraskan dengan produk FIAT seperti e-money, kartu kredit, asuransi, dan investasi lainnya.';
      }
    }

    this.setState({ fullData: this.newData });
  }

  componentDidMount() {
    this.getCoinGraphData();
  }

  render() {
    const { fullData, coinGraphData, isLoading } = this.state;

    var {volume, quoteVolume, askPrice, bidPrice} = fullData

    volume = Number(Number(fullData.volume).toFixed(1))
    quoteVolume = Number(Number(fullData.quoteVolume).toFixed(1))
    askPrice = Number(Number(fullData.askPrice).toFixed(3))
    bidPrice = Number(Number(fullData.bidPrice).toFixed(3))

    
    var bidPriceWithSymbol, bidPriceWithoutSymbol, bidPriceSymbol
    var askPriceWithSymbol, askPriceWithoutSymbol, askPriceSymbol
    var valueFormattedWithoutSymbol, valueFormattedWithSymbol, symbol;
    if (fullData.symbol.includes('BIDR')) {
      [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
        formatCurrency({ amount: fullData.lastPrice, code: 'IDR' });
      [bidPriceWithSymbol, bidPriceWithoutSymbol, bidPriceSymbol] = formatCurrency({ amount: bidPrice, code: 'IDR' });
      [askPriceWithSymbol, askPriceWithoutSymbol, askPriceSymbol] = formatCurrency({ amount: askPrice, code: 'IDR' });
    } else {
      var num = Number(Number(fullData.lastPrice).toFixed(2));
      [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
        formatCurrency({ amount: num, code: 'USD' });
      [bidPriceWithSymbol, bidPriceWithoutSymbol, bidPriceSymbol] = formatCurrency({ amount: bidPrice, code: 'USD' });
      [askPriceWithSymbol, askPriceWithoutSymbol, askPriceSymbol] = formatCurrency({ amount: askPrice, code: 'USD' });
    }

    var upOrDown;
    if (fullData.priceChangePercent >= 0) {
      upOrDown = true;
    } else {
      upOrDown = false;
    }

    

    return (
      <View width={window.width} flex={1}>
        <HStack alignItems="center" m="3" space={2}>
          <Box borderWidth="1" borderColor="black" borderRadius="8" p="2">
            <Image
              source={{ uri: fullData.images }}
              size={60}
              width={60}
              height={60}
              alt="Gambar Koin"
            />
          </Box>
          <VStack>
            <Text fontWeight="bold">{fullData.name}</Text>
            <Text>{valueFormattedWithSymbol}</Text>
            {upOrDown ? (
              <HStack
                alignItems="center"
                bgColor="lightgreen"
                p="1"
                rounded="8"
                textAlign="right"
                my="2"
                width="60">
                <FontAwesome5 name="arrow-up" color={'green'} flex={1} />
                <Text pl="1" fontSize={10} flex={1}>
                  {fullData.priceChangePercent}%
                </Text>
              </HStack>
            ) : (
              <HStack
                alignItems="center"
                bgColor="#fc7d7d"
                p="1"
                rounded="8"
                textAlign="right"
                my="2"
                width="60">
                <FontAwesome5 name="arrow-down" color={'red'} flex={1} />
                <Text pl="1" fontSize={10} textAlign="right" flex={1}>
                  {fullData.priceChangePercent}%
                </Text>
              </HStack>
            )}
          </VStack>
        </HStack>
        {isLoading ? (
          <Center flex={1}>
            <Spinner color="warning.500" size={50} />
          </Center>
        ) : (
          <View width={window.width} mx={3}>
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={{ x: 40 }}
              scale={{ x: 'time' }}
              padding={{ top: 20, bottom: 40, left: 90, right: 50 }}>
              <VictoryAxis tickFormat={['6H', '5H', '4H', '3H', '2H', '1H']} />
              <VictoryAxis dependentAxis />
              <VictoryCandlestick
                candleColors={{ positive: '#5f5c5b', negative: '#c43a31' }}
                data={coinGraphData}
              />
            </VictoryChart>
            <Text mt={2} fontSize={15} color="#FF4C00CC" fontWeight="bold">What is {fullData.name}?</Text>
            <Text fontSize={12} mx={2} textAlign="justify" width={window.width - 30}>{fullData.desc}</Text>
            <Text mt={1} fontSize={15} color="#FF4C00CC" fontWeight="bold">Market Stats</Text>
            <HStack>
              <VStack my={1} mx={2}>
                <Text>Volume</Text>
                <Text fontSize={10}>{volume}</Text>
              </VStack>
              <VStack my={1} mx={2} textAlign="right">
                <Text>Quote Volume</Text>
                <Text fontSize={10}>{quoteVolume}</Text>
              </VStack>
            </HStack>
            <HStack>
              <VStack my={1} mx={2}>
                <Text>Ask Price</Text>
                <Text fontSize={10}>{askPriceWithSymbol}</Text>
              </VStack>
              <VStack my={1} mx={2} textAlign="right">
                <Text>Bid Price</Text>
                <Text fontSize={10}>{bidPriceWithSymbol}</Text>
              </VStack>
            </HStack>
          </View>
        )}
      </View>
    );
  }
}

export default DetailScreen;
