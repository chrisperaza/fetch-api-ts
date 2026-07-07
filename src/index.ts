// import type House
import type { House } from './types/House';

// get data from API
async function getDataFromApi<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

// show data from API using getDataFromApi funtion
async function showHouses(): Promise<void> {
  const url = 'https://anapioficeandfire.com/api/houses';

  try {
    console.log('Fetching API...');

    const data = await getDataFromApi<House[]>(url);

    console.log('\n--- Houses ---');
    data.slice(0, 4).forEach((house) => {
      console.log(`Name: ${house.name}`);
      console.log(`Region: ${house.region}`);
      console.log(`Coat of Arms: ${house.coatOfArms}`);
      console.log(`Words: ${house.words}`);
      console.log('-------------------');
    });
  } catch (error) {
    console.log('There was a problem getting the data:', error);
  }
}

// call function
showHouses();
