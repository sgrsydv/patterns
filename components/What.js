const What = props => (
    <section class="text-gray-600 body-font">
        <div class="container mx-auto px-5 flex items-center justify-center flex-col">
            <div class="lg:max-w-3xl lg:w-full mx-auto">
                <img class="rounded" alt="Abstract-factory-pattern" src="/abstract-factory-pattern.svg" />
            </div>
            <div class="lg:w-3/6 w-full">
                <h1 class="py-4 title-font sm:text-3xl text-2xl font-medium text-gray-900">{props.title}</h1>
                <p class="text-lg mb-8 leading-relaxed">{props.description}</p>
            </div>
        </div>
    </section>
)

export default What;