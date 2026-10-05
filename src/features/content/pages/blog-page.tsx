import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Blog</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        
        <div className="max-w-2xl mb-7">
          <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">HaatBazar Blog</h1>
          
          <p className="text-[14px] text-ink-500">Buying guides, service tips, seller stories and news from Bangladesh's everything marketplace.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-a h-[240px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                <path d="M11 19h2"></path>
              </svg>
            </span>
            
            <div className="p-5">
              <span className="badge badge-brand mb-2">Buying Guide</span>
              <h2 className="font-display text-[21px] font-extrabold leading-snug mb-2">How to spot a genuine smartphone before you pay</h2>
              
              <p className="text-[13px] text-ink-500 clamp-2 mb-3">Counterfeit devices look convincing. Here is a five-minute checklist — IMEI, box seal, warranty card, display test and price sanity — that protects every purchase.</p>
              
              <div className="flex items-center gap-2 text-[12px] text-ink-400">
                <span className="avatar avatar-sm bg-ink-700">T</span>
                Tanvir Rahman · 14 Aug 2026 · 8 min read
              </div>
            </div>
          </Link>
          
          <div className="space-y-4">
            <Link href="/blog-details" className="card overflow-hidden card-hover flex gap-4">
              <span className="ph ph-b w-[130px] shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
              </span>
              
              <div className="py-4 pr-4 min-w-0">
                <span className="badge badge-gray mb-1.5">Services</span>
                <p className="text-[15px] font-extrabold leading-snug clamp-2 mb-1.5">10 questions to ask before hiring an AC technician</p>
                
                <p className="text-[12px] text-ink-400">12 Aug 2026 · 6 min read</p>
              </div>
            </Link>
            <Link href="/blog-details" className="card overflow-hidden card-hover flex gap-4">
              <span className="ph ph-c w-[130px] shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
              </span>
              
              <div className="py-4 pr-4 min-w-0">
                <span className="badge badge-gray mb-1.5">Deals</span>
                <p className="text-[15px] font-extrabold leading-snug clamp-2 mb-1.5">Eid shopping on a budget: 25 gifts under ৳1,000</p>
                
                <p className="text-[12px] text-ink-400">10 Aug 2026 · 5 min read</p>
              </div>
            </Link>
            <Link href="/blog-details" className="card overflow-hidden card-hover flex gap-4">
              <span className="ph ph-d w-[130px] shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
              </span>
              
              <div className="py-4 pr-4 min-w-0">
                <span className="badge badge-gray mb-1.5">Seller Stories</span>
                <p className="text-[15px] font-extrabold leading-snug clamp-2 mb-1.5">From Jamalpur to nationwide: a nokshi kantha story</p>
                
                <p className="text-[12px] text-ink-400">8 Aug 2026 · 7 min read</p>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-5">
          <button className="chip is-active" type="button">All posts</button>
          <button className="chip " type="button">Buying Guide</button>
          <button className="chip " type="button">Services</button>
          <button className="chip " type="button">Deals</button>
          <button className="chip " type="button">Seller Stories</button>
          <button className="chip " type="button">Home &amp; Living</button>
          <button className="chip " type="button">Payments</button>
          <button className="chip " type="button">Behind the Scenes</button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-a h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                <path d="M11 19h2"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Buying Guide</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">How to spot a genuine smartphone before you pay</p>
              
              <p className="text-[12px] text-ink-400">14 Aug 2026 · 8 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-b h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Services</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">10 questions to ask before hiring an AC technician</p>
              
              <p className="text-[12px] text-ink-400">12 Aug 2026 · 6 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-c h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                <path d="M3 12h18M12 8v13"></path>
                <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Deals</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">Eid shopping on a budget: 25 gifts under ৳1,000</p>
              
              <p className="text-[12px] text-ink-400">10 Aug 2026 · 5 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-d h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Seller Stories</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">From Jamalpur to nationwide: a nokshi kantha story</p>
              
              <p className="text-[12px] text-ink-400">8 Aug 2026 · 7 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-e h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V9.5l8-6 8 6V20"></path>
                <path d="M9.5 20v-6h5v6"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Home &amp; Living</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">Monsoon home maintenance checklist for Dhaka flats</p>
              
              <p className="text-[12px] text-ink-400">5 Aug 2026 · 9 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-f h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                <path d="M16 12h2"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Payments</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">Cash on delivery vs online payment: which is safer?</p>
              
              <p className="text-[12px] text-ink-400">2 Aug 2026 · 4 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-g h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                <circle cx="6.5" cy="17.5" r="1.5"></circle>
                <circle cx="17.5" cy="17.5" r="1.5"></circle>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Behind the Scenes</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">How our couriers reach 4,800 unions every week</p>
              
              <p className="text-[12px] text-ink-400">29 Jul 2026 · 10 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-h h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16v12H4z"></path>
                <path d="M9 8V4h6v4"></path>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Seller Guide</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">Starting an online shop with only ৳5,000 capital</p>
              
              <p className="text-[12px] text-ink-400">26 Jul 2026 · 11 min read</p>
            </div>
          </Link>
          <Link href="/blog-details" className="card overflow-hidden card-hover">
            <span className="ph ph-i h-[150px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                <circle cx="12" cy="14" r="3.2"></circle>
              </svg>
            </span>
            
            <div className="p-4">
              <span className="badge badge-gray mb-2">Services</span>
              <p className="text-[14.5px] font-extrabold leading-snug clamp-2 mb-2">The complete guide to booking a wedding photographer</p>
              
              <p className="text-[12px] text-ink-400">22 Jul 2026 · 8 min read</p>
            </div>
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-7">
          
          <p className="text-[12.5px] text-ink-500">
            Showing 
            <b className="text-ink-900">1–40</b>
             of 
            <b className="text-ink-900">12,841</b>
             results
          </p>
          
          <div className="pager">
            <a href="#">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 6-6 6 6 6"></path>
              </svg>
            </a>
            <span className="is-current">1</span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <span>…</span>
            <a href="#">322</a>
            <a href="#">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-[12.5px]">
            <span className="text-ink-500">Per page</span>
            <select className="select input-sm !w-auto">
              <option>40</option>
              <option>60</option>
              <option>100</option>
            </select>
          </div>
        </div>
        
        <div className="card p-6 sm:p-8 mt-7 bg-ink-950 text-white flex flex-col md:flex-row items-center gap-5">
          
          <div className="flex-1">
            <h2 className="font-display text-[20px] font-extrabold mb-1.5">Get the weekly HaatBazar digest</h2>
            
            <p className="text-[13px] text-white/70">Deals, guides and seller tips every Thursday. No spam, unsubscribe anytime.</p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <input className="input md:w-64" placeholder="you@example.com" />
            <button className="btn btn-primary shrink-0" type="button">Subscribe</button>
          </div>
        </div>
        
      </main>
    </>
  );
}
