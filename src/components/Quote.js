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
          <div className="row">
            <div className="col-md-6" style={{margin: 'auto'}}>
              <div id="text" className="text-center">
                <FontAwesomeIcon icon={faQuoteLeft} size="2x" />&nbsp;
                { this.props.content }
                &nbsp;<FontAwesomeIcon icon={faQuoteRight} size="2x" />
              </div>
              <div id="author" className="text-right" style={authorStyle}>
                - { this.props.author }
              </div>
            </div>
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