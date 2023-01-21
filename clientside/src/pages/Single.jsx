import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
const single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://photos-elsoar.com/wp-content/images/Best-Covers-for-Facebook-Timeline-5.jpg" alt="coverimg" />
      <div className="user">
        <img src="https://sm.askmen.com/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_gstt.jpg" alt="userimg" />
      <div className="info">
        <span>John</span>
        <p>posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write/edit=2`}>
        <img src={Edit} alt="edit" />
        </Link>
        
        <img src={Delete} alt="delete" />
      </div>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusamus magni aperiam neque atque assumenda voluptatibus, vero maiores ullam at voluptatum ratione mollitia facere nobis eligendi fugit aliquam illum voluptates iusto veniam. Excepturi est minima labore necessitatibus dolor quasi odit omnis inventore assumenda aperiam! Sequi voluptate sunt perferendis, aliquid perspiciatis et! Fugiat rem accusamus similique, omnis perferendis voluptates. Officiis non sapiente quae voluptas alias id excepturi sit, vitae cum veniam nam minus nobis laudantium sed explicabo, fuga accusantium sequi. Unde numquam expedita consectetur excepturi velit blanditiis ipsam, vel ea veniam illo nostrum architecto nam fugiat iste sapiente aut dolorum neque.
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis dicta, molestiae quaerat, facere maiores provident nulla, ea modi repellendus nisi deleniti. Ipsum quo eius natus, facilis beatae quia saepe consectetur perspiciatis cupiditate temporibus possimus sint, accusamus illum cum optio molestias animi corporis expedita repudiandae amet quod enim iusto vitae! Expedita sapiente saepe quibusdam. Iste, similique quam explicabo, optio voluptate dolorem repellendus itaque voluptatum libero porro voluptates, exercitationem beatae error deserunt animi accusamus laborum quasi! Quia, suscipit? Labore, delectus ipsam! Nesciunt excepturi dolor iure accusamus laborum? Quia consequuntur sequi mollitia in omnis doloremque? Consectetur atque, veniam culpa temporibus nemo nam beatae.
      </p>
      </div>

      
      <Menu/>


    </div>
  )
}

export default single