import React from 'react'
import moment from 'moment'
import { Link,BrowserRouter,Redirect } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


const PostSnippet = props => {

  return (
    <div className="post-snippet">
      <h3>
          <Router>
          <Link to={{
          pathname: `/${props.slug}`,
          state: props
          }} 
          onClick={() => window.alert('请点击并刷新浏览新闻')}
          >
          {props.title}
          </Link>
          
         </Router>
        </h3>
      <p>{props.summary}</p>
      <div>
       {/* <div>
          By{' '}
          <strong>
            {props.author.first_name} {props.author.last_name}
          </strong>
       </div>*/}
        <span className="publication-date">
          {moment(props.published).format('YYYY-MM-DD')}
        </span>
      </div>
    </div>
  )
}

export default PostSnippet