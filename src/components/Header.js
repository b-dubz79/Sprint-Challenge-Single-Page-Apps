import React from "react";
import { Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <button>
        <Link to ='/'>WelcomePage</Link>
      </button>
      <button>
        <Link to ='/CharacterList'>Characters</Link>
      </button>
    </header>
  );
}
