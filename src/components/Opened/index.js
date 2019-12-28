import React from 'react';
import Opened from './Opened';
import {api} from '../../api';

// HOC mean - higher order component
class OpenedHOC extends React.Component{
    state = {
        issues : [],
        isLoaded : false
    };

    componentDidMount() {
       this.loadIssue();
    }

    loadIssue= () => {
        api.get('/repos/moekyawkyawkhing/react-github-issue/issues',{
            params : {
                state : 'open'
            }
        })
        .then((response) => {
            const filter_pull_request= response.data.filter( res=> !res.pull_request );
            this.setState({
                issues : filter_pull_request,
                isLoaded : true
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleClosed=(number) => {
        api.patch(`/repos/moekyawkyawkhing/react-github-issue/issues/${number}`,{
          state : 'closed'
        })
        .then(() => {
          this.loadIssue();
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render(){
        if(!this.state.isLoaded){
            return (
                <p className="text-center">loading........</p>
            );
        }
        return(
            <Opened {...this.props} issues={this.state.issues} handleClosed={this.handleClosed} />
        );
    }
}

export default OpenedHOC;