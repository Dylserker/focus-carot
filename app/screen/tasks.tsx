import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

interface Task {
    id: string;
    text: string;
    completed: boolean;
}

export default function TasksScreen() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === '') return;

        const task: Task = {
            id: Date.now().toString(),
            text: newTask,
            completed: false
        };

        setTasks([...tasks, task]);
        setNewTask('');
    };

    const toggleTaskCompletion = (id: string) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const renderItem = ({ item }: { item: Task }) => (
        <View style={styles.taskItem}>
            <TouchableOpacity
                style={[styles.checkbox, item.completed && styles.checked]}
                onPress={() => toggleTaskCompletion(item.id)}
            />
            <Text style={[styles.taskText, item.completed && styles.completedText]}>
                {item.text}
            </Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteBtn}>×</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Liste de tâches</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ajouter une nouvelle tâche..."
                        value={newTask}
                        onChangeText={setNewTask}
                    />
                    <TouchableOpacity style={styles.addButton} onPress={addTask}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    style={styles.list}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        paddingBottom: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#5cb85c',
        borderRadius: 5,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#5cb85c',
        marginRight: 10,
    },
    checked: {
        backgroundColor: '#5cb85c',
    },
    taskText: {
        flex: 1,
        fontSize: 16,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    deleteBtn: {
        color: '#ff6347',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
});