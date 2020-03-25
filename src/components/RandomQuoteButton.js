import React from 'react';
import PropTypes from 'prop-types';

// React component
class RandomQuoteButton extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div id="new-quote" onClick={this.props.onClick} className={'btn btn-primary '.concat(this.props.className)}>
        <i className="fas fa-plus"></i> New quote
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