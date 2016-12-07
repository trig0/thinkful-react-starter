/*jshint esversion: 6 */
// import React from 'react';
//
// function Input(props) {
//
// }
import React from 'react';

export default function SearchBox(props) {

  let query;

  function onclick(){
    console.log('onclick', query.value);
    props.getAPI(query.value);
  }

  return (
    <div>
      <input type="text" ref={(textInput) => { query = textInput; }} />
      <input type="submit" onClick={onclick} />
    </div>
  );
}
