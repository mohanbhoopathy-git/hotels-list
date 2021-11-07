import data from '../mocks/data.json';
const getAllHotels = () => {
  return new Promise((resolve) => {
    resolve(data.results);
  });
}

export { getAllHotels };
