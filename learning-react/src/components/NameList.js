import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },

    ]
    // const nameList = names.map(name => <h2>{name}</h2>)
    const nameList = names.map((name, index) =>  <h2 key={index}>{index} {name}</h2>)
    // <h2>
    //     I am {person.name}. I am {person.age} years old. I know {person.skill}
    // </h2>
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {/* {
            names.map(name => <h2>{name}</h2>)
        } */}
        {
            nameList
        }
    </div>
  )
}

export default NameList