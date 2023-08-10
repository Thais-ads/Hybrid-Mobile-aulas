import React, {Fragment} from 'react';
import {View, Text, FlatList, ScrollView,SafeAreaView} from 'react-native';

const Flat = () => {
 const  DATA =[
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Abajur',
    imagem: require(''),
    estudio: 'Jim&Jill Designs',
    itemName: 'Wilson',
    preco: 92.1,
    itemDesc:
      'Contrary to popular belief, Lorem Ipsum is not simply random text',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Lâmpada de teto',
    imagem: require(''),
    estudio: 'Gary&Fly Designs',
    itemName: 'Linda',
    preco: 123.44,
    itemDesc:
      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, lorem ipsum',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Arandela',
    imagem: require(''),
    estudio: 'Tom&Jim Designs',
    itemName: 'Jerry',
    preco: 33.43,
    itemDesc:
      'There are many variations of passages of Lorem Ipsum available, but the majority',
  },
  {
    id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',
    titulo: 'Luminária de chão',
    imagem: require(''),
    estudio: 'Kerry&King Designs',
    itemName: 'Jack',
    preco: 67.23,
    itemDesc:
      'Cicero, written in 45 BC. This book is a treatise on the theory of ethics,',
  },
  {
    id: '3ac68afvvc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Luzes decorativas',
    imagem: require('../../imgs/02-ceilinglamps.png'),
    estudio: 'Dave&Sugar Designs',
    itemName: 'Amanda',
    preco: 98.4,
    itemDesc:
      'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic',
  },
  {
    id: '58694a0f-3deea1-471f-bd96-145571e29d72',
    titulo: 'Guirlanda',
    imagem: require(''),
    estudio: 'Jeff&Lighter Designs',
    itemName: 'Julia',
    preco: 100.3,
    itemDesc:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ',
  },
];
  return (
      <FlatList
        data={DATA} keyExtractor={item => item.id}
        renderItem = {({item}) =><View>
        <Text>
          {item.titulo}
        </Text></View>}
      />

  );
};

export default Flat;