import { View, Text } from 'react-native';

export default function TextComponent() {
  return (
    <View style={{ flex: 1, backgroundColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Hello Endava!</Text>
    </View>
  );
}

// Documentation https://reactnative.dev/docs/text
/*
    <View style={{ flex: 1, backgroundColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
        <Text 
            onPress={() => console.log('text pressed')} 
            style={{ fontSize: 30 }}
            color="#fff"
        >
        Hello Endava!
        </Text>
    </View>
*/