import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function MealDetailsScreen({ route }) {
    const { meal } = route.params;
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.category}>{meal.category}</Text>

            <Text style={styles.name}>{meal.name}</Text>

            <View style={styles.divider} />

            <Text style={styles.description}>{meal.description}</Text>

            <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Pris</Text>
                <Text style={styles.price}>{meal.price} kr</Text>
            </View>

            <Pressable
                style={styles.favoriteButton}
                onPress={() => setIsFavorite(!isFavorite)}
            >
                <Text style={styles.favoriteButtonText}>
                    {isFavorite ? '♥ Ta bort från favoriter' : '♡ Lägg till som favorit'}
                </Text>
            </Pressable>

            <Text style={styles.note}>
                Tillagad med omsorg och inspiration från Italien.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F1E8',
        padding: 25,
        justifyContent: 'center',
    },
    category: {
        color: '#B65C43',
        fontSize: 13,
        letterSpacing: 2,
        textTransform: 'uppercase',
        marginBottom: 12,
    },
    name: {
        color: '#263A32',
        fontSize: 32,
        fontWeight: 'bold',
    },
    divider: {
        width: 55,
        height: 2,
        backgroundColor: '#B65C43',
        marginVertical: 25,
    },
    description: {
        color: '#292929',
        fontSize: 17,
        lineHeight: 28,
    },
    priceContainer: {
        marginTop: 35,
        padding: 20,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    priceLabel: {
        color: '#77736C',
        fontSize: 15,
    },
    price: {
        color: '#B65C43',
        fontSize: 21,
        fontWeight: 'bold',
    },
    note: {
        color: '#77736C',
        fontSize: 13,
        fontStyle: 'italic',
        marginTop: 30,
        textAlign: 'center',
    },
    favoriteButton: {
        backgroundColor: '#263A32',
        padding: 16,
        marginTop: 20,
        alignItems: 'center',
    },
    favoriteButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
