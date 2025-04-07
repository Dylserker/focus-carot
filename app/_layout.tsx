import React from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';
import Footer from '../components/Footer';

function AppLayoutContent() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="login"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="register"
                    options={{
                        headerShown: false
                    }}
                />
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