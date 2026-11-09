import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function MealItem({ meal, onPress }) {
    return (
        <Pressable style={styles.mealItem} onPress={onPress}>
            <View>
                <Text style={styles.mealName}>{meal.name}</Text>
                <Text style={styles.mealCategory}>{meal.category}</Text>
            </View>

            <Text style={styles.price}>{meal.price} kr</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 18,
        marginBottom: 12,
    },
    mealName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#263A32',
    },
    mealCategory: {
        fontSize: 12,
        color: '#888078',
        marginTop: 5,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#B65C43',
    },
});
