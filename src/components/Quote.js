import React from 'react';

class Quote extends React.Component {
  render() {
    return (
      <div>
        <div id="text">
          { this.props.content }
        </div>
        <div id="author">
          { this.props.author }
        </div>
      </div>
    );
  }
}

export default Quote;