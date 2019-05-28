import React, { Component }     from 'react';
import { connect }              from 'react-redux';

//import TextField                from 'components/base/TextField';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class TextSearch extends Component {
    constructor(props) {
        super();

        this.state = {
            value: props.value
        };
    }

    componentWillMount() {
        this.timer = null;
    }

    handleChange(value) {
        clearTimeout(this.timer);

        //this.setState({ value });

        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            this.triggerChange();
        }
    }

    triggerChange() {
        const { value } = this.state;

        this.props.onChange(value);
    }

    render() {
        const { className } = this.props;

        return (
            <input
                 className={className}
                placeholder={('Search')}
                // value={this.state.value}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
            />
        );
    }
}
const mapStateToProps = (state, ownProps) => ({

    id: console.log(ownProps)
});

export default connect(mapStateToProps)(TextSearch);
