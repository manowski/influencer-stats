import Image from 'next/image'
import Link from 'next/link';
import { Inter } from '@next/font/google'
import { NextSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'] })

import dataImg from '../public/img/data-analytics.png'


export default function Home() {
  return (
    <div className=''>
      <NextSeo 
        title="Instagram Analytics and Smart TikTok Analytics Tools"
        description="Instagram Analytics and TikTok Analytics for public Profiles, hashtags, or Followers. Get campaign reports and follower demographics. TikTok viewer."
        canonical="https://insiflow.com"
      />
      <section className='bg-custom flex'>
        <div className='container mx-auto px-5 md:flex md:justify-between md:items-center h-full py-10'>
          <div className='z-30 basis-3/6 py-16 text-white'>
            <h1 className='text-3xl pb-5 pt-16'><span className='text-[#e224a2]'>1# Leading AI-Powered </span>Social Media Analytics Tools</h1>
            <h2 className='text-4xl font-bold pb-5'>The Most Professional Influencer Data Analysis and Trending Insight Platform</h2>
            <h3 className='text-2xl'>Search with over <strong>20+ million influencers</strong> and maximize your social media performance with our AI-driven analytics tool. Track key metrics, identify trends, and optimize for SEO success.</h3>
            <Link className='inline-block mt-4 px-14 py-4 font-bold bg-[#813aa8] text-white uppercase content-center leading-tight rounded-lg' href='/tiktok'>Explore</Link>
          </div>
        </div>
      </section>

      <div className='bg-[#1d1e21]'>
        <section className='container mx-auto px-5 md:flex md:justify-between md:items-center gap-16 md:h-full py-10'>
          <div className='basis-2/5 z-10 flex justify-center'>
            <Image src={dataImg} alt="data science"/>
          </div>
          <div className='z-30 basis-3/5 text-white'>
            <h3 className='text-[#e224a2] text-2xl font-bold text-center pb-2'>Our Services For Brands</h3>
            <p className='text-3xl text-center pb-2'>The Featured Service that We Provide</p>
            <p className='text-lg pb-2'>Our AI-powered social media analytics service is the key to unlocking the full potential of your brand's online presence. We provide in-depth insights and data-driven analysis that helps you understand your audience, identify key trends, and make informed decisions that drive success on social media.</p>
            <p className='text-lg'>In addition, our analytics provide valuable insights into your target audience, including demographics, interests, and behavior. This information can be used to refine your social media strategy and create more effective and targeted content. With our AI service, you can be confident that you are making data-driven decisions that will drive real results for your business.</p>
          </div>
        </section>
      </div>

      <div>
        <div className='container mx-auto px-5 py-16'>
          <h3 className='text-[#e224a2] text-2xl font-bold pb-2'>Our Services For Influencers</h3>
          <p className='text-3xl pb-2'>We Make Your Life Easier By Boosting Yout Profile</p>
          <p className='text-lg pb-6'>Unlock the full potential of your influencer account with our AI-powered services. Our tool is designed to help you gain more followers, increase engagement, and grow your account. Whether you're looking to boost your reach, improve your brand image, or connect with new audiences, our services are tailored to your needs. With our cutting-edge technology, you can automate many of the tedious and time-consuming tasks associated with social media management, allowing you to focus on creating amazing content. Try our services today and see the difference they can make for your account.</p>
          <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
          <p className='text-3xl font-bold text-center pt-2'>Trusted by more than 10,000+ companies</p>
        </div>
      </div>

      <div>
        <div className='container mx-auto px-5 py-16'>
          <h3 className='text-4xl text-center font-bold pb-2'>Only 3 steps to find the ideal Influencer</h3>
        </div>
      </div>

      <div className="container mx-auto md:flex mt-2 gap-16 px-5">
        <div className="md:w-1/3 mt-2">
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">#influencermarketing #branding</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#338AFF] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">Effortlessly find the ideal influencer for your brand with our AI-powered tool. Search, filter & analyze key metrics like engagement rate & audience demographics for the perfect match. </p>
          <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700 mb-4'></hr>
        </div>

        <div className="md:w-1/3 mt-2">
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">#AI #performance</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#FF3386] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">Take control of your influencer marketing strategy. Measure performance, track engagement and analyze key metrics to enhance your branding and get the most out of your campaigns.</p>
          <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700 mb-4'></hr>
        </div>

        <div className="md:w-1/3 mt-2">
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">#savetime #efficiency</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#FFE933] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">Streamline your influencer marketing strategy. Save time on reporting by automating data collection and analysis. Track key metrics, generate detailed reports and make informed decisions in real-time.</p>
          <p className='font-bold pt-2'></p>
          <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700 mb-4'></hr>
        </div>
      </div>

      <div>
        <div className='container mx-auto px-5 py-16'>
          <h3 className='text-4xl text-center font-bold pb-2'>Our AI-driven tool helps you streamline your influencer marketing strategy.</h3>
          <p>Easily discover the perfect influencer match for your industry with our AI-driven tool. Tailor your search across Instagram and TikTok to find the right influencer for your brand. Our advanced algorithms analyze key metrics for the best match and unlock new possibilities for your influencer marketing strategy. </p>
        </div>
      </div>

    </div>
  )
}
