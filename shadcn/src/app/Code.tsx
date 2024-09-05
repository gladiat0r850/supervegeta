import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Code() {
  return <>
    <div className="flex flex-col items-center">
      <h1 className="text-3xl w-3/4 font-black tracking-tight text-center md:text-5xl lg:tracking-tighter lg:text-6xl">
        Out-of-the-box tooling for the best developer experience
      </h1>
      <p className="mx-auto mt-4 text-lg text-center text-muted-foreground leading-1 md:px-16 lg:leading-normal lg:text-2xl">
        A powerful client for working with JSON:API.
      </p>
      <div className="flex w-[65.5%] justify-between gap-32 mt-10">
        <Tabs defaultValue="json-api" className="w-fit gap-10 flex">
          <TabsList className="flex flex-col gap-4 h-auto bg-white dark:bg-black">
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="json-api">
              <h1 className="text-lg font-bold">JSON:API Client</h1>
              <p className="text-muted-foreground">A powerful client to fetch JSON:API services from resources.</p>
            </TabsTrigger>
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="data-fetching">
              <h1 className="text-lg font-bold">Data Fetching</h1>
              <p className="text-muted-foreground">A powerful client to fetch JSON:API services from resources.</p>
            </TabsTrigger>
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="crud">
              <h1 className="text-lg font-bold">CRUD Support</h1>
              <p className="text-muted-foreground">Creating, updating and deleting JSON:API services.</p>
            </TabsTrigger>
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="intl">
              <h1 className="text-lg font-bold">Internationalization</h1>
              <p className="text-muted-foreground">Built-in tool for translation and language support.</p>
            </TabsTrigger>
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="auth">
              <h1 className="text-lg font-bold">Authentication</h1>
              <p className="text-muted-foreground">Support for bearer, basic and bring-your-own-auth.</p>
            </TabsTrigger>
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="typescript">
              <h1 className="text-lg font-bold">TypeScript</h1>
              <p className="text-muted-foreground">Built-in types for JSON:API resources</p>
            </TabsTrigger>
            <TabsTrigger className="min-w-[500px] p-4 h-20 flex flex-col items-start" value="graphql">
              <h1 className="text-lg font-bold">GraphQL</h1>
              <p className="text-muted-foreground">Use DrupalClient with GraphQL and GraphQL Compose.</p>
            </TabsTrigger>
          </TabsList>
          <div className="w-2/3">
            <TabsContent value="json-api" className="flex flex-col gap-10">
              <div className="bg-gray-900 w-[500px] text-white h-fit p-6 rounded-lg shadow-lg">
                <pre className="whitespace-pre-wrap">
                  <code className="font-mono">
                    <span className="text-yellow-400">// Create a DrupalClient.</span>{"\n"}
                    <span className="text-blue-400">const</span> <span className="text-green-400">drupal</span> = <span className="text-blue-400">new</span> <span className="text-green-400">DrupalClient</span>(<span className="text-red-400">"http://drupal.org"</span>, {"{"}{"\n"}
                    <span className="ml-4 text-green-400">auth</span>: {"{"}{"}"} <span className="text-gray-400">// Authentication</span>{"\n"}
                    <span className="ml-4 text-green-400">fetcher</span>: {"{"}{"}"} <span className="text-gray-400">// Custom fetcher</span>{"\n"}
                    <span className="ml-4 text-green-400">cache</span>: {"{"}{"}"} <span className="text-gray-400">// Cache support</span>{"\n"}
                    <span className="ml-4 text-green-400">serializer</span>: {"{"}{"}"} <span className="text-gray-400">// Custom serializer</span>{"\n"}
                    {"}"});
                  </code>
                </pre>
              </div>
              <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg">
                <pre className="whitespace-pre-wrap">
                  <code className="font-mono">
                    <span className="text-yellow-400">// Fetch an article.</span>{"\n"}
                    <span className="text-blue-400">const</span> <span className="text-green-400">article</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResource</span>(<span className="text-red-400">"node--article"</span>, {"\n"}
                    <span className="ml-4 text-red-400">"907034d4-ab35-4949-84e4-d2b7afed82df"</span>{"\n"});
                  </code>
                </pre>
              </div>
              <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg">
                <pre className="whitespace-pre-wrap">
                  <code className="font-mono">
                    <span className="text-yellow-400">// Create a DrupalClient.</span>{"\n"}
                    <span className="text-blue-400">const</span> <span className="text-green-400">drupal</span> = <span className="text-blue-400">new</span> <span className="text-green-400">DrupalClient</span>(<span className="text-red-400">"http://drupal.org"</span>, {"{"}{"\n"}
                    <span className="ml-4 text-green-400">auth</span>: {"{"}{"}"} <span className="text-gray-400">// Authentication</span>{"\n"}
                    <span className="ml-4 text-green-400">fetcher</span>: {"{"}{"}"} <span className="text-gray-400">// Custom fetcher</span>{"\n"}
                    <span className="ml-4 text-green-400">cache</span>: {"{"}{"}"} <span className="text-gray-400">// Cache support</span>{"\n"}
                    <span className="ml-4 text-green-400">serializer</span>: {"{"}{"}"} <span className="text-gray-400">// Custom serializer</span>{"\n"}
                    {"}"});
                  </code>
                </pre>
              </div>
            </TabsContent>

            <TabsContent value="data-fetching" className="flex flex-col gap-10">
            <div className="bg-gray-900 w-fit min-w-[500px] text-white h-fit p-6 rounded-lg shadow-lg max-w-lg">
  <pre className="whitespace-pre-wrap">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch an article.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">article</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResource</span>(<span className="text-red-400">"node--article"</span>, {"\n"}
      <span className="ml-4 text-red-400">"907034d4-ab35-4949-84e4-d2b7afed82df"</span>{"\n"});
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 min-w-[500px] rounded-lg shadow-lg w-fit max-w-xs overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch a collection of terms.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">tags</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResourceCollection</span>(<span className="text-red-400">"taxonomy_term--tags"</span>);
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit min-w-[500px] p-6 rounded-lg shadow-lg w-fit max-w-lg overflow-x-hidden">
  <pre className="whitespace-pre text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch a menu.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">main</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getMenu</span>(<span className="text-red-400">"main"</span>);
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 min-w-[500px] rounded-lg shadow-lg w-fit max-w-lg overflow-x-hidden">
  <pre className="whitespace-pre text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch recent content view.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">recentContent</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getView</span>(<span className="text-red-400">"content_recent--block"</span>);
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 min-w-[500px] rounded-lg shadow-lg w-fit max-w-lg overflow-x-hidden">
  <pre className="whitespace-pre text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Use filters.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">sortedPublishArticles</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResourceCollection</span>(<span className="text-red-400">"node--article"</span>, {"{"}{"\n"}
      <span className="ml-4 text-green-400">params</span>: {"{"}{"\n"}
      <span className="ml-8 text-green-400">"filter[status]"</span>: <span className="text-red-400">"1"</span>,{"\n"}
      <span className="ml-8 text-green-400">"sorted"</span>: <span className="text-red-400">"-created"</span>{"\n"}
      <span className="ml-4">{"}"},{"\n"}
      {"}"});</span>
    </code>
  </pre>
