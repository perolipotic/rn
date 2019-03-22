import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {} from 'react-native-navigation'
const PlaceDetail = (props) => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <>
        <Image
          style={styles.placeImage}
          source={props.selectedPlace.image} />
        <Text
          style={styles.placeName}
        >{props.selectedPlace.name}</Text>
      </>
    )
  }
  return (
    <Modal
      animated="slide"
      visible={props.selectedPlace !== null}
      style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {modalContent}
        <View style={{textAlign:'center' ,width:'100%'}}>
          <TouchableOpacity onPress={props.onItemDeleted}>
            <Icon name="ios-trash" size={30} color="red"></Icon>
          </TouchableOpacity>
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    margin: 22,
  },
  modalContent: {
    padding: 20,
    paddingTop: 50
  },
  placeImage: {
    height: 200,
    width: "100%",

  },
  placeName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28
  }

})

export default PlaceDetail;