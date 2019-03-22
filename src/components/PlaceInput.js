import React, { Component } from 'react'
import { TextInput, Button, View, StyleSheet } from 'react-native'

class PlaceInput extends Component {
  state = {
    placeName: "",
  }
  placeNameChangedHandler = (val) => {
    this.setState({ placeName: val })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName)
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          style={styles.placeInput}
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName} />
        <Button
          onPress={this.placeSubmitHandler}
          style={styles.placeButton}
          title="Add" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,

  },
  placeButton: {
    width: '30%'
  },

})
export default PlaceInput