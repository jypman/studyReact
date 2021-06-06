import React, {Component} from 'react';

class BooleanComponent extends Component {
    render() {
        const message = this.props.bored ? '지루하면 놀아야지!' : '지루하지 않아도 놀아야지!'
        return (
            <div className="message-container">
                {message}
            </div>
        );
    }
}

export default BooleanComponent;