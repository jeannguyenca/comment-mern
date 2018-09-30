import React, { Component } from 'react';
import 'whatwg-fetch';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import './CommentBox.css';

class CommentBox extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            error: null,
            author: '',
            text: '',
        };
        this.pollInterval = null;
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        if(!this.pollInterval) {
            this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
        }
    }

    componentWillUnmountt() {
        if(this.pollInterval) clearInterval(this.pollInterval);
        this.pollInterval = null;
    }

    loadCommentsFromServer = () => {
        //fetch returns a promise.
        fetch('/api/comments')
            .then(data => data.json())
            .then((res) => {
                if(!res.success) this.setState({error: res.error});
                else this.setState({data: res.data});
            });
    }

    render(){
        return (
            <div className="container">
                <div className="comments">
                    <h2>Comments</h2>
                    <CommentList data={DATA} />
                </div>
                <div className="form">
                    <CommentForm />
                </div>
            </div>
        );
    }
}

export default CommentBox;