import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Home: Desing patterns</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">BRIEF INTRODUCTION TO</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SOFTWARE DESIGN PATTERNS</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development.</p>
              </div>
              <div class="flex flex-wrap">
                <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Creational patterns</h2>
                  <p class="leading-relaxed text-base mb-4">In software engineering, creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.</p>
                  <Link href="/creational-patterns">
                    <a class="text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Structural patterns</h2>
                  <p class="leading-relaxed text-base mb-4">In software engineering, structural design patterns are design patterns that ease the design by identifying a simple way to realize relationships among entities.</p>
                  <Link href="/structural-patterns">
                    <a class="text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Behavioural patterns</h2>
                  <p class="leading-relaxed text-base mb-4">In software engineering, behavioral design patterns are design patterns that identify common communication patterns among objects. By doing so, these patterns increase flexibility in carrying out communication.</p>
                  <Link href="/behavioural-patterns">
                    <a class="text-indigo-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>


      </div>
    </Layout>
  )
}
