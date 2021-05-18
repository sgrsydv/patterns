import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Content from '../../components/Content'
import Layout from '../../components/Layout'
import LeftButton from '../../components/LeftButton'
import RightButton from '../../components/RightButton'
import Title from '../../components/Title'

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Abstract Factory Pattern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LeftButton route="/abstract-factory-pattern" />
        <RightButton route="" />
        <Content>
        <Title name="Factory Method Pattern" description="The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes." />
        </Content>
      </main>

    </Layout>
  )
}