import React from 'react';
import { ThreeDots } from "react-loader-spinner";

export default function Loading({ color="#FF0000", size=60 }){

  return (
    <div style={{margin: "auto auto"}}>
      <ThreeDots
         color={color}
         height={size}
         width={size}
      />
    </div>
  )
}