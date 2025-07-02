import React from 'react'

function Technical_skill() {

  const items = [
    {
      name: "JavaScript"
    },{
      name: "HTML / CSS"
    },{
      name: "Basic database knowledge (SQL, relational databases)"
    },{
      name: "C++"
    },{
      name: "GraphQL (Hasura)"
    },{
      name: "React"
    },{
      name: "Next.js"
    },{
      name: "Node.js"
    },{
      name: "Express.js"
    },{
      name: "SvelteKit"
    },{
      name: "Strapi"
    },{
      name: "Git (version control)"
    }
  ]

  return (
    <div className='session-box'>

      <div className='header-text'>Technical skills</div>

      <div className='flex gap-6.5 mt-5 p-5 bg-gray-800 rounded-2xl flex-wrap max-md:gap-4.5'>
        {items.map((item, index) => (
          <Item key={index} name={item.name} />
        ))}
      </div>
    </div>
  )
}

function Item({ name }) {
  return (
    <div className='flex justify-center items-center'>
      <div className='border-2 text-2xl px-5 py-1 rounded-4xl text-amber-300'>
        {name}
      </div>
    </div>
  )
}

export default Technical_skill