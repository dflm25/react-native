import { View, Text, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import Logo from '../../assets/img/logo.png';
import Background from '../../assets/img/background.jpg';

const { height, width } = Dimensions.get('window');

export default function TextComponent() {
  return (
    <View style={styles.container}>
        <Image 
            source={Logo}
            style={styles.image}
            resizeMode='contain'
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#e5e5e5',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    background: {
        flex: 1,
        width: width,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 200,
    },
    picture: {
        height: 300,
        width: 380,
    }
})

// Documentation https://reactnative.dev/docs/image
/*

1. Ejemplo source image local
<Image 
    source={Logo}
    style={styles.image}
    resizeMode='contain'
/>

2. Ejemplo remote image
<Image 
    source={{
        uri: 'https://picsum.photos/seed/picsum/400/400'
    }}
    style={styles.picture}
    resizeMode='cover'
/>

3. background image
<ImageBackground source={Background} resizeMode="stretch" style={styles.background}>
    <Image 
        source={Logo}
        style={styles.image}
        resizeMode='contain'
    />

    <Image 
        source={{
            uri: 'https://picsum.photos/seed/picsum/400/400'
        }}
        style={styles.picture}
        resizeMode='cover'
    />
</ImageBackground>
*/