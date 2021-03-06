import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import Button from '../components/ui-kits/Button/Button'
// import withApollo from '../utils/withApollo'
// import { useQuery } from '@apollo/react-hooks'
// import { GET_PRODUCTS } from '../graphql/product/product.query'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Card } from '../components/ui-kits/Card'

export const HomeContainer = styled.div``

export const StyledHomeBody = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
`;


function Home({products}) {
  // const { loading, error, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     input: {
  //       page: 1,
  //       keyword: 'Samsung',
  //     },
  //   },
  // })
  // if (error) return <h1>Error</h1>
  // if (loading) return <h1>Loading...</h1>

  // const product = data?.getAllProduct?.data
  // if (!products || !products.length) {
  //   return <p>Not found</p>
  // }

  return (
    <>
      <Head>
        <title>STRANGS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Layout>
        <StyledHomeBody>
          {products?.map(({product}) => (
            <Card
              key={product.id}
              imageURL={product.image}
              buttonGroups={
                <>
                  <Button>View</Button>
                  <Button>Add to Cart</Button>
                </>
              }
            >
              {product.name}
            </Card>
          ))}
        </StyledHomeBody>
      </Layout>
      <Footer />
    </>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://min-shop.herokuapp.com/rest/product');
  const product = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      product,
    },
  }
}
export default Home;
