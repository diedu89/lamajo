const transitions = {
  'MOVE_RIGHT':{
    from:{ opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter:{ opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave:{ opacity: 1, transform: 'translate3d(-100%,0,0)'}
  },
  'MOVE_LEFT':{
    from:{ opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter:{ opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave:{ opacity: 1, transform: 'translate3d(100%,0,0)'}
  },
  'FADE':{
    from: {opacity: 0, transform: 'translate3d(0%,0,100px)'},
    enter: {opacity:1, transform: 'translate3d(0%,0,0)' },
    leave: {opacity: 0, transform: 'translate3d(0%,0,100px)'}
  }

}

export default function(state = {...transitions.FADE, page:'cover'}, action){
  console.log(action);
  const {type, transition, page} = action;
  if(transitions[transition]){
    return {...state, ...transitions[transition], page}
  }

  return state;
}