import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Components/Board'
import { observe } from './Components/Game'

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, root)
)

