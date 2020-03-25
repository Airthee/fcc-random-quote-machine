import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

// React component
class RandomQuoteButton extends React.Component {
  render() {
    return(
      <div id="new-quote" onClick={this.props.onClick} className={'btn btn-primary '.concat(this.props.className)}>
        <FontAwesomeIcon icon={faRandom} /> New quote
      </div>
    );
  }
}

// Props types
RandomQuoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

// Props default values
RandomQuoteButton.defaultProps = {
  className: ''
};

export default RandomQuoteButton;