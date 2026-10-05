import Link from "next/link";

export default function ShopsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Shops &amp; Sellers</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6">
        
        <div className="card p-5 mb-5">
          <h1 className="font-display text-[24px] font-extrabold tracking-tight mb-1.5">Shops &amp; sellers</h1>
          
          <p className="text-[13px] text-ink-500 mb-4">48,320 verified sellers across Bangladesh. Every shop is identity-verified and rated by real buyers.</p>
          
          <div className="flex flex-col sm:flex-row gap-2.5">
            
            <div className="input-group flex-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-3.5-3.5"></path>
              </svg>
              <input className="input" placeholder="Search shop name…" />
            </div>
            
            <select className="select sm:w-44">
              <option>All categories</option>
              <option>Electronics &amp; Gadgets</option>
              <option>Mobile &amp; Tablets</option>
              <option>Fashion &amp; Lifestyle</option>
              <option>Health &amp; Beauty</option>
              <option>Home &amp; Living</option>
              <option>Groceries &amp; Food</option>
              <option>Baby, Kids &amp; Toys</option>
              <option>Sports &amp; Outdoor</option>
              <option>Automobile Parts</option>
              <option>Books &amp; Stationery</option>
            </select>
            
            <select className="select sm:w-40">
              <option>All cities</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
              <option>Sylhet</option>
              <option>Khulna</option>
            </select>
            
            <button className="btn btn-primary" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-3.5-3.5"></path>
              </svg>
              Search
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="chip is-active" type="button">All shops</button>
          <button className="chip " type="button">Mall stores</button>
          <button className="chip " type="button">Top rated</button>
          <button className="chip " type="button">Newly joined</button>
          <button className="chip " type="button">Local shops</button>
          <button className="chip " type="button">Free delivery</button>
          <button className="chip " type="button">Fastest shipping</button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-a grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-a w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Realme Official Store</Link>
                
                <span className="badge badge-dark shrink-0">Mall</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Mirpur 10, Dhaka · Electronics
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.8</b>
                <span className="text-ink-400">· 12,480 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-b grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-b w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Rongdhonu Fashion</Link>
                
                <span className="badge badge-green shrink-0">Verified</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Narayanganj · Fashion
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.7</b>
                <span className="text-ink-400">· 3,120 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-c grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-c w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 7h12l1 14H5z"></path>
                    <path d="M9 7a3 3 0 0 1 6 0"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Khaas Food Corner</Link>
                
                <span className="badge badge-green shrink-0">Verified</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Gulshan, Dhaka · Groceries
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.9</b>
                <span className="text-ink-400">· 860 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-d grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-d w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <path d="M9 20h6M12 16v4"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Gadget Hub BD</Link>
                
                <span className="badge badge-dark shrink-0">Mall</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Elephant Road, Dhaka · Electronics
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.6</b>
                <span className="text-ink-400">· 9,340 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-e grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-e w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V9.5l8-6 8 6V20"></path>
                    <path d="M9.5 20v-6h5v6"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Aarong Home</Link>
                
                <span className="badge badge-dark shrink-0">Mall</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Tejgaon, Dhaka · Home &amp; Living
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.8</b>
                <span className="text-ink-400">· 5,720 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-f grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-f w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Bikroy Sports</Link>
                
                <span className="badge badge-green shrink-0">Verified</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Chattogram · Sports
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.5</b>
                <span className="text-ink-400">· 1,940 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-a grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-g w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                    <path d="M3 12h18M12 8v13"></path>
                    <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Nokshi Handicrafts</Link>
                
                <span className="badge badge-blue shrink-0">New</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Jamalpur · Handicrafts
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.4</b>
                <span className="text-ink-400">· 420 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-b grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-h w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <path d="M9 20h6M12 16v4"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Walton Plaza Online</Link>
                
                <span className="badge badge-dark shrink-0">Mall</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Gazipur · Appliances
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.7</b>
                <span className="text-ink-400">· 14,210 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-c grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-i w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"></path>
                    <path d="M8 7h7"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">BookWorm BD</Link>
                
                <span className="badge badge-green shrink-0">Verified</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Banglabazar, Dhaka · Books
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.9</b>
                <span className="text-ink-400">· 18,600 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-d grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-a w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Green Pharma</Link>
                
                <span className="badge badge-green shrink-0">Verified</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Dhanmondi, Dhaka · Health
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.8</b>
                <span className="text-ink-400">· 2,380 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-e grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-b w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 16v-4l2-5h10l2 5v4"></path>
                    <path d="M3 16h18v3h-2l-1-2H6l-1 2H3z"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">AutoParts Express</Link>
                
                <span className="badge badge-green shrink-0">Verified</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Bangshal, Dhaka · Automobile
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.3</b>
                <span className="text-ink-400">· 6,140 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
          <div className="card overflow-hidden card-hover">
            
            <div className="relative h-[74px] ph ph-f grid-noise"></div>
            
            <div className="px-4 pb-4 -mt-7">
              
              <div className="w-14 h-14 rounded-2xl bg-white p-1 shadow-soft mb-2.5">
                <span className="ph ph-c w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                    <path d="M3 12h18M12 8v13"></path>
                    <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 mb-1">
                <Link href="/shop-profile" className="text-[14px] font-extrabold clamp-1 hover:text-brand-600">Little Star Kids</Link>
                
                <span className="badge badge-blue shrink-0">New</span>
              </div>
              
              <p className="text-[11.5px] text-ink-500 flex items-center gap-1 mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                Sylhet · Baby &amp; Kids
              </p>
              
              <div className="flex items-center gap-2 text-[12px] mb-3">
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
                <b>4.6</b>
                <span className="text-ink-400">· 780 products</span>
              </div>
              
              <div className="flex gap-2">
                <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit shop</Link>
                <button className="btn btn-xs btn-primary" data-toast="Following" type="button">Follow</button>
              </div>
            </div>
          </div>
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
        
        <div className="card p-6 mt-6 bg-ink-950 text-white flex flex-col md:flex-row items-center gap-5">
          
          <div className="flex-1">
            <h2 className="font-display text-[20px] font-extrabold mb-1.5">Want your shop listed here?</h2>
            
            <p className="text-[13px] text-white/70">Join 48,000+ sellers. Zero commission for the first 3 months, free product photography in Dhaka and same-day payouts.</p>
          </div>
          
          <div className="flex gap-2">
            <Link href="/become-seller" className="btn btn-primary">Start selling</Link>
            <Link href="/seller-register" className="btn !bg-white/10 !text-white">Create seller account</Link>
          </div>
        </div>
        
      </main>
    </>
  );
}
