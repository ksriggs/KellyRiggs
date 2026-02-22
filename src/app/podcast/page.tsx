import { Layout, SocialsBar, SectionSubtitle, SectionTitle, YouTubePlayer } from '@/components/common';
import { RecentPodcastEpisodes } from '@/components/Podcast';

function Podcast() {

    return(
        <Layout main className="pt-40! pb-10 md:pb-20 gap-50 md:gap-60 z-30">
            <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <h1 className="text-5xl font-bold">
                            Sales <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">[UN]</span>Training Podcast
                        </h1>
                        <p className="text-muted font-semibold text-2xl">A very different kind of sales podcast</p>
                    </div>
                    <div className="text-muted flex text-5xl gap-10">
                        <SocialsBar
                            whitelist={[
                                "Spotify",
                                "YouTube",
                                "Apple Podcasts"
                            ]}
                        />
                    </div>
                </div>
                <div className="w-8/12 rounded-lg overflow-hidden">
                    <YouTubePlayer 
                        className="h-120"
                        videoId="1-XvCCsJfSg"
                    />
                </div>
                <div className="font-semibold text-lg w-8/12 text-center flex flex-col items-center justify-center gap-5 bg-card-light py-2.5 px-4 rounded-lg">
                    <p>
                        For years, I&apos;ve watched sales teams struggle to improve. And the answer always seems to be:
                    </p> 
                    <p className="bg-card py-2 w-4/12 rounded-lg">
                        <span className="font-bold"> &quot;We just need sales training.&quot;</span>
                    </p>
                    <p>
                        The problem is sales training isn&apos;t producing the results that we intend!! American corporations invest <span className="text-accent">$70 billion</span> in sales training every year, and yet 
                        three-out-of-four salespeople are failing. 
                    </p>
                    <p>
                        Why doesn&apos;t sales training work? That&apos;s what this sales podcast is about.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-2xl">
                        It&apos;s your weekly sales strategy guide designed to rewire your sales brain.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-20">
                <div className="flex flex-col justify-center items-center gap-4">
                    <SectionTitle>Check Out Some Recent Episodes</SectionTitle>
                    <SectionSubtitle>Find out why sales training typically fails!</SectionSubtitle>
                </div>
                <RecentPodcastEpisodes hideHeader />
            </div>
        </Layout>
    );
};

export default Podcast;