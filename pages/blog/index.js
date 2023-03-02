import {gql, GraphQLClient} from 'graphql-request'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export async function getStaticProps() {
	const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE;
	const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
	const endpoint = `https://graphql.contentful.com/content/v1/spaces/${space}`

	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: `Bearer ${accessToken}`
		}
	})
}


const Blog = () => {
	return (
		<div className=''>
			<NextSeo
				title="Blog | insiflow.com"
				description="Instagram Analytics and TikTok Analytics for public Profiles, hashtags, or Followers. Get campaign reports and follower demographics. TikTok viewer."
				canonical="https://insiflow.com/blog"
      />
      <section className='container mx-auto px-5'>
        <div className='my-4 p-8 rounded-lg py-4 items-center' style={{ backgroundImage: `url('/img/bg.png')`, height: "90px", }}>
          <p className='mt-3 text-4xl text-white font-bold text-center'>Blog</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center justify-start my-2 gap-3">
          <Link href='/blog' className='pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
            All
          </Link>
          <Link href='/blog' className='pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
            Technology
          </Link>
          <Link href='/blog' className='pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
            Entertainment
          </Link>
          <Link href='/blog' className='pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
            Games
          </Link>
        </div>

      </section>

			<h3 className='text-4xl font-bold text-center'>Trending</h3>

			<div className='container mx-auto md:grid grid-cols-3 gap-1'>

			</div>

			<h3 className='text-4xl font-bold text-center'>News</h3>

			<div className='container mx-auto md:grid grid-cols-3 gap-1'>

			</div>
			
    </div>
  )
}

export default Blog;