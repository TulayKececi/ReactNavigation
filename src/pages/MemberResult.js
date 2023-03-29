import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

function MemberResult({ route }) {

    const { user } = route.params;

    return (
        <SafeAreaView>
            <Text>Kayıt tamamlandı</Text>
            <Text style={styles.label}> Üye adı : {user.userName} </Text>
            <Text style={styles.label}> Üye Soyadı :{user.userSurname} </Text>
            <Text style={styles.label}> Üye yaş : {user.userAge}</Text>
            <Text style={styles.label}> Üye e-posta : {user.userEmail}</Text>
            <Text style={styles.label}> Üye memleket : {user.userHometown} </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5,
    }
})

export default MemberResult;
