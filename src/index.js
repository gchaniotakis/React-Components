import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () =>{
    return (
       <div className = "ui container comments">
           <br></br>
           <ApprovalCard/>
           <CommentDetail  
                author = "Sam" 
                timestamp = "Today at 17:00" 
                content = "Nice one!"
                avatar = {faker.image.avatar()}
            /> 
           <CommentDetail  
                author = "Lee" 
                timestamp = "Today at 09:00" 
                content = "Hell yeah!"
                avatar = {faker.image.avatar()}
            />             
           <CommentDetail  
                author = "Anne" 
                timestamp = "Yesterdat at 19:00" 
                content = "Well done!"
                avatar = {faker.image.avatar()}
            />   
       </div> 
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));