</div>
</TabsContent>
            <TabsContent value="crud" className="flex flex-col gap-10">
            <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Create an article.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">article</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.createResource</span>(<span className="text-red-400">"node--article"</span>, {"{"}{"\n"}
      <span className="ml-4 text-green-400">attributes</span>: {"{"}{"\n"}
      <span className="ml-8 text-green-400">title</span>: <span className="text-red-400">"Title of Article"</span>,{"\n"}
      <span className="ml-8 text-green-400">body</span>: {"{"}{"\n"}
      <span className="ml-12 text-green-400">value</span>: <span className="text-red-400">"&lt;p&gt;Content of body field&lt;/p&gt;"</span>,{"\n"}
      <span className="ml-12 text-green-400">format</span>: <span className="text-red-400">"full_html"</span>{"\n"}
      {"}"});
    </code>
  </pre>
</div>
            <div className="bg-gray-900 text-white h-fit w-fit p-6 rounded-lg shadow-lg min-w-[500px] overflow-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Update an article.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">article</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.updateResource</span>(<span className="text-red-400">"node--article"</span>,{"\n"}
      <span className="ml-4 text-red-400">"a937dd34-5407-4fff-8594-fccaaa5bb72a"</span>,{"\n"}
      <span className="ml-4">{"{"}</span>{"\n"}
      <span className="ml-8 text-green-400">data</span>: {"{"}{"\n"}
      <span className="ml-12 text-green-400">attributes</span>: {"{"}{"\n"}
      <span className="ml-16 text-green-400">title</span>: <span className="text-red-400">"Title of Article"</span>{"\n"}
      <span className="ml-12">{"}"}</span>{"\n"}
      <span className="ml-8">{"}"}</span>{"\n"}
      <span className="ml-4">{"}"}</span>{"\n"}
      );
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Delete an article.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">deleted</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.deleteResource</span>(<span className="text-red-400">"node--article"</span>, {"\n"}
      <span className="ml-4 text-red-400">"a937dd34-5407-4fff-8594-fccaaa5bb72a"</span>{"\n"});
    </code>
  </pre>
