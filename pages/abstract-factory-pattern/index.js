import Head from 'next/head'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import Content from '../../components/Content'
import Layout from '../../components/Layout'
import LeftButton from '../../components/LeftButton'
import RightButton from '../../components/RightButton'
import Title from '../../components/Title'
import Tip from '../../components/Tip'
import Wikipedia from '../../components/Wikipedia'
import Line from '../../components/Line'
import What from '../../components/What'
import Step from '../../components/Step'
import Section from '../../components/Section'

export default function FirstPost() {
  return (
    <Layout>

      <Head>
        <title>Abstract Factory Pattern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LeftButton route="" />
        <RightButton route="/factory-method-pattern" />
        <Content>
          <Title name="Abstract Factory Pattern" description="The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes." />
          <Line />
          <What title="What?" description="The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes. In normal usage, the client software creates a concrete implementation of the abstract factory and then uses the generic interface of the factory to create the concrete objects that are part of the theme. The client does not know (or care) which concrete objects it gets from each of these internal factories, since it uses only the generic interfaces of their products. This pattern separates the details of implementation of a set of objects from their general usage and relies on object composition, as object creation is implemented in methods exposed in the factory interface." />
          <Tip content="Specialised classes not meant to be <b>imported</b> outside module." />

          <section class="text-gray-600 body-font">
            <div class="container mx-auto px-5 flex flex-wrap">
              <div class="flex flex-wrap w-full">
                <div class="lg:w-3/6 md:w-1/2 md:pr-10 md:py-6 mx-auto">
                  <h1 class="pb-10 title-font sm:text-3xl text-2xl font-medium text-gray-900">How?</h1>

                  <Step title="STEP 1" description="Determine construction theme for your object. To have different varients(specialised factories) of abstract factory common theme is necessary.">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </Step>
                  <Step title="STEP 2" description="Find correct level of abstraction for your products. Create all required abstract products which relates to your construction theme.">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </Step>
                  <Step title="STEP 3" description="Create abstraction factory and include interface(methods) to create abstract products which we detemined in step 1.">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </Step>
                  <Step title="STEP 4" description="Create specialised products which implements APIs decided with the help of abstract products.">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </Step>
                  <Step title="STEP 5" description="Create specialised factories which implements APIs decided with the help of abstract factory.">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </Step>
                  <Step title="FINISH" description="Inject correct factory to your application at compile or runtime and create products. Viola!">
                    
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </Step>
                </div>
              </div>
            </div>
          </section>

          <Section title="When?" description={<p>If <b>multiple themes</b> exists to create collection of <b>related</b> objects then this pattern is good choice. If multiple themes exists but objects are not related then see next pattern: Factory method pattern.</p>}/>
          <Section title="Example" description={<p>UI applications generally require to create different forms to read user input. To read specific type of input, a standard input form is required. Application consists different modules to treat these forms generally. For example, layout creation module doesn't require to know about kind of form, it just needs to know sizing and position information about form. So Layout creation module should treat Textbox, RadioBox, CheckBox etc. generally. These specific forms could be implement common interface like GenericForm. This common abstraction can be later handed over to different prodect modules and treated generally.
                <br /><br />To create these specialized forms, project can contain a factory. This factory can create different specialized forms based on input configuration and create a GenericForm. Based on style of input configuration, project can have different implementation of factory. Let's say configuration is file exported of design tool like Sketch and Figma. Now, to create forms from Sketch configuration file, project needs to have SketchFactory and for Figma, FigmaFactory.</p>}/>

          <Line />
          <Wikipedia />
        </Content>
      </main>

    </Layout>
  )
}