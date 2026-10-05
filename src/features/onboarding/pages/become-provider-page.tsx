import Link from "next/link";

export default function BecomeProviderPage() {
  return (
    <>
      <section className="ph ph-b grid-noise text-white">
        
        <div className="shell py-14 sm:py-20 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <span className="badge !bg-white/20 !text-white mb-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                <path d="M13 6l5 5"></path>
              </svg>
              Service Provider Network
            </span>
            
            <h1 className="font-display text-[32px] sm:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-4">Get customers for your service business — every single day</h1>
            
            <p className="text-[15px] text-white/85 leading-relaxed mb-6">List your business free, receive verified leads and phone calls from customers near you, and build a public reputation with real reviews.</p>
            
            <div className="flex flex-wrap gap-2.5 mb-7">
              <Link href="/provider-register" className="btn btn-lg !bg-white !text-service-700">
                List your business free 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
              
              <Link href="/login?next=%2Fvendor%2Fdashboard" className="btn btn-lg !bg-white/15 !text-white">Provider sign in</Link>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="font-display text-[24px] font-extrabold">132,400</p>
                <p className="text-[12px] text-white/70">Listed providers</p>
              </div>
              <div>
                <p className="font-display text-[24px] font-extrabold">2.8M</p>
                <p className="text-[12px] text-white/70">Leads per month</p>
              </div>
              <div>
                <p className="font-display text-[24px] font-extrabold">12 min</p>
                <p className="text-[12px] text-white/70">Avg. response time</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <span className="ph ph-b h-[300px] w-full rounded-2xl">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2"></circle>
                <path d="M2 21a7 7 0 0 1 14 0"></path>
                <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
              </svg>
            </span>
          </div>
        </div>
      </section>
      <main className="shell py-12">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Direct phone leads</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Customers call you straight from your listing — no middleman.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Local visibility</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Rank for searches in your area, city and category.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Build trust</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Verified badge, real reviews and a public rating.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                <path d="M8 3v4M16 3v4M3 10h18"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Online bookings</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Accept appointments with date and time slots.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Lead analytics</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">See views, calls, quote requests and conversion.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                <path d="M12 7v10"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Run offers</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Publish discounts and packages to win more jobs.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                <circle cx="12" cy="14" r="3.2"></circle>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Photo portfolio</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Show your work with unlimited photos and videos.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h8l4 4v14H6z"></path>
                <path d="M14 3v4h4"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Digital catalogue</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Publish a transparent price list customers can trust.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2"></circle>
                <path d="M2 21a7 7 0 0 1 14 0"></path>
                <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Team profiles</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Introduce your technicians and their certifications.</p>
          </div>
        </div>
        
        <div className="card p-6 sm:p-8 mb-12">
          <h2 className="font-display text-[24px] font-extrabold text-center mb-8">Choose your plan</h2>
          
          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[#e7e9ef] p-6 relative">
              
              <p className="text-[15px] font-extrabold mb-1">Free Listing</p>
              <p className="font-display text-[32px] font-extrabold text-service-600">
                ৳0
                <span className="text-[13px] text-ink-400 font-bold">/forever</span>
              </p>
              
              <ul className="space-y-2 my-5">
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Public business profile
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Up to 10 photos
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Receive customer calls
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Basic listing in search
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Customer reviews
                </li>
              </ul>
              
              <Link href="/provider-register" className="btn btn-outline btn-block">Get started</Link>
            </div>
            <div className="rounded-2xl border border-[#e7e9ef] p-6 relative">
              
              <p className="text-[15px] font-extrabold mb-1">Verified Pro</p>
              <p className="font-display text-[32px] font-extrabold text-service-600">
                ৳1,200
                <span className="text-[13px] text-ink-400 font-bold">/per month</span>
              </p>
              
              <ul className="space-y-2 my-5">
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Everything in Free
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Verified badge
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Top 10 search placement
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Unlimited photos &amp; videos
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Online booking calendar
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Lead analytics dashboard
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Publish offers &amp; packages
                </li>
              </ul>
              
              <Link href="/provider-register" className="btn btn-outline btn-block">Get started</Link>
            </div>
            <div className="rounded-2xl border border-[#e7e9ef] p-6 relative">
              
              <p className="text-[15px] font-extrabold mb-1">Premium Partner</p>
              <p className="font-display text-[32px] font-extrabold text-service-600">
                ৳3,500
                <span className="text-[13px] text-ink-400 font-bold">/per month</span>
              </p>
              
              <ul className="space-y-2 my-5">
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Everything in Verified Pro
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Top 3 sponsored placement
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Homepage category feature
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Dedicated account manager
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Priority lead routing
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Monthly performance report
                </li>
                <li className="flex gap-2 text-[13px] text-ink-600">
                  <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  WhatsApp lead alerts
                </li>
              </ul>
              
              <Link href="/provider-register" className="btn btn-outline btn-block">Get started</Link>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          
          <div className="card p-6">
            <h2 className="font-display text-[20px] font-extrabold mb-4">How it works</h2>
            
            <div className="timeline">
              <div className="tl-item is-active">
                <p className="text-[13.5px] font-extrabold">List your business</p>
                <p className="text-[12.5px] text-ink-500">Add your name, category, address, hours and services — free and takes 10 minutes.</p>
              </div>
              <div className="tl-item ">
                <p className="text-[13.5px] font-extrabold">Get verified</p>
                <p className="text-[12.5px] text-ink-500">Submit NID and trade licence. Our team verifies within 24–48 hours.</p>
              </div>
              <div className="tl-item ">
                <p className="text-[13.5px] font-extrabold">Receive leads</p>
                <p className="text-[12.5px] text-ink-500">Customers call, chat or request quotes directly from your listing.</p>
              </div>
              <div className="tl-item ">
                <p className="text-[13.5px] font-extrabold">Do the job</p>
                <p className="text-[12.5px] text-ink-500">Serve the customer, get paid directly — HaatBazar takes no cut of your job.</p>
              </div>
              <div className="tl-item ">
                <p className="text-[13.5px] font-extrabold">Collect reviews</p>
                <p className="text-[12.5px] text-ink-500">Happy customers rate you, pushing you higher in search results.</p>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="font-display text-[20px] font-extrabold mb-4">Categories in demand right now</h2>
            
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">AC repair &amp; service</p>
                <span className="text-[12px] text-service-600 font-extrabold">18,400 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Electrician</p>
                <span className="text-[12px] text-service-600 font-extrabold">14,200 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Home cleaning</p>
                <span className="text-[12px] text-service-600 font-extrabold">11,800 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Plumber</p>
                <span className="text-[12px] text-service-600 font-extrabold">9,600 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Home tutor</p>
                <span className="text-[12px] text-service-600 font-extrabold">22,100 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Beauty parlour</p>
                <span className="text-[12px] text-service-600 font-extrabold">16,700 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Packers &amp; movers</p>
                <span className="text-[12px] text-service-600 font-extrabold">7,300 monthly searches</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-ink-50">
                <p className="text-[13px] font-bold">Wedding photographer</p>
                <span className="text-[12px] text-service-600 font-extrabold">6,900 monthly searches</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl ph ph-b grid-noise p-8 sm:p-10 text-white text-center">
          
          <h2 className="font-display text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-2 relative z-10">Your next customer is searching right now</h2>
          
          <p className="text-[14px] text-white/80 mb-5 relative z-10">List your business in under 10 minutes — completely free.</p>
          
          <div className="flex flex-wrap justify-center gap-2.5 relative z-10">
            <Link href="/provider-register" className="btn btn-lg !bg-white !text-service-700">List my business</Link>
            <Link href="/contact" className="btn btn-lg !bg-white/15 !text-white">Request a callback</Link>
          </div>
        </div>
        
      </main>
    </>
  );
}
