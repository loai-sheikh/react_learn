import React from 'react'
import blog_image_1 from '../assets/images/s1.jpg'
import blog_image_2 from '../assets/images/s2.jpg'

const Blog = (props) => {
  return (
    <section>
      <h2>this is Blog</h2>
      <p>{props.blog2}</p>
      <div>
        <img src={blog_image_1} title="Blog image" alt="blog img" />
      </div>
      <div>
        <img src={blog_image_2} title="Blog image" alt="blog img" />
      </div>
    </section>
  )
}

export default Blog
