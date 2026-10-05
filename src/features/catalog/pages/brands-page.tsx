import Link from "next/link";

export default function BrandsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Brands</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6">
        
        <div className="card p-5 mb-5">
          <h1 className="font-display text-[24px] font-extrabold tracking-tight mb-1.5">Shop by brand</h1>
          
          <p className="text-[13px] text-ink-500 mb-4">1,240 official and authorised brands on HaatBazar — 100% genuine products with brand warranty.</p>
          
          <div className="input-group max-w-lg">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <input className="input" placeholder="Search a brand…" />
          </div>
        </div>
        
        <div className="card p-4 sm:p-5 mb-5">
          
          <div className="flex items-end justify-between gap-4 mb-4">
            
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              
              <div>
                <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Featured brand stores</h2>
                <p className="text-[12.5px] text-ink-500">Official outlets with exclusive launches</p>
              </div>
            </div>
            
            <Link href="/shops" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
              View all 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/shop-profile" className="card-hover rounded-2xl overflow-hidden border border-[#e7e9ef]">
              <div className="ph ph-a h-[92px] grid-noise"></div>
              
              <div className="p-3.5">
                <p className="text-[14px] font-extrabold">Samsung</p>
                <p className="text-[11.5px] text-ink-500">Official store · 4.8★ · 3720 products</p>
              </div>
            </Link>
            <Link href="/shop-profile" className="card-hover rounded-2xl overflow-hidden border border-[#e7e9ef]">
              <div className="ph ph-b h-[92px] grid-noise"></div>
              
              <div className="p-3.5">
                <p className="text-[14px] font-extrabold">Walton</p>
                <p className="text-[11.5px] text-ink-500">Official store · 4.8★ · 4960 products</p>
              </div>
            </Link>
            <Link href="/shop-profile" className="card-hover rounded-2xl overflow-hidden border border-[#e7e9ef]">
              <div className="ph ph-c h-[92px] grid-noise"></div>
              
              <div className="p-3.5">
                <p className="text-[14px] font-extrabold">Aarong</p>
                <p className="text-[11.5px] text-ink-500">Official store · 4.8★ · 6200 products</p>
              </div>
            </Link>
            <Link href="/shop-profile" className="card-hover rounded-2xl overflow-hidden border border-[#e7e9ef]">
              <div className="ph ph-d h-[92px] grid-noise"></div>
              
              <div className="p-3.5">
                <p className="text-[14px] font-extrabold">Pran</p>
                <p className="text-[11.5px] text-ink-500">Official store · 4.8★ · 7440 products</p>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="card p-4 sm:p-5">
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            <button className="chip !h-8 !px-3 is-active" type="button">All</button>
            <button className="chip !h-8 !px-3 " type="button">A</button>
            <button className="chip !h-8 !px-3 " type="button">B</button>
            <button className="chip !h-8 !px-3 " type="button">C</button>
            <button className="chip !h-8 !px-3 " type="button">D</button>
            <button className="chip !h-8 !px-3 " type="button">E</button>
            <button className="chip !h-8 !px-3 " type="button">F</button>
            <button className="chip !h-8 !px-3 " type="button">G</button>
            <button className="chip !h-8 !px-3 " type="button">H</button>
            <button className="chip !h-8 !px-3 " type="button">I</button>
            <button className="chip !h-8 !px-3 " type="button">J</button>
            <button className="chip !h-8 !px-3 " type="button">K</button>
            <button className="chip !h-8 !px-3 " type="button">L</button>
            <button className="chip !h-8 !px-3 " type="button">M</button>
            <button className="chip !h-8 !px-3 " type="button">N</button>
            <button className="chip !h-8 !px-3 " type="button">O</button>
            <button className="chip !h-8 !px-3 " type="button">P</button>
            <button className="chip !h-8 !px-3 " type="button">Q</button>
            <button className="chip !h-8 !px-3 " type="button">R</button>
            <button className="chip !h-8 !px-3 " type="button">S</button>
            <button className="chip !h-8 !px-3 " type="button">T</button>
            <button className="chip !h-8 !px-3 " type="button">U</button>
            <button className="chip !h-8 !px-3 " type="button">V</button>
            <button className="chip !h-8 !px-3 " type="button">W</button>
            <button className="chip !h-8 !px-3 " type="button">X</button>
            <button className="chip !h-8 !px-3 " type="button">Y</button>
            <button className="chip !h-8 !px-3 " type="button">Z</button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-a w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Samsung</p>
              <p className="text-[11px] text-ink-400">120 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-b w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Xiaomi</p>
              <p className="text-[11px] text-ink-400">157 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-c w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Realme</p>
              <p className="text-[11px] text-ink-400">194 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-d w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Walton</p>
              <p className="text-[11px] text-ink-400">231 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-e w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Vivo</p>
              <p className="text-[11px] text-ink-400">268 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-f w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Oppo</p>
              <p className="text-[11px] text-ink-400">305 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-g w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Infinix</p>
              <p className="text-[11px] text-ink-400">342 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-h w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Tecno</p>
              <p className="text-[11px] text-ink-400">379 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-i w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Apple</p>
              <p className="text-[11px] text-ink-400">416 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-a w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">OnePlus</p>
              <p className="text-[11px] text-ink-400">453 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-b w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Nokia</p>
              <p className="text-[11px] text-ink-400">490 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-c w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Symphony</p>
              <p className="text-[11px] text-ink-400">527 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-d w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Gree</p>
              <p className="text-[11px] text-ink-400">564 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-e w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Singer</p>
              <p className="text-[11px] text-ink-400">601 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-f w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Marcel</p>
              <p className="text-[11px] text-ink-400">638 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-g w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Vision</p>
              <p className="text-[11px] text-ink-400">675 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-h w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Minister</p>
              <p className="text-[11px] text-ink-400">712 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-i w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Konka</p>
              <p className="text-[11px] text-ink-400">749 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-a w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Aarong</p>
              <p className="text-[11px] text-ink-400">786 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-b w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Yellow</p>
              <p className="text-[11px] text-ink-400">823 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-c w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Ecstasy</p>
              <p className="text-[11px] text-ink-400">860 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-d w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Sailor</p>
              <p className="text-[11px] text-ink-400">897 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-e w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Bata</p>
              <p className="text-[11px] text-ink-400">934 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-f w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Apex</p>
              <p className="text-[11px] text-ink-400">971 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-g w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Lotto</p>
              <p className="text-[11px] text-ink-400">1008 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-h w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Fay</p>
              <p className="text-[11px] text-ink-400">1045 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-i w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Le Reve</p>
              <p className="text-[11px] text-ink-400">1082 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-a w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Cats Eye</p>
              <p className="text-[11px] text-ink-400">1119 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-b w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Pran</p>
              <p className="text-[11px] text-ink-400">1156 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-c w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Square</p>
              <p className="text-[11px] text-ink-400">1193 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-d w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">ACI</p>
              <p className="text-[11px] text-ink-400">1230 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-e w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Fresh</p>
              <p className="text-[11px] text-ink-400">1267 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-f w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Teer</p>
              <p className="text-[11px] text-ink-400">1304 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-g w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Rupchanda</p>
              <p className="text-[11px] text-ink-400">1341 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-h w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Radhuni</p>
              <p className="text-[11px] text-ink-400">1378 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-i w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Nestlé</p>
              <p className="text-[11px] text-ink-400">1415 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-a w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Unilever</p>
              <p className="text-[11px] text-ink-400">1452 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-b w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Lux</p>
              <p className="text-[11px] text-ink-400">1489 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-c w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Dove</p>
              <p className="text-[11px] text-ink-400">1526 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-d w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Himalaya</p>
              <p className="text-[11px] text-ink-400">1563 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-e w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Nivea</p>
              <p className="text-[11px] text-ink-400">1600 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-f w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Garnier</p>
              <p className="text-[11px] text-ink-400">1637 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-g w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Loreal</p>
              <p className="text-[11px] text-ink-400">1674 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-h w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Sunsilk</p>
              <p className="text-[11px] text-ink-400">1711 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-i w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Anker</p>
              <p className="text-[11px] text-ink-400">1748 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-a w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Logitech</p>
              <p className="text-[11px] text-ink-400">1785 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-b w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">HP</p>
              <p className="text-[11px] text-ink-400">1822 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-c w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Dell</p>
              <p className="text-[11px] text-ink-400">1859 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-d w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Lenovo</p>
              <p className="text-[11px] text-ink-400">1896 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-e w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Asus</p>
              <p className="text-[11px] text-ink-400">1933 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-f w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Acer</p>
              <p className="text-[11px] text-ink-400">1970 products</p>
            </Link>
            <Link href="/products" className="p-3.5 rounded-xl border border-[#e7e9ef] hover:border-brand-200 hover:shadow-soft text-center">
              
              <span className="ph ph-g w-12 h-12 rounded-xl mx-auto mb-2">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5"></circle>
                  <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-bold clamp-1">Canon</p>
              <p className="text-[11px] text-ink-400">2007 products</p>
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
        </div>
        
      </main>
    </>
  );
}
