export const selectCars = (state) => state.cars.items;

export const selectBrands = (state) => state.cars.brands;

export const selectLoading = (state) => state.cars.isloading;

export const selectCarId = (state) => state.cars.carId;

export const selectError = (state) => state.cars.error;

export const selectFavoritetСar = (state) => state.cars.favorites;
