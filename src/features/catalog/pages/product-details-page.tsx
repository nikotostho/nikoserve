import Link from "next/link";
import ProductCardActions from "@/components/catalog/product-card-actions";

export default function ProductDetailsPage() {
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
            <Link href="/products">Smartphones</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Realme C100x</span>
          </nav>
        </div>
      </div>
      <main className="shell py-5">
        
        <div className="grid lg:grid-cols-[minmax(0,1fr)_318px] gap-5">
          
          <div className="min-w-0">
            
            <div className="card p-4 sm:p-5 mb-4 grid md:grid-cols-[minmax(0,420px)_1fr] gap-6">
              
              <div>
                <div className="relative rounded-xl overflow-hidden mb-3">
                  <span className="ph ph-c ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  
                  <span className="discount-flag !text-[12px] !px-2.5 !py-1">-18%</span>
                  
                  <button className="wish-btn !w-10 !h-10" data-toggle-class="is-on" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <button className="absolute bottom-3 right-3 btn btn-sm !bg-white/90 !text-ink-900" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3M7 12h10"></path>
                    </svg>
                    Zoom
                  </button>
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                  <button className="rounded-lg overflow-hidden ring-2 ring-brand-500" type="button">
                    <span className="ph ph-d ratio-sq">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                        <path d="M11 19h2"></path>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-lg overflow-hidden opacity-70 hover:opacity-100" type="button">
                    <span className="ph ph-e ratio-sq">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                        <path d="M11 19h2"></path>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-lg overflow-hidden opacity-70 hover:opacity-100" type="button">
                    <span className="ph ph-f ratio-sq">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                        <path d="M11 19h2"></path>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-lg overflow-hidden opacity-70 hover:opacity-100" type="button">
                    <span className="ph ph-g ratio-sq">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                        <path d="M11 19h2"></path>
                      </svg>
                    </span>
                  </button>
                  <button className="rounded-lg overflow-hidden opacity-70 hover:opacity-100" type="button">
                    <span className="ph ph-h ratio-sq">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                        <path d="M11 19h2"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                
                <div className="mt-3 flex items-center gap-2 text-[12px] text-ink-500">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 5l11 7-11 7z"></path>
                  </svg>
                  2 product videos · 14 images · 360° view available
                </div>
              </div>
              
              <div className="min-w-0">
                
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="badge badge-dark">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="9" r="5"></circle>
                      <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                    </svg>
                    Mall
                  </span>
                  <span className="badge badge-green">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    In stock
                  </span>
                  <span className="badge badge-brand">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                    </svg>
                    Flash deal
                  </span>
                  <span className="badge badge-blue">Top seller in Smartphones</span>
                </div>
                
                <h1 className="font-display text-[21px] sm:text-[25px] font-extrabold leading-snug tracking-tight mb-2">Realme C100x 6/128GB — 8000mAh Battery, 45W SuperVOOC, 6.8" 90Hz Display (Official Warranty)</h1>
                
                <div className="flex flex-wrap items-center gap-3 mb-3 text-[12.5px]">
                  
                  <span className="flex items-center gap-1.5">
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
                    <b className="text-ink-900">4.6</b>
                    <a href="#reviews" className="link">1,240 ratings</a>
                  </span>
                  
                  <span className="text-ink-300">|</span>
                  <a href="#qna" className="link">86 answered questions</a>
                  
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-500">2.1k sold</span>
                  
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-500">
                    Brand: 
                    <Link href="/brands" className="link">Realme</Link>
                  </span>
                  
                  <span className="text-ink-300">|</span>
                  <span className="text-ink-500">SKU: RLM-C100X-6128-PUR</span>
                </div>
                
                <div className="rounded-xl bg-brand-50 border border-brand-100 p-4 mb-4">
                  
                  <div className="flex flex-wrap items-end gap-2.5 mb-1.5">
                    <span className="price-lg">৳11,499</span>
                    <span className="price-old !text-[14px]">৳13,999</span>
                    <span className="badge badge-solid">Save ৳2,500 (18%)</span>
                  </div>
                  
                  <p className="text-[12px] text-ink-600 mb-2.5">
                    Price incl. VAT · Flash price ends in 
                    <b className="text-brand-700 mono" data-countdown-inline="">04:12:52</b>
                  </p>
                  
                  <div className="flex flex-wrap gap-2 text-[12px]">
                    <span className="badge !bg-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                        <path d="M12 7v10"></path>
                      </svg>
                      ৳300 voucher — code C100X300
                    </span>
                    <span className="badge !bg-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                        <circle cx="12" cy="12" r="2.6"></circle>
                      </svg>
                      EMI ৳958/mo × 12
                    </span>
                    <span className="badge !bg-white">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      Trade-in up to ৳3,000
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  
                  <div>
                    <p className="label">
                      Colour: 
                      <span className="text-ink-500 font-medium">Dreamy Purple</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="flex items-center gap-2 h-11 pl-1.5 pr-3 rounded-xl border border-brand-500 bg-brand-50" type="button">
                        <span className="ph ph-c w-8 h-8 rounded-lg">
                          <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                            <path d="M11 19h2"></path>
                          </svg>
                        </span>
                        <span className="text-[12.5px] font-bold">Dreamy Purple</span>
                      </button>
                      <button className="flex items-center gap-2 h-11 pl-1.5 pr-3 rounded-xl border border-[#e7e9ef] hover:border-ink-300" type="button">
                        <span className="ph ph-f w-8 h-8 rounded-lg">
                          <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                            <path d="M11 19h2"></path>
                          </svg>
                        </span>
                        <span className="text-[12.5px] font-bold">Midnight Black</span>
                      </button>
                      <button className="flex items-center gap-2 h-11 pl-1.5 pr-3 rounded-xl border border-[#e7e9ef] hover:border-ink-300" type="button">
                        <span className="ph ph-f w-8 h-8 rounded-lg">
                          <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                            <path d="M11 19h2"></path>
                          </svg>
                        </span>
                        <span className="text-[12.5px] font-bold">Cyber Green</span>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="label">Storage</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="chip !h-auto !py-2 !px-3.5 " type="button">
                        <span className="text-left">
                          <span className="block text-[12.5px] font-bold">4GB + 64GB</span>
                          <span className="block text-[11px] text-ink-400">৳9,999</span>
                        </span>
                      </button>
                      <button className="chip !h-auto !py-2 !px-3.5 is-active" type="button">
                        <span className="text-left">
                          <span className="block text-[12.5px] font-bold">6GB + 128GB</span>
                          <span className="block text-[11px] text-white/80">৳11,499</span>
                        </span>
                      </button>
                      <button className="chip !h-auto !py-2 !px-3.5 " type="button">
                        <span className="text-left">
                          <span className="block text-[12.5px] font-bold">8GB + 256GB</span>
                          <span className="block text-[11px] text-ink-400">৳13,999</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="label">
                      Add-ons 
                      <span className="text-ink-400 font-medium">(optional)</span>
                    </p>
                    <div className="space-y-2">
                      
                      <label className="check items-center justify-between w-full p-2.5 rounded-lg border border-[#e7e9ef]">
                        <span className="flex items-center gap-2.5">
                          <input type="checkbox" />
                          <span className="text-[13px] font-semibold">Tempered glass + back cover</span>
                        </span>
                        <span className="text-[13px] font-extrabold text-brand-600">+৳290</span>
                      </label>
                      <label className="check items-center justify-between w-full p-2.5 rounded-lg border border-[#e7e9ef]">
                        <span className="flex items-center gap-2.5">
                          <input type="checkbox" />
                          <span className="text-[13px] font-semibold">1 year extended warranty</span>
                        </span>
                        <span className="text-[13px] font-extrabold text-brand-600">+৳1,190</span>
                      </label>
                      <label className="check items-center justify-between w-full p-2.5 rounded-lg border border-[#e7e9ef]">
                        <span className="flex items-center gap-2.5">
                          <input type="checkbox" />
                          <span className="text-[13px] font-semibold">Screen replacement insurance (12m)</span>
                        </span>
                        <span className="text-[13px] font-extrabold text-brand-600">+৳990</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-end gap-4">
                    <div>
                      <p className="label">Quantity</p>
                      
                      <div className="flex items-center border border-[#e7e9ef] rounded-lg h-11 w-fit">
                        <button className="w-10 h-full grid place-items-center hover:bg-ink-50" type="button">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                          </svg>
                        </button>
                        <input className="w-12 text-center text-[15px] font-bold" defaultValue="1" />
                        <button className="w-10 h-full grid place-items-center hover:bg-ink-50" type="button">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-[12.5px] text-ink-500 pb-2.5">
                      Only 
                      <b className="text-brand-600">32 pieces</b>
                       left · max 5 per customer
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  
                  <button className="btn btn-lg btn-primary flex-1 min-w-[170px]" data-toast="Added to cart" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                      <circle cx="10" cy="20" r="1.4"></circle>
                      <circle cx="18" cy="20" r="1.4"></circle>
                    </svg>
                    Add to cart
                  </button>
                  
                  <Link href="/checkout" className="btn btn-lg btn-dark flex-1 min-w-[150px]">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                    </svg>
                    Buy now
                  </Link>
                  
                  <button className="btn btn-lg btn-outline btn-icon !w-12" data-toggle-class="is-on" aria-label="Wishlist" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <Link href="/compare" className="btn btn-lg btn-outline btn-icon !w-12" aria-label="Compare">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 9 5-9 5-9-5z"></path>
                      <path d="m3 13 9 5 9-5"></path>
                    </svg>
                  </Link>
                  
                  <button className="btn btn-lg btn-outline btn-icon !w-12" aria-label="Share" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-2.5 mt-4">
                  <button className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef] hover:border-brand-200 text-left" type="button">
                    <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                        <path d="M8 12h8M8 9h5"></path>
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12.5px] font-bold clamp-1">Chat with seller</span>
                      <span className="block text-[11px] text-ink-500 clamp-1">Replies in ~8 min</span>
                    </span>
                  </button>
                  <button className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef] hover:border-brand-200 text-left" type="button">
                    <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12.5px] font-bold clamp-1">Call the shop</span>
                      <span className="block text-[11px] text-ink-500 clamp-1">10 AM – 9 PM</span>
                    </span>
                  </button>
                  <button className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef] hover:border-brand-200 text-left" type="button">
                    <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h16v12H4z"></path>
                        <path d="M9 8V4h6v4"></path>
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12.5px] font-bold clamp-1">Pickup in store</span>
                      <span className="block text-[11px] text-ink-500 clamp-1">Mirpur 10 branch</span>
                    </span>
                  </button>
                  <button className="flex items-center gap-2.5 p-3 rounded-xl border border-[#e7e9ef] hover:border-brand-200 text-left" type="button">
                    <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"></path>
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12.5px] font-bold clamp-1">Ask a question</span>
                      <span className="block text-[11px] text-ink-500 clamp-1">86 already answered</span>
                    </span>
                  </button>
                </div>
                
              </div>
            </div>
            
            <div className="card mb-4">
              
              <div className="tabs px-4" data-tabs="">
                
                <button className="tab is-active" data-tab="0" type="button">Description</button>
                <button className="tab " data-tab="1" type="button">Specifications</button>
                <button className="tab " data-tab="2" type="button">Reviews (1,240)</button>
                <button className="tab " data-tab="3" type="button">Q&amp;A (86)</button>
                <button className="tab " data-tab="4" type="button">Shipping &amp; Returns</button>
                <button className="tab " data-tab="5" type="button">Warranty</button>
                <button className="tab " data-tab="6" type="button">Seller info</button>
              </div>
              
              <div className="p-5" data-tab-panel="0">
                <div className="rich max-w-none">
                  
                  <h2>Realme C100x — big battery, bigger screen</h2>
                  
                  <p>
                    The Realme C100x is built for people who use their phone all day. An enormous 
                    <b>8000 mAh battery</b>
                     paired with the efficient Unisoc T612 chipset delivers up to two full days of mixed usage, while 
                    <b>45W SuperVOOC charging</b>
                     gets you back to 60% in roughly 30 minutes. The 6.8-inch HD+ display refreshes at 90Hz, so scrolling, gaming and video all feel noticeably smoother than on typical budget phones.
                  </p>
                  
                  <h3>Key highlights</h3>
                  
                  <ul>
                    <li>
                      <b>8000 mAh battery</b>
                       with reverse charging — power your earbuds from the phone
                    </li>
                    <li>
                      <b>45W SuperVOOC</b>
                       fast charger included in the box
                    </li>
                    <li>
                      <b>6.8" 90Hz HD+</b>
                       display with 560 nits peak brightness
                    </li>
                    <li>
                      <b>50 MP AI dual camera</b>
                       with night mode and 1080p video
                    </li>
                    <li>
                      <b>6 GB RAM + 6 GB dynamic RAM</b>
                      , 128 GB storage expandable to 1 TB
                    </li>
                    <li>Android 14 with Realme UI 5.0 — 2 years of security updates</li>
                    <li>Official Realme Bangladesh warranty: 2 years handset, 6 months accessories</li>
                  </ul>
                  
                  <h3>What's in the box</h3>
                  <p>Handset · 45W charging adapter · USB Type-C cable · SIM ejector tool · protective case · quick start guide · warranty card.</p>
                  
                  <blockquote>Seller note: This unit is an official Realme Bangladesh product with BTRC approval. IMEI is registered — you can verify it on the government NEIR portal after delivery.</blockquote>
                  
                  <h3>Care instructions</h3>
                  <ul>
                    <li>Use only the supplied 45W charger to preserve battery health.</li>
                    <li>Do not expose to water — the device has no IP rating.</li>
                    <li>Keep the original box and invoice for warranty claims.</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="1" hidden>
                <div className="grid md:grid-cols-2 gap-x-8">
                  
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Brand</span>
                    <span className="text-[13px] text-ink-800">Realme</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Model</span>
                    <span className="text-[13px] text-ink-800">C100x</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Warranty</span>
                    <span className="text-[13px] text-ink-800">2 years official (brand)</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">SIM</span>
                    <span className="text-[13px] text-ink-800">Dual Nano-SIM, 4G LTE</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Display</span>
                    <span className="text-[13px] text-ink-800">6.8" HD+ IPS, 90Hz, 560 nits</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Processor</span>
                    <span className="text-[13px] text-ink-800">Unisoc Tiger T612 (12nm), Octa-core</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">RAM / Storage</span>
                    <span className="text-[13px] text-ink-800">6 GB + 128 GB (expandable up to 1 TB)</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Rear camera</span>
                    <span className="text-[13px] text-ink-800">50 MP AI dual + 2 MP depth, LED flash</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Front camera</span>
                    <span className="text-[13px] text-ink-800">8 MP, f/2.0</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Battery</span>
                    <span className="text-[13px] text-ink-800">8000 mAh Li-Po, 45W SuperVOOC</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">OS</span>
                    <span className="text-[13px] text-ink-800">Android 14, Realme UI 5.0</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Fingerprint</span>
                    <span className="text-[13px] text-ink-800">Side-mounted</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Colours</span>
                    <span className="text-[13px] text-ink-800">Dreamy Purple, Midnight Black, Cyber Green</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Weight</span>
                    <span className="text-[13px] text-ink-800">198 g</span>
                  </div>
                  <div className="flex gap-4 py-2.5 border-b border-[#f0f1f5]">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Box contents</span>
                    <span className="text-[13px] text-ink-800">Handset, 45W charger, USB-C cable, SIM tool, case, warranty card</span>
                  </div>
                  <div className="flex gap-4 py-2.5 ">
                    <span className="w-[42%] shrink-0 text-[12.5px] font-bold text-ink-500">Country of origin</span>
                    <span className="text-[13px] text-ink-800">China (assembled in Bangladesh)</span>
                  </div>
                  
                </div>
                <button className="btn btn-sm btn-outline mt-4" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 11l5 5 5-5M4 21h16"></path>
                  </svg>
                  Download full spec sheet (PDF)
                </button>
              </div>
              
              <div className="p-5" data-tab-panel="2" hidden id="reviews">
                
                <div className="grid md:grid-cols-[240px_1fr] gap-6 pb-5 border-b border-[#f0f1f5]">
                  
                  <div className="text-center">
                    <p className="font-display text-[44px] font-extrabold leading-none">4.6</p>
                    <span className="stars stars-lg">
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
                    <p className="text-[12.5px] text-ink-500 mt-1.5">1,240 ratings · 512 written reviews</p>
                    
                    <button className="btn btn-sm btn-primary mt-3" data-modal-open="reviewModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20h4L20 8l-4-4L4 16z"></path>
                      </svg>
                      Write a review
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[12.5px] font-bold w-8">5★</span>
                      <div className="bar flex-1">
                        <i style={{ width: "72%" }}></i>
                      </div>
                      <span className="text-[12px] text-ink-500 w-12 text-right">72%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12.5px] font-bold w-8">4★</span>
                      <div className="bar flex-1">
                        <i style={{ width: "18%" }}></i>
                      </div>
                      <span className="text-[12px] text-ink-500 w-12 text-right">18%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12.5px] font-bold w-8">3★</span>
                      <div className="bar flex-1">
                        <i style={{ width: "6%" }}></i>
                      </div>
                      <span className="text-[12px] text-ink-500 w-12 text-right">6%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12.5px] font-bold w-8">2★</span>
                      <div className="bar flex-1">
                        <i style={{ width: "2%" }}></i>
                      </div>
                      <span className="text-[12px] text-ink-500 w-12 text-right">2%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12.5px] font-bold w-8">1★</span>
                      <div className="bar flex-1">
                        <i style={{ width: "2%" }}></i>
                      </div>
                      <span className="text-[12px] text-ink-500 w-12 text-right">2%</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-3">
                      <button className="chip !h-8 is-active" type="button">With photos (128)</button>
                      <button className="chip !h-8 " type="button">5★ only</button>
                      <button className="chip !h-8 " type="button">Critical (34)</button>
                      <button className="chip !h-8 " type="button">Battery (211)</button>
                      <button className="chip !h-8 " type="button">Camera (96)</button>
                      <button className="chip !h-8 " type="button">Delivery (77)</button>
                    </div>
                  </div>
                </div>
                
                <div className="divide-y divide-[#f0f1f5]">
                  <div className="py-5">
                    
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-ink-700">T</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Tanvir Hasan</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Verified purchase
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">2 days ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
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
                          <span className="text-[11.5px] text-ink-400">Colour: Dreamy Purple · 128GB</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Battery is a beast — 2 full days with heavy use. Charging is genuinely fast, 0–60% in about half an hour. Delivery took only 1 day in Dhaka.</p>
                        
                        <div className="flex gap-2 mt-3">
                          <span className="ph ph-e w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                          <span className="ph ph-f w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-brand-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (42)
                          </button>
                          <button className="font-bold text-ink-500 hover:text-brand-600" type="button">Reply</button>
                          <button className="font-bold text-ink-400 hover:text-brand-600" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 ml-1 pl-3.5 border-l-2 border-brand-100">
                          <p className="text-[12px] font-extrabold text-brand-700 mb-1">Realme Official Store replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for your feedback! For any warranty support, visit our Mirpur service point with the invoice.</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-ink-700">S</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Sumaiya Akter</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Verified purchase
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">1 week ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
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
                          <span className="text-[11.5px] text-ink-400">Colour: Midnight Black · 128GB</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Display is bright and smooth for the price. Camera is average in low light but fine in daylight. Seller packed it very well and the warranty card was inside.</p>
                        
                        <div className="flex gap-2 mt-3">
                          <span className="ph ph-e w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                          <span className="ph ph-f w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-brand-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (18)
                          </button>
                          <button className="font-bold text-ink-500 hover:text-brand-600" type="button">Reply</button>
                          <button className="font-bold text-ink-400 hover:text-brand-600" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 ml-1 pl-3.5 border-l-2 border-brand-100">
                          <p className="text-[12px] font-extrabold text-brand-700 mb-1">Realme Official Store replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for your feedback! For any warranty support, visit our Mirpur service point with the invoice.</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-ink-700">R</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Rafiqul Islam</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Verified purchase
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">2 weeks ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
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
                          <span className="text-[11.5px] text-ink-400">Colour: Cyber Green · 128GB</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Bought it for my father. Big screen, loud speaker, simple UI — he loves it. Got it with ৳500 voucher, great value.</p>
                        
                        <div className="flex gap-2 mt-3">
                          <span className="ph ph-e w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                          <span className="ph ph-f w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-brand-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (9)
                          </button>
                          <button className="font-bold text-ink-500 hover:text-brand-600" type="button">Reply</button>
                          <button className="font-bold text-ink-400 hover:text-brand-600" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 ml-1 pl-3.5 border-l-2 border-brand-100">
                          <p className="text-[12px] font-extrabold text-brand-700 mb-1">Realme Official Store replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for your feedback! For any warranty support, visit our Mirpur service point with the invoice.</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <div className="py-5">
                    
                    <div className="flex items-start gap-3">
                      <span className="avatar avatar-md bg-ink-700">N</span>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[13.5px] font-extrabold">Nabila Chowdhury</p>
                          <span className="badge badge-green !text-[10.5px]">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            Verified purchase
                          </span>
                          <span className="text-[11.5px] text-ink-400 ml-auto">3 weeks ago</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-1">
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
                          <span className="text-[11.5px] text-ink-400">Colour: Dreamy Purple · 128GB</span>
                        </div>
                        
                        <p className="text-[13.5px] text-ink-700 leading-relaxed mt-2">Phone is good but it took 4 days to arrive in Sylhet and the box was slightly dented. Product itself works perfectly.</p>
                        
                        <div className="flex gap-2 mt-3">
                          <span className="ph ph-e w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                          <span className="ph ph-f w-16 h-16 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                              <circle cx="12" cy="14" r="3.2"></circle>
                            </svg>
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-3 text-[12px]">
                          <button className="flex items-center gap-1.5 font-bold text-ink-500 hover:text-brand-600" type="button">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20V6M6 12l6-6 6 6"></path>
                            </svg>
                            Helpful (5)
                          </button>
                          <button className="font-bold text-ink-500 hover:text-brand-600" type="button">Reply</button>
                          <button className="font-bold text-ink-400 hover:text-brand-600" type="button">Report</button>
                        </div>
                        
                        <div className="mt-3 ml-1 pl-3.5 border-l-2 border-brand-100">
                          <p className="text-[12px] font-extrabold text-brand-700 mb-1">Realme Official Store replied</p>
                          <p className="text-[12.5px] text-ink-600">Thank you for your feedback! For any warranty support, visit our Mirpur service point with the invoice.</p>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <button className="btn btn-outline" type="button">Load 508 more reviews</button>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="3" hidden id="qna">
                
                <div className="flex flex-col sm:flex-row gap-2 mb-5">
                  <input className="input" placeholder="Ask a question about this product…" />
                  <button className="btn btn-primary shrink-0" data-toast="Question submitted" type="button">Post question</button>
                </div>
                
                <div className="divide-y divide-[#f0f1f5]">
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Does it support 5G?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-brand-50 text-brand-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      No, the C100x supports 4G LTE only on both SIM slots.
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2 ml-7 text-[11.5px] text-ink-400">
                      <span>Seller · Realme Official Store</span>
                      <span>·</span>
                      <span>2 days ago</span>
                      <button className="font-bold hover:text-brand-600" type="button">
                        <svg className="w-3.5 h-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20V6M6 12l6-6 6 6"></path>
                        </svg>
                         Helpful (12)
                      </button>
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Is the charger 45W in the box?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-brand-50 text-brand-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      Yes, the retail box includes the original 45W SuperVOOC adapter and a Type-C cable.
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2 ml-7 text-[11.5px] text-ink-400">
                      <span>Seller · Realme Official Store</span>
                      <span>·</span>
                      <span>5 days ago</span>
                      <button className="font-bold hover:text-brand-600" type="button">
                        <svg className="w-3.5 h-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20V6M6 12l6-6 6 6"></path>
                        </svg>
                         Helpful (31)
                      </button>
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Can I claim warranty in Chattogram?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-brand-50 text-brand-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      Yes. Realme has authorised service centres in Chattogram, Sylhet, Khulna and Rajshahi.
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2 ml-7 text-[11.5px] text-ink-400">
                      <span>Verified buyer · Imran H.</span>
                      <span>·</span>
                      <span>1 week ago</span>
                      <button className="font-bold hover:text-brand-600" type="button">
                        <svg className="w-3.5 h-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20V6M6 12l6-6 6 6"></path>
                        </svg>
                         Helpful (8)
                      </button>
                    </div>
                  </div>
                  <div className="py-4">
                    <p className="flex gap-2 text-[13.5px] font-extrabold">
                      <span className="w-5 h-5 rounded bg-ink-100 text-ink-600 grid place-items-center text-[10px] shrink-0 mt-0.5">Q</span>
                      Does it have a fingerprint sensor?
                    </p>
                    
                    <p className="flex gap-2 text-[13px] text-ink-600 mt-2">
                      <span className="w-5 h-5 rounded bg-brand-50 text-brand-600 grid place-items-center text-[10px] font-extrabold shrink-0 mt-0.5">A</span>
                      Yes, a side-mounted fingerprint sensor plus face unlock.
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2 ml-7 text-[11.5px] text-ink-400">
                      <span>Seller · Realme Official Store</span>
                      <span>·</span>
                      <span>2 weeks ago</span>
                      <button className="font-bold hover:text-brand-600" type="button">
                        <svg className="w-3.5 h-3.5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20V6M6 12l6-6 6 6"></path>
                        </svg>
                         Helpful (15)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="4" hidden>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div>
                    <h3 className="text-[15px] font-extrabold mb-3">Delivery options</h3>
                    <div className="space-y-2.5">
                      
                      <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e7e9ef]">
                        <span className="w-9 h-9 rounded-lg bg-ink-50 grid place-items-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                            <circle cx="6.5" cy="17.5" r="1.5"></circle>
                            <circle cx="17.5" cy="17.5" r="1.5"></circle>
                          </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-extrabold">Standard delivery</p>
                          <p className="text-[12px] text-ink-500">2–4 days · all 64 districts</p>
                        </div>
                        <span className="text-[13px] font-extrabold text-brand-600 shrink-0">৳60</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e7e9ef]">
                        <span className="w-9 h-9 rounded-lg bg-ink-50 grid place-items-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                            <circle cx="6.5" cy="17.5" r="1.5"></circle>
                            <circle cx="17.5" cy="17.5" r="1.5"></circle>
                          </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-extrabold">Express delivery (Dhaka)</p>
                          <p className="text-[12px] text-ink-500">Same day if ordered before 2 PM</p>
                        </div>
                        <span className="text-[13px] font-extrabold text-brand-600 shrink-0">৳120</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e7e9ef]">
                        <span className="w-9 h-9 rounded-lg bg-ink-50 grid place-items-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                            <circle cx="6.5" cy="17.5" r="1.5"></circle>
                            <circle cx="17.5" cy="17.5" r="1.5"></circle>
                          </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-extrabold">Store pickup</p>
                          <p className="text-[12px] text-ink-500">Ready in 2 hours at Mirpur 10</p>
                        </div>
                        <span className="text-[13px] font-extrabold text-brand-600 shrink-0">Free</span>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-xl border border-[#e7e9ef]">
                        <span className="w-9 h-9 rounded-lg bg-ink-50 grid place-items-center shrink-0">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                            <circle cx="6.5" cy="17.5" r="1.5"></circle>
                            <circle cx="17.5" cy="17.5" r="1.5"></circle>
                          </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-extrabold">Cash on delivery</p>
                          <p className="text-[12px] text-ink-500">Pay when you receive the parcel</p>
                        </div>
                        <span className="text-[13px] font-extrabold text-brand-600 shrink-0">Available</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3.5 rounded-xl bg-ink-50">
                      <p className="text-[12.5px] font-extrabold mb-1">Check delivery to your area</p>
                      <div className="flex gap-2">
                        <input className="input input-sm" placeholder="Enter post code e.g. 1209" />
                        <button className="btn btn-sm btn-dark shrink-0" type="button">Check</button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-[15px] font-extrabold mb-3">Returns &amp; refunds</h3>
                    
                    <ul className="space-y-2.5 text-[13px] text-ink-600">
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        7-day easy return if the item is damaged, defective or not as described
                      </li>
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Return pickup is free — our courier collects from your address
                      </li>
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Refund to bKash/Nagad/card within 3–7 working days after inspection
                      </li>
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Item must include all accessories, box and invoice
                      </li>
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Change-of-mind returns accepted only for unopened boxes
                      </li>
                    </ul>
                    
                    <Link href="/return-policy" className="link text-[13px] inline-block mt-3">Read the full return policy →</Link>
                    
                    <h3 className="text-[15px] font-extrabold mt-6 mb-2">Packaging</h3>
                    <p className="text-[13px] text-ink-600">Shipped in tamper-proof bubble wrap with a sealed HaatBazar security tape. Please record a video while opening if the parcel looks damaged.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="5" hidden>
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <div className="rounded-2xl border border-[#e7e9ef] p-5">
                    <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    
                    <p className="font-display text-[16px] font-extrabold mb-1">2 years official brand warranty</p>
                    <p className="text-[13px] text-ink-500 mb-3">Covers manufacturing defects on the handset. Accessories (charger, cable, earphones) carry a 6-month warranty.</p>
                    
                    <ul className="space-y-2 text-[12.5px] text-ink-600">
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Service through 46 Realme care centres in Bangladesh
                      </li>
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Physical damage &amp; water damage are not covered
                      </li>
                      <li className="flex gap-2">
                        <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        Keep the invoice — required for every claim
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-2xl border border-[#e7e9ef] p-5">
                    <span className="w-11 h-11 rounded-xl bg-gold-50 text-gold-600 grid place-items-center mb-3">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="9" r="5"></circle>
                        <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                      </svg>
                    </span>
                    
                    <p className="font-display text-[16px] font-extrabold mb-1">Extend your protection</p>
                    <p className="text-[13px] text-ink-500 mb-3">Add HaatBazar Care for accidental damage, screen crack and liquid damage cover.</p>
                    
                    <div className="space-y-2">
                      <label className="check items-center justify-between w-full p-2.5 rounded-lg border border-[#e7e9ef]">
                        <span className="flex items-center gap-2.5">
                          <input type="radio" name="care" />
                          <span className="text-[13px] font-semibold">1 year extended warranty</span>
                        </span>
                        <span className="text-[13px] font-extrabold">৳1,190</span>
                      </label>
                      <label className="check items-center justify-between w-full p-2.5 rounded-lg border border-[#e7e9ef]">
                        <span className="flex items-center gap-2.5">
                          <input type="radio" name="care" />
                          <span className="text-[13px] font-semibold">Screen protection plan</span>
                        </span>
                        <span className="text-[13px] font-extrabold">৳990</span>
                      </label>
                      <label className="check items-center justify-between w-full p-2.5 rounded-lg border border-[#e7e9ef]">
                        <span className="flex items-center gap-2.5">
                          <input type="radio" name="care" />
                          <span className="text-[13px] font-semibold">Complete care (both)</span>
                        </span>
                        <span className="text-[13px] font-extrabold">৳1,890</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5" data-tab-panel="6" hidden>
                
                <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-2xl bg-ink-50 mb-5">
                  
                  <span className="ph ph-b w-16 h-16 rounded-xl">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h16v12H4z"></path>
                      <path d="M9 8V4h6v4"></path>
                    </svg>
                  </span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-display text-[17px] font-extrabold">Realme Official Store</p>
                      <span className="badge badge-dark">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="9" r="5"></circle>
                          <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
                        </svg>
                        Mall
                      </span>
                      <span className="badge badge-green">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Verified
                      </span>
                    </div>
                    
                    <p className="text-[12.5px] text-ink-500 mt-1">Mirpur 10, Dhaka · On HaatBazar since 2021 · 12,480 products</p>
                    
                    <div className="flex flex-wrap gap-5 mt-3">
                      <div>
                        <p className="text-[15px] font-extrabold">4.8/5</p>
                        <p className="text-[11px] text-ink-500">Seller rating</p>
                      </div>
                      <div>
                        <p className="text-[15px] font-extrabold">98%</p>
                        <p className="text-[11px] text-ink-500">Ship on time</p>
                      </div>
                      <div>
                        <p className="text-[15px] font-extrabold">~8 min</p>
                        <p className="text-[11px] text-ink-500">Chat response</p>
                      </div>
                      <div>
                        <p className="text-[15px] font-extrabold">0.4%</p>
                        <p className="text-[11px] text-ink-500">Return rate</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 shrink-0">
                    <Link href="/shop-profile" className="btn btn-sm btn-outline">Visit store</Link>
                    <button className="btn btn-sm btn-primary" data-toast="Following store" type="button">Follow</button>
                  </div>
                </div>
                
                <h3 className="text-[15px] font-extrabold mb-3">More from this seller</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
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
                      
                    </div>
                  </article>
                </div>
              </div>
              
            </div>
            
            <div className="card p-4 sm:p-5 mb-4">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 9 5-9 5-9-5z"></path>
                      <path d="m3 13 9 5 9-5"></path>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Compare with similar products</h2>
                    <p className="text-[12.5px] text-ink-500">Specs side by side</p>
                  </div>
                </div>
                
                <Link href="/compare" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
                  View all 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="tbl-wrap">
                <table className="tbl">
                  
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Display</th>
                      <th>Battery</th>
                      <th>RAM/ROM</th>
                      <th>Rating</th>
                      <th></th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2.5">
                          <span className="ph ph-a w-9 h-9 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                              <path d="M11 19h2"></path>
                            </svg>
                          </span>
                          <span className="font-semibold text-ink-900">Realme C100x (this)</span>
                        </div>
                      </td>
                      <td className="font-extrabold text-brand-600">৳11,499</td>
                      <td>6.8" 90Hz</td>
                      <td>8000 mAh</td>
                      <td>6/128 GB</td>
                      <td>
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
                         4.6
                      </td>
                      <td>
                        <button className="btn btn-xs btn-outline" type="button">Add to compare</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2.5">
                          <span className="ph ph-b w-9 h-9 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                              <path d="M11 19h2"></path>
                            </svg>
                          </span>
                          <span className="font-semibold text-ink-900">Redmi 13C</span>
                        </div>
                      </td>
                      <td className="font-extrabold text-brand-600">৳12,999</td>
                      <td>6.74" 90Hz</td>
                      <td>5000 mAh</td>
                      <td>6/128 GB</td>
                      <td>
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
                         4.5
                      </td>
                      <td>
                        <button className="btn btn-xs btn-outline" type="button">Add to compare</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2.5">
                          <span className="ph ph-c w-9 h-9 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                              <path d="M11 19h2"></path>
                            </svg>
                          </span>
                          <span className="font-semibold text-ink-900">Infinix Hot 40i</span>
                        </div>
                      </td>
                      <td className="font-extrabold text-brand-600">৳13,499</td>
                      <td>6.56" 90Hz</td>
                      <td>5000 mAh</td>
                      <td>8/256 GB</td>
                      <td>
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
                         4.4
                      </td>
                      <td>
                        <button className="btn btn-xs btn-outline" type="button">Add to compare</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex items-center gap-2.5">
                          <span className="ph ph-d w-9 h-9 rounded-lg">
                            <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                              <path d="M11 19h2"></path>
                            </svg>
                          </span>
                          <span className="font-semibold text-ink-900">Walton Primo NF5</span>
                        </div>
                      </td>
                      <td className="font-extrabold text-brand-600">৳9,999</td>
                      <td>6.5" 60Hz</td>
                      <td>5000 mAh</td>
                      <td>4/64 GB</td>
                      <td>
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
                         4.1
                      </td>
                      <td>
                        <button className="btn btn-xs btn-outline" type="button">Add to compare</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="card p-4 sm:p-5 mb-4">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                      <path d="M3 12h18M12 8v13"></path>
                      <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Frequently bought together</h2>
                    <p className="text-[12.5px] text-ink-500">Bundle and save ৳390</p>
                  </div>
                </div>
                
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-[#e7e9ef]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500" />
                  <span className="ph ph-c w-12 h-12 rounded-lg">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"></path>
                      <path d="m4 7.5 8 4.5 8-4.5M12 12v9"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold">Realme C100x</span>
                    <span className="block text-[12.5px] text-brand-600 font-extrabold">৳11,499</span>
                  </span>
                </label>
                <span className="text-[20px] font-bold text-ink-300">+</span>
                <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-[#e7e9ef]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500" />
                  <span className="ph ph-d w-12 h-12 rounded-lg">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"></path>
                      <path d="m4 7.5 8 4.5 8-4.5M12 12v9"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold">Tempered glass 9H</span>
                    <span className="block text-[12.5px] text-brand-600 font-extrabold">৳190</span>
                  </span>
                </label>
                <span className="text-[20px] font-bold text-ink-300">+</span>
                <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-[#e7e9ef]">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500" />
                  <span className="ph ph-e w-12 h-12 rounded-lg">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"></path>
                      <path d="m4 7.5 8 4.5 8-4.5M12 12v9"></path>
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-bold">Anker 20W charger</span>
                    <span className="block text-[12.5px] text-brand-600 font-extrabold">৳1,290</span>
                  </span>
                </label>
                
                <div className="ml-auto text-right">
                  <p className="text-[12px] text-ink-500">Bundle total</p>
                  <p className="font-display text-[20px] font-extrabold text-brand-600">৳12,589</p>
                  <button className="btn btn-sm btn-primary mt-1" data-toast="Bundle added to cart" type="button">Add all 3 to cart</button>
                </div>
              </div>
            </div>
            
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"></path>
                      <circle cx="12" cy="12" r="2.6"></circle>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Customers also viewed</h2>
                    <p className="text-[12.5px] text-ink-500">Popular in Smartphones</p>
                  </div>
                </div>
                
                <Link href="/products" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
                  View all 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
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
              </div>
            </div>
            
          </div>
          
          <aside className="lg:w-[318px] shrink-0 space-y-4">
            
            <div className="card p-4 sticky-24">
              
              <div className="flex items-center justify-between mb-3">
                <p className="text-[13px] font-extrabold">Delivery &amp; service</p>
                <button className="text-[12px] font-bold text-brand-600" data-modal-open="locationModal" type="button">Change</button>
              </div>
              
              <div className="space-y-3 text-[12.5px]">
                
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <div>
                    <p className="font-bold text-ink-900">Dhanmondi, Dhaka 1209</p>
                    <p className="text-ink-500">Standard: ৳60 · arrives Wed, 19 Aug</p>
                  </div>
                </div>
                
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                  </svg>
                  <div>
                    <p className="font-bold text-ink-900">Express same-day ৳120</p>
                    <p className="text-ink-500">Order within 3h 20m</p>
                  </div>
                </div>
                
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <circle cx="12" cy="12" r="2.6"></circle>
                  </svg>
                  <div>
                    <p className="font-bold text-ink-900">Cash on delivery available</p>
                    <p className="text-ink-500">Inspect before you pay</p>
                  </div>
                </div>
                
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                  </svg>
                  <div>
                    <p className="font-bold text-ink-900">7-day free returns</p>
                    <p className="text-ink-500">Pickup from your address</p>
                  </div>
                </div>
                
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <div>
                    <p className="font-bold text-ink-900">2 years official warranty</p>
                    <p className="text-ink-500">46 service centres nationwide</p>
                  </div>
                </div>
              </div>
              
              <div className="dotted-sep my-4"></div>
              
              <p className="text-[13px] font-extrabold mb-2.5">Pay with</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="badge badge-gray">bKash</span>
                <span className="badge badge-gray">Nagad</span>
                <span className="badge badge-gray">Rocket</span>
                <span className="badge badge-gray">Visa</span>
                <span className="badge badge-gray">Mastercard</span>
                <span className="badge badge-gray">AMEX</span>
                <span className="badge badge-gray">COD</span>
                <span className="badge badge-gray">EMI</span>
              </div>
              
              <div className="rounded-xl bg-service-50 border border-service-100 p-3.5 mb-4">
                <p className="flex items-center gap-2 text-[12.5px] font-extrabold text-service-700 mb-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                    <path d="M13 6l5 5"></path>
                  </svg>
                  Need installation or repair?
                </p>
                <p className="text-[12px] text-ink-600 mb-2.5">Book a verified technician for mobile screen replacement, data transfer or setup help.</p>
                <Link href="/services" className="btn btn-sm btn-service btn-block">Find a technician</Link>
              </div>
              
              <div className="rounded-xl border border-[#e7e9ef] p-3.5">
                <p className="text-[12.5px] font-extrabold mb-2">Sold &amp; shipped by</p>
                
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="ph ph-b w-10 h-10 rounded-lg">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h16v12H4z"></path>
                      <path d="M9 8V4h6v4"></path>
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-bold clamp-1">Realme Official Store</p>
                    <p className="text-[11px] text-ink-500">4.8★ seller · 98% on time</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link href="/shop-profile" className="btn btn-xs btn-outline flex-1">Visit</Link>
                  <button className="btn btn-xs btn-outline flex-1" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Chat
                  </button>
                </div>
              </div>
              
              <button className="btn btn-sm btn-ghost btn-block mt-3 !text-ink-400" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21V4h9l-1 3h7l-2 6 2 6H5"></path>
                </svg>
                Report this listing
              </button>
              
            </div>
          </aside>
        </div>
      </main>
      <div className="modal" id="reviewModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel">
          
          <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
            <h3 className="font-display text-[17px] font-extrabold">Write a review</h3>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-ink-50">
              <span className="ph ph-c w-12 h-12 rounded-lg">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                  <path d="M11 19h2"></path>
                </svg>
              </span>
              <p className="text-[13px] font-bold">Realme C100x 6/128GB — Dreamy Purple</p>
            </div>
            
            <div>
              <label className="label">
                Overall rating 
                <span className="req">*</span>
              </label>
              <div className="flex gap-1.5">
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
                <button className="text-gold-400" type="button">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <label className="label !text-[12px]">Value for money</label>
                <select className="select input-sm">
                  <option>5 — Excellent</option>
                  <option>4 — Good</option>
                  <option>3 — Average</option>
                  <option>2 — Poor</option>
                  <option>1 — Very poor</option>
                </select>
              </div>
              <div>
                <label className="label !text-[12px]">Build quality</label>
                <select className="select input-sm">
                  <option>5 — Excellent</option>
                  <option>4 — Good</option>
                  <option>3 — Average</option>
                  <option>2 — Poor</option>
                  <option>1 — Very poor</option>
                </select>
              </div>
              <div>
                <label className="label !text-[12px]">Battery life</label>
                <select className="select input-sm">
                  <option>5 — Excellent</option>
                  <option>4 — Good</option>
                  <option>3 — Average</option>
                  <option>2 — Poor</option>
                  <option>1 — Very poor</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="label">Review title</label>
              <input className="input" placeholder="Sum it up in one line" />
            </div>
            
            <div>
              <label className="label">
                Your review 
                <span className="req">*</span>
              </label>
              <textarea className="textarea" placeholder="What did you like or dislike? How was the delivery and packaging?"></textarea>
              <p className="hint">Minimum 30 characters. Please don't share personal contact details.</p>
            </div>
            
            <div>
              <label className="label">Add photos or a video</label>
              <div className="upload-box">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                  <circle cx="12" cy="14" r="3.2"></circle>
                </svg>
                <span>Drop files here or browse — up to 6 photos / 1 video</span>
              </div>
            </div>
            
            <label className="check">
              <input type="checkbox" defaultChecked />
              Post as “Nusrat A.” (hide my full name)
            </label>
            
            <div className="flex gap-2">
              <button className="btn btn-outline flex-1" data-modal-close="" type="button">Cancel</button>
              <button className="btn btn-primary flex-1" data-modal-close="" data-toast="Review submitted for approval" type="button">Submit review</button>
            </div>
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
