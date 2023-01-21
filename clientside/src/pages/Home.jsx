import React from 'react'
import {Link} from 'react-router-dom'
const home = () => {
  const posts=[
    {
      id:1,
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img:"https://media.istockphoto.com/photos/travel-picture-id494184197?k=6&m=494184197&s=170667a&w=0&h=OqhqJPMLlqeMOssFyLNAFQdtR67Bj0icUtxG06MJ3wU=",

    },
    {
      id:2,
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img:"https://media.istockphoto.com/photos/travel-picture-id494184197?k=6&m=494184197&s=170667a&w=0&h=OqhqJPMLlqeMOssFyLNAFQdtR67Bj0icUtxG06MJ3wU=",

    },
    {
      id:3,
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img:"https://media.istockphoto.com/photos/travel-picture-id494184197?k=6&m=494184197&s=170667a&w=0&h=OqhqJPMLlqeMOssFyLNAFQdtR67Bj0icUtxG06MJ3wU=",

    },
    {
      id:4,
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      img:"https://media.istockphoto.com/photos/travel-picture-id494184197?k=6&m=494184197&s=170667a&w=0&h=OqhqJPMLlqeMOssFyLNAFQdtR67Bj0icUtxG06MJ3wU=",

    },
  ];
  return (
    <div className='home'>
<div className='posts'>
    {posts.map(post=>(
      <div className='post' key={post.id}>
        <div className="img">
          <img src={post.img} alt="blogimg" />
        </div>
        <div className="content">
          <Link className='link' to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    ))}
</div>
    </div>
  )
}

export default home