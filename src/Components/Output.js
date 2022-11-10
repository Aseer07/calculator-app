import React from 'react'
import OutputRow from './OutputRow'

function Output(props) {
  return (
    <div>
        <OutputRow value={props.user} textSize={{fontSize: '20px'}} />
        <OutputRow value={props.answer} />
    </div>
  )
}

export default Output