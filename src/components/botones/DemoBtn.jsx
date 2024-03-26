import React from 'react';
import '../../style/buttons.css';


export default function GithubBtn( {href} ) {
  return (
    <button className="link-button"  href={href} target="_blank">Github</button>
  );
}
