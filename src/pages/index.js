import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components'
import '../styles/index.scss'

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <h2>My name is Christos</h2>
    <p>
      Need a dev? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
)

export default IndexPage
