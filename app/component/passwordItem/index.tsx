import { Pressable, StyleSheet, Text } from "react-native";

interface PasswordProps {
    data: string;
    removePassword: () => void;
}

export function PasswordItem({data, removePassword}: PasswordProps) {
    return(
        <Pressable onLongPress={removePassword} style={styles.container}>
                <Text style={styles.text}>{data}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff'
    }
})