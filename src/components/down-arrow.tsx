import * as React from 'react'

import chevron from '../css/images/chevron.svg'

export default class DownArrow extends React.Component {
  public render() {
    return (
      <div className="down arrow">
        <img src={chevron} />
      </div>
    )
  }
}
