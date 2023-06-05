import React from 'react'
import Button from '@mui/material/Button';

export default function Child({parentToChild, childToParent}) {
  const dataChild = "This is data from Child Component to the Parent Component."

  return (
    <div> 
      {parentToChild}
      <Button primary onClick={() => childToParent(dataChild)} variant="contained">Click Child</Button>
    </div>

  )
}
