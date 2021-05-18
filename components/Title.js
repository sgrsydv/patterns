import Link from 'next/link'

const Title = (props) => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container pt-24 px-5 mx-auto pb-0">
                <div class="text-center">
                    <h1 class="sm:text-5xl text-4xl font-medium title-font text-gray-900">{props.name}</h1>
                    <Link href="/creational-patterns">
                        <a class="inline-block py-1 px-2 rounded bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-xs font-medium tracking-widest my-4">CREATIONAL PATTERNS</a>
                    </Link>
                    <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{props.description}</p>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title;