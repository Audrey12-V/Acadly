import BottomNavigationBar from "@/src/Components/BottomNavigationBar";
import TopBar from "@/src/Components/TopBar";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

interface ScheduleClass {
  id: number;
  subject: string;
  professor: string;
  time: string;
  room: string;
  color: string;
  day: string;
}

const scheduleData: ScheduleClass[] = [
  {
    id: 1,
    day: "Lunes",
    subject: "Historia",
    professor: "Prof. Juan García",
    time: "10:00 AM - 11:00 AM",
    room: "Aula 201",
    color: "#3b82f6",
  },
  {
    id: 2,
    day: "Lunes",
    subject: "Español",
    professor: "Prof. Ana Martínez",
    time: "9:00 AM - 10:00 AM",
    room: "Aula 105",
    color: "#f59e0b",
  },
  {
    id: 3,
    day: "Martes",
    subject: "Matemáticas",
    professor: "Prof. María López",
    time: "2:00 PM - 3:30 PM",
    room: "Aula 301",
    color: "#8b5cf6",
  },
  {
    id: 4,
    day: "Miércoles",
    subject: "Biología",
    professor: "Prof. Carlos Rodríguez",
    time: "11:30 AM - 12:30 PM",
    room: "Lab 1",
    color: "#10b981",
  },
  {
    id: 5,
    day: "Miércoles",
    subject: "Español",
    professor: "Prof. Ana Martínez",
    time: "9:00 AM - 10:00 AM",
    room: "Aula 105",
    color: "#f59e0b",
  },
  {
    id: 6,
    day: "Jueves",
    subject: "Historia",
    professor: "Prof. Juan García",
    time: "10:00 AM - 11:00 AM",
    room: "Aula 201",
    color: "#3b82f6",
  },
  {
    id: 7,
    day: "Viernes",
    subject: "Matemáticas",
    professor: "Prof. María López",
    time: "2:00 PM - 3:30 PM",
    room: "Aula 301",
    color: "#8b5cf6",
  },
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export default function Schedule() {
  const [active, setActive] = useState<string>("Horario");

  return (
    <View style={{ flex: 1 }}>
      <TopBar name="Horario" />
      <View style={styles.container}>
        <Text style={styles.title}>Tu horario semanal</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          {days.map((day) => {
            const dayClasses = scheduleData.filter((item) => item.day === day);
            return (
              <View key={day} style={styles.daySection}>
                <Text style={styles.dayTitle}>{day}</Text>
                {dayClasses.length > 0 ? (
                  dayClasses.map((classItem) => (
                    <View
                      key={classItem.id}
                      style={[
                        styles.classCard,
                        { borderLeftColor: classItem.color },
                      ]}
                    >
                      <View style={styles.classHeader}>
                        <View style={styles.timeContainer}>
                          <Ionicons
                            name="time-outline"
                            size={18}
                            color={classItem.color}
                          />
                          <Text style={styles.time}>{classItem.time}</Text>
                        </View>
                        <View
                          style={[
                            styles.statusBadge,
                            { backgroundColor: classItem.color },
                          ]}
                        />
                      </View>
                      <Text style={styles.subject}>{classItem.subject}</Text>
                      <Text style={styles.professor}>
                        {classItem.professor}
                      </Text>
                      <View style={styles.roomSection}>
                        <Ionicons
                          name="pin-outline"
                          size={14}
                          color="#6b7280"
                        />
                        <Text style={styles.room}>{classItem.room}</Text>
                      </View>
                    </View>
                  ))
                ) : (
                  <View style={styles.emptyDay}>
                    <Ionicons
                      name="checkmark-circle-outline"
                      size={32}
                      color="#d1d5db"
                    />
                    <Text style={styles.emptyText}>Sin clases este día</Text>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <BottomNavigationBar active={active} onChange={setActive} />
    </View>
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
    marginBottom: 18,
    color: "#0f172a",
  },
  daySection: {
    marginBottom: 24,
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2563EB",
    marginBottom: 12,
  },
  classCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderLeftWidth: 5,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  classHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontSize: 13,
    fontWeight: "600",
    color: "#0f172a",
    marginLeft: 6,
  },
  statusBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  subject: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 4,
  },
  professor: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 8,
  },
  roomSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  room: {
    fontSize: 12,
    color: "#475569",
    marginLeft: 6,
  },
  emptyDay: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    backgroundColor: "#f9fafb",
    borderRadius: 12,
  },
  emptyText: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 8,
  },
});
