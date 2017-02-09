import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Home extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#61C0DD',
    },
});
export default Home;
