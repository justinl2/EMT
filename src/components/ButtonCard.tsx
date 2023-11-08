import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

const ButtonCard = ({ title, image }) => {
  return (
    <View style={styles.touchableContainer}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    margin: 10,
    alignItems: 'center',
    width: 130,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 5,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
    color: "black",
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ButtonCard;
