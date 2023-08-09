import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Biryani',
        description: 'Finest checken and Curry',
        price: 150,
    },
    {
        id: 'm2',
        name: 'Chicken Corma',
        description: 'A Indian specialty!',
        price: 250,
    },
    {
        id: 'm3',
        name: 'Chicken Burger',
        description: 'Bread, chicken Keema And vaggies',
        price: 100,
    },
    {
        id: 'm4',
        name: 'Chicken Soup',
        description: 'Healthy...and delecious...',
        price: 50,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) =>
    <MealItem 
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price}
    />
    );

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;