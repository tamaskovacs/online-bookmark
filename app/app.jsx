import React from 'react';
import ReactDom from 'react-dom';

import { List } from './list.jsx';

import mockJson from '../data-structure-proposal.json';

export default class Main extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div><List objects={this.props.userData.data} /></div>)
    }
}

ReactDom.render(<Main userData={mockJson.mockUsername} />, document.getElementById('app-content'));
