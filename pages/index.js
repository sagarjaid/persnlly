
import SEOMeta from '@/components/SEOMeta';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <SEOMeta
        title="Persnlly - Convert your Linkedin profile to Personal Website"
        description="Convert your Linkedin profile to Personal Website/blog in 30 seconds."
      />
      <main>
        <div className="m-auto flex max-w-7xl items-start pt-10 mdx:pt-20 h-screen">
          <div className="flex flex-col justify-between gap-6 p-4 w-full">
            <a href="/">
              <img src="/persnlly-logo.png" className="w-[100px] mdx:pb-6" />
            </a>
            <div className='w-full  mdx:hidden p-4'>
              <a href="/">
                <img src="/hero-banner-2.png" className="w-full" />
              </a>
            </div>
            <div className="line flex flex-col text-base font-semibold xs:text-2xl sdm:text-2xl sm:gap-3 md:text-3xl mdx:text-4xl ">
              <span>Convert your Linkedin profile</span>
              <div className='flex gap-1'>
                <span>into</span>
                <span className="text-rose-600">
                  <Typewriter
                    options={{
                      strings: [
                        'personal website',
                        'personal blog',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>

            </div>
            <div className=" flex flex-col gap-1 text-xs sm:text-base">
              <p>✓ Build webiste in 30 Seconds</p>
              <p>✓ Add custom domain</p>
              <p>✓ 5+ UI templates to choose from</p>
              <p>✓ SEO friendly</p>
              <p>✓ Superfast Blog</p>
            </div>

            <div className='flex flex-col justify-center gap-1'>
              <div className="flex w-fit items-center justify-around rounded-full gap-2 bg-blue-600 p-2 px-4	text-white shadow-sm hover:bg-rose-500 cursor-pointer ">
                <span>get early access</span>
                <svg
                  className="w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
              <span className='pl-5 text-[7px]'>No Spam, Receive email when we go live!</span>
            </div>
          </div>
          <div className='w-full hidden mdx:block pt-10'>
            <a href="/">
              <img src="/hero-banner.png" className="w-full" />
            </a>
          </div>
        </div>
        <div className='m-auto flex max-w-7xl gap-2 flex-col p-4 relative bottom-14 text-xs'>
          <div className='flex gap-2 items-center'>
            <a href="/" className="">
              Pay now & support the project as early adaptor
            </a>
            <span>|</span>
            <a href="/">
              <img src="/linkedin.png" className="w-3" />
            </a>
            <a href="/">
              <img src="/twitter.png" className="w-3" />
            </a>
          </div>
          {/* <p className='text-[11px] text-gray-600'>Coming soon: Superfast Blog, calendar booking, Offer Services, Email List builder.</p> */}
        </div>
      </main >
    </>
  );
};

export default Home;
