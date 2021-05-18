import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Layout from '../../components/Layout'
import LeftButton from '../../components/LeftButton'
import RightButton from '../../components/RightButton'
import Title from '../../components/Title'

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Home: Desing patterns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LeftButton route="/abstract-factory-pattern"/>
        <RightButton route=""/>

        <Title name="Factory Method Pattern" description="In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created."/>
      </main>

    </Layout>
  )
}