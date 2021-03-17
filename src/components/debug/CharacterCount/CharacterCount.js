import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TextContext } from '../App/App';

export default function CharacterCount({ color, show }) {
  const text = useContext(TextContext);

  if(!show) {
    return null;
  }

  return(
    <div style={{color}}>
      Character Count: {text.length}
    </div>
  )
}

CharacterCount.proTypes = {
  show: PropTypes.bool.isRequired
}
