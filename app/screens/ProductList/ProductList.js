import React, {Fragment} from 'react';

import {View, Text, FlatList, ScrollView,Image} from 'react-native';


const DATA = [

  {

    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

    titulo: 'Abajur',

    estudio: 'Jim&Jill Designs',

    itemName: 'Wilson',

    preco: 92.1,
     
    imagem: require('../../imgs/02-ceilinglamps.png'),

    itemDesc:

      'Contrary to popular belief, Lorem Ipsum is not simply random text',

  },

  {

    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

    titulo: 'Lâmpada de teto',

    estudio: 'Gary&Fly Designs',

    itemName: 'Linda',

    preco: 123.44,


    imagem: require('../../imgs/03-sconces.png'),

    itemDesc:

      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, lorem ipsum',

  },

  {

    id: '58694a0f-3da1-471f-bd96-145571e29d72',

    titulo: 'Arandela',

    estudio: 'Tom&Jim Designs',

    itemName: 'Jerry',

     imagem: require('../../imgs/04-floorlamps.png'),

    preco: 33.43,

    itemDesc:

      'There are many variations of passages of Lorem Ipsum available, but the majority',

  },

  {

    id: 'bd7acbea-c1b1-462c2-aed5-3ad53abb28ba',

    titulo: 'Luminária de chão',

    estudio: 'Kerry&King Designs',
        imagem: require('../../imgs/05-lightdecor.png'),
    itemName: 'Jack',

    preco: 67.23,

    itemDesc:

      'Cicero, written in 45 BC. This book is a treatise on the theory of ethics,',

  },

  {

    id: '3ac68afvvc-c605-48d3-a4f8-fbd91aa97f63',

    titulo: 'Luzes decorativas',

    estudio: 'Dave&Sugar Designs',

     imagem: require('../../imgs/bgimage.png'),

    itemName: 'Amanda',

    preco: 98.4,

    itemDesc:

      'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic',

  },

  {

    id: '58694a0f-3deea1-471f-bd96-145571e29d72',

    titulo: 'Guirlanda',

    estudio: 'Jeff&Lighter Designs',

     imagem: require('../../imgs/flecha-esquerda.png'),

    itemName: 'Julia',

    preco: 100.3,

    itemDesc:

      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below ',

  },

];


const ProductList = () => {

  return (

    <View >

      <FlatList
      numColumns ={1}
        data={DATA}

        renderItem={({item}) => 
        
        <View> 
        <Image source={item.imagem} style={{ width: 50, height: 50, marginTop: 20, marginLeft: 120}} />
        <Text>{item.titulo}</Text>

       

        <Text>{item.itemDesc}</Text>

        </View>}

        keyExtractor={item => item.id}

    />

    </View>

  );

};


export default ProductList;

