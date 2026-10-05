import Link from "next/link";

export default function HelpCenterPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Help Centre</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        
        <div className="rounded-2xl ph ph-c grid-noise p-8 sm:p-10 text-white mb-7 text-center">
          
          <h1 className="font-display text-[28px] sm:text-[34px] font-extrabold tracking-tight mb-2 relative z-10">How can we help you?</h1>
          
          <p className="text-[14px] text-white/80 mb-5 relative z-10">Search 240+ help articles or browse by topic.</p>
          
          <div className="max-w-xl mx-auto relative z-10">
            <div className="input-group">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-3.5-3.5"></path>
              </svg>
              <input className="input !h-12" placeholder="Search: refund, delivery time, cancel order…" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4 relative z-10">
            <a href="#" className="badge !bg-white/20 !text-white">Track my order</a>
            <a href="#" className="badge !bg-white/20 !text-white">Return an item</a>
            <a href="#" className="badge !bg-white/20 !text-white">Refund status</a>
            <a href="#" className="badge !bg-white/20 !text-white">Change address</a>
            <a href="#" className="badge !bg-white/20 !text-white">Cancel booking</a>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2h12l1 5H5z"></path>
                <path d="M5 7v15h14V7"></path>
                <path d="M9 12h6"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Orders &amp; delivery</p>
            <p className="text-[12px] text-ink-500">48 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 14 4 9l5-5"></path>
                <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Returns &amp; refunds</p>
            <p className="text-[12px] text-ink-500">32 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                <path d="M16 12h2"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Payments &amp; wallet</p>
            <p className="text-[12px] text-ink-500">29 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                <path d="M13 6l5 5"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Service bookings</p>
            <p className="text-[12px] text-ink-500">35 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3.5"></circle>
                <path d="M5 21a7 7 0 0 1 14 0"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Account &amp; profile</p>
            <p className="text-[12px] text-ink-500">22 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16v12H4z"></path>
                <path d="M9 8V4h6v4"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Selling &amp; seller centre</p>
            <p className="text-[12px] text-ink-500">41 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Trust &amp; safety</p>
            <p className="text-[12px] text-ink-500">18 articles</p>
          </Link>
          <Link href="/faq" className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"></path>
              </svg>
            </span>
            <p className="text-[14.5px] font-extrabold mb-0.5">Everything else</p>
            <p className="text-[12px] text-ink-500">15 articles</p>
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 mb-8">
          
          <div className="card p-5">
            <h2 className="text-[16px] font-extrabold mb-3">Popular articles</h2>
            
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">How to track your order step by step</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">What to do if your parcel is damaged</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">How refunds are processed and how long they take</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">How to change your delivery address after ordering</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">Understanding delivery charges</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">How to leave a review with photos</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">What the verified provider badge means</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
              <a href="#" className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-ink-50 text-[13px] text-ink-700">
                <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                <span className="clamp-1">How to report a fake product</span>
                <svg className="w-4 h-4 text-ink-300 ml-auto shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="card p-5">
            <h2 className="text-[16px] font-extrabold mb-3">Contact options</h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-10 h-10 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-extrabold">Call 16247</p>
                  <p className="text-[12px] text-ink-500">24 hours · toll free</p>
                </div>
                <button className="btn btn-xs btn-primary" type="button">Call now</button>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-10 h-10 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-extrabold">Live chat</p>
                  <p className="text-[12px] text-ink-500">Average wait 2 minutes</p>
                </div>
                <button className="btn btn-xs btn-outline" type="button">Start chat</button>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-10 h-10 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-extrabold">Email support</p>
                  <p className="text-[12px] text-ink-500">Reply within 6 hours</p>
                </div>
                <button className="btn btn-xs btn-outline" type="button">Send email</button>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-10 h-10 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                    <path d="M12 7v10"></path>
                  </svg>
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] font-extrabold">My support tickets</p>
                  <p className="text-[12px] text-ink-500">Track your open issues</p>
                </div>
                <button className="btn btn-xs btn-outline" type="button">View tickets</button>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}
