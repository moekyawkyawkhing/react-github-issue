import React from 'react';
import NewIssue from './NewIssue';
import { api } from '../../api';

class NewIssueHOC extends React.Component {
    handlestoreNewIssue= (values) => {
       return api.post('/repos/moekyawkyawkhing/react-github-issue/issues', values);
    }

    render(){
        return (
            <NewIssue {...this.props} storeNewIssue={this.handlestoreNewIssue} />
        );
    }
}

export default NewIssueHOC;