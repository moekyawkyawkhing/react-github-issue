import React from 'react';
class Opened extends React.Component{
    render(){
        const issues= this.props.issues.map((issue) => {
            return (
                <tr key={issue.id}>
                    <td>{issue.number}</td>
                    <td>{issue.title}</td>
                    <td>{issue.body}</td>
                    <td><button className="btn btn-sm btn-danger" onClick={()=> this.props.handleClosed(issue.number)} >Closed</button></td>
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
                               <th>Title</th>
                               <th>Body</th>
                               <th></th>
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

export default Opened;