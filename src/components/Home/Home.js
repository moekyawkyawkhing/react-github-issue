import React from 'react';

class Home extends React.Component{
    render(){
        const issues= this.props.issues.map((issue) => {
            return (
                <tr key={issue.id}>
                    <td>{issue.number}</td>
                    <td>{issue.state}</td>
                    <td>{issue.title}</td>
                    <td>{issue.body}</td>
                </tr>
            );
        });
       return(
           <div className="row">
               <div className="col-md-10 mx-auto">
                   <table className="table table-bordered">
                       <thead>
                           <tr>
                               <th>ID</th>
                               <th>State</th>
                               <th>Title</th>
                               <th>Body</th>
                           </tr>
                       </thead>
                       <tbody>
                          {issues}
                       </tbody>
                   </table>
               </div>
           </div>
       );
    };
}

export default Home;