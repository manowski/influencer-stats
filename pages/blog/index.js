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

	const mainQuery = gql`
	{
		insiflowCollection (order: createTime_DESC, limit:1, where: {category_contains_some: "main"}) {
			items {
				title
				slug
				shortDescription
				createTime
				category
				thumbnail{url}
		  	}
		}
	}
	`
	const trendingQuery = gql`
	{
		insiflowCollection (order: createTime_DESC, limit:3, where: {category_contains_some: "news"}) {
			items {
				title
				slug
				shortDescription
				createTime
				category
				thumbnail{url}
		  	}
		}
	}
	`
	const listingQuery = gql`
	{
		insiflowCollection (order: createTime_DESC, limit:6, where: {category_contains_some: "trending"}) {
			items {
				title
				slug
				shortDescription
				createTime
				category
				thumbnail{url}
		  	}
		}
	}
	`
	let mainData = await graphQLClient.request(mainQuery)
	mainData = mainData.insiflowCollection.items
	let trendingData = await graphQLClient.request(trendingQuery)
	trendingData = trendingData.insiflowCollection.items
	let listingData = await graphQLClient.request(listingQuery)
	listingData = listingData.insiflowCollection.items
	return {
		props: { 
			articles: trendingData,
			listings: listingData,
			marticle: mainData
		}
	}
}


const Blog = ({articles, listings, marticle}) => {
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

        {articles.map((article, index) => {
        	return (
          	<div key={index}>
              <Link href={`/blog/${article.slug}`}></Link>
            </div>
          )
        })}
      </section>

			{marticle.map((mainarticle, index) => {
				const create_time = mainarticle.createTime;
				let main_date = new Date(create_time);
				return (
					<div key={index} className='container mx-auto px-5 md:flex md:justify-between gap-4 md:h-full py-10'>
						<div className='z-30 basis-3/6'>
							<Image className='rounded-lg' src={mainarticle.thumbnail.url} alt={mainarticle.title} width={450} height={300} />
						</div>
						<div className='z-30 basis-3/6 py-4'>
							<Link className='font-bold text-2xl pb-6 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4' href={`/blog/${mainarticle.slug}`}>{mainarticle.title}</Link>
							<p className='text-lg pb-6'>{mainarticle.shortDescription}</p>
							<p className='font-bold text-gray-700'>@Insiflow</p>
							<p className='font-bold text-gray-700'>{main_date.toDateString()}</p>
						</div>
					</div>
				)
			})}

			<h3 className='text-4xl font-bold text-center'>Trending</h3>
			<div className='container mx-auto md:grid grid-cols-3 gap-1'>
				{articles.map((article, index) => {
					const create_time = article.createTime;
					let article_date = new Date(create_time);
					return (
						<div key={index} className='col-span-1'>
							<div className="px-2 mt-2">
								<Image className='rounded-lg h-48 object-cover pb-4' src={article.thumbnail.url} alt={article.title} width={450} height={300} />
								<Link className='font-bold text-lg hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-2' href={`/blog/${article.slug}`}>{article.title}</Link>
								<p className='text-lg pt-6 pb-6'>{article.shortDescription}</p>
								<p className='font-bold pb-4 text-gray-700'>{article_date.toDateString()}</p>
							</div>
						</div>
					)
				})}
			</div>

			<h3 className='text-4xl font-bold text-center'>News</h3>
			<div className='container mx-auto md:grid grid-cols-3 gap-1'>
				{listings.map((listing, index) => {
					const create_time = listing.createTime;
					let listing_date = new Date(create_time);
					return (
						<div key={index} className='col-span-1'>
							<div className="px-2 mt-2">
								<Image className='rounded-lg h-48 object-cover pb-4' src={listing.thumbnail.url} alt={listing.title} width={450} height={300} />
								<Link className='font-bold text-lg hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-2' href={`/blog/${listing.slug}`}>{listing.title}</Link>
								<p className='text-lg pt-6 pb-6'>{listing.shortDescription}</p>
								<p className='font-bold pb-4 text-gray-700'>{listing_date.toDateString()}</p>
							</div>
						</div>
					)
				})}
			</div>
    </div>
  )
}

export default Blog;