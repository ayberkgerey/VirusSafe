import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const RegisterCard = ({addDevice, setShow}) => {
  const [temporaryName, setTemporaryName] = useState();
  const [temporaryCode, setTemporaryCode] = useState();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardLine}>
        <Text style={styles.title}>CIHAZ KODU</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={(text) => setTemporaryCode(text)}
          value={temporaryCode}
        />
      </View>
      <View style={styles.cardLine}>
        <Text style={styles.title}>CIHAZ ADI</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={(text) => setTemporaryName(text)}
          value={temporaryName}
        />
      </View>
      <View style={styles.buttonsLine}>
        <TouchableOpacity
          onPress={() => {
            setTemporaryName('');
            setTemporaryCode('');
            setShow(false);
          }}>
          <Text style={styles.buttonTitle}>KAPAT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (temporaryName !== '' || temporaryCode !== '') {
              addDevice({
                name: temporaryName,
                code: temporaryCode,
              });
              setTemporaryCode('');
              setTemporaryName('');
            }
          }}>
          <Text style={styles.buttonTitle}>KAYIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterCard;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: '20%',
    padding: 17,
    height: 180,
    width: '90%',
    backgroundColor: '#3a3939',
    borderColor: '#acee0f',
    borderWidth: 0.9,
  },
  cardLine: {
    marginBottom: 20,
    height: 35,
    flexDirection: 'row',
    borderColor: '#acee0f',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    color: 'black',
    marginLeft: 30,
    backgroundColor: 'white',
    width: '65%',
    height: 35,
    textAlign: 'right',
  },
  title: {
    color: '#acee0f',
  },
  buttonsLine: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonTitle: {
    color: '#e6e6e6',
    fontSize: 24,
  },
});
