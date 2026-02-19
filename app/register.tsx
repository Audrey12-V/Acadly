import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Register() {
    const router = useRouter();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        if (!correo.trim() || !password.trim()) {
            Alert.alert("Error", "Completa todos los campos");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, correo, password);
            Alert.alert("Éxito", "Usuario registrado correctamente");
            router.replace("/login");
        } catch (error: any) {
            Alert.alert("Error Firebase", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <TextInput
                placeholder="Correo"
                style={styles.input}
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.link}>Volver al login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        textAlign: "center",
        marginBottom: 30,
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
    },
    button: {
        backgroundColor: "#28a745",
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    link: {
        textAlign: "center",
        color: "#007bff",
    },
});
