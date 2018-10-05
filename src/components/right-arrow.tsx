import * as React from 'react'

import chevron from '../css/images/chevron.svg'

export default class RightArrow extends React.Component {
  public render() {
    return (
      <div className="right arrow">
        <img src={chevron} />
      </div>
    )
  }
}