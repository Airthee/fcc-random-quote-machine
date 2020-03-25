import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

// React component
class Quote extends React.Component {
  render() {
    const authorStyle = {
      fontStyle: 'italic'
    };

    return (
      <Card>
        <Card.Body>
          <div id="text">
            <FontAwesomeIcon icon={faQuoteLeft} />
            { this.props.content }
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <div id="author" style={authorStyle}>
            - { this.props.author }
          </div>
        </Card.Body>
      </Card>
    );
  }
}

// Props types
Quote.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string
};

// Default props values
Quote.defaultProps = {
  content: '',
  author: ''
};

export default Quote;