import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['Smash bros'])

  // const handleAdd = () => {
  //   setCategories([...categories, 'hunterXhunter']);
  //   setCategories( cats => [...categories, 'HunterXHunter'])
  // }

  return (
    <div>
        <h2>GifExpertApp owo</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />


        <ol>
          { 
            categories.map(category => (
              <GifGrid key={category} category={category}/>
            )) 
          }
        </ol>
        
    </div>
    
  )
}