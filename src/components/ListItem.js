import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ placeName, placeImage, onItemPressed }) => {
	return (
		<TouchableOpacity onPress={onItemPressed}>
			<View style={styles.listItem}>
				<Image style={styles.placeImage} source={placeImage} />
				<Text>{placeName}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		padding: 10,
		marginBottom: 5,
		backgroundColor: '#eee',
		flexDirection: 'row',
		alignItems: 'center'
	},
	placeImage: {
		marginRight: 8,
		maxHeight: 30,
		maxWidth: 30,
		width: 30,
		height: 30
	}
});

export default ListItem;
