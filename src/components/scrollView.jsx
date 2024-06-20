import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { paragraph } from '../__mock__'

export default function Layout() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView} onScroll={(e) => console.log('e', e)}>
            <Text>{paragraph}</Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      backgroundColor: '#e5e5e5',
    },
  });


// documentation https://reactnative.dev/docs/scrollview
// props: horizontal, showsVerticalScrollIndicator, showsHorizontalScrollIndicator, refreshControl

/*

refreshControl
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
}, []);

refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
}>

*/