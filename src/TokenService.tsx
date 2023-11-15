// Import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to retrieve the token
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (token !== null) {
      // Token is retrieved successfully
      console.log('Retrieved token:', token);
      return token;
    }
  } catch (error) {
    // Error retrieving the token
    console.error('Error retrieving token:', error);
  }
  return null;
};

export default getToken;
