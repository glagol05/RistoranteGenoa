
import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Text style={styles.restaurantName}>RISTORANTE GENOA</Text>

        <View style={styles.divider} />

        <Text style={styles.subtitle}>CUCINA ITALIANA</Text>

        <Text style={styles.heading}>
            En smak av Italien
        </Text>

        <Text style={styles.description}>
            Välkommen till Ristorante Genoa.
            Upptäck italiensk matlagning med
            klassiska smaker och noggrant utvalda
            råvaror.
        </Text>

        <Pressable
            style={styles.menuButton}
            onPress={() => navigation.navigate('Menu')}
        >
            <Text style={styles.menuButtonText}>SE VÅR MENY</Text>
        </Pressable>

        <Pressable
            style={styles.mapButton}
            onPress={() =>
                Linking.openURL(
                'https://www.google.com/maps/search/?api=1&query=Ristorante+Genoa'
                )
            }
        >
            <Text style={styles.mapButtonText}>HITTA OSS</Text>
        </Pressable>

        <Text style={styles.footer}>
            AUTENTISK ITALIENSK MATLAGNING
        </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F1E8',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    restaurantName: {
        color: '#263A32',
        fontSize: 27,
        fontWeight: 'bold',
        letterSpacing: 3,
        textAlign: 'center',
    },
    divider: {
        width: 60,
        height: 2,
        backgroundColor: '#B65C43',
        marginVertical: 25,
    },
    subtitle: {
        color: '#B65C43',
        fontSize: 12,
        letterSpacing: 4,
        marginBottom: 18,
    },
    heading: {
        color: '#263A32',
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: '#292929',
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        maxWidth: 320,
    },
    menuButton: {
        backgroundColor: '#263A32',
        paddingVertical: 17,
        paddingHorizontal: 40,
        marginTop: 40,
    },
    menuButtonText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    footer: {
        position: 'absolute',
        bottom: 35,
        color: '#77736C',
        fontSize: 10,
        letterSpacing: 2,
    },
    mapButton: {
        borderWidth: 1,
        borderColor: '#263A32',
        paddingVertical: 15,
        paddingHorizontal: 40,
        marginTop: 15,
    },
    mapButtonText: {
        color: '#263A32',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
});
