import React from 'react'
import IdeaItem from './ideaItem';

function IdeaList({ ideaList,refreshData }) {
  return (
    <div>
      {
        ideaList.map((idea, index) => (
          <IdeaItem idea={idea} key={index} index={index} refreshData={refreshData} />  // Correct component name and implicit return
        ))
      }
    </div>
  )
}

export default IdeaList
