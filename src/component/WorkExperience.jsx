const WorkExperience = () => {
    return (
        <section className="container mx-auto max-w-3xl px-6 lg:px-0 mt-8 py-8 md:px-12">
            <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center m-4">Work Experiences</h3>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full max-w-md">
                    <div className="text-justify mb-4">
                        <h3 className="font-semibold text-xl">FullStack Engineer</h3>
                        <p className="text-sm"><a target="_blank" href="https://www.hanabank.co.id/">Hana Bank Indonesia</a></p>
                        <p className="text-xs">Semanggi, South Jakarta</p>
                        <p className="text-xs">May 2022 - Present | Full-time</p>
                    </div>
                    <div className="flex justify-start gap-2 mb-4">
                        <button
                            type="button"
                            className="inline-block rounded border border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                        >
                            Java Spring boot
                        </button>
                        <button
                            type="button"
                            className="inline-block rounded border border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
                        >
                            React Js
                        </button>
                    </div>
                    <hr className="my-4" />
                    <div>
                        <ol className="list-decimal pl-4">
                            <li className="mb-2">Design and implement backend services using Spring boot and Oracle</li>
                            <li className="mb-2">Design and overall architecture of web applications</li>
                            <li className="mb-2">Integration front end and back end to other systems</li>
                            <li className="mb-2">Develop web based applications</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience;
