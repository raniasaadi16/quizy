import 'tailwindcss/tailwind.css'
import '../style/style.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import Loading from '../components/Loading'
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false)
  Router.events.on('routeChangeStart', () => {
    setloading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    setloading(false)
  })
  return ( 
    <Layout>
      {loading && <Loading/>}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
