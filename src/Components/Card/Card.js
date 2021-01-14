import React, {Component} from 'react';
import './Card.css'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
      return(
        <div className="ss-card-bloc">
          <div className="ss-card-header">
            <h5 className="ss-card-header-title">
              {this.props.headerContent}
            </h5>
          </div>
          <div className="ss-card-body">
            {this.props.bodyContent}
          </div>
          <div className="ss-card-footer">
            {this.props.footerContent}
          </div>
        </div>
      );
    }
}

Card.propTypes = {
  headerContent: React.PropTypes.string.isRequired,
  bodyContent: React.PropTypes.string.isRequired,
  footerContent: React.PropTypes.string.isRequired,
}
