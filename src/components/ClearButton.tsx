import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { useDispatch } from 'react-redux';

const ClearButton = ({ clearAllFunc }) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={styles.clearAllButton} onPress={() => dispatch(clearAllFunc())}>
            <Ionicons name="trash-outline" style={styles.clear} size={40} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    clear: {
        alignSelf: 'center',
        color: 'black',
    },
    clearAllButton: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 50,
        right: 15
    },
});

export default ClearButton;