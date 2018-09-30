import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const Comment = props => (
    <div className="singleComment">
        <img alt="unknown_user" className="userImage" src={`https://garden.zendesk.com/css-components/avatars/images/ma.png`} />
        <div className="content">
            <div className="singleCommentContent">
                <h3>{props.author}</h3>
                <ReactMarkdown source={props.children} />
            </div>
            <div className="singleCommentButtons">
            </div>
        </div>
    </div>
);

Comment.propTypes = {
    author: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
};

export default Comment;
