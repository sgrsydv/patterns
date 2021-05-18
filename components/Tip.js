const Tip = props => (
    <section class="text-gray-600 body-font">
        <div class="container mx-auto px-5 flex flex-wrap">
            <div class="lg:w-3/6 md:w-1/2 md:pr-10 py-6 my-6 px-3 mx-auto flex items-center bg-gray-100">
                <img class="rounded w-12 h-12" alt="Lightbulb" src="/lightbulb.svg" />
                <p class="px-5">{props.content}</p>
            </div>
        </div>
    </section>
);

export default Tip;