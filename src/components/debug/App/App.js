import React, { createContext, useState } from 'react';
import './App.css';
import TextInformation from '../TextInformation/TextInformation';

export const TextContext = createContext();
TextContext.displayName = 'TextContext';

function Debug() {
  const [text, setText] = useState('');

  return(
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">
          <p>Add Your Text Here:</p>
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            onChange={e => setText(e.target.value)}
          >
          </textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  )
}

export default Debug;
