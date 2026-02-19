/**
 * HomeScreen
 *
 * TODO (backend integration):
 * - Cargar la lista de tareas desde el backend (ej. `GET /api/homeworks`).
 * - Utilizar `useEffect` para hacer fetch y mantener el estado local o
 *   usar un store/global state (Context/Redux/React Query) según convenga.
 * - Pasar `homeworks` a `NextHomework` y a `TODOHomeworks` para que muestren
 *   información real en lugar de valores por defecto.
 * - Endpoints sugeridos:
 *     GET /api/homeworks         -> lista de tareas
 *     GET /api/me                -> datos de usuario (nombre, avatar)
 *     POST /api/homeworks        -> crear tarea
 *     PATCH /api/homeworks/:id   -> actualizar/completar
 */
import TopBar from "@/src/Components/TopBar";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import NextHomework from "../src/Components/NextHomework";
// NOTE: cuando tengas un componente `TODOHomeworks` en RN, importarlo aquí
// import TODOHomeworks from "./Components/TODOHomeworks";
import BottomNavigationBar from "../src/Components/BottomNavigationBar";
import TODOHomeworks from "../src/Components/TODOHomeworks";
import MotivationalQuote from "../src/Components/MotivationalQuote";
export default function HomeScreen() {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a Acadly</Text>

        {/* Proxima tarea: reemplazar NextHomework() para recibir props
                    con la tarea seleccionada desde el backend. Ej:
                    <NextHomework {...nextTask} />
                */}
        <Pressable style={styles.card}>
          <Text style={styles.cardTitle}>Proxima tarea</Text>
          <NextHomework />
        </Pressable>

        {/* Acciones rápidas: las 3 tarjetas distribuidas horizontalmente.
                    TODO: hacer responsive para pantallas pequeñas (wrap).
                */}
        <View style={styles.middleRow}>
          <Pressable style={styles.middleCard}>
            <View style={styles.plusCircle}>
              <Ionicons name="add" size={28} color="#fff" />
            </View>
            <Text style={styles.middleCardTitle}>Agregar tarea</Text>
          </Pressable>

          <Pressable style={styles.middleCard}>
            <View style={styles.plusCircle}>
              <Ionicons name="book-outline" size={28} color="#fff" />
            </View>
            <Text style={styles.middleCardTitle}>Ver materias</Text>
          </Pressable>

          <Pressable style={styles.middleCard}>
            <View style={styles.plusCircle}>
              <Ionicons name="calendar-outline" size={28} color="#fff" />
            </View>
            <Text style={styles.middleCardTitle}>Ver horario</Text>
          </Pressable>
        </View>

        {/* TODO: Mostrar resumen de tareas pendientes / hechas usando
                    <TODOHomeworks homeworks={homeworksFromApi} />
                    o conectar aquí con el estado global. */}

        <MotivationalQuote pendingCount={2} />

        <TODOHomeworks />
      </View>
      <BottomNavigationBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e4ec",
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    padding: 20,
    backgroundColor: "#F3F4F6",
    borderRadius: 15,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  middleCard: {
    width: 120,
    height: 120,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginBottom: 12,
    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // elevation Android
    elevation: 3,
  },

  middleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  plusCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#3b82f6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  middleCardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#0f172a",
  },
});
