import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './Post.css'

export const Post = props => {
  const data = props.location.state
  return (
    <div className="post">
      <h2>{data?.title}</h2>
      <hr />
      <div className="author">
        {/*<img src={data.author.profile_image} alt="Author" />*/}
        <div>
          Published by{' '}
          <strong>
            {data?.author.first_name} {data?.author.last_name}
          </strong>{' '}
          on {moment(data?.published).format('MMMM Do, YYYY')}
        </div>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: data?.body }} className="post-body"/>
      <hr />
      <div className="goback"><Link to="/">&larr; 返回新闻中心</Link></div>
    </div>
  )
}


