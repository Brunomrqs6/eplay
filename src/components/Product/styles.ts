import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${cores.branca};
  display: block;
  max-width: 320px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  img {
    border-radius: 6px;
    display: block;
    width: 100%;
    height: 250px;

    @media (max-width: ${breakpoints.smartphone}) {
      max-width: 100%;
      height: 350px;
    }
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
