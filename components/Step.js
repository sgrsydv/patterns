const Step = props => (
    <div class="flex relative pb-12">
        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            {props.children}
        </div>
        <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">{props.title}</h2>
            <p class="leading-relaxed">{props.description}</p>
        </div>
    </div>
)

export default Step;


// const Step1 = props => (

// );

// export default Step1;