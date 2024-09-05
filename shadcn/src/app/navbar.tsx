import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
function Navbar() {
  const {setTheme} = useTheme()

    return <>
      <div className="flex bg-black h-10 justify-center items-center gap-40 w-full text-white">
        <div className="flex w-4/5 justify-between items-center">
          <svg width="120" height="15" viewBox="4985.5 484.6 300 29"><path fill="currentColor" d="M4997.9 513.5c4 0 6.9-1.4 9.4-3.7l-1.9-2.1c-2.1 1.9-4.3 3.2-7.3 3.2-5.4 0-9.6-4.7-9.6-11.7v-.2c0-6.8 4.2-11.6 9.6-11.6 3 0 5.2 1.3 7.1 3l1.9-2.3c-2.3-2-4.9-3.3-9-3.3-7.4 0-12.6 5.7-12.6 14.3v.2c0 8.6 5.1 14.2 12.4 14.2zM5012.1 513.4h2.9v-13.7h14.2v13.7h2.9v-28.6h-2.9V497H5015v-12.2h-2.9v28.6zM5038.6 513.4h3.1l2.8-7.6h12.8l2.8 7.6h3.3l-10.9-28.6h-3l-10.9 28.6zm6.9-10.4 5.4-14.3 5.4 14.3h-10.8zM5068.2 513.4h2.9v-10.6h5.9c6.7 0 11.3-3.3 11.3-9.2v-.1c0-5.5-3.9-8.9-10.8-8.9h-9.3v28.8zm3-13.4v-12.5h6.1c4.9 0 8.1 2.1 8.1 6.2 0 3.8-3.2 6.3-8.2 6.3h-6zM5097.9 513.4h2.9v-26h8.3v-2.7h-19.5v2.7h8.3v26zM5115.1 513.6h18v-2.8h-15v-11h13.3V497H5118v-9.5h14.8v-2.8H5115v28.9h.1zM5138.5 513.4h2.9v-10.6h6.9l7.6 10.6h3.6l-7.8-11.2c4.2-1 6.9-3.8 6.9-8.6v-.1c0-2.5-.8-4.7-2.1-6.2-1.6-1.7-4.4-2.7-7.9-2.7h-10v28.8h-.1zm2.9-13.4v-12.5h6.9c4.6 0 7.3 2.2 7.3 6.2v.1c0 3.8-2.7 6.3-7.7 6.3h-6.5v-.1zM5169.7 513.4h6v-23.2h7.4v-5.6h-20.8v5.6h7.4v23.2zM5188.4 513.4h6v-12.3h9.6v12.3h6v-28.6h-6v10.7h-9.6v-10.7h-6v28.6zM5216.5 513.4h6v-9.2h4l5.6 9.2h6.8l-6.1-10.5c3.2-1.5 5.3-4.4 5.3-8.6v-.2c0-2.7-.9-5-2.4-6.6-1.8-1.9-4.5-2.9-8.1-2.9h-11.1v28.8zm6-14.8v-8.4h4.5c3.2 0 5.1 1.4 5.1 4.2 0 2.5-1.7 4.2-5 4.2h-4.6zM5243.1 513.6h19.1V508h-13.1v-6.9h11.4v-5.6h-11.4v-5.4h12.9v-5.6h-18.9v29.1zM5266.5 513.6h19.1V508h-13.1v-6.9h11.4v-5.6h-11.4v-5.4h12.9v-5.6h-18.9v29.1z"></path></svg>
          <a className='text-sm hover:underline' href="/">Contanct Chapter Three for your next project</a>
        </div>
      </div>
      <div className="flex w-full justify-evenly items-center sticky h-16">
        <div className="flex gap-10 items-center">
          <a className='items-center flex-shrink hidden font-semibold text-[1.125rem] sm:flex sm:text-lg lg:text-base xl:text-lg'>Next.js for Drupal</a>
          <div className="flex gap-6">
            <h1 className='text-muted-foreground hover:text-black hover:dark:text-white hover:underline cursor-pointer'>Get started</h1>
            <h1 className='text-muted-foreground hover:text-black hover:dark:text-white hover:underline cursor-pointer'>Learn</h1>
            <h1 className='text-muted-foreground hover:text-black hover:dark:text-white hover:underline cursor-pointer'>Docs</h1>
            <h1 className='text-muted-foreground hover:text-black hover:dark:text-white hover:underline cursor-pointer'>Guides</h1>
            <h1 className='text-muted-foreground hover:text-black hover:dark:text-white hover:underline cursor-pointer'>Blogs</h1>
            <h1 className='text-muted-foreground hover:text-black hover:dark:text-white hover:underline cursor-pointer'>Contact</h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"></path>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.78 5.113C14.09 3.425 12.48 1.815 11.998 0c-.48 1.815-2.09 3.425-3.778 5.113-2.534 2.53-5.405 5.4-5.405 9.702a9.184 9.185 0 1 0 18.368 0c0-4.303-2.871-7.171-5.405-9.702M6.72 16.954c-.563-.019-2.64-3.6 1.215-7.416l2.55 2.788a.218.218 0 0 1-.016.325c-.61.625-3.204 3.227-3.527 4.126-.066.186-.164.18-.222.177M12 21.677a3.158 3.158 0 0 1-3.158-3.159 3.291 3.291 0 0 1 .787-2.087c.57-.696 2.37-2.655 2.37-2.655s1.774 1.988 2.367 2.649a3.09 3.09 0 0 1 .792 2.093A3.158 3.158 0 0 1 12 21.677m6.046-5.123c-.068.15-.223.398-.431.405-.371.014-.411-.177-.686-.583-.604-.892-5.864-6.39-6.848-7.455-.866-.935-.122-1.595.223-1.94C10.736 6.547 12 5.285 12 5.285s3.766 3.574 5.336 6.016c1.57 2.443 1.029 4.556.71 5.253"></path>
          </svg>
          <svg className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
          <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" className='h-7 flex justify-between w-20 rounded-3xl font-semibold dark:bg-transparent bg-[#ececec] text-blue-600'>
          v1.6.0
          <svg className="w-2 h-[3px] opacity-70 ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 dark:bg-transparent">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top">v1.6.0</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">v1.0.0</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='w-8 h-8' variant="outline" size="icon">
          <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
      </div>
    </>
}
export default Navbar