import React from 'react'

const Menu = () => {
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
    <div className='menu'> 
        <h1>other posts which you may like </h1>
{posts.map(post=>(
    <div className="post" key={post.id}>
        <img src={post.img} alt="blogimg" />
        <h2>{post.title}</h2>
        <button>Read more</button>
    </div>
))}
    </div>
  )
}

export default Menu