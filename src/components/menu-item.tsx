import * as React from 'react'

import Link from './link';

interface MenuItemProps{
  image: any,
  page: string
}


export default (props:MenuItemProps) => {
  const {image, page} = props;
  return (
    <Link className="flex-item hvr-grow-shadow" page={page} transition="FADE" style={{backgroundImage: `url(${image})`}} />
  )
}
