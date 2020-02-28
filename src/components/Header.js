import React from "react";
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components'

export default function Header() {
  const HeaderStyling = styled.header`

  background-color: grey;
  `
  return (
    <HeaderStyling>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <button>
        <Link to ='/'>WelcomePage</Link>
      </button>
      <button>
        <Link to ='/CharacterList'>Characters</Link>
      </button>
    </header>
    </HeaderStyling>
  );
}
