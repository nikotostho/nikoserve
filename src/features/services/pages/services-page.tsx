import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/services">Local Services</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/services">Dhaka</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Home Services</span>
          </nav>
        </div>
      </div>
      <main className="shell py-5">
        
        <div className="card p-4 sm:p-5 mb-4">
          
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            
            <div className="flex-1">
              <h1 className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight mb-1.5">Home Services in Dhaka</h1>
              
              <p className="text-[13px] text-ink-500">
                3,412 verified providers · showing results near 
                <b className="text-ink-900">Dhanmondi</b>
                 · average response time 12 minutes
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-service" data-modal-open="quoteModal" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                </svg>
                Get free quotes
              </button>
              
              <button className="btn btn-sm btn-outline" data-toast="Alert created" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"></path>
                  <path d="M10 19a2 2 0 0 0 4 0"></path>
                </svg>
                Create alert
              </button>
              
              <button className="btn btn-sm btn-outline" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="2.5"></circle>
                  <circle cx="6" cy="12" r="2.5"></circle>
                  <circle cx="18" cy="19" r="2.5"></circle>
                  <path d="m8 11 8-4M8 13l8 4"></path>
                </svg>
                Share
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
            
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-service-50/60">
              <span className="w-9 h-9 rounded-lg bg-white text-service-600 grid place-items-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">100% verified</p>
                <p className="text-[11px] text-ink-500 clamp-1">NID &amp; trade licence checked</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-service-50/60">
              <span className="w-9 h-9 rounded-lg bg-white text-service-600 grid place-items-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M12 7v5l3 2"></path>
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">Fast response</p>
                <p className="text-[11px] text-ink-500 clamp-1">Average reply in 12 min</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-service-50/60">
              <span className="w-9 h-9 rounded-lg bg-white text-service-600 grid place-items-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <circle cx="12" cy="12" r="2.6"></circle>
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">No booking fee</p>
                <p className="text-[11px] text-ink-500 clamp-1">Pay the provider directly</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-service-50/60">
              <span className="w-9 h-9 rounded-lg bg-white text-service-600 grid place-items-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">Real reviews</p>
                <p className="text-[11px] text-ink-500 clamp-1">Only from confirmed jobs</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
          <button className="chip chip-service is-active" type="button">All home services</button>
          <button className="chip chip-service " type="button">Electrician</button>
          <button className="chip chip-service " type="button">Plumber</button>
          <button className="chip chip-service " type="button">AC repair</button>
          <button className="chip chip-service " type="button">Cleaning</button>
          <button className="chip chip-service " type="button">Painter</button>
          <button className="chip chip-service " type="button">Carpenter</button>
          <button className="chip chip-service " type="button">Pest control</button>
          <button className="chip chip-service " type="button">Appliance repair</button>
          <button className="chip chip-service " type="button">CCTV install</button>
          <button className="chip chip-service " type="button">Interior design</button>
        </div>
        
        <div className="flex gap-5">
          
          <aside className="hidden lg:block w-[262px] shrink-0">
            
            <div className="card sticky-24 overflow-hidden">
              
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#e7e9ef]">
                <h3 className="text-[14px] font-extrabold flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5h18l-7 8v6l-4 2v-8z"></path>
                  </svg>
                  Filters
                </h3>
                <button className="text-[12px] font-bold text-brand-600" type="button">Clear all</button>
              </div>
              
              <div className="max-h-[calc(100vh-190px)] overflow-y-auto thin-scroll divide-y divide-[#f0f1f5]">
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Active filters</p>
                  <div className="flex flex-wrap gap-1.5">
                    
                    <span className="badge badge-brand">
                      Dhaka
                      <button className="ml-0.5" type="button">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12"></path>
                        </svg>
                      </button>
                    </span>
                    <span className="badge badge-brand">
                      Open now
                      <button className="ml-0.5" type="button">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12"></path>
                        </svg>
                      </button>
                    </span>
                    <span className="badge badge-brand">
                      4★ &amp; up
                      <button className="ml-0.5" type="button">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12"></path>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Category</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Electricians (612)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Plumbers (438)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      AC Service (351)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Painters (207)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Carpenters (188)
                    </label>
                  </div>
                  
                  <button className="text-[12px] font-bold text-brand-600 mt-2.5" type="button">+ Show 14 more</button>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Budget (৳)</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <input className="input input-sm" placeholder="Min" defaultValue="1000" />
                    <span className="text-ink-300">—</span>
                    <input className="input input-sm" placeholder="Max" defaultValue="30000" />
                  </div>
                  
                  <input type="range" className="w-full accent-brand-500" defaultValue="60" />
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    <button className="chip !h-7 !text-[11.5px]" type="button">Under 5k</button>
                    <button className="chip !h-7 !text-[11.5px]" type="button">5k–15k</button>
                    <button className="chip !h-7 !text-[11.5px]" type="button">15k–30k</button>
                    <button className="chip !h-7 !text-[11.5px]" type="button">30k+</button>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Location / Area</p>
                  
                  <div className="input-group mb-2.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    <input className="input input-sm !pl-9" placeholder="Search area…" />
                  </div>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" defaultChecked />
                      Dhanmondi 
                      <span className="text-ink-400">(300)</span>
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Gulshan 
                      <span className="text-ink-400">(273)</span>
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Mirpur 
                      <span className="text-ink-400">(246)</span>
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Uttara 
                      <span className="text-ink-400">(219)</span>
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Mohammadpur 
                      <span className="text-ink-400">(192)</span>
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Bashundhara R/A 
                      <span className="text-ink-400">(165)</span>
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Ratings</p>
                  
                  <div className="space-y-2">
                    <label className="check">
                      <input type="radio" name="rt" />
                      <span className="stars ">
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      
                      <span className="text-[12.5px]">4★ &amp; up</span>
                    </label>
                    <label className="check">
                      <input type="radio" name="rt" />
                      <span className="stars ">
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      
                      <span className="text-[12.5px]">3★ &amp; up</span>
                    </label>
                    <label className="check">
                      <input type="radio" name="rt" />
                      <span className="stars ">
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                        <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      
                      <span className="text-[12.5px]">2★ &amp; up</span>
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Availability</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" defaultChecked />
                      Open now
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Open 24 hours
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Available today
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Available on weekend
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Emergency service
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Distance</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="radio" name="dist" />
                      Within 1 km
                    </label>
                    <label className="check">
                      <input type="radio" name="dist" />
                      Within 3 km
                    </label>
                    <label className="check">
                      <input type="radio" name="dist" />
                      Within 5 km
                    </label>
                    <label className="check">
                      <input type="radio" name="dist" />
                      Within 10 km
                    </label>
                    <label className="check">
                      <input type="radio" name="dist" />
                      Anywhere in city
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Service mode</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      At my home
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      At their place
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Online / remote
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Pickup &amp; drop
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Payment accepted</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Cash
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      bKash / Nagad
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Card
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Bank transfer
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Trust &amp; badges</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      HaatBazar Verified
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Trust seal (KYC done)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Top rated pro
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      5+ years experience
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Insured / bonded
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Gender preference</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="radio" name="gen" />
                      Any
                    </label>
                    <label className="check">
                      <input type="radio" name="gen" />
                      Female staff available
                    </label>
                    <label className="check">
                      <input type="radio" name="gen" />
                      Male staff available
                    </label>
                  </div>
                </div>
                
              </div>
              
              <div className="p-3 border-t border-[#e7e9ef] flex gap-2">
                <button className="btn btn-sm btn-outline flex-1" type="button">Reset</button>
                <button className="btn btn-sm btn-primary flex-1" type="button">Apply filters</button>
              </div>
              
            </div>
          </aside>
          
          <div className="flex-1 min-w-0">
            
            <div className="card p-3 mb-4 flex flex-wrap items-center gap-2">
              
              <button className="btn btn-sm btn-outline lg:hidden" data-drawer-open="filterDrawer" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5h18l-7 8v6l-4 2v-8z"></path>
                </svg>
                Filters
                <span className="badge badge-brand ml-1">2</span>
              </button>
              
              <span className="hidden sm:block text-[12.5px] text-ink-500">Sort</span>
              
              <div className="flex flex-wrap gap-1.5">
                <button className="chip is-active" type="button">Relevance</button>
                <button className="chip " type="button">Nearest first</button>
                <button className="chip " type="button">Highest rated</button>
                <button className="chip " type="button">Most reviewed</button>
                <button className="chip " type="button">Newest</button>
                <button className="chip " type="button">Quickest response</button>
              </div>
              
              <div className="ml-auto flex items-center gap-2">
                <label className="check hidden sm:flex">
                  <input type="checkbox" defaultChecked />
                  Open now
                </label>
                <button className="btn btn-sm btn-outline" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  Map view
                </button>
              </div>
            </div>
            
            <div className="card overflow-hidden mb-4">
              <div className="ph ph-j h-[170px] relative">
                
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <span className="w-11 h-11 rounded-full bg-white shadow-pop grid place-items-center mx-auto mb-2 text-brand-500">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                    </span>
                    
                    <p className="text-[13px] font-extrabold text-ink-800">12 providers within 3 km of Dhanmondi</p>
                    <button className="btn btn-sm btn-dark mt-2" type="button">Explore the map</button>
                  </div>
                </div>
                
                <span className="absolute w-7 h-7 rounded-full bg-brand-500 text-white text-[10px] font-extrabold grid place-items-center shadow-pop" style={{ left: "18%", top: "22%" }}>৳</span>
                <span className="absolute w-7 h-7 rounded-full bg-brand-500 text-white text-[10px] font-extrabold grid place-items-center shadow-pop" style={{ left: "62%", top: "35%" }}>৳</span>
                <span className="absolute w-7 h-7 rounded-full bg-brand-500 text-white text-[10px] font-extrabold grid place-items-center shadow-pop" style={{ left: "40%", top: "68%" }}>৳</span>
                <span className="absolute w-7 h-7 rounded-full bg-brand-500 text-white text-[10px] font-extrabold grid place-items-center shadow-pop" style={{ left: "78%", top: "58%" }}>৳</span>
                <span className="absolute w-7 h-7 rounded-full bg-brand-500 text-white text-[10px] font-extrabold grid place-items-center shadow-pop" style={{ left: "30%", top: "44%" }}>৳</span>
              </div>
            </div>
            
            <div className="space-y-3.5">
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-d w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                        <path d="M13 6l5 5"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Rahim Electric &amp; Wiring Service</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Electricians · 11 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.7 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">624 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">0.8 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Mirpur 10, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 10 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Emergency 24/7</span>
                      <span className="badge badge-gray !text-[10.5px]">Free estimate</span>
                      <span className="badge badge-gray !text-[10.5px]">Verified</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳400 – ৳2,500</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-e w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">CoolCare AC Servicing &amp; Repair</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">AC Repair &amp; Service · 9 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.8 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">1,032 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">2.4 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Uttara Sector 7, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 9 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Same-day service</span>
                      <span className="badge badge-gray !text-[10.5px]">Warranty 90 days</span>
                      <span className="badge badge-gray !text-[10.5px]">Verified</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳600 – ৳3,500</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-f w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="6" r="2.5"></circle>
                        <circle cx="6" cy="18" r="2.5"></circle>
                        <path d="M8 8l12 10M8 16 20 6"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Glam Studio — Ladies Beauty Parlour</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Beauty Parlour · 7 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.6 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">489 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">1.2 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Dhanmondi 27, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 8 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Home service</span>
                      <span className="badge badge-gray !text-[10.5px]">Bridal package</span>
                      <span className="badge badge-gray !text-[10.5px]">AC lounge</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳500 – ৳12,000</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-g w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                        <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                        <circle cx="18" cy="10" r="2"></circle>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Dr. Farhana Rahman — Skin &amp; Laser</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Dermatologist · 14 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.9 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">318 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">3.1 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Green Road, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Chamber: 5 PM – 9 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Online booking</span>
                      <span className="badge badge-gray !text-[10.5px]">MBBS, FCPS</span>
                      <span className="badge badge-gray !text-[10.5px]">Card accepted</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳800 consultation</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-h w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m3 9 9-4 9 4-9 4z"></path>
                        <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Scholars Home Tutor Network</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Home Tutors · 6 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.5 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">742 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">1.9 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Mohammadpur, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 11 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Demo class free</span>
                      <span className="badge badge-gray !text-[10.5px]">All boards</span>
                      <span className="badge badge-gray !text-[10.5px]">Female tutor</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳3,000 – ৳12,000/mo</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-i w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 21h10l1-8H6z"></path>
                        <path d="M6 13a4 4 0 0 1 2-7 4 4 0 0 1 8 0 4 4 0 0 1 2 7"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Nawab Bari Kacchi &amp; Catering</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Restaurants &amp; Catering · 5 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.4 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">2,841 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">0.6 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Bailey Road, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 12 AM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Home delivery</span>
                      <span className="badge badge-gray !text-[10.5px]">Party order</span>
                      <span className="badge badge-gray !text-[10.5px]">Pure halal</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳250 for two</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-a w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Dream Wedding Event Planners</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Event &amp; Wedding Planner · 12 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.7 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">213 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">4.2 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Banani 11, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 8 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Full package</span>
                      <span className="badge badge-gray !text-[10.5px]">Photography</span>
                      <span className="badge badge-gray !text-[10.5px]">Stage decor</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳25,000 onwards</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-b w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                        <circle cx="6.5" cy="17.5" r="1.5"></circle>
                        <circle cx="17.5" cy="17.5" r="1.5"></circle>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Speedy Packers &amp; Movers BD</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Packers &amp; Movers · 8 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.3 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">566 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">3.7 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Badda Link Road, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open 24 hours</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Insured shifting</span>
                      <span className="badge badge-gray !text-[10.5px]">Labour included</span>
                      <span className="badge badge-gray !text-[10.5px]">Truck fleet</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳3,500 onwards</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-c w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 3 8 9l7 7 6-6z"></path>
                        <path d="M8 16 3 21M11 19l-4 2M6 14l-2 4"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">CleanPro Home &amp; Office Cleaning</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Cleaning Services · 4 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.6 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">421 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">5.1 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Bashundhara R/A, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 9 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Deep cleaning</span>
                      <span className="badge badge-gray !text-[10.5px]">Eco chemicals</span>
                      <span className="badge badge-gray !text-[10.5px]">Trained staff</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳1,200 onwards</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-d w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 16v-4l2-5h10l2 5v4"></path>
                        <path d="M3 16h18v3h-2l-1-2H6l-1 2H3z"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Rider Auto Care — Car Servicing</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Car Repair &amp; Service · 10 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.5 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">289 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">2.8 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Tejgaon I/A, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 8 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Pickup &amp; drop</span>
                      <span className="badge badge-gray !text-[10.5px]">Genuine parts</span>
                      <span className="badge badge-gray !text-[10.5px]">Diagnostics</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳2,000 onwards</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-e w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="7" cy="9" r="2"></circle>
                        <circle cx="12" cy="7" r="2"></circle>
                        <circle cx="17" cy="9" r="2"></circle>
                        <path d="M8 15a4 4 0 0 1 8 0c0 3-2 4-4 4s-4-1-4-4z"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">PawLove Veterinary &amp; Pet Grooming</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Veterinary &amp; Pet Care · 6 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.8 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">176 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">4.6 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Gulshan 2, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 7 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Vaccination</span>
                      <span className="badge badge-gray !text-[10.5px]">Grooming</span>
                      <span className="badge badge-gray !text-[10.5px]">Home visit</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳700 onwards</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-f w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21 4-9 16-2-6-6-2z"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">SkyHigh Travels — Visa &amp; Air Ticket</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Travel Agents · 9 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.4 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">934 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">6.3 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Motijheel C/A, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 6 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Visa processing</span>
                      <span className="badge badge-gray !text-[10.5px]">Umrah package</span>
                      <span className="badge badge-gray !text-[10.5px]">IATA agent</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">Free consultation</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-g w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                        <path d="M13 6l5 5"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Rahim Electric &amp; Wiring Service</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Electricians · 11 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.7 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">624 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">0.8 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Mirpur 10, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 10 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Emergency 24/7</span>
                      <span className="badge badge-gray !text-[10.5px]">Free estimate</span>
                      <span className="badge badge-gray !text-[10.5px]">Verified</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳400 – ৳2,500</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-h w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">CoolCare AC Servicing &amp; Repair</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">AC Repair &amp; Service · 9 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.8 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">1,032 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">2.4 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Uttara Sector 7, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 9 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Same-day service</span>
                      <span className="badge badge-gray !text-[10.5px]">Warranty 90 days</span>
                      <span className="badge badge-gray !text-[10.5px]">Verified</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳600 – ৳3,500</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-i w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="6" r="2.5"></circle>
                        <circle cx="6" cy="18" r="2.5"></circle>
                        <path d="M8 8l12 10M8 16 20 6"></path>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Glam Studio — Ladies Beauty Parlour</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Beauty Parlour · 7 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.6 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">489 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">1.2 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Dhanmondi 27, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Open now · Closes 8 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Home service</span>
                      <span className="badge badge-gray !text-[10.5px]">Bridal package</span>
                      <span className="badge badge-gray !text-[10.5px]">AC lounge</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳500 – ৳12,000</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
              <article className="card card-hover overflow-hidden">
                
                <div className="flex gap-3.5 p-3.5">
                  
                  <Link href="/service-details" className="shrink-0">
                    <span className="ph ph-a w-[84px] h-[84px] sm:w-[104px] sm:h-[104px] rounded-xl">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                        <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                        <circle cx="18" cy="10" r="2"></circle>
                      </svg>
                    </span>
                  </Link>
                  
                  <div className="min-w-0 flex-1">
                    
                    <div className="flex items-start gap-2">
                      
                      <div className="min-w-0">
                        <Link href="/service-details" className="font-display text-[15px] font-extrabold text-ink-900 hover:text-service-600 clamp-1">Dr. Farhana Rahman — Skin &amp; Laser</Link>
                        
                        <p className="text-[12px] text-ink-500 mt-0.5 clamp-1">Dermatologist · 14 yrs in business</p>
                      </div>
                      
                      <span className="badge badge-teal ml-auto shrink-0">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-1.5">
                      
                      <span className="rating-pill">
                        4.9 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">318 ratings</span>
                      
                      <span className="badge badge-gray !text-[10.5px]">3.1 km away</span>
                    </div>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] text-ink-600 mt-2">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Green Road, Dhaka</span>
                    </p>
                    
                    <p className="flex items-center gap-1.5 text-[12.5px] mt-1">
                      <svg className="w-3.5 h-3.5 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M12 7v5l3 2"></path>
                      </svg>
                      <span className="text-green-700 font-semibold">Chamber: 5 PM – 9 PM</span>
                    </p>
                    
                    <div className="hidden sm:flex flex-wrap gap-1.5 mt-2">
                      <span className="badge badge-gray !text-[10.5px]">Online booking</span>
                      <span className="badge badge-gray !text-[10.5px]">MBBS, FCPS</span>
                      <span className="badge badge-gray !text-[10.5px]">Card accepted</span>
                    </div>
                    
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 px-3.5 pb-3.5">
                  
                  <span className="text-[13px] font-extrabold text-ink-900 mr-auto">৳800 consultation</span>
                  
                  <button className="btn btn-sm btn-service" data-modal-open="callModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Show number
                  </button>
                  
                  <button className="btn btn-sm btn-outline" data-modal-open="quoteModal" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Get quote
                  </button>
                  
                  <Link href="/service-details#book" className="btn btn-sm btn-outline hidden sm:inline-flex">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                      <path d="M8 3v4M16 3v4M3 10h18"></path>
                    </svg>
                    Book
                  </Link>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9" data-toggle-class="is-on" aria-label="Save" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="btn btn-sm btn-outline btn-icon !w-9 hidden sm:grid" aria-label="Share" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  
                </div>
              </article>
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
            
            <div className="card p-5 mt-5">
              <h2 className="font-display text-[17px] font-extrabold mb-2">Hiring a home service provider in Dhaka</h2>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mb-4">Every provider listed on HaatBazar submits a National ID, trade licence (where applicable) and at least two customer references before the verified badge is issued. Compare quotes from multiple professionals, check genuine reviews from completed jobs, and only pay after you are satisfied with the work.</p>
              
              <div className="grid sm:grid-cols-3 gap-4 text-[12.5px]">
                <div>
                  <p className="font-extrabold text-ink-800 mb-2">Popular services</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Electrician</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Plumber</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">AC servicing</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Deep cleaning</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Painting</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Pest control</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Carpenter</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Appliance repair</Link>
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-ink-800 mb-2">Popular areas</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Dhanmondi</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Gulshan</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Banani</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Mirpur</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Uttara</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Bashundhara</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Mohammadpur</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Motijheel</Link>
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-ink-800 mb-2">Other cities</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Chattogram</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Sylhet</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Khulna</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Rajshahi</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Barishal</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Rangpur</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Cumilla</Link>
                    <Link href="/services" className="badge badge-gray hover:!bg-service-50 hover:!text-service-700">Narayanganj</Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <div className="drawer" id="filterDrawer">
        <div className="drawer-backdrop" data-drawer-close=""></div>
        <div className="drawer-panel">
          
          <div className="flex items-center justify-between p-4 border-b border-[#e7e9ef]">
            <span className="font-display text-[16px] font-extrabold">Filters</span>
            <button className="icon-btn" data-drawer-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            <div>
              <p className="text-[13px] font-extrabold mb-2">Category</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Electricians
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Plumbers
                </label>
                <label className="check">
                  <input type="checkbox" />
                  AC Service
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Painters
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Cleaning
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Distance</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Within 1 km
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Within 3 km
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Within 5 km
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Within 10 km
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Availability</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Open now
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Open 24 hours
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Weekend available
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Emergency service
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Budget</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Under ৳1,000
                </label>
                <label className="check">
                  <input type="checkbox" />
                  ৳1,000–5,000
                </label>
                <label className="check">
                  <input type="checkbox" />
                  ৳5,000+
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Ratings</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  4★ &amp; up
                </label>
                <label className="check">
                  <input type="checkbox" />
                  3★ &amp; up
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Payment</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Cash
                </label>
                <label className="check">
                  <input type="checkbox" />
                  bKash / Nagad
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Card
                </label>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-[#e7e9ef] flex gap-2">
            <button className="btn btn-outline flex-1" data-drawer-close="" type="button">Reset</button>
            <button className="btn btn-service flex-1" data-drawer-close="" type="button">Show 3,412 providers</button>
          </div>
        </div>
      </div>
      <div className="modal" id="callModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel is-narrow">
          
          <div className="p-6 text-center">
            <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center mx-auto mb-3">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
              </svg>
            </span>
            
            <h3 className="font-display text-[17px] font-extrabold mb-1">CoolCare AC Servicing</h3>
            <p className="text-[12.5px] text-ink-500 mb-4">Uttara Sector 7, Dhaka · 4.8★ (1,032)</p>
            
            <div className="rounded-xl bg-ink-50 p-4 mb-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-400 mb-1">Primary number</p>
              
              <p className="font-display text-[22px] font-extrabold tracking-tight">+880 1712-998877</p>
              
              <p className="text-[11.5px] text-ink-500 mt-1">Alternate: +880 9612-334455 · Landline: 02-58054412</p>
            </div>
            
            <div className="flex gap-2 mb-3">
              <a href="tel:+8801712998877" className="btn btn-service flex-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                </svg>
                Call now
              </a>
              <button className="btn btn-outline flex-1" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                WhatsApp
              </button>
            </div>
            
            <p className="text-[11.5px] text-ink-400">
              By calling you agree to our 
              <Link href="/terms" className="link">Terms</Link>
              . Never pay in advance without an invoice.
            </p>
          </div>
        </div>
      </div>
      <div className="modal" id="quoteModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel">
          
          <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
            <div>
              <h3 className="font-display text-[17px] font-extrabold">Get free quotes</h3>
              <p className="text-[12.5px] text-ink-500">Tell us what you need — up to 5 providers will reply.</p>
            </div>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            
            <div className="sm:col-span-2">
              <label className="label">
                What service do you need? 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>AC Servicing &amp; Repair</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>House Cleaning</option>
                <option>Home Tutor</option>
                <option>Event Planner</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Your name 
                <span className="req">*</span>
              </label>
              <input className="input" defaultValue="Nusrat Ahmed" />
            </div>
            
            <div>
              <label className="label">
                Mobile number 
                <span className="req">*</span>
              </label>
              <div className="input-affix">
                <span className="affix">+880</span>
                <input className="input" defaultValue="1712-345678" />
              </div>
            </div>
            
            <div>
              <label className="label">
                Area / Location 
                <span className="req">*</span>
              </label>
              <input className="input" defaultValue="Dhanmondi, Dhaka" />
            </div>
            
            <div>
              <label className="label">When do you need it?</label>
              <select className="select">
                <option>As soon as possible</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This week</option>
                <option>Just exploring</option>
              </select>
            </div>
            
            <div>
              <label className="label">Approximate budget</label>
              <select className="select">
                <option>Not sure yet</option>
                <option>Under ৳1,000</option>
                <option>৳1,000 – ৳5,000</option>
                <option>৳5,000 – ৳20,000</option>
                <option>Above ৳20,000</option>
              </select>
            </div>
            
            <div>
              <label className="label">Preferred contact</label>
              <select className="select">
                <option>Phone call</option>
                <option>WhatsApp</option>
                <option>SMS</option>
                <option>Email</option>
              </select>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">Describe your requirement</label>
              <textarea className="textarea" placeholder="e.g. 1.5 ton split AC not cooling, need servicing and gas refill this weekend…"></textarea>
            </div>
            
            <div className="sm:col-span-2">
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                <span>Attach photos or documents (optional) — max 5 files, 5 MB each</span>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label className="check">
                <input type="checkbox" defaultChecked />
                <span>Share my number with matching providers so they can call me back</span>
              </label>
            </div>
            
            <div className="sm:col-span-2 flex gap-2">
              <button className="btn btn-outline flex-1" data-modal-close="" type="button">Cancel</button>
              <button className="btn btn-primary flex-1" data-modal-close="" data-toast="Request sent to 5 providers" type="button">Send my request</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
