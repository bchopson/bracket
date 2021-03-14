import React from 'react';
import {render, screen} from '@testing-library/react';
import Game, {GameProps} from '../Game';

function getProps(): GameProps {
  return {
    home: {name: 'Butler'},
    away: {name: 'Duke'},
  }
}

describe('Game', () => {
  test('renders without crashing', () => {
    render(<Game {...getProps()}/>)
  })

  test('shows teams', () => {
    render(<Game home={{name: 'Butler'}} away={{name: 'Duke'}} />)
  })
})


