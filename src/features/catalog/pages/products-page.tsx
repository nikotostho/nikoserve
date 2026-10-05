import Link from "next/link";
import ProductCardActions from "@/components/catalog/product-card-actions";

export default function ProductsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/categories">Electronics &amp; Gadgets</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/products">Mobile &amp; Tablets</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Smartphones</span>
          </nav>
        </div>
      </div>
      <main className="shell py-5">
        
        <div className="card p-4 sm:p-5 mb-4 flex flex-col md:flex-row gap-4 md:items-center">
          
          <div className="flex-1">
            <h1 className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight mb-1.5">Smartphones in Bangladesh</h1>
            
            <p className="text-[13px] text-ink-500">
              12,841 results found for 
              <b className="text-ink-900">“Smartphones”</b>
               · prices from ৳1,190 to ৳2,45,000 · updated 12 minutes ago
            </p>
            
            <div className="flex flex-wrap gap-3 mt-3 text-[12px] text-ink-500">
              
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                  <circle cx="6.5" cy="17.5" r="1.5"></circle>
                  <circle cx="17.5" cy="17.5" r="1.5"></circle>
                </svg>
                Free delivery on 6,120 items
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                2,915 with official warranty
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <circle cx="12" cy="12" r="2.6"></circle>
                </svg>
                EMI available on 1,208 items
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h16v12H4z"></path>
                  <path d="M9 8V4h6v4"></path>
                </svg>
                From 940 verified sellers
              </span>
            </div>
          </div>
          
          <div className="flex gap-2 shrink-0">
            <button className="btn btn-outline btn-sm" data-toast="Search saved" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"></path>
                <path d="M10 19a2 2 0 0 0 4 0"></path>
              </svg>
              Save this search
            </button>
            <button className="btn btn-outline btn-sm" type="button">
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
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
          <button className="chip is-active" type="button">All smartphones</button>
          <button className="chip " type="button">Under ৳10,000</button>
          <button className="chip " type="button">৳10k–20k</button>
          <button className="chip " type="button">5G phones</button>
          <button className="chip " type="button">Gaming phones</button>
          <button className="chip " type="button">Big battery</button>
          <button className="chip " type="button">Best camera</button>
          <button className="chip " type="button">Official warranty</button>
          <button className="chip " type="button">EMI available</button>
          <button className="chip " type="button">Refurbished</button>
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
                      Free delivery
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
                      Smartphones (4,281)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Feature Phones (612)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Tablets (338)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Smart Watches (901)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Accessories (5,120)
                    </label>
                  </div>
                  
                  <button className="text-[12px] font-bold text-brand-600 mt-2.5" type="button">+ Show 14 more</button>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Price range (৳)</p>
                  
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
                  <p className="text-[12.5px] font-extrabold mb-2.5">Brand</p>
                  
                  <div className="input-group mb-2.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    <input className="input input-sm !pl-9" placeholder="Search brand…" />
                  </div>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Samsung (612)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Xiaomi (508)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Realme (377)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Walton (296)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Vivo (241)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Oppo (233)
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Delivery options</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Free delivery
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Express (same day)
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Cash on delivery
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Pickup from shop
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Seller type</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Mall / Official store
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Verified seller
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Local shop
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Top rated (4.5★+)
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Warranty &amp; condition</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Brand warranty
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Seller warranty
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      No warranty
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Brand new
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Refurbished
                    </label>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-[12.5px] font-extrabold mb-2.5">Offers</p>
                  
                  <div className="space-y-2 text-[13px]">
                    <label className="check">
                      <input type="checkbox" />
                      Flash sale items
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Voucher available
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Bundle deals
                    </label>
                    <label className="check">
                      <input type="checkbox" />
                      Installment (EMI)
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
                <span className="badge badge-brand ml-1">3</span>
              </button>
              
              <span className="hidden sm:block text-[12.5px] text-ink-500">Sort by</span>
              
              <div className="flex flex-wrap gap-1.5">
                <button className="chip is-active" type="button">Best match</button>
                <button className="chip " type="button">Popularity</button>
                <button className="chip " type="button">Newest</button>
                <button className="chip " type="button">Price: low → high</button>
                <button className="chip " type="button">Price: high → low</button>
                <button className="chip " type="button">Top rated</button>
                <button className="chip " type="button">Best selling</button>
              </div>
              
              <div className="ml-auto flex items-center gap-2">
                
                <label className="check hidden sm:flex">
                  <input type="checkbox" />
                  Free delivery only
                </label>
                
                <div className="seg">
                  <button className="is-active" aria-label="Grid view" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                    </svg>
                  </button>
                  <button aria-label="List view" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden ph ph-a p-5 mb-4 flex flex-wrap items-center gap-4 text-white">
              
              <div className="relative z-10 flex-1 min-w-[220px]">
                <span className="badge !bg-white/20 !text-white mb-1.5">Sponsored</span>
                <p className="font-display text-[18px] font-extrabold">Redmi Note 13 series — from ৳18,999</p>
                <p className="text-[12.5px] text-white/80">Official Xiaomi store · 2 years warranty · free delivery</p>
              </div>
              
              <Link href="/product-details" className="relative z-10 btn !bg-white !text-ink-950">
                Shop now 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-18%</span>
                  
                  <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                  
                  <span className="ph ph-a ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Realme C100x 6/128GB 8000mAh 45W 6.8"</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳11,499</span>
                    <span className="price-old">৳13,999</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(1,240)</span>
                    <span className="text-2xs text-ink-400 ml-auto">12.4k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Realme Official Store</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-12%</span>
                  
                  <span className="ph ph-b ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Walton 1.5 Ton Inverter Split AC WSI-KRYSTALINE</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳54,900</span>
                    <span className="price-old">৳62,500</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(386)</span>
                    <span className="text-2xs text-ink-400 ml-auto">386 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Walton Plaza Mirpur</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-12%</span>
                  
                  <span className="ph ph-c ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Xiaomi Redmi Note 13 Pro 8/256GB Global</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳28,990</span>
                    <span className="price-old">৳32,990</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(2,114)</span>
                    <span className="text-2xs text-ink-400 ml-auto">21.1k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Gadget Hub BD</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-22%</span>
                  
                  <span className="ph ph-d ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Original Jamdani Half Silk Saree with Blouse Piece</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳4,850</span>
                    <span className="price-old">৳6,200</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(512)</span>
                    <span className="text-2xs text-ink-400 ml-auto">512 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Tangail</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Tangail Weavers House</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-23%</span>
                  
                  <span className="ph ph-e ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Havit HV-H2002d Wired Gaming Headphone RGB</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳1,890</span>
                    <span className="price-old">৳2,450</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(891)</span>
                    <span className="text-2xs text-ink-400 ml-auto">8.9k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Star Tech Digital</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-15%</span>
                  
                  <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                  
                  <span className="ph ph-f ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Aarong Cotton Panjabi — Embroidered Chest</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳2,450</span>
                    <span className="price-old">৳2,900</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(274)</span>
                    <span className="text-2xs text-ink-400 ml-auto">274 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Aarong Official</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-17%</span>
                  
                  <span className="ph ph-g ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                      <path d="M16 12h2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Anker 323 PowerBank 20000mAh 22.5W PD</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳3,290</span>
                    <span className="price-old">৳3,990</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(1,533)</span>
                    <span className="text-2xs text-ink-400 ml-auto">15.3k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Anker Bangladesh</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-19%</span>
                  
                  <span className="ph ph-h ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Sunflower Organic Honey 500gm — Sundarban</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳690</span>
                    <span className="price-old">৳850</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(402)</span>
                    <span className="text-2xs text-ink-400 ml-auto">402 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Khaas Food</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-8%</span>
                  
                  <span className="ph ph-i ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                      <path d="M9 20h6M12 16v4"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Asus Vivobook 15 Core i5 12th Gen 8/512GB</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳78,500</span>
                    <span className="price-old">৳85,000</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(168)</span>
                    <span className="text-2xs text-ink-400 ml-auto">168 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Ryans Computers</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-15%</span>
                  
                  <span className="ph ph-a ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Philips HL7756 Mixer Grinder 750W 3 Jars</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳8,450</span>
                    <span className="price-old">৳9,900</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(96)</span>
                    <span className="text-2xs text-ink-400 ml-auto">96 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Chattogram</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Electro Mart</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-18%</span>
                  
                  <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                  
                  <span className="ph ph-b ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Nike Revolution 6 Running Shoes — Men</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳6,950</span>
                    <span className="price-old">৳8,500</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(355)</span>
                    <span className="text-2xs text-ink-400 ml-auto">355 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Sports World BD</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-21%</span>
                  
                  <span className="ph ph-c ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Lotus Herbals Whiteglow Gel Cream SPF25 60g</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳1,150</span>
                    <span className="price-old">৳1,450</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(738)</span>
                    <span className="text-2xs text-ink-400 ml-auto">738 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Beauty Box BD</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-22%</span>
                  
                  <span className="ph ph-d ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Rooftop Gardening Starter Kit — 12 items</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳2,350</span>
                    <span className="price-old">৳2,999</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(61)</span>
                    <span className="text-2xs text-ink-400 ml-auto">61 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Savar</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Green Nursery</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-13%</span>
                  
                  <span className="ph ph-e ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                      <path d="M3 12h18M12 8v13"></path>
                      <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Baby Diaper Pants XL 44pcs — Savlon Care</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳1,290</span>
                    <span className="price-old">৳1,490</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(289)</span>
                    <span className="text-2xs text-ink-400 ml-auto">289 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Baby Care Zone</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-18%</span>
                  
                  <span className="ph ph-f ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 21h10l1-8H6z"></path>
                      <path d="M6 13a4 4 0 0 1 2-7 4 4 0 0 1 8 0 4 4 0 0 1 2 7"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Steel Non-Stick Cookware Set 5pcs Kiam</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳4,590</span>
                    <span className="price-old">৳5,600</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(143)</span>
                    <span className="text-2xs text-ink-400 ml-auto">143 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Kiam Metal Store</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-17%</span>
                  
                  <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                  
                  <span className="ph ph-g ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                      <path d="M13 6l5 5"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Bosch Cordless Drill Machine 12V + 30 Bits</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳9,250</span>
                    <span className="price-old">৳11,200</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(77)</span>
                    <span className="text-2xs text-ink-400 ml-auto">77 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Tools Bazar BD</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-18%</span>
                  
                  <span className="ph ph-h ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Realme C100x 6/128GB 8000mAh 45W 6.8"</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳11,499</span>
                    <span className="price-old">৳13,999</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(1,240)</span>
                    <span className="text-2xs text-ink-400 ml-auto">12.4k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Realme Official Store</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-12%</span>
                  
                  <span className="ph ph-i ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Walton 1.5 Ton Inverter Split AC WSI-KRYSTALINE</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳54,900</span>
                    <span className="price-old">৳62,500</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(386)</span>
                    <span className="text-2xs text-ink-400 ml-auto">386 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Walton Plaza Mirpur</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-12%</span>
                  
                  <span className="ph ph-a ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Xiaomi Redmi Note 13 Pro 8/256GB Global</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳28,990</span>
                    <span className="price-old">৳32,990</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(2,114)</span>
                    <span className="text-2xs text-ink-400 ml-auto">21.1k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Gadget Hub BD</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-22%</span>
                  
                  <span className="ph ph-b ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Original Jamdani Half Silk Saree with Blouse Piece</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳4,850</span>
                    <span className="price-old">৳6,200</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(512)</span>
                    <span className="text-2xs text-ink-400 ml-auto">512 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Tangail</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Tangail Weavers House</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-23%</span>
                  
                  <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                  
                  <span className="ph ph-c ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                      <path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Havit HV-H2002d Wired Gaming Headphone RGB</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳1,890</span>
                    <span className="price-old">৳2,450</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                    <span className="text-2xs text-ink-400">(891)</span>
                    <span className="text-2xs text-ink-400 ml-auto">8.9k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Star Tech Digital</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-15%</span>
                  
                  <span className="ph ph-d ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Aarong Cotton Panjabi — Embroidered Chest</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳2,450</span>
                    <span className="price-old">৳2,900</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(274)</span>
                    <span className="text-2xs text-ink-400 ml-auto">274 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Aarong Official</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-17%</span>
                  
                  <span className="ph ph-e ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                      <path d="M16 12h2"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Anker 323 PowerBank 20000mAh 22.5W PD</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳3,290</span>
                    <span className="price-old">৳3,990</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(1,533)</span>
                    <span className="text-2xs text-ink-400 ml-auto">15.3k sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Anker Bangladesh</span>
                  </div>
                  
                  <ProductCardActions />
                  
                </div>
              </article>
              <article className="pcard card-hover group">
                
                <Link href="/product-details" className="block relative">
                  
                  <span className="discount-flag">-19%</span>
                  
                  <span className="ph ph-f ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                  </span>
                  
                </Link>
                
                <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                </button>
                
                <div className="pcard-body">
                  
                  <Link href="/product-details" className="pcard-title block mb-1.5">Sunflower Organic Honey 500gm — Sundarban</Link>
                  
                  <div className="flex items-end gap-2 mb-1">
                    <span className="price">৳690</span>
                    <span className="price-old">৳850</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 mb-2">
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
                      <svg viewBox="0 0 24 24">
                        <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                      </svg>
                    </span>
                    <span className="text-2xs text-ink-400">(402)</span>
                    <span className="text-2xs text-ink-400 ml-auto">402 sold</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                    <span className="clamp-1">Dhaka</span>
                    <span className="text-ink-200">|</span>
                    <span className="clamp-1">Khaas Food</span>
                  </div>
                  
                  <ProductCardActions />
                  
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
              <h2 className="font-display text-[17px] font-extrabold mb-2">About smartphones on HaatBazar</h2>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mb-3">Buy original smartphones from authorised sellers across Bangladesh with official warranty, EMI facility and same-day delivery inside Dhaka. Compare specifications, read verified buyer reviews, and choose Cash on Delivery if you prefer to pay at your door.</p>
              
              <div className="grid sm:grid-cols-3 gap-4 text-[12.5px]">
                
                <div>
                  <p className="font-extrabold text-ink-800 mb-2">Popular brands</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Samsung</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Xiaomi</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Realme</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Vivo</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Oppo</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Infinix</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Walton</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Tecno</Link>
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-ink-800 mb-2">Popular price ranges</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Under ৳8,000</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">৳8,000–12,000</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">৳12,000–20,000</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">৳20,000–35,000</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Above ৳35,000</Link>
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-ink-800 mb-2">Related categories</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Tablets</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Smart Watches</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Power Banks</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Phone Cases</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Screen Protectors</Link>
                    <Link href="/products" className="badge badge-gray hover:!bg-brand-50 hover:!text-brand-700">Earbuds</Link>
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
                  Smartphones
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Tablets
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Smart Watches
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Accessories
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Brand</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Samsung
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Xiaomi
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Realme
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Walton
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Vivo
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Price</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Under ৳5,000
                </label>
                <label className="check">
                  <input type="checkbox" />
                  ৳5,000–15,000
                </label>
                <label className="check">
                  <input type="checkbox" />
                  ৳15,000–30,000
                </label>
                <label className="check">
                  <input type="checkbox" />
                  ৳30,000+
                </label>
              </div>
            </div>
            <div>
              <p className="text-[13px] font-extrabold mb-2">Delivery</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Free delivery
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Express
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Cash on delivery
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
              <p className="text-[13px] font-extrabold mb-2">Seller</p>
              <div className="space-y-2 text-[13px]">
                <label className="check">
                  <input type="checkbox" />
                  Mall store
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Verified seller
                </label>
                <label className="check">
                  <input type="checkbox" />
                  Local shop
                </label>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-[#e7e9ef] flex gap-2">
            <button className="btn btn-outline flex-1" data-drawer-close="" type="button">Reset</button>
            <button className="btn btn-primary flex-1" data-drawer-close="" type="button">Show 12,841 results</button>
          </div>
        </div>
      </div>
      <div className="modal" id="quickViewModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel is-wide">
          
          <div className="flex items-center justify-between p-4 border-b border-[#e7e9ef]">
            <h3 className="font-display text-[16px] font-extrabold">Quick view</h3>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 grid sm:grid-cols-2 gap-5">
            
            <div>
              <span className="ph ph-c ratio-sq w-full rounded-xl mb-2.5">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                  <path d="M11 19h2"></path>
                </svg>
              </span>
              <div className="grid grid-cols-4 gap-2">
                <span className="ph ph-e ratio-sq rounded-lg">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
                <span className="ph ph-f ratio-sq rounded-lg">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
                <span className="ph ph-g ratio-sq rounded-lg">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
                <span className="ph ph-h ratio-sq rounded-lg">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
              </div>
            </div>
            
            <div>
              <span className="badge badge-brand mb-2">Flash deal · ends in 04:12:52</span>
              
              <h4 className="font-display text-[18px] font-extrabold leading-snug mb-1.5">Realme C100x 6/128GB 8000mAh 45W 6.8"</h4>
              
              <div className="flex items-center gap-2 mb-2">
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
                  <svg viewBox="0 0 24 24">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </span>
                <span className="text-[12px] text-ink-500">4.6 · 1,240 ratings · 2.1k sold</span>
              </div>
              
              <div className="flex items-end gap-2 mb-3">
                <span className="price-lg">৳11,499</span>
                <span className="price-old">৳13,999</span>
                <span className="badge badge-red">-18%</span>
              </div>
              
              <p className="text-[13px] text-ink-600 mb-3">6.8" HD+ 90Hz display · 8000mAh battery · 45W SuperVOOC · Unisoc T612 · 2 years official warranty.</p>
              
              <p className="label">Colour</p>
              <div className="flex gap-2 mb-3">
                <button className="chip is-active" type="button">Dreamy Purple</button>
                <button className="chip " type="button">Midnight Black</button>
                <button className="chip " type="button">Cyber Green</button>
              </div>
              
              <p className="label">Quantity</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-[#e7e9ef] rounded-lg h-10">
                  <button className="w-9 h-full grid place-items-center" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  <input className="w-11 text-center text-[14px] font-bold" defaultValue="1" />
                  <button className="w-9 h-full grid place-items-center" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </button>
                </div>
                <span className="text-[12.5px] text-ink-500">32 pieces available</span>
              </div>
              
              <div className="flex gap-2">
                <button className="btn btn-primary flex-1" data-toast="Added to cart" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                    <circle cx="10" cy="20" r="1.4"></circle>
                    <circle cx="18" cy="20" r="1.4"></circle>
                  </svg>
                  Add to cart
                </button>
                <Link href="/checkout" className="btn btn-dark flex-1">Buy now</Link>
              </div>
              
              <Link href="/product-details" className="link block text-center mt-3 text-[13px]">See full product details</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
