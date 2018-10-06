import * as React from 'react'

import chevron from '../css/images/chevron.svg'

export default class UpArrow extends React.Component {
  public render() {
    return (
      <div className="up arrow">
        <img src={chevron} />
      </div>
    )
  }
}
