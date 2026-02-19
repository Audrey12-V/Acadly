import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { auth } from "./firebaseConfig";

export default function Login() {
    const router = useRouter();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!correo.trim() || !password.trim()) {
            Alert.alert("Error", "Completa todos los campos");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            router.replace("/HomeScreen");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Acadly</Text>
            <Text style={styles.subtitle}>Organiza tu vida académica</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Correo"
                    placeholderTextColor="#7A8CA3"
                    style={styles.input}
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#7A8CA3"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.link}>¿No tienes cuenta? Regístrate</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F7FB",
        justifyContent: "center",
        paddingHorizontal: 30,
    },
    logo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#3D5A80",
        textAlign: "center",
        marginBottom: 5,
    },
    subtitle: {
        textAlign: "center",
        color: "#7A8CA3",
        marginBottom: 40,
        fontSize: 16,
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 55,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },
    input: {
        fontSize: 16,
        color: "#333",
    },
    button: {
        backgroundColor: "#3D5A80",
        height: 55,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        shadowColor: "#3D5A80",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 8,
        elevation: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    link: {
        textAlign: "center",
        marginTop: 20,
        color: "#3D5A80",
    },
});
