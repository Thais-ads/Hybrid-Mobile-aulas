import { View, Text } from 'react-native';

function Header() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: 32,
      }}
    >
      <View>
        <Text style={{ color: 'black', fontSize: 48 }}>aa</Text>
      </View>
      <View
        style={{
          height: 60,
          width: 60,
          borderRadius: 50,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
}

export default Header;
