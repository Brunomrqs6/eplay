import ProductsList from '../../components/ProductsList'

import Resident from '../../assets/images/resident.png'
import Diablo from '../../assets/images/diablo.png'
import Zelda from '../../assets/images/zelda.png'
import StarWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()

  if (actionGames && fightGames && rpgGames && sportGames && simulationGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulacao"
          background="black"
          id="simulation"
        />
        <ProductsList games={rpgGames} title="RPG" background="gray" id="rpg" />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
