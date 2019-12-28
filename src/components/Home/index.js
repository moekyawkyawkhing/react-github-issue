import React from 'react';
import Home from './Home';
import { api } from '../../api';

// HOC mean - higher order component
class HomeHOC extends React.Component {
    state = {
        issues : [],
        isLoaded : false
    };

    componentDidMount() {
        api.get('/repos/moekyawkyawkhing/react-github-issue/issues',{
            params : {
                state : 'all'
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

    render() {
        if(!this.state.isLoaded){
            return (
                <p className="text-center">loading........</p>
            );
        }
        return (
            <Home {...this.props} issues={this.state.issues} />
        );
    };
}

export default HomeHOC;