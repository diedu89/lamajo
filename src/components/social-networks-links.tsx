import * as React from 'react';

import { faBehance, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialNetworksLinks(props:{instagram?: string, behance?:string, className?:string, style?:any}) {
  const { instagram, behance, ...rest } = props;
  return (
    <div {...rest}>
      <div className="sociallink col padding0">
        <a href={'https://www.instagram.com/' + ((instagram) ? 'p/' + instagram: 'la_majo_ilustradora')} target="_blank"> 
          <FontAwesomeIcon icon={faInstagram} style={{...rest.style}}/>
        </a>
      </div>
      <div className="sociallink col padding0">
        <a href={'https://www.behance.net/' + ((behance) ? 'gallery/' + behance: 'mjmanzano')} target="_blank"> 
          <FontAwesomeIcon icon={faBehance} style={{...rest.style}}/>
        </a>
      </div>
    </div>
  )
}
