import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';

class StatusBarBackground extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#040306" }}>
                <View style={styles.container}>
                    <Text>Hello World</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#040306",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }

})

export default StatusBarBackground;
