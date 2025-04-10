import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AuthProvider, useAuth } from './context/AuthContext';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';

function AppLayoutContent() {
    const { user } = useAuth();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack screenOptions={{
                headerShown: true,
                headerTitle: "",
                headerBackVisible: false,
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: 5 }}
                        onPress={() => router.push('/screen/home')}
                    >
                        <Image
                            source={require('../assets/logo/Logo.png')}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                ),

                gestureEnabled: false,
                headerRight: () => (
                    <TouchableOpacity
                        style={{ marginRight: 15 }}
                        onPress={() => router.push('/settings')}
                    >
                        <Ionicons name="settings-outline" size={24} color="black" />
                    </TouchableOpacity>
                )
            }}>

                <Stack.Screen name="index" />
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
                <Stack.Screen name="settings" />
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