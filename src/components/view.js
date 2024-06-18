import { View } from 'react-native';

export default function View() {
  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'yellow' }} />
    </View>
  );
}


// Documentation: https://reactnative.dev/docs/view

/*
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
*/