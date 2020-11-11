import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components'
import '../styles/index.scss'

const AboutPage = () => (
  <Layout>
    <h1>About me</h1>
    <p>Christos is a lot of things, described here</p>
    <p>
      Need a dev? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

export default AboutPage
