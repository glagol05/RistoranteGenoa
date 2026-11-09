import { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Pressable,
    StyleSheet,
} from 'react-native';

import meals from '../data/meals';
import MealItem from '../components/MealItem';

const categories = ['Alla', 'Förrätter', 'Huvudrätter', 'Desserter'];

export default function MenuScreen({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState('Alla');

    const filteredMeals =
        selectedCategory === 'Alla'
        ? meals
        : meals.filter((meal) => meal.category === selectedCategory);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Vår meny</Text>

            <Text style={styles.description}>
                Upptäck våra italienska favoriter
            </Text>

            <View style={styles.categories}>
                {categories.map((category) => (
                <Pressable
                    key={category}
                    style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.selectedCategory,
                    ]}
                    onPress={() => setSelectedCategory(category)}
                >
                    <Text
                    style={[
                        styles.categoryText,
                        selectedCategory === category && styles.selectedCategoryText,
                    ]}
                    >
                    {category}
                    </Text>
                </Pressable>
                ))}
            </View>

            <FlatList
                data={filteredMeals}
                renderItem={({ item }) => (
                <MealItem
                    meal={item}
                    onPress={() =>
                    navigation.navigate('MealDetails', { meal: item })
                    }
                />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F1E8',
        padding: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#263A32',
        marginTop: 15,
    },
    description: {
        fontSize: 15,
        color: '#77736C',
        marginTop: 8,
        marginBottom: 25,
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 20,
    },
    categoryButton: {
        borderWidth: 1,
        borderColor: '#263A32',
        paddingVertical: 9,
        paddingHorizontal: 13,
    },
    selectedCategory: {
        backgroundColor: '#263A32',
    },
    categoryText: {
        color: '#263A32',
        fontSize: 12,
    },
    selectedCategoryText: {
        color: '#FFFFFF',
    },
    list: {
        paddingBottom: 25,
    },
});
