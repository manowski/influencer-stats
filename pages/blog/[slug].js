import Image from 'next/image'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {createClient} from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {BLOCKS} from '@contentful/rich-text-types'
import redis from '../../lib/redis'


const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getServerSideProps({params}) {
    
  const single_article = params.slug;
}

const ArticlePost = ({ article }) => {
  const {title, thumbnail, createTime, content, seoMetaTitle, seoMetaDescription, script} = article['fields']

  const router = useRouter();
  const path_url = "https://insiflow.com" + router.asPath

  return (
    <div>
      <Head>
        <script type="text/javascript">{script}</script>
      </Head>

      <NextSeo
				title={seoMetaTitle + " - Insiflow"}
				description={seoMetaDescription}
				canonical={path_url}
          openGraph={{
            images: [
              {
                url: `https:${thumbnail.fields.file.url}`,
                type: 'image/jpeg',
              },
            ],
            type: 'article'
          }}
        />
        <div className='bg-sky-800'>
          <div className='container mx-auto px-5 text-white py-20'>
            <h1 className='text-4xl font-bold pb-4'>{title}</h1>
            <p>{createTime}</p>
          </div>
        </div>
        <div className='px-6'>
          <Image className='mx-auto -mt-10 rounded-lg object-cover' src={`https:${thumbnail.fields.file.url}`} alt={thumbnail.fields.title} width={900} height={thumbnail.fields.file.details.image.height} />
        </div>
                
        <div className='article container px-5 py-10 md:w-9/12 mx-auto text-lg'>
      </div>
    </div>
  )
}

export default ArticlePost;