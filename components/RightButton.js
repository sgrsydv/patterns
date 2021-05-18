import Link from 'next/link'

const RightButton = (props) => {
    return (
        <div class="fixed right-0 bottom-0 lg:inset-y-1/3 w-14 h-14 md:w-20 md:h-20 my-5 mx-10 bg-gray-100 rounded-full grid self-center">
            <Link href={props.route}>
                <a class="flex title-font font-medium items-center text-gray-900 mb-4">
                    <img class="rounded px-5 py-5 md:px-7 md:py-7" alt="Lightbulb" src="/next.svg" />
                </a>
            </Link>
        </div>
    )
}

export default RightButton;