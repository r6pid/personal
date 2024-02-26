'use client'

import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FiLoader } from 'react-icons/fi'

export default function Home() {
    const fetchData = async () => {
        const res = await fetch('https://api.github.com/users/r6pid/repos')
        const data = await res.json()
        return data
    }
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: fetchData,
    })
    return (
        <div className="w-full flex flex-col">
            <div>
                <div className="flex flex-row items-center mt-10">
                    <Image
                        src="/rapid.png"
                        alt="Oriel"
                        width={100}
                        height={100}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col ml-4 md:ml-6">
                        <p className="text-xl font-semibold">Oriel Nijamkin</p>
                        <p className="text-[0.9rem] text-neutral-400">
                            Buisness/Design-focused Fullstack Developer
                        </p>
                    </div>
                </div>
                <div className="flex flex-col mt-10 space-y-1">
                    <p className="text-base">About Me</p>
                    <p className="text-[0.9rem] text-neutral-400">
                        Hey! I'm currently still in high school, and learning to
                        be a fullstack developer with a focus on design and
                        buisness to create a overall better product. I'm
                        currently working on a few projects, and I'm always open
                        to new opportunities.
                    </p>
                </div>
                <div className="flex flex-col mt-10">
                    <p className="text-base">My Tools / Software</p>
                    <p className="font-semibold text-neutral-400 text-[0.9rem] mt-1">
                        Languages:
                        <span className="text-[0.9rem] text-neutral-400 font-normal ml-1.5">
                            Javascript, Typescript, Python
                        </span>
                    </p>
                    <p className="font-semibold text-neutral-400 text-[0.9rem] mt-1">
                        Frameworks:
                        <span className="text-[0.9rem] text-neutral-400 font-normal ml-1.5">
                            Next.js, React, Flask, Express, TailwindCSS,
                            ShadcnUI, Svelte
                        </span>
                    </p>
                    <p className="text-xs mt-2 text-neutral-500 font-semibold">
                        I have used or am currently using these tools in my
                        projects. I'm always open to learning new tools and
                        software.
                    </p>
                </div>
                <div className="flex flex-col mt-10  w-full">
                    <p className="text-base">Projects</p>
                    <p className="text-[0.9rem] text-neutral-400 mt-1">
                        A few of my projects have been deleted, but I'm
                        currently working on a few new ones.
                    </p>
                    <ol className="grid grid-cols-2 gap-2 mt-4 list-none w-full">
                        {isLoading && (
                            <div className="flex flex-row items-center gap-3">
                                <p className="text-neutral-500 font-semibold text-sm">
                                    Loading Repos...
                                </p>
                                <FiLoader className="w-4 h-4 animate-spin" />
                            </div>
                        )}
                        {data?.map((repo: any) => (
                            <li key={repo.id} className="mb-3 w-full flex">
                                <div className="flex rounded-[0.375rem] border-[0.0625rem] border-neutral-800 w-full p-3">
                                    <div className="flex w-full flex-col">
                                        <div className="flex w-full relative">
                                            <div className="flex flex-row items-center justify-center">
                                                <svg
                                                    aria-hidden="true"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    version="1.1"
                                                    width="16"
                                                    data-view-component="true"
                                                    className="mr-2 fill-[#848d97]"
                                                >
                                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                                </svg>
                                                <span className="relative">
                                                    <Link
                                                        target="_blank"
                                                        href={repo.html_url}
                                                        className="text-[#2f81f7] font-semibold hover:underline"
                                                    >
                                                        <span>{repo.name}</span>
                                                    </Link>
                                                </span>
                                                <span></span>
                                                <span className="text-xs ml-2 inline border-[#30363d] border-[1px] rounded-2xl text-[#848d97] py-[0.12em] px-[0.5em]">
                                                    Public
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs mt-2 text-neutral-500">
                                            {repo.description ||
                                                'No description'}
                                        </p>
                                        {repo.language && (
                                            <p className="mt-2.5 text-xs text-neutral-500">
                                                <span className="inline-flex items-center justify-center gap-1">
                                                    <span className="rounded-full inline-block w-[12px] h-[12px] bg-[#3572A5]"></span>
                                                    <span className="">
                                                        {repo.language}
                                                    </span>
                                                </span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
