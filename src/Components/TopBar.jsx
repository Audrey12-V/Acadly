import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
// podemos usar useEffect para cargat datos del usuario al montar el componente, o recibirlos como props desde un componente padre que maneje la lógica de carga.
export default function TopBar({ name = "Val" }) {
  return (
    <View style={styles.container}>
      {/* TopBar
       * TODO (backend integration):
       * - Obtener los datos del usuario (nombre, avatar) desde el backend
       *   y pasarlos como props o vía contexto/global state.
       * - Obtener el número de notificaciones no leídas y mostrar una badge
       *   o marcar el icono de notificaciones. Endpoint ejemplo: `GET /api/me`.
       * - Exponer `onPress` handlers (perfil, notificaciones) para navegar a
       *   pantallas correspondientes o abrir un modal.
       */}
      <View style={styles.left}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Hola 👋</Text>
      </View>

      <View style={styles.right}>
        {/* Right: user actions. Hook these up to navigation or event handlers. */}
        <View style={styles.userCircle}>
          <Ionicons name="person" size={20} color="#3b82f6" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    paddingHorizontal: 16,
    //paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3b82f6",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  left: {
    flexDirection: "column",
    justifyContent: "center",
  },

  title: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "800",
  },

  subtitle: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    marginTop: 2,
  },

  right: {
    alignItems: "center",
    justifyContent: "center",
  },

  userCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
});
