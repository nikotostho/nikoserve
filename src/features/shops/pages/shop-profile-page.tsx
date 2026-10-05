import Link from "next/link";
import ProductCardActions from "@/components/catalog/product-card-actions";

export default function ShopProfilePage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/shops">Shops</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Realme Official Store</span>
          </nav>
        </div>
      </div>
      <main className="shell py-5">
        
        <div className="card overflow-hidden mb-4">
          
          <div className="relative h-[130px] sm:h-[190px] ph ph-a grid-noise">
            <button className="absolute top-3 right-3 btn btn-sm !bg-white/90 !text-ink-900" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                <circle cx="12" cy="14" r="3.2"></circle>
              </svg>
              Store gallery
            </button>
          </div>
          
          <div className="p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row gap-4 -mt-16 sm:-mt-14">
              
              <div className="w-[92px] h-[92px] rounded-2xl bg-white p-1.5 shadow-pop shrink-0">
                <span className="ph ph-b w-full h-full rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
              </div>
              
              <div className="flex-1 min-w-0 sm:pt-14">
                
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight">Realme Official Store</h1>
                  
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
                    Verified seller
                  </span>
                  <span className="badge badge-amber">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                    </svg>
                    Fast shipper
                  </span>
                </div>
                
                <p className="text-[13px] text-ink-500 mb-3">Official brand store · Mirpur 10, Dhaka · Joined March 2021 · 12,480 products</p>
                
                <div className="flex flex-wrap gap-2">
                  <button className="btn btn-primary" data-toast="You are now following this store" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    Follow store (128k)
                  </button>
                  
                  <button className="btn btn-outline" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Chat with seller
                  </button>
                  <button className="btn btn-outline" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                    </svg>
                    Call shop
                  </button>
                  
                  <button className="btn btn-outline btn-icon" aria-label="Share" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="2.5"></circle>
                      <circle cx="6" cy="12" r="2.5"></circle>
                      <circle cx="18" cy="19" r="2.5"></circle>
                      <path d="m8 11 8-4M8 13l8 4"></path>
                    </svg>
                  </button>
                  <button className="btn btn-outline btn-icon" aria-label="Report" type="button">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 21V4h9l-1 3h7l-2 6 2 6H5"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 mt-4">
              <div className="p-3 rounded-xl bg-ink-50 text-center">
                <span className="w-8 h-8 rounded-lg bg-white text-brand-500 grid place-items-center mx-auto mb-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                </span>
                <p className="text-[16px] font-extrabold">4.8/5</p>
                <p className="text-[11px] text-ink-500">Seller rating</p>
              </div>
              <div className="p-3 rounded-xl bg-ink-50 text-center">
                <span className="w-8 h-8 rounded-lg bg-white text-brand-500 grid place-items-center mx-auto mb-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                    <circle cx="6.5" cy="17.5" r="1.5"></circle>
                    <circle cx="17.5" cy="17.5" r="1.5"></circle>
                  </svg>
                </span>
                <p className="text-[16px] font-extrabold">98%</p>
                <p className="text-[11px] text-ink-500">On-time shipping</p>
              </div>
              <div className="p-3 rounded-xl bg-ink-50 text-center">
                <span className="w-8 h-8 rounded-lg bg-white text-brand-500 grid place-items-center mx-auto mb-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                </span>
                <p className="text-[16px] font-extrabold">~8 min</p>
                <p className="text-[11px] text-ink-500">Chat response</p>
              </div>
              <div className="p-3 rounded-xl bg-ink-50 text-center">
                <span className="w-8 h-8 rounded-lg bg-white text-brand-500 grid place-items-center mx-auto mb-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                  </svg>
                </span>
                <p className="text-[16px] font-extrabold">0.4%</p>
                <p className="text-[11px] text-ink-500">Return rate</p>
              </div>
              <div className="p-3 rounded-xl bg-ink-50 text-center">
                <span className="w-8 h-8 rounded-lg bg-white text-brand-500 grid place-items-center mx-auto mb-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="3.2"></circle>
                    <path d="M2 21a7 7 0 0 1 14 0"></path>
                    <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
                  </svg>
                </span>
                <p className="text-[16px] font-extrabold">128k</p>
                <p className="text-[11px] text-ink-500">Followers</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card mb-4">
          <div className="tabs px-4" data-tabs="">
            <button className="tab is-active" data-tab="0" type="button">All products</button>
            <button className="tab " data-tab="1" type="button">Flash deals</button>
            <button className="tab " data-tab="2" type="button">New arrivals</button>
            <button className="tab " data-tab="3" type="button">Best sellers</button>
            <button className="tab " data-tab="4" type="button">Vouchers</button>
            <button className="tab " data-tab="5" type="button">Reviews</button>
            <button className="tab " data-tab="6" type="button">About the shop</button>
          </div>
          
          <div className="p-4 sm:p-5" data-tab-panel="0">
            
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="chip is-active" type="button">All (12,480)</button>
              <button className="chip " type="button">Smartphones</button>
              <button className="chip " type="button">Earbuds</button>
              <button className="chip " type="button">Watches</button>
              <button className="chip " type="button">Chargers</button>
              <button className="chip " type="button">Cases</button>
              <button className="chip " type="button">Power banks</button>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[12.5px] text-ink-500">Sort:</span>
              <button className="chip !h-8 is-active" type="button">Popular</button>
              <button className="chip !h-8 " type="button">Newest</button>
              <button className="chip !h-8 " type="button">Price ↑</button>
              <button className="chip !h-8 " type="button">Price ↓</button>
              <button className="chip !h-8 " type="button">Top rated</button>
              
              <div className="ml-auto">
                <div className="input-group w-56">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-3.5-3.5"></path>
                  </svg>
                  <input className="input input-sm" placeholder="Search in this store" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
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
          
          <div className="p-5" data-tab-panel="1" hidden>
            
            <div className="rounded-2xl ph ph-a p-5 mb-4 flex flex-wrap items-center gap-4 text-white">
              <div className="relative z-10 flex-1">
                <p className="font-display text-[19px] font-extrabold">Store flash sale — up to 42% off</p>
                <p className="text-[12.5px] text-white/80">Ends in 04:12:52 · limited stock</p>
              </div>
              
              <div className="relative z-10 flex gap-1.5">
                <span className="w-11 h-11 rounded-xl bg-white/15 grid place-items-center font-display text-[17px] font-extrabold mono">04</span>
                <span className="w-11 h-11 rounded-xl bg-white/15 grid place-items-center font-display text-[17px] font-extrabold mono">12</span>
                <span className="w-11 h-11 rounded-xl bg-white/15 grid place-items-center font-display text-[17px] font-extrabold mono">52</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
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
            </div>
          </div>
          
          <div className="p-5" data-tab-panel="2" hidden>
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
            </div>
          </div>
          
          <div className="p-5" data-tab-panel="3" hidden>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
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
            </div>
          </div>
          
          <div className="p-5" data-tab-panel="4" hidden>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              
              <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
                
                <div className="w-[92px] shrink-0 bg-brand-500 text-white p-3 text-center">
                  <p className="font-display text-[15px] font-extrabold leading-tight">৳300 OFF</p>
                </div>
                
                <div className="flex-1 min-w-0 p-3">
                  <p className="text-[12.5px] font-bold clamp-1">Min. spend ৳5,000</p>
                  <p className="text-[11.5px] text-ink-500 mono">Code: RLM300</p>
                  <p className="text-[11px] text-brand-600 font-bold mt-0.5">3 days left</p>
                </div>
                
                <button className="btn btn-xs btn-primary mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
              </div>
              <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
                
                <div className="w-[92px] shrink-0 bg-brand-500 text-white p-3 text-center">
                  <p className="font-display text-[15px] font-extrabold leading-tight">12% OFF</p>
                </div>
                
                <div className="flex-1 min-w-0 p-3">
                  <p className="text-[12.5px] font-bold clamp-1">Max discount ৳800</p>
                  <p className="text-[11.5px] text-ink-500 mono">Code: RLM12</p>
                  <p className="text-[11px] text-brand-600 font-bold mt-0.5">6 days left</p>
                </div>
                
                <button className="btn btn-xs btn-primary mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
              </div>
              <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
                
                <div className="w-[92px] shrink-0 bg-brand-500 text-white p-3 text-center">
                  <p className="font-display text-[15px] font-extrabold leading-tight">Free delivery</p>
                </div>
                
                <div className="flex-1 min-w-0 p-3">
                  <p className="text-[12.5px] font-bold clamp-1">On orders above ৳1,500</p>
                  <p className="text-[11.5px] text-ink-500 mono">Code: RLMSHIP</p>
                  <p className="text-[11px] text-brand-600 font-bold mt-0.5">10 days left</p>
                </div>
                
                <button className="btn btn-xs btn-primary mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
              </div>
              <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
                
                <div className="w-[92px] shrink-0 bg-brand-500 text-white p-3 text-center">
                  <p className="font-display text-[15px] font-extrabold leading-tight">৳1,000 OFF</p>
                </div>
                
                <div className="flex-1 min-w-0 p-3">
                  <p className="text-[12.5px] font-bold clamp-1">On smartphones above ৳15,000</p>
                  <p className="text-[11.5px] text-ink-500 mono">Code: RLM1000</p>
                  <p className="text-[11px] text-brand-600 font-bold mt-0.5">2 days left</p>
                </div>
                
                <button className="btn btn-xs btn-primary mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
              </div>
              <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
                
                <div className="w-[92px] shrink-0 bg-brand-500 text-white p-3 text-center">
                  <p className="font-display text-[15px] font-extrabold leading-tight">5% cashback</p>
                </div>
                
                <div className="flex-1 min-w-0 p-3">
                  <p className="text-[12.5px] font-bold clamp-1">bKash payment only</p>
                  <p className="text-[11.5px] text-ink-500 mono">Code: RLMBK5</p>
                  <p className="text-[11px] text-brand-600 font-bold mt-0.5">1 week left</p>
                </div>
                
                <button className="btn btn-xs btn-primary mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
              </div>
              <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
                
                <div className="w-[92px] shrink-0 bg-brand-500 text-white p-3 text-center">
                  <p className="font-display text-[15px] font-extrabold leading-tight">Buy 2 get 1</p>
                </div>
                
                <div className="flex-1 min-w-0 p-3">
                  <p className="text-[12.5px] font-bold clamp-1">On accessories</p>
                  <p className="text-[11.5px] text-ink-500 mono">Code: RLMB2G1</p>
                  <p className="text-[11px] text-brand-600 font-bold mt-0.5">5 days left</p>
                </div>
                
                <button className="btn btn-xs btn-primary mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
              </div>
            </div>
          </div>
          
          <div className="p-5" data-tab-panel="5" hidden>
            
            <div className="grid md:grid-cols-[220px_1fr] gap-6 pb-5 border-b border-[#f0f1f5]">
              
              <div className="text-center">
                <p className="font-display text-[42px] font-extrabold leading-none">4.8</p>
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
                <p className="text-[12.5px] text-ink-500 mt-1.5">32,410 store ratings</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] font-bold w-8">5★</span>
                  <div className="bar flex-1">
                    <i style={{ width: "86%" }}></i>
                  </div>
                  <span className="text-[12px] text-ink-500 w-10 text-right">86%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] font-bold w-8">4★</span>
                  <div className="bar flex-1">
                    <i style={{ width: "9%" }}></i>
                  </div>
                  <span className="text-[12px] text-ink-500 w-10 text-right">9%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] font-bold w-8">3★</span>
                  <div className="bar flex-1">
                    <i style={{ width: "3%" }}></i>
                  </div>
                  <span className="text-[12px] text-ink-500 w-10 text-right">3%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] font-bold w-8">2★</span>
                  <div className="bar flex-1">
                    <i style={{ width: "1%" }}></i>
                  </div>
                  <span className="text-[12px] text-ink-500 w-10 text-right">1%</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12.5px] font-bold w-8">1★</span>
                  <div className="bar flex-1">
                    <i style={{ width: "1%" }}></i>
                  </div>
                  <span className="text-[12px] text-ink-500 w-10 text-right">1%</span>
                </div>
              </div>
            </div>
            
            <div className="divide-y divide-[#f0f1f5]">
              <div className="py-4 flex gap-3">
                <span className="avatar avatar-md bg-ink-700">I</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[13.5px] font-extrabold">Imran Hossain</p>
                    <span className="text-[11.5px] text-ink-400 ml-auto">2 days ago</span>
                  </div>
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
                  <p className="text-[13px] text-ink-700 mt-1.5">Genuine products and quick delivery. The seller replied to my query within 5 minutes.</p>
                </div>
              </div>
              <div className="py-4 flex gap-3">
                <span className="avatar avatar-md bg-ink-700">S</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[13.5px] font-extrabold">Sadia Islam</p>
                    <span className="text-[11.5px] text-ink-400 ml-auto">5 days ago</span>
                  </div>
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
                  <p className="text-[13px] text-ink-700 mt-1.5">Bought a phone and earbuds — both original with warranty cards. Packaging was excellent.</p>
                </div>
              </div>
              <div className="py-4 flex gap-3">
                <span className="avatar avatar-md bg-ink-700">R</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[13.5px] font-extrabold">Rakib Mia</p>
                    <span className="text-[11.5px] text-ink-400 ml-auto">1 week ago</span>
                  </div>
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
                  <p className="text-[13px] text-ink-700 mt-1.5">Product was fine, but delivery took one day longer than promised.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-5" data-tab-panel="6" hidden>
            
            <div className="grid md:grid-cols-2 gap-6">
              
              <div>
                <h3 className="text-[15px] font-extrabold mb-2">About the store</h3>
                
                <p className="text-[13px] text-ink-600 leading-relaxed mb-4">Realme Official Store is the authorised online outlet of Realme Bangladesh. Every device sold here carries official BTRC approval and a full manufacturer warranty serviced through 46 care centres nationwide.</p>
                
                <div className="space-y-2.5">
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Business name</span>
                    <span className="text-[13px] text-ink-800">Realme Bangladesh Ltd.</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Store type</span>
                    <span className="text-[13px] text-ink-800">Brand / Mall store</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Trade licence</span>
                    <span className="text-[13px] text-ink-800">Verified</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Established</span>
                    <span className="text-[13px] text-ink-800">2021</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Warehouse</span>
                    <span className="text-[13px] text-ink-800">Mirpur 10 &amp; Tejgaon, Dhaka</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Ships to</span>
                    <span className="text-[13px] text-ink-800">All 64 districts</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Return window</span>
                    <span className="text-[13px] text-ink-800">7 days</span>
                  </div>
                  <div className="flex gap-3 py-2 border-b border-[#f4f5f8]">
                    <span className="w-[40%] shrink-0 text-[12.5px] font-bold text-ink-500">Support hours</span>
                    <span className="text-[13px] text-ink-800">9 AM – 10 PM daily</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-[15px] font-extrabold mb-2">Store policies</h3>
                
                <div className="space-y-3">
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 14 4 9l5-5"></path>
                        <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold">Returns</p>
                      <p className="text-[12px] text-ink-500">7-day return for damaged, defective or wrong items. Free pickup.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold">Warranty</p>
                      <p className="text-[12px] text-ink-500">Official manufacturer warranty on all devices; 6 months on accessories.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                        <circle cx="6.5" cy="17.5" r="1.5"></circle>
                        <circle cx="17.5" cy="17.5" r="1.5"></circle>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold">Shipping</p>
                      <p className="text-[12px] text-ink-500">Same-day dispatch for orders before 4 PM. Free shipping above ৳2,000.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                    <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                        <circle cx="12" cy="12" r="2.6"></circle>
                      </svg>
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold">Payment</p>
                      <p className="text-[12px] text-ink-500">bKash, Nagad, Rocket, cards, EMI and cash on delivery.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-[15px] font-extrabold mt-5 mb-2">Physical outlets</h3>
                
                <div className="rounded-xl overflow-hidden border border-[#e7e9ef] mb-2">
                  <span className="ph ph-a h-[150px] w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                      <circle cx="12" cy="10" r="2.5"></circle>
                    </svg>
                  </span>
                </div>
                
                <p className="text-[12.5px] text-ink-600">Shop 214, Level 2, Mirpur Shopping Complex, Mirpur 10, Dhaka 1216 · 10 AM – 9 PM</p>
              </div>
            </div>
          </div>
          
        </div>
        
      </main>
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
