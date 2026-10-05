import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      <section className="ph ph-e grid-noise text-white">
        <div className="shell py-14 sm:py-20 relative z-10 max-w-3xl">
          
          <span className="badge !bg-white/20 !text-white mb-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="8" r="3.2"></circle>
              <path d="M2 21a7 7 0 0 1 14 0"></path>
              <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
            </svg>
            We're hiring
          </span>
          
          <h1 className="font-display text-[32px] sm:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-4">Build the marketplace 4 million Bangladeshis rely on</h1>
          
          <p className="text-[15px] text-white/85 leading-relaxed mb-6">We are 640 people across Dhaka, Chattogram and Sylhet solving hard problems in commerce, logistics and local services.</p>
          
          <a href="#openings" className="btn btn-lg !bg-white !text-ink-950">
            See open roles 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </a>
        </div>
      </section>
      <main className="shell py-12">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">640</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Team members</p>
          </div>
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">3</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Offices</p>
          </div>
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">38%</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Women in tech</p>
          </div>
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">4.6/5</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Employee rating</p>
          </div>
        </div>
        
        <h2 className="font-display text-[22px] font-extrabold mb-5">Benefits &amp; perks</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                <circle cx="12" cy="12" r="2.6"></circle>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Competitive salary</p>
            <p className="text-[12.5px] text-ink-500">Reviewed twice a year against market data</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                <circle cx="18" cy="10" r="2"></circle>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Health coverage</p>
            <p className="text-[12.5px] text-ink-500">Family medical insurance from day one</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V9.5l8-6 8 6V20"></path>
                <path d="M9.5 20v-6h5v6"></path>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Hybrid work</p>
            <p className="text-[12.5px] text-ink-500">3 days in office, 2 days remote</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-4 9 4-9 4z"></path>
                <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Learning budget</p>
            <p className="text-[12.5px] text-ink-500">৳50,000 per year for courses and conferences</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                <path d="M8 3v4M16 3v4M3 10h18"></path>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Generous leave</p>
            <p className="text-[12.5px] text-ink-500">24 days annual plus all public holidays</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                <path d="M3 12h18M12 8v13"></path>
                <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Festival bonus</p>
            <p className="text-[12.5px] text-ink-500">Two bonuses per year</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 7h12l1 14H5z"></path>
                <path d="M9 7a3 3 0 0 1 6 0"></path>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Employee discount</p>
            <p className="text-[12.5px] text-ink-500">20% off everything on the platform</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2"></circle>
                <path d="M2 21a7 7 0 0 1 14 0"></path>
                <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
              </svg>
            </span>
            <p className="text-[14px] font-extrabold mb-1">Parental leave</p>
            <p className="text-[12.5px] text-ink-500">6 months maternity, 15 days paternity</p>
          </div>
        </div>
        
        <h2 className="font-display text-[22px] font-extrabold mb-4" id="openings">Open positions</h2>
        
        <div className="card p-3.5 mb-4 flex flex-col sm:flex-row gap-2.5">
          
          <div className="input-group flex-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <input className="input" placeholder="Search roles…" />
          </div>
          
          <select className="select sm:w-44">
            <option>All departments</option>
            <option>Engineering</option>
            <option>Product &amp; Design</option>
            <option>Operations</option>
            <option>Marketing</option>
            <option>Customer Care</option>
            <option>Finance</option>
          </select>
          
          <select className="select sm:w-40">
            <option>All locations</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Sylhet</option>
            <option>Remote</option>
          </select>
        </div>
        
        <div className="space-y-2.5">
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Senior Frontend Engineer</p>
              <p className="text-[12.5px] text-ink-500">Engineering · Dhaka · Hybrid</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Backend Engineer (Go)</p>
              <p className="text-[12.5px] text-ink-500">Engineering · Dhaka · Hybrid</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Android Engineer</p>
              <p className="text-[12.5px] text-ink-500">Engineering · Dhaka · Hybrid</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Product Designer</p>
              <p className="text-[12.5px] text-ink-500">Product &amp; Design · Dhaka · Hybrid</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Data Analyst</p>
              <p className="text-[12.5px] text-ink-500">Product &amp; Design · Dhaka · Remote</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Seller Growth Manager</p>
              <p className="text-[12.5px] text-ink-500">Operations · Chattogram</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Service Network Lead</p>
              <p className="text-[12.5px] text-ink-500">Operations · Sylhet</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Logistics Coordinator</p>
              <p className="text-[12.5px] text-ink-500">Operations · Dhaka</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Performance Marketing Lead</p>
              <p className="text-[12.5px] text-ink-500">Marketing · Dhaka · Hybrid</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Content Writer (Bangla)</p>
              <p className="text-[12.5px] text-ink-500">Marketing · Remote</p>
            </div>
            
            <span className="badge badge-gray">Contract</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Customer Care Executive</p>
              <p className="text-[12.5px] text-ink-500">Customer Care · Dhaka</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
          <div className="card p-4 flex flex-wrap items-center gap-3 card-hover">
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-[14.5px] font-extrabold">Finance Analyst</p>
              <p className="text-[12.5px] text-ink-500">Finance · Dhaka</p>
            </div>
            
            <span className="badge badge-gray">Full-time</span>
            <button className="btn btn-sm btn-outline" type="button">
              View &amp; apply 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="card p-6 mt-8 text-center">
          <p className="text-[15px] font-extrabold mb-1.5">Don't see your role?</p>
          
          <p className="text-[13px] text-ink-500 mb-4">Send us your CV and we will reach out when something matching opens up.</p>
          
          <Link href="/contact" className="btn btn-primary">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="m3 7 9 6 9-6"></path>
            </svg>
            Send an open application
          </Link>
        </div>
        
      </main>
    </>
  );
}
