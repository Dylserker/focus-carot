import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = () => {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.profileHeader}>
                    <Text style={styles.title}>Mon Profil</Text>
                </View>

                <View style={styles.profileInfo}>
                    {user && (
                        <>
                            <View style={styles.infoItem}>
                                <Text style={styles.label}>Email:</Text>
                                <Text style={styles.value}>{user.email}</Text>
                            </View>
                        </>
                    )}
                    {!user && (
                        <Text style={styles.notLoggedIn}>
                            Vous n'êtes pas connecté.
                        </Text>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 20,
        paddingBottom: 80,
    },
    profileHeader: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    profileInfo: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    infoItem: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    notLoggedIn: {
        fontSize: 16,
        color: '#ff6347',
        textAlign: 'center',
    },
});

export default ProfileScreen;