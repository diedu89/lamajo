import * as React from 'react'

import Link from './link';

interface MenuItemProps{
  image: any,
  page: string
}


export default (props:MenuItemProps) => {
  const {image, page} = props;
  return (
    <div className="flex-item hvr-grow-shadow" style={{backgroundImage: `url(${image})`}}>
      <Link page={page} transition="MOVE_RIGHT" style={{height:'100%', width:'100%'}} />
    </div>
  )
}
