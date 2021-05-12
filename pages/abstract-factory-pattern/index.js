import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import Layout from '../../components/Layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Home: Desing patterns</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section class="text-gray-600 body-font">
          <div class="container pt-24 px-5 mx-auto pb-0">
            <div class="text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Abstract Factory pattern</h1>
              <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <section class="text-gray-600 body-font">
          <div class="container mx-auto flex  md:flex-row flex-col items-center">
            <div class="lg:max-w-3xl lg:w-full mx-auto">
              <img class="rounded" alt="hero" src="/abstract-factory-pattern.svg"/>
            </div>
          </div>
        </section> */}

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex items-center justify-center flex-col">
            <div class="lg:max-w-3xl lg:w-full mx-auto">
              <img class="rounded" alt="hero" src="/abstract-factory-pattern.svg"/>
            </div>
            <div class="lg:w-2/5 w-full">
              <h1 class="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Description</h1>
              <p class="text-lg mb-8 leading-relaxed">The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes. In normal usage, the client software creates a concrete implementation of the abstract factory and then uses the generic interface of the factory to create the concrete objects that are part of the theme. The client does not know (or care) which concrete objects it gets from each of these internal factories, since it uses only the generic interfaces of their products. This pattern separates the details of implementation of a set of objects from their general usage and relies on object composition, as object creation is implemented in methods exposed in the factory interface.</p>
              {/* <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
              </div> */}
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mx-auto">
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
                    <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
                    <p class="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
                    <p class="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
                    <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
                <div class="flex relative">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div class="flex-grow pl-4">
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
                    <p class="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="overflow-ellipsis overflow-hidden sm:pr-16 text-2xl font-medium title-font text-gray-900">Wikipedia</h1>
              <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">VISIT</button>
            </div>
          </div>
        </section>

      </main>

    </Layout>
  )
}