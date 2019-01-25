import React from 'react';
import { MDBCardGroup } from "mdbreact";
import FavoriteCard from './FavoriteCard';

const Favorites = () => (
  <div className="Favorites" >
    <h3>Favorites</h3>
    <MDBCardGroup column>
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </MDBCardGroup>
  </div>
);
// szinekkel vagy massal megkulonboztetni a postot orat tanart helyszint
export default Favorites;