</div>
            </TabsContent>
            <TabsContent value='intl' className='flex flex-col gap-10'>
            <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Get the `es` translation for a page by uuid.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">page</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResource</span>(<span className="text-red-400">"node--page"</span>, {"\n"}
      <span className="ml-4 text-red-400">"07464e9f-9221-4a4f-b7f2-01389408e6c8"</span>, {"\n"}
      <span className="ml-4">{`{`}</span>{"\n"}
      <span className="ml-8 text-green-400">locale</span>: <span className="text-red-400">"es"</span>,{"\n"}
      <span className="ml-8 text-green-400">defaultLocale</span>: <span className="text-red-400">"en"</span>,{"\n"}
      <span className="ml-4">{`}`}</span>{"\n"});
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch a collection of translated articles.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">articles</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResourceCollection</span>(<span className="text-red-400">"node--article"</span>, {"\n"}
      <span className="ml-4">{`{`}</span>{"\n"}
      <span className="ml-8 text-green-400">locale</span>: <span className="text-red-400">"es"</span>,{"\n"}
      <span className="ml-8 text-green-400">defaultLocale</span>: <span className="text-red-400">"en"</span>,{"\n"}
      <span className="ml-4">{`}`}</span>{"\n"});
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch translated menu items.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">main</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getMenu</span>(<span className="text-red-400">"main"</span>, {"\n"}
      <span className="ml-4">{`{`}</span>{"\n"}
      <span className="ml-8 text-green-400">locale</span>: <span className="text-red-400">"es"</span>,{"\n"}
      <span className="ml-8 text-green-400">defaultLocale</span>: <span className="text-red-400">"en"</span>{"\n"}
      <span className="ml-4">{`}`}</span>{"\n"});
    </code>
  </pre>
</div>
            </TabsContent>
            <TabsContent value='auth' className='flex flex-col gap-10'>
            <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Bearer token.</span>{"\n"}
      <span className="text-blue-400">export</span> <span className="text-blue-400">const</span> <span className="text-green-400">drupal</span> = <span className="text-blue-400">new</span> <span className="text-green-400">DrupalClient</span>(<span className="text-red-400">process.env.NEXT_PUBLIC_DRUPAL_BASE_URL</span>, {"\n"}
      <span className="ml-4 text-green-400">{`{`}</span>{"\n"}
      <span className="ml-8 text-green-400">auth</span>: {"{"}{"\n"}
      <span className="ml-12 text-green-400">clientId</span>: <span className="text-red-400">process.env.DRUPAL_CLIENT_ID</span>,{"\n"}
      <span className="ml-12 text-green-400">clientSecret</span>: <span className="text-red-400">process.env.DRUPAL_CLIENT_SECRET</span>{"\n"}
      );
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden text-sm">
  <pre className="whitespace-pre-wrap">
    <code className="font-mono">
      <span className="text-yellow-400">// Basic.</span>{"\n"}
      <span className="text-blue-400">export</span> <span className="text-blue-400">const</span> <span className="text-green-400">drupal</span> = <span className="text-blue-400">new</span> <span className="text-green-400">DrupalClient</span>(<span className="text-red-400">process.env.NEXT_PUBLIC_DRUPAL_BASE_URL</span>, {"\n"}
      <span className="ml-4 text-green-400">{`{`}</span>{"\n"}
      <span className="ml-8 text-green-400">auth</span>: {"{"}{"\n"}
      <span className="ml-12 text-green-400">username</span>: <span className="text-red-400">process.env.DRUPAL_USERNAME</span>,{"\n"}
      <span className="ml-12 text-green-400">password</span>: <span className="text-red-400">process.env.DRUPAL_PASSWORD</span>{"\n"}
      <span className="ml-8">{"}"}</span>
      <span className="ml-4">{"}"})</span>
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden text-sm">
  <pre className="whitespace-pre-wrap">
    <code className="font-mono">
      <span className="text-yellow-400">// Bring your own.</span>{"\n"}
      <span className="text-blue-400">export</span> <span className="text-blue-400">const</span> <span className="text-green-400">drupal</span> = <span className="text-blue-400">new</span> <span className="text-green-400">DrupalClient</span>(<span className="text-red-400">process.env.NEXT_PUBLIC_DRUPAL_BASE_URL</span>, {"\n"}
      <span className="ml-4 text-green-400">{`{`}</span>{"\n"}
      <span className="ml-8 text-green-400">auth</span>: <span className="text-blue-400">()</span> {"{"}{"\n"}
      <span className="ml-12 text-green-400">// Do something and return an Authorization header.</span>{"\n"}
      <span className="ml-8">{"}"}</span>
      <span className="ml-4">{"}"})</span>
    </code>
  </pre>
