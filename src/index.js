import React from 'react'
import './index.css'
import Card from './Components/Card/Card'

const Cardy = (props) => {
  return <Card headerContent={props.headerContent} bodyContent={props.bodyContent} footerContent={props.footerContent} />
}

export default Cardy;
