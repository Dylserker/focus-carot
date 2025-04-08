import React from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';

function AppLayoutContent() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Stack screenOptions={{
                headerShown: true,
                headerTitle: "",
                headerLeft: () => null,
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 15 }}>
                        <Ionicons name="settings-outline" size={24} color="black" />
                    </TouchableOpacity>
                )
            }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
            </Stack>
            {user && <Footer />}
        </View>
    );
}

export default function RootLayout() {
    return (
        <AuthProvider>
            <AppLayoutContent />
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
    },
});