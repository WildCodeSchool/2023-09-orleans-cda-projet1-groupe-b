import React from 'react';
import { useParams } from 'react-router-dom';

import '../../App.css';

export default function GameShow() {
  const { gameId } = useParams();

  return (
    <>
      <h1 className="space-x-40 text-light text-4xl font-text">
        Page GameShow
      </h1>
      <p>Game ID : {gameId} </p>
    </>
  );
}
