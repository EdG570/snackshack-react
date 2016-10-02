export function saveCity(city) {
  return {
    type: 'SAVE_CITY',
    payload: city
  }
}

export function saveFood(food) {
  return {
    type: 'SAVE_FOOD',
    payload: food
  }
}