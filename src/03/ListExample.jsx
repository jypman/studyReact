import React, {Component} from 'react';

class ListExample extends Component {
    render() {
        const todoList = [
            {taskName : '리액트 생명주기 공부하기', finished : true},
            {taskName : '리덕스 공부하기', finished : false},
        ]
        return (
            <div>
                {todoList.map((todo, i) => <div key={`tl_${i}`}>{todo.taskName}</div>)}
            </div>
        );
    }
}

export default ListExample;