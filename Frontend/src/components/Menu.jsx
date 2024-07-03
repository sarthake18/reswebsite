import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>At our restaurant, we proudly offer a selection of popular dishes that have captured the hearts of our customers. Our Classic Margherita Pizza, with fresh mozzarella, ripe tomatoes, and aromatic basil, remains a timeless favorite. For those who enjoy a bit of heat, our Spicy Buffalo Wings are a must-try, featuring a crispy exterior coated in our signature spicy sauce. The Creamy Alfredo Pasta, rich and comforting with a velvety sauce and topped with Parmesan cheese, is perfect for pasta lovers. Lastly, our Grilled Lemon Herb Chicken, marinated in a delightful blend of lemon and herbs, is grilled to perfection and served alongside seasonal vegetables. Each dish reflects our dedication to quality and flavor, ensuring a memorable dining experience for every guest. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
