import React, { Component } from "react";

class Subject extends Component {

    render() {
        return (
            <ul>
                <li>
                    <a
                        href="/creat"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeMode('create')
                        }}
                    >create</a>
                </li>
                <li>
                    <a
                        href="/update"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeMode('update')
                        }}
                    >update</a>
                </li>
                <li>
                    <input
                        type="button"
                        value="delete"
                        onClick={function (e) {
                            //delete는 버튼 사용.
                            e.preventDefault();
                            this.props.onChangeMode('delete');
                        }.bind(this)}></input>
                </li>
            </ul >
        );
    }
}

export default Subject;