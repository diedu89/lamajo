import * as React from 'react'

import chevron from '../css/images/chevron.svg'

export default class LeftArrow extends React.Component {
  public render() {
    return (
      <div className="left arrow">
        <img src={chevron} />
      </div>
    )
  }
}
