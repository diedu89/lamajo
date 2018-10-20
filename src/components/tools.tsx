import * as React from 'react'

export default function(props:any){
  const { tools, color } = props;
  return (
    <div {...props}>
      {tools.map((tool:string) => {
          return <div key={tool} className="AllerDisplay text-right col padding0" style={{float: 'left', color: color || 'white', fontSize:'0.73em'}}>
            {tool}
          </div>
        })
      }
    </div>
  )
}