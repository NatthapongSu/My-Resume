import React from 'react'

function Work() {
  return (
    <div className='session-box'>
      <div className='header-text'>Study Work Experience</div>

      <div className='bg-gray-800 rounded-2xl p-5 max-md:p-4 flex flex-col gap-10'>
        <WorkItem title={"Final Project: Development of a Website for the Faculty of Political Science and Law, Burapha University"} 
          desc={["Developed a new, modern, and user-friendly website for a faculty using SvelteKit and Strapi"]}
          date={`(Dec 2024 - May 2025)`}
        />

        <WorkItem title={"Internship in TTT Brother Co.,Ltd."} 
          desc={["Contributed to an ERP system using React, Express.js, and Hasura GraphQL Engine to enhance interactivity."]}
          date={`(May 2024 - Oct 2024)`}
        />

        <WorkItem title={"Worked in collaboration with NECTEC"} 
          desc={["Contributed to The Culture Game Management System using React and Express.js, which detects the user’s location and triggers a quiz game when the user enters a defined area."]}
          date={`(2023 - 2024)`}
        />

        <WorkItem title={"Software Engineering Camp Subject"} 
          desc={["I had the privilege of working collaboratively with a team of fellow students on an HMS (Hardware Management System) project, with ClickNext as our product owner."]}
          date={`(April 2023)`}
        />
      </div>
    </div>
  )
}

function WorkItem({ title, desc, date }) {
  return (
    <div>
      <div className='text-2xl text-amber-400'>
        {title}
        <div className="text-2xl text-gray-300">{date}</div>
      </div>
      {desc.map((item, index) => {
        return(
          <li key={index} className='text-xl'>{item}</li>
        )
      })}
    </div>
  )
}

export default Work