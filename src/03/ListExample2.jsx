import React, {Component} from 'react';

class ListExample2 extends Component {
    render() {
        const todoList = [
            {taskName : '리액트 생명주기 공부하기', finished : true},
            {taskName : '리덕스 공부하기', finished : false},
        ];
        return (
            <React.Fragment>
                {todoList.map((todo) => <div key={todo.taskName}>{todo.taskName}</div>)}
            </React.Fragment>
        );
    }
}

export default ListExample2;