import React, { useState, useEffect } from 'react'
import butter from './butter-client'
import PostSnippet from './PostSnippet'
import './Blog.css'

export const Blog = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const fetchPosts = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await butter.post.list({
        page: 1,
        page_size: 3,
      })
      setData(response.data)
    } catch (e) {
      setError(`There was an error: ${e.message}`)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const getPosts = () => (
    <div className="col">
      {data.data.map((post, i) => (
        <PostSnippet {...post} key={i} />
      ))}
    </div>
  )

  const getContent = () => {
    if (loading) return <p>Fetching posts...</p>
    if (error) return <p>{error}</p>
    if (!data) return null
    return getPosts()
  }

  return (
    <div className="test-eg">
      {/*<h1>新闻中心</h1>*/}
      <div className="display-blog">{getContent()}</div>
    </div>
  )
}

