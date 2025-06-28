import React from 'react'

function Technical_skill() {

  const items = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    },{
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQ4MH3vLA6l72ULn3Up_6undPBcXoERMFcA&s",
      name: "JavaScript"
    }
  ]

  return (
    <div className='session-box'>

      <div className='header-text'>Technical_skill</div>

      <div className='flex gap-7 mt-5 p-5 bg-gray-800 rounded-2xl flex-wrap max-md:gap-1'>
        {items.map((item, index) => (
          <Item key={index} img={item.img} name={item.name} />
        ))}
      </div>
    </div>
  )
}

function Item({ name, img }) {
  return (
    <div className='flex-col flex justify-center items-center'>
      <div className='w-30 max-md:w-17'>
        <img src={img} alt="JavaScript_img" className='rounded-2xl' />
      </div>

      <div className='n-text'>
        {name}
      </div>
    </div>
  )
}

export default Technical_skill