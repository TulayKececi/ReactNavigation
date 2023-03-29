import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

function MemberSign({ navigation }) {

    function handleSubmit() {

        if (!userName || !userSurname || !userAge || !userEmail || !userHometown) {
            Alert.alert('Kebap Fitneess Salonu', 'Bilgiler boş bırakılamaz!')
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
            userHometown,
        };
        navigation.navigate('MemberResultScreen', { user });
    }

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    return (
        <SafeAreaView>
            <Input label="Üye adı" placeholder="Üye ismini giriniz..." onChangeText={setUserName} />
            <Input label="Üye Soyadı" placeholder="Üye soyadını giriniz..." onChangeText={setUserSurname} />
            <Input label="Üye yaşı" placeholder="Üye yaşını giriniz..." onChangeText={setUserAge} />
            <Input label="Üye e-posta" placeholder="Üye e-posta giriniz..." onChangeText={setUserEmail} />
            <Input label="Üye memleketi" placeholder="Üye memleketini giriniz..." onChangeText={setUserHometown} />
            <Button text="Kaydı tamamla" onPress={handleSubmit}></Button>
        </SafeAreaView>
    )
}

export default MemberSign;