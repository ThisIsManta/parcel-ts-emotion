import React from 'react'
import ReactDOM from 'react-dom'
import { css } from '@emotion/core'

const RED = 'red'

ReactDOM.render(
  <div
    css={css`
      color: ${RED};
    `}
  >
    Hey
  </div>,
  document.getElementById('root')
)
