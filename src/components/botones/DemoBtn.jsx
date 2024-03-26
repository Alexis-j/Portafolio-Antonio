import React from 'react';
import '../../style/buttons.css';
import '../../style/animations.css'


export default function DemoBtn( {href} ) {
  return (
    <button className="link-button mve-left"  href={href} target="_blank">Demo</button>
  );
}
