import { PasswordItem } from "@/app/component/passwordItem";
import useStorage from "@/app/hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Passwords(){
    const [listPassword, setListPasswords] = useState<string[] | undefined>([]);
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage()

    async function handleDeletePassword(item: string){
        await removeItem("@pass", item)
        const password = await getItem("@pass")
        setListPasswords(password)
    }

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords)
        }

        loadPasswords()
    }, [focused])
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Minhas senhas
                </Text>
            </View>

            <View style={styles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14 }}
                    data={listPassword}
                    keyExtractor={(item) => String(item)}
                    renderItem={({ item }) => (
                        <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />
                    )}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#392de9",
        paddingTop:58,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight: 14
    },
    title: {
        fontSize: 18,
        color: "#fff",
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        paddingLeft:14,
        paddingRight: 14
    }
})