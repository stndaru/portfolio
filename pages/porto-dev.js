import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Legacy.module.css'

function PortoDevHome() {
    return (
        <div>
        <div class="relative overflow-hidden bg-white">
            <div class="mx-auto max-w-7xl">
                <div class="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                <svg class="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div>
                    <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
                    <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div class="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                        <div class="flex w-full items-center justify-between md:w-auto">
                            <a href="#">
                            <span class="sr-only">VLNX</span>
                            </a>
                            <div class="-mr-2 flex items-center md:hidden">
                            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        </div>
                        <div class="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Home</a>

                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Portfolio</a>

                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900">About</a>
                        </div>
                    </nav>
                    </div>

                    <div class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
                    <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                        <div class="flex items-center justify-between px-5 pt-4">
                        <div class="-mr-2">
                            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close main menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        </div>
                        <div class="space-y-1 px-2 pt-2 pb-3">
                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Home</a>

                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Portfolio</a>

                        <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">About</a>

                        </div>
                    </div>
                    </div>
                </div>

                <main class="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span class="block xl:inline">I&apos;m Ndaru. </span>
                        <span class="block text-indigo-600 xl:inline">An aspiring UI/UX Designer</span>
                    </h1>
                    <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">I design stuff and make other stuff</p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                        <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">View My Works</a>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Let&apos;s Get in Touch</a>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <Image class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="/comingsoon_main.jpg" alt="Vercel Logo" layout='fill'/>
            </div>
        </div>


        


        <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    <a href="#" class="group">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <div class="h-full w-full object-cover object-center group-hover:opacity-75">
                            <Image src="/jakartakota.jpg" alt="Vercel Logo" layout='fill'/>
                        </div>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Jakarta Kota</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
                    </a>

                    <a href="#" class="group">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <div class="h-full w-full object-cover object-center group-hover:opacity-75">
                            <Image src="/nationalmonument.jpg" alt="Vercel Logo" layout='fill'/>
                        </div>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Monumen Nasional</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                    </a>

                    <a href="#" class="group">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <div class="h-full w-full object-cover object-center group-hover:opacity-75">
                            <Image src="/wisma46.jpg" alt="Vercel Logo" layout='fill'/>
                        </div>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Wisma 46</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
                    </a>
                </div>
            </div>
        </div>

        </div>

        
    )
  }
  
  export default PortoDevHome