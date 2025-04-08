import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from './context/AuthContext';

export default function SettingsScreen() {
    const { user } = useAuth();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Paramètres</Text>

                {user ? (
                    <>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingLabel}>Compte</Text>
                            <Text style={styles.settingValue}>{user.email}</Text>
                        </View>
                        {/* Ajoutez d'autres options de paramètres ici */}
                        <View style={styles.settingItem}>
                            <Text style={styles.settingLabel}>Notifications</Text>
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingLabel}>Thème</Text>
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.settingLabel}>À propos</Text>
                        </View>
                    </>
                ) : (
                    <Text>Veuillez vous connecter pour voir vos paramètres</Text>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 16,
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    settingItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    settingLabel: {
        fontSize: 16,
    },
    settingValue: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
    },
});