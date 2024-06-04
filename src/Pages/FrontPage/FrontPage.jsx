import React from 'react'
import Header from '../../Components/Header/Header'
import Body from '../../Components/Body/Body'
import './FrontPage.css'

const FrontPage = () => {
  return (
    <>
      <div id='abc'>
        <div className="container py-4 sticky-top">
          <Header />
        </div>
        <div className='fa-success' >
          <div className="container py-4">
            <Body />
          </div>
        </div>
      </div>
    </>)
}

export default FrontPage