import React from 'react';
import SecureLink from './SecureLink';

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  }

  renderLinks() {
    // Links data
    const links = [
      {
        description: 'FreeCodeCamp project',
        href: 'https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine'
      },
      {
        description: 'Repo on GitHub',
        href: 'https://github.com/Airthee/fcc-random-quote-machine'
      }
    ];

    // Create li items
    const linkItems = links.map((link, index) => (
      <li key={index}>
        <i>{link.description}: <SecureLink href={link.href}>click here</SecureLink></i>
      </li>
    ));

    // Return ul item
    return (
      <ul style={{listStyleType: 'circle'}}>
        {linkItems}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <p>
          Hi ! Welcome to the Random Quote Machine !<br/>
          This is a project #1 Free Code Camp's "Front End Libraries" certification.<br/>
        </p>
        {this.renderLinks()}
      </div>
    );
  }
}

export default AppHeader;