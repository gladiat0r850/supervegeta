import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function HeroSection() {
  return <>
  <div className="flex justify-center">
    <div className="flex flex-col gap-5 items-center mt-14 w-3/4">
      <a className="inline-flex space-x-1 mx-auto bg-[#111] text-white hover:underline text-sm items-center rounded-full px-4 py-1 font-medium" href="/blog/next-drupal-1-6"><span>Next.js 13, Drupal 10 and Stable On-demand Revalidation</span></a>
      <h1 className="text-4xl font-black tracking-tight text-center md:text-6xl lg:tracking-tighter lg:text-8xl">
        The future of <span className="bg-gradient-to-r from-orange-500 to-orange-600 inline-block text-transparent bg-clip-text">Drupal</span> is headless
      </h1>
      <p className="w-3/4 text-lg text-center text-muted-foreground leading-1 md:px-20 lg:leading-normal lg:text-2xl">
        Next.js for Drupal has everything you need to build a next-generation front-end for your Drupal site.
      </p>
      <div className="flex gap-5 mt-5">
        <Button className="h-[45px] w-44 dark:bg-orange-500 dark:text-white font-semibold text-md">Get Started</Button>
        <Button variant='outline' className="border-2 text-md h-[45px] w-44 dark:border-orange-500 border-black">See a demo</Button>
      </div>
      <div className="border-2 mt-6 border-black rounded-md shadow-2xl">
        <iframe className="rounded-lg " width="930" height="523" src="https://www.youtube.com/embed/dn2PSAcG71Y" title="Next.js for Drupal Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center">
  <div className="flex flex-col gap-5 items-center mt-28 w-full px-4 md:w-3/4">
    <h1 className="text-3xl font-black tracking-tight text-center md:text-5xl lg:tracking-tighter lg:text-6xl">
      Everything you expect from Drupal.
      On a modern stack.
    </h1>
    <p className="text-lg text-center text-muted-foreground leading-1 md:px-16 lg:leading-normal lg:text-2xl">
      Go headless without compromising features
    </p>

    <div className="grid gap-7 mt-7 w-full md:grid-cols-2 lg:grid-cols-3">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Seamless Editing</CardTitle>
          <CardDescription className="text-muted-foreground">
            Inline preview built-in to the editing interface.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Instant Publishing</CardTitle>
          <CardDescription className="text-muted-foreground">
            New content and updates are live instantly.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Multi-site</CardTitle>
          <CardDescription className="text-muted-foreground">
            Power multiple Next.js sites from one Drupal site.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Authentication</CardTitle>
          <CardDescription className="text-muted-foreground">
            Authentication with support for roles and permissions.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Webforms</CardTitle>
          <CardDescription className="text-muted-foreground">
            Built React forms backed by the Webform module.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Search API</CardTitle>
          <CardDescription className="text-muted-foreground">
            Support for decoupled faceted search powered by Search API.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Internationalization</CardTitle>
          <CardDescription className="text-muted-foreground">
            Built-in translation and Automatic Language detection.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Performance</CardTitle>
          <CardDescription className="text-muted-foreground">
            Deploy and scale your sites via content delivery networks.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-md font-bold">Security</CardTitle>
          <CardDescription className="text-muted-foreground">
            Protect your site from attacks by separating code from the interface.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </div>
</div>
  </>
}
