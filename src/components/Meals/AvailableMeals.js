import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chicken Biryani',
    description: 'Finest chicken and Basmati rice',
    price: 150,
  },
  {
    id: 'm2',
    name: 'Chicken Curry',
    description: 'A Indian specialty!',
    price: 200,
  },
  {
    id: 'm3',
    name: 'Chicken Burger',
    description: 'Indian, raw, yammy',
    price: 100,
  },
  {
    id: 'm4',
    name: 'Chicken Soup',
    description: 'Healthy...and Testy...',
    price: 130,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;