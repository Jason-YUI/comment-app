import React, { Component } from 'react';
import Input from './Input';
import PercentageShower from './PercentageShower';

class PercentageApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: null
        }
    }

    handleNum = (callback) => {
        this.setState({
            num: callback
        });
    };

    render() {
        return (
            <div>
                <Input handleNum = { this.handleNum }/>
                <PercentageShower num = { this.state.num }/>
            </div>
        )
    }
}

export default PercentageApp;