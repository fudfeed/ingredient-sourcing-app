import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';


const FeedCard = ({ name, imageUrl, styles }) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity>
        <Image source={{ uri: imageUrl }} style={{ width: 275, height: 275 }} />
      </TouchableOpacity>
      <Text>
        {name}
      </Text>
    </View>
  )
}

export default FeedCard;