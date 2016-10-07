import React from 'react';
import {render} from 'react-dom';

import CommentBox from './CommentBox.jsx';

let listOfUsers = '/api/comments'
let prevChatUrl = '/api/comments'

let data = {
	listOfUsers,
	prevChatUrl
}

render(<CommentBox data={data} />, document.getElementById('app'));

