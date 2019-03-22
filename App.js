/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import placeImage from './src/assets/images/beautiful-place.jpg';
import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetail from './src/components/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component {
	placeAddedHandler = (placeName) => {
		this.props.onAddPlace(placeName);
	};

	placeSelectedHandler = (key) => {
		this.props.onSelectPlace(key);
	};

	placeDeletedHandler = () => {
		this.props.onDeletePlace();
	};

	modalCloseHandler = () => {
		this.props.onDeselectPlace();
	};

	render() {
		const { places } = this.props;
		console.log(this.props);
		return (
			<View style={styles.container}>
				<PlaceDetail
					onItemDeleted={this.placeDeletedHandler}
					onModalClosed={this.modalCloseHandler}
					selectedPlace={this.props.selectedPlace}
				/>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList onItemSelected={this.placeSelectedHandler} places={places} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 20,
		paddingTop: 50
	}
});

const mapStateToProps = (state) => {
	return {
		places: state.places.places,
		selectedPlace: state.places.selectedPlace
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPlace: (name) => dispatch(addPlace(name)),
		onDeletePlace: () => dispatch(deletePlace()),
		onSelectPlace: (key) => dispatch(selectPlace(key)),
		onDeselectPlace: () => dispatch(deselectPlace())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
