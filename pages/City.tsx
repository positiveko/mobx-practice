import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from 'pages/Context';

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
};

export const CityList = () => {
  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() => {
    return <CityView cities={store.filteredCities} />;
  });
};

export default CityList;
