import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {numbersFormat} from '../../../../utils/utils'
import redis from '../../../../lib/redis'
import dynamic from 'next/dynamic'
import ProfileTiktokButton from '../../../../components/Main/ButtonProfileTiktok'


const UserGraphs = dynamic(
	() => import('../../../../components/User/UserGraph'),
	{ loading: () => <p>...</p> }
)

export async function getServerSideProps(ctx) {
	const username = ctx.params.user;
	const redis_key = username + '_tiktok_user'
	const accessToken = process.env.NEXT_PRIVATE_API_KEY
	const api_url = process.env.NEXT_PRIVATE_API
	let cache = await redis.get(redis_key);
	cache = JSON.parse(cache);
    try {
		if (cache) {
			return {
				props: {user: cache}
			}
		} else {
			const res = await fetch(`${api_url}/v1/users/tiktok/${username}/`, {
				headers: {
					authorization: `Bearer ${accessToken}`
				  }
			});
			const data = await res.json();
			redis.set(redis_key, JSON.stringify(data), 'EX', 60 * 60 * 12)

			return {
				props: { user: data }
			}
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

const TiktokUserMain = ({ user }) => {
  const full_name = user.full_name;
	const nickname = user.username;
	const description = nickname + " TikTok Analytics, Stats and Followers. " + full_name + " TikTok, Age, Bio, family life.";
	const title = full_name + " @" + nickname + " TikTok Stats and Analytics Summary Profile";
	const router = useRouter();
	const path_url = "https://insiflow.com" + router.asPath
	const og_image = user.profile_pic_hd

	let user_avg_plays = 0;
	let user_avg_likes = 0;
	let engagement_rate = 0;
	const userdata = user.stats;
	if(userdata.length > 0) {
		user_avg_plays = userdata[0].user_avg_plays;
    user_avg_likes = userdata[0].user_avg_likes;
    engagement_rate = userdata[0].engagement_rate;
  }

	return (
		<div>
			<NextSeo
				title={title}
				description={description}
				canonical={path_url}
				openGraph={{
					images: [
						{
							url: `${og_image}`,
							width: 1000,
							height: 600,
							type: 'image/jpeg',
						},
					],
				}}
      />
      <div className='container mx-auto p-5'>
				<h1 className='font-bold pb-4'>{ nickname } TikTok Analytics, Stats, Follower Count and Videos.</h1>
				<hr className='h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
				<div className='md:flex pt-4 gap-2'>
					<div className=''>
						<Image className='rounded-lg object-cover' src={user.profile_pic} alt={full_name} width={90} height={90}/>
					</div>
					<div>
						<p className='font-bold text-lg'>{full_name}</p>
						<Link className='py-4' href={`/tiktok/user/${router.query.user}`}>@{full_name}</Link>
						<br/>
						{
							(() => {
								if(user.country)
									return <Link className='py-4' href={`/tiktok/top/country/${user.country.toLowerCase()}`}>{user.country_full_name}</Link>
								else
									return <Link className='py-4' href={`/tiktok/top/country/im`}>N/A</Link>
							})()
						}
					</div>
				</div>

				<div className="flex flex-col sm:flex-row justify-center justify-start my-2 gap-3">
					<Link href={`/tiktok/user/${router.query.user}/bio`} className='py-4 pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
						<span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
						<span className='ml-2 text-base tracking-wide truncate'>Bio</span>
					</Link>
          <Link href={`/tiktok/user/${router.query.user}/posts`} className='py-4 pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
						<span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </span>
						<span className='ml-2 text-base tracking-wide truncate'>Posts</span>
          </Link>
          <Link href={`/tiktok/user/${router.query.user}/statistics`} className='py-4 pr-2 hover:decoration-[#2daafc] hover:underline underline-offset-4 decoration-4'>
						<span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </span>
						<span className='ml-2 text-base tracking-wide truncate'>Analytics</span>
          </Link>
        </div>

				<div className='md:flex mt-4 md:p-8 p-2 bg-slate-100 rounded-lg'>
					<div className='md:w-1/5'>
						<p className='text-xl'>Followers</p>
						<p className='text-2xl font-bold '>{numbersFormat(user.followers_count)}</p>
					</div>
					<div className='md:w-1/5'>
						<p className='text-xl'>Average views</p>
						<p className='text-2xl font-bold'>{numbersFormat(user_avg_plays)}</p>
					</div>
					<div className='md:w-1/5'>
						<p className='text-xl'>Average likes</p>
						<p className='text-2xl font-bold'>{numbersFormat(user_avg_likes)}</p>
					</div>
					<div className='md:w-1/5'>
						<p className='text-xl'>Engagement rate</p>
						<p className='text-2xl font-bold'>{engagement_rate}%</p>
					</div>
					<div className='md:w-1/5'>
						<p className='text-xl'>Score</p>
					</div>
				</div>

				<h2 className='text-2xl font-bold py-4'>Basic Data</h2>
				<div className='md:flex mt-4'>
					<div className='md:w-1/3 border-l-4 border-[#338AFF] pb-4 pl-4 md:pr-6'>
						<p className='font-bold'>Followers</p>
						<p className='text-2xl font-bold'>{numbersFormat(user.followers_count)}</p>
						<p className=''>per 30 days</p>
						<p className='text-sm'>{full_name} has {numbersFormat(user.followers_count)} followers on TikTok.</p>
					</div>
					<div className='md:w-1/3 border-l-4 border-[#FF3386] pb-4 pl-4 md:pr-6'>
						<p className='font-bold'>Engagement rate</p>
						<p className='text-2xl font-bold '>{engagement_rate}%</p>
						<p className=''>per 10 videos</p>
						<p className='text-sm'>{full_name} has {engagement_rate}% Engament Rate over their most recent posts.</p>
					</div>
					<div className='md:w-1/3 border-l-4 border-[#FFE933] pb-4 pl-4 md:pr-6'>
						<p className='font-bold'>Avg. Views per post</p>
						<p className='text-2xl font-bold '>{numbersFormat(user_avg_plays)}</p>
						<p className=''>per post</p>
						<p className='text-sm'>{full_name} has {numbersFormat(user_avg_plays)} averange views per posts.</p>
					</div>
				</div>
				
				<hr className='h-px bg-gray-200 border-0 mt-4'></hr>
				<div className='md:flex'>
					<div className='md:w-1/2 pr-8'>
						<div className='md:float-left'>
							<p className='text-lg font-bold'>Worldwide</p>
							<p>Global Ranking</p>
						</div>
						<div className='md:float-right'>
							<p className='text-3xl font-bold'>#{user.ranking[0].global_ranking}</p>
						</div>
					</div>
					<div className='md:w-1/2 md:border-l-2 md:border-gray-200 md:pl-4'>
						<div className='md:float-left'>
							<p className='text-lg font-bold'>{user.country_full_name}</p>
							<p>Country Ranking</p>
						</div>
						<div className='md:float-right'>
							<p className='text-3xl font-bold'>#{user.ranking[0].country_ranking}</p>
						</div>
					</div>
				</div>
				<hr className='h-px bg-gray-200 border-0 mb-4'></hr>

				<h3 className='text-2xl font-bold py-4'>TikTok Audience Analytics for {nickname}</h3>
				<div className='mt-4 md:p-8 p-2 bg-slate-100 rounded-lg w-full clear-both'>
					<p className='pb-8'>The section provides you with details about the audience that engaged with the analyzed influencer. You can see where the majority of the audience lives, what languages they speak, their gender split, audience type, and engagement rate.</p>
					<ProfileTiktokButton/>
				</div>

				<div><UserGraphs data={user}/></div>		
				<ProfileTiktokButton/>
			</div>
    </div>
  )
}

export default TiktokUserMain 