</div>
            </TabsContent>
            <TabsContent className='flex flex-col gap-10' value='typescript'>
              <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden text-sm">
                <pre className="whitespace whitespace-pre-wrap">
                  <span className="text-blue-400">const</span> 
                  <span className="text-green-400 ml-2">article</span> = <span className="text-blue-400">await</span>
                  <span className='ml-2'>drupal<span className='text-blue-400'>.getResource(<span></span></span></span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-end">
                      <span className='text-green-400 mt-1 ml-5'>"node--articles"</span>
                      <span className="text-blue-400">,</span>
                    </div>
                    <span className="text-green-400 ml-5">"907034d4-ab35-4949-84e4-d2b7afed82df"</span><span className='text-blue-400'>)</span>
                  </div>
                </pre>
              </div>
              <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Fetch a collection of tags.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">tags</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResourceCollection</span>&lt;<span className="text-yellow-400">DrupalTaxonomyTerm[]</span>&gt;(<span className="text-red-400">"taxonomy_term--tags"</span>);
    </code>
  </pre>
</div>
<div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">// Any resource type.</span>{"\n"}
      <span className="text-blue-400">const</span> <span className="text-green-400">resources</span> = <span className="text-blue-400">await</span> <span className="text-green-400">drupal.getResourceCollection</span>&lt;<span className="text-yellow-400">JsonApiResource[]</span>&gt;(<span className="text-red-400">"entity--bundle"</span>);
    </code>
  </pre>
</div>
            </TabsContent>
            <TabsContent value='graphql' className='flex flex-col gap-10'>
            <div className="bg-gray-900 text-white h-fit p-6 rounded-lg shadow-lg w-fit min-w-[500px] overflow-x-hidden">
  <pre className="whitespace-pre-wrap text-sm">
    <code className="font-mono">
      <span className="text-yellow-400">const</span> <span className="text-green-400">data</span> = <span className="text-blue-400">await</span> <span className="text-green-400">query</span>({"{"}{"\n"}
      <span className="ml-4 text-yellow-400">query</span>: {"`"}{"\n"}
      <span className="ml-8 text-yellow-400">query</span> {"{"}{"\n"}
      <span className="ml-12 text-yellow-400">nodeArticles</span>(<span className="text-red-400">first: 10</span>) {"{"}{"\n"}
      <span className="ml-16 text-yellow-400">nodes</span> {"{"}{"\n"}
      <span className="ml-20 text-yellow-400">id</span>{"\n"}
      <span className="ml-20 text-yellow-400">title</span>{"\n"}
      <span className="ml-20 text-yellow-400">path</span>{"\n"}
      <span className="ml-20 text-yellow-400">author</span> {"{"}{"\n"}
      <span className="ml-24 text-yellow-400">displayName</span>{"\n"}
      <span className="ml-20">{"}"},{"\n"}
      <span className="ml-20 text-yellow-400">body</span> {"{"}{"\n"}
      <span className="ml-24 text-yellow-400">processed</span>{"\n"}
      <span className="ml-20">{"}"},{"\n"}
      <span className="ml-20 text-yellow-400">created</span>{"\n"}
      <span className="ml-20 text-yellow-400">image</span> {"{"}{"\n"}
      <span className="ml-24 text-yellow-400">width</span>{"\n"}
      <span className="ml-24 text-yellow-400">url</span>{"\n"}</span>
      <span className="ml-24 text-yellow-400">height</span>{"\n"}</span>
      <span className="ml-20">{"}"},{"\n"}</span>
      <span className="ml-12">{"}"},{"\n"}</span>
      <span className="ml-8">{"}"},{"\n"}</span>
      {"`"}
      {"}"});
    </code>
  </pre>
</div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  </>
}
export default Code;
