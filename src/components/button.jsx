import { View, StyleSheet, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function TextComponent() {
  return (
    <View style={styles.container}>
        <Button
            onPress={() => console.log('button pressed')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#e5e5e5', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
    },
    textButton: {
        color: '#fff',
        fontWeight: '600',
    },
    touchableHightlight: {
        borderRadius: 6,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    separator: {
        marginBottom: 10,
    }
})

// Documentation https://reactnative.dev/docs/button
// https://reactnative.dev/docs/touchableopacity
// https://reactnative.dev/docs/pressable
// https://ethercreative.github.io/react-native-shadow-generator/
/*

<Button
  onPress={() => console.log('button pressed')}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<TouchableOpacity
    onPress={() => console.log('button pressed')}
    title="Learn More"
    style={styles.button}
>
    <Text style={styles.textButton} >Learn More</Text>
</TouchableOpacity>

<View style={styles.separator}/>
<TouchableHighlight onPress={() => {}} underlayColor={ 'transparent' }>
    <View style={styles.button}>
        <Text style={styles.textButton} >Learn More</Text>
    </View>
</TouchableHighlight>

<TouchableWithoutFeedback onPress={() => {}} underlayColor={ 'transparent' }>
    <View style={styles.button}>
        <Text>Touch Here</Text>
    </View>
</TouchableWithoutFeedback>
*/