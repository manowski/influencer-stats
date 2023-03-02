import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import redis from '../../../../lib/redis'
import { NextSeo } from 'next-seo'
import {numbersFormat} from '../../../../utils/utils'
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import TiktokTopSidebar from '../../../../components/Sidebar/Tiktoktop';
import MoreButton from '../../../../components/Main/ButtonMore'


export async function getStaticProps() {
    const api_url = process.env.NEXT_PRIVATE_API
    const accessToken = process.env.NEXT_PRIVATE_API_KEY
    const redis_key = 'tiktok100'
	let cache = await redis.get(redis_key)
	cache = JSON.parse(cache)
	try {
		if (cache) {
			return {
				props: { users: cache }
			}
		} else {
			const res = await fetch(`${api_url}/v1/users/tiktok/?limit=100`, {
				headers: {
					authorization: `Bearer ${accessToken}`
				  }
			});
			const data = await res.json();
			redis.set(redis_key, JSON.stringify(data), 'EX', 60 * 60 * 12)
			
			return {
				props: { users: data },
				revalidate: 60 * 60 * 12
			}
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}


const TiktokTop100 = ({users}) => {
    const user_data = users.results;
    const description = "These are the Top 100 TikTok accounts with the most followers right now. Track followers, views and likes on major social media platforms with Insiflow.";
  	const title = "Top 100 Most Followed TikTok accounts in 2023 | Insiflow";
    const router = useRouter();
    const path_url = "https://insiflow.com" + router.asPath;

    return (
        <div>
            <NextSeo
				title={title}
				description={description}
				canonical={path_url}
            />
            <div className='container md:flex mx-auto pt-8'>
                <div className='flex basis-1/5 '>
                    <TiktokTopSidebar />
                </div>
                <div className="md:flex flex flex-col basis-4/5 pl-5">
                <h1 className='text-4xl font-bold pb-4'>Top TikTok Users Most followers</h1>
                <h2 className='pb-2'>A list of the most popular 100 Followed TikTok Users right now. These are the most popular Users sorted by TikTok followers.</h2>
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <h3 className='text-lg pb-2 font-bold'>Top 100 TikTok Influencers in 2023 sorted by followers</h3>
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Rank
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Influencer
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Followers
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Country
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user_data.map((user, index) => {
                                            let bg_table = "bg-white border-b";
                                            if (index % 2 == 0) {
                                                bg_table = "bg-white border-b";
                                            } else {
                                                bg_table = "bg-gray-100 border-b";
                                            }
                                            return (
                                                <tr className={bg_table} key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td className="flex text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image className='rounded-lg' src={user.profile_pic} alt={user.full_name} title={user.full_name} width={40} height={40}/>
                                                        <div className="pl-3">
                                                            <div className="capitalize text-base">
                                                                <Link className='hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-2' href={`/tiktok/user/${user.username}`}>{user.full_name}</Link>
                                                            </div>
                                                        </div>  
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {numbersFormat(user.followers_count)}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        { user.country }
                                                    </td>
                                                </tr>
                                            );})
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <MoreButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TiktokTop100;