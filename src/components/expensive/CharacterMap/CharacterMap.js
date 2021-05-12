/* eslint-disable */
import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

function itemize(text){
  const letters = text.split('')
    .filter(l => l !== ' ')
    .reduce((collection, item) => {
      const letter = item.toLowerCase();
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1
      }
    }, {})
  return Object.entries(letters)
    .sort((a, b) => b[1] - a[1]);
}

function CharacterMap({ showExplanation, text }) {
  const characters = itemize(text);
  return(
    <div>
      {showExplanation &&
        <p>
          This display a list of the most common characters.
        </p>
      }
      Character Map:
      {characters.map(character => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
    </div>
  )
}

CharacterMap.propTypes = {
  showExplanation: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  transformer: PropTypes.func
}

CharacterMap.defaultProps = {
  transformer: null
}

export default memo(CharacterMap);

// const characters = useMemo(() => itemize(text), [text]);
