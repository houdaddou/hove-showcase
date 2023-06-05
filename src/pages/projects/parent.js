import React from 'react'
import Button from '@mui/material/Button';
import { useState } from 'react';
import Child from './child';

export default function Parent() {
    const [data, setData] = useState('');
    const childToParent = (childdata) => {
        setData(childdata);
        alert("hello zin !")
      }
  
    const parentToChild = () => {
      setData("This is data from Parent Component to the Child Component.");
    }
  return (
    <div>
    <Child parentToChild={data} childToParent={childToParent} />
    <Button primary onClick={() => parentToChild()} variant="contained">Click Parent</Button>
    </div>
  )
}
