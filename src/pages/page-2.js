import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi there!</h1>
    <p>I am Deddy, a fresh graduate from Singapore.
      I have participated in 4 hackathons before but I am still learning.
      You can check out myself on <a href="https://deddytandean.com" target="_blank">deddytandean.com</a> if you are interested.
    </p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
