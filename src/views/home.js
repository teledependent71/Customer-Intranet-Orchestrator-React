import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Intranet Orchestrator</title>
        <meta property="og:title" content="Customer Intranet Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
