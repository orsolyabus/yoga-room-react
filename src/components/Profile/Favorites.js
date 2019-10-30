import React from 'react';
import { CardGroup } from "react-bootstrap";
import FavoriteCard from './FavoriteCard';

const Favorites = () => (
  <div className="Favorites" >
    <h3>Favorites</h3>
    <CardGroup column>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </CardGroup>
  </div>
);
// szinekkel vagy massal megkulonboztetni a postot orat tanart helyszint
export default Favorites;