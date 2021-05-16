import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import Layout from '../../components/Layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Abstract Factory Pattern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div class="fixed lg:inset-y-1/3 sm:bottom-0 left-0 w-20 h-20 my-10 mx-10 bg-gray-100 rounded-full grid self-center">
        </div>

        <div class="fixed inset-y-1/3 right-0 w-20 h-20 my-10 mx-10 bg-gray-100 rounded-full grid self-center">
        </div>

        <section class="text-gray-600 body-font">
          <div class="container pt-24 px-5 mx-auto pb-0">
            <div class="text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Abstract Factory Pattern</h1>
              <Link href="/creational-patterns">
                <a class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest my-4">CREATIONAL PATTERNS</a>
              </Link>
              <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.</p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex items-center justify-center flex-col">
            <div class="lg:max-w-3xl lg:w-full mx-auto">
              <img class="rounded" alt="Abstract-factory-pattern" src="/abstract-factory-pattern.svg" />
            </div>
            <div class="lg:w-3/6 w-full">
              <h1 class="py-4 title-font sm:text-3xl text-2xl font-medium text-gray-900">Description</h1>
              <p class="text-lg mb-8 leading-relaxed">The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes. In normal usage, the client software creates a concrete implementation of the abstract factory and then uses the generic interface of the factory to create the concrete objects that are part of the theme. The client does not know (or care) which concrete objects it gets from each of these internal factories, since it uses only the generic interfaces of their products. This pattern separates the details of implementation of a set of objects from their general usage and relies on object composition, as object creation is implemented in methods exposed in the factory interface.</p>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex flex-wrap">
            <div class="lg:w-3/6 md:w-1/2 md:pr-10 py-6 my-6 px-3 mx-auto flex items-center bg-gray-100">
              <img class="rounded w-12 h-12" alt="Lightbulb" src="/lightbulb.svg" />
              <p class="px-5">Specialised classes not meant to be <b>imported</b> outside module.</p>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex flex-wrap">
            <div class="flex flex-wrap w-full">
              <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6 mx-auto">
                <h1 class="pb-10 title-font sm:text-3xl text-2xl font-medium text-gray-900">Implementation</h1>
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
                    <p class="leading-relaxed">Determine construction theme for your object. To have different varients(specialised factories) of abstract factory common theme is necessary.</p>
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
                    <p class="leading-relaxed">Find correct level of abstraction for your products. Create all required abstract products which relates to your construction theme.</p>
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
                    <p class="leading-relaxed">Create abstraction factory and include interface(methods) to create abstract products which we detemined in step 1.</p>
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
                    <p class="leading-relaxed">Create specialised products which implements APIs decided with the help of abstract products.</p>
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
                    <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 5</h2>
                    <p class="leading-relaxed">Create specialised factories which implements APIs decided with the help of abstract factory.</p>
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
                    <p class="leading-relaxed">Inject correct factory to your application at compile or runtime and create products. Viola!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex items-center justify-center flex-col">
            <div class="lg:w-3/6 w-full">
              <h1 class="py-4 title-font sm:text-3xl text-2xl font-medium text-gray-900">Example</h1>
              <p class="text-lg mb-8 leading-relaxed">UI applications generally require to create different forms to read user input. To read specific type of input, a standard input form is required. Application consists different modules to treat these forms generally. For example, layout creation module doesn't require to know about kind of form, it just needs to know sizing and position information about form. So Layout creation module should treat Textbox, RadioBox, CheckBox etc. generally. These specific forms could be implement common interface like GenericForm. This common abstraction can be later handed over to different prodect modules and treated generally.
              <br/><br/>To create these specialized forms, project can contain a factory. This factory can create different specialized forms based on input configuration and create a GenericForm. Based on style of input configuration, project can have different implementation of factory. Let's say configuration is file exported of design tool like Sketch and Figma. Now, to create forms from Sketch configuration file, project needs to have SketchFactory and for Figma, FigmaFactory.</p>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container mx-auto px-5 flex items-center justify-center flex-col">
            <div class="lg:w-3/6 w-full">
              <h1 class="py-4 title-font sm:text-3xl text-2xl font-medium text-gray-900">Summary</h1>
              <p class="text-lg mb-8 leading-relaxed">If <b>multiple themes</b> exists to create collection of <b>related</b> objects then this pattern is good choice. If multiple themes exists but objects are not related then see next pattern: Factory method pattern.</p>
            </div>
          </div>
        </section>

        <section>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow break-words sm:pr-16 text-2xl font-medium title-font text-gray-900">Wikipedia</h1>
              <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                <a href="https://en.wikipedia.org/wiki/Abstract_factory_pattern" target="_blank">VISIT</a>
              </button>
            </div>
          </div>
        </section>

      </main>

    </Layout>
  )
}