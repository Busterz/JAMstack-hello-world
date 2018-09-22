import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>I am Deddy and definitely not from San Francisco.</p>
    <p>
      I first enctountered this when someone tweeted about how he got free ticket to the hackathon 
      and it got retweeted by someone else.</p>
    <p>
      I went to check out the page. 
      I have always been interested in competitive programming.
      However, what intrigued me more is GatsbyJS.
    </p>
    <p>
      I have never used <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> before and I went on to try it.
      I mean, in the end I still learn something new, so why not.
    </p>
    <p>
      I also have never used or heard about <a href="https://www.netlify.com/" target="_blank">Netlify</a> before.
      So it is also worth a try.
    </p>
    <p>Regardless, I don't consider myself a pro and in fact, it is more of a newbie.</p>
    <p>Let's see if I can win this ticket too.</p>
    <Link to="/page-2/">About</Link>
  </Layout>
)

export default IndexPage
