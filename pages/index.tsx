import styles from 'styles/Home.module.css';
import React from 'react';
import Search from 'pages/Search';
import CityList from 'pages/City';
import StoreProvider from 'pages/Context';

export default function Home() {
  return (
    <div className={styles.container}>
      <StoreProvider>
        <Search />
        <CityList />
      </StoreProvider>
    </div>
  );
}
