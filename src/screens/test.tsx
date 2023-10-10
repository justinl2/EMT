import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Text } from 'react-native';

const DisplayStateComponent: React.FC = () => {
    // Pulling individual states from the store using the RootState type
    const textEntryState = useSelector((state: RootState) => state.textEntry);
    const input6State = useSelector((state: RootState) => state.input6);

    return (
        <>
            <Text >States from Redux Store</Text>
            <Text >Text Entry State</Text>
            <Text >{JSON.stringify(textEntryState, null, 2)}</Text>
            
            <Text >Input6 State</Text>
            <Text >{JSON.stringify(input6State, null, 2)}</Text>
        </>
    );
}

export default DisplayStateComponent;
