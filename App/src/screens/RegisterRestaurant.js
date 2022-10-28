import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Logo from '../../assets/images/Logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../api";

const RegisterRestautant = ({ navigation }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {

        try {
            const data = await api.post('/restaurant/register', {
                name: name,
                type: type,
                description: description,
                address: address
            }
            );
            if (data.status === 200) {
                console.log(data.data.massage)
                navigation.navigate('RegisterRestaurant')
            }

        } catch (error) {
            console.log(error)
            alert(error.response)
        }
    }

    return (
        <View style={styles.view}>

            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
            <CustomInput
                placeholder="Name"
                value={name}
                setValue={setName}
            />

            <CustomInput
                placeholder="Type"
                value={type}
                setValue={setType}
            />

            <CustomInput
                placeholder="Description"
                value={description}
                setValue={setDescription}
            />

            <CustomInput
                placeholder="Address"
                value={address}
                setValue={setAddress}
            />

            <CustomButton text="Register" onPress={onRegisterPressed} />

        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    loginText: {
      fontWeight: "bold",
      color: "#6200ee",
    },
});

export default RegisterRestautant;