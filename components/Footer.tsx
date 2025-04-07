import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../app/context/AuthContext';
import { router } from 'expo-router';

const Footer = () => {
    const { logout } = useAuth();

    const navigateToProfile = () => {
        router.push('/screen/profile');
    };

    const navigateToTasks = () => {
        router.push('/screen/tasks');
    };

    const navigateToAchievements = () => {
        router.push('/screen/achievements');
    };

    return (
        <View style={styles.footer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={navigateToProfile}
                >
                    <Text style={styles.buttonText}>Profil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.tasksButton}
                    onPress={navigateToTasks}
                >
                    <Text style={styles.buttonText}>Tâches</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.achievementsButton}
                    onPress={navigateToAchievements}
                >
                    <Text style={styles.buttonText}>Succès</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={logout}
                >
                    <Text style={styles.logoutText}>Déconnexion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        gap: 15,
    },
    logoutButton: {
        padding: 10,
        backgroundColor: '#ff6347',
        borderRadius: 5,
    },
    profileButton: {
        padding: 10,
        backgroundColor: '#4682B4',
        borderRadius: 5,
    },
    tasksButton: {
        padding: 10,
        backgroundColor: '#5cb85c',
        borderRadius: 5,
    },
    achievementsButton: {
        padding: 10,
        backgroundColor: '#f0ad4e',
        borderRadius: 5,
    },
    logoutText: {
        color: 'white',
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Footer;