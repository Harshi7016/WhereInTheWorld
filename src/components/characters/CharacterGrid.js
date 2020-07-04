import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';

const CharacterGrid = ({ isloading, items }) => {
  return isloading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.alpha3Code} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
