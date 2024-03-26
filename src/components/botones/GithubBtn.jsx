import React from 'react';
import '../../style/buttons.css';


export default function GithubBtn( {href} ) {
  return (
    <button className="link-button mve-right"  href={href} target="_blank">Github</button>
  );
}
