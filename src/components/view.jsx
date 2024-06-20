import { View, Text } from 'react-native'

export default function Layout() {
  return (
    <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#e5e5e5' }}>
      
    </View>
  );
}

// Documentation: https://reactnative.dev/docs/view
// https://reactnative.dev/docs/safeareaview
/*
    1 / 1
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'yellow' }} />
    </View>

    1 / 2 View
    <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'yellow' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
    </View>

    1 / 3 View
    <View style={{ flexDirection: 'column', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'yellow' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        <View style={{ flex: 1, backgroundColor: 'red' }} />
    </View>

    Safe area view
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
*/