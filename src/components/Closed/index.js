import React from 'react';
import Closed from './Closed';
import {api} from '../../api';

// HOC mean - higher order component
class ClosedHOC extends React.Component{
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
                state : 'closed'
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

    handleOpened=(number) => {
        api.patch(`/repos/moekyawkyawkhing/react-github-issue/issues/${number}`,{
          state : 'open'
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
            <Closed {...this.props} issues={this.state.issues} handleOpened={this.handleOpened} />
        );
    }
}

export default ClosedHOC;