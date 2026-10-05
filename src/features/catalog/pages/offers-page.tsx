import Link from "next/link";
import ProductCardActions from "@/components/catalog/product-card-actions";

export default function OffersPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Offers &amp; Deals</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6">
        
        <div className="rounded-2xl overflow-hidden ph ph-a p-6 sm:p-9 mb-5 text-white relative">
          
          <div className="relative z-10 max-w-xl">
            <span className="badge !bg-white/20 !text-white mb-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
              </svg>
              Mega Sale 2026
            </span>
            
            <h1 className="font-display text-[28px] sm:text-[38px] font-extrabold tracking-tight mb-2">Up to 70% off on 1.2M products &amp; services</h1>
            
            <p className="text-[13.5px] text-white/85 mb-4">Flash deals refresh every 6 hours. Collect vouchers, stack cashback and get free delivery all week.</p>
            
            <div className="flex gap-2">
              <div className="text-center">
                <span className="w-14 h-14 rounded-xl bg-white/15 grid place-items-center font-display text-[20px] font-extrabold mono">04</span>
                <p className="text-[10.5px] mt-1 text-white/70">Hours</p>
              </div>
              <div className="text-center">
                <span className="w-14 h-14 rounded-xl bg-white/15 grid place-items-center font-display text-[20px] font-extrabold mono">12</span>
                <p className="text-[10.5px] mt-1 text-white/70">Min</p>
              </div>
              <div className="text-center">
                <span className="w-14 h-14 rounded-xl bg-white/15 grid place-items-center font-display text-[20px] font-extrabold mono">52</span>
                <p className="text-[10.5px] mt-1 text-white/70">Sec</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <a href="#" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl ph ph-a grid place-items-center text-white shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13.5px] font-extrabold clamp-1">Flash deals</p>
              <p className="text-[12px] text-ink-500 clamp-1">Ends in 4 hours</p>
            </div>
          </a>
          <a href="#" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl ph ph-b grid place-items-center text-white shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                <path d="M12 7v10"></path>
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13.5px] font-extrabold clamp-1">Voucher centre</p>
              <p className="text-[12px] text-ink-500 clamp-1">24 coupons to collect</p>
            </div>
          </a>
          <a href="#" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl ph ph-c grid place-items-center text-white shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                <circle cx="6.5" cy="17.5" r="1.5"></circle>
                <circle cx="17.5" cy="17.5" r="1.5"></circle>
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13.5px] font-extrabold clamp-1">Free delivery zone</p>
              <p className="text-[12px] text-ink-500 clamp-1">No shipping fee</p>
            </div>
          </a>
          <a href="#" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl ph ph-d grid place-items-center text-white shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12 12 3h8v8l-9 9z"></path>
                <circle cx="16" cy="8" r="1.5"></circle>
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[13.5px] font-extrabold clamp-1">Clearance</p>
              <p className="text-[12px] text-ink-500 clamp-1">Last pieces up to 70% off</p>
            </div>
          </a>
        </div>
        
        <div className="card p-4 sm:p-5 mb-5">
          
          <div className="flex items-end justify-between gap-4 mb-4">
            
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                </svg>
              </span>
              
              <div>
                <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Flash deals ending soon</h2>
                <p className="text-[12.5px] text-ink-500">Grab them before stock runs out</p>
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
        
        <div className="card p-4 sm:p-5 mb-5">
          
          <div className="flex items-end justify-between gap-4 mb-4">
            
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                  <path d="M12 7v10"></path>
                </svg>
              </span>
              
              <div>
                <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Collect vouchers</h2>
                <p className="text-[12.5px] text-ink-500">Apply at checkout — stackable with bank offers</p>
              </div>
            </div>
            
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            
            <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-brand-500 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">৳500 OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">Orders above ৳5,000</p>
                <p className="text-[11.5px] text-ink-500">All categories</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">MEGA500</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-service-300 bg-service-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-service-500 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">15% OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">Max ৳1,200 discount</p>
                <p className="text-[11.5px] text-ink-500">Fashion only</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">FASHION15</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-gold-300 bg-gold-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-gold-400 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">Free delivery</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">No minimum spend</p>
                <p className="text-[11.5px] text-ink-500">Inside Dhaka</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">SHIPFREE</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-brand-500 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">৳200 OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">Orders above ৳1,000</p>
                <p className="text-[11.5px] text-ink-500">Groceries</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">GROCERY200</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-service-300 bg-service-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-service-500 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">20% cashback</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">Max ৳500 · bKash</p>
                <p className="text-[11.5px] text-ink-500">All payments</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">BKASH20</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-gold-300 bg-gold-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-gold-400 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">৳1,000 OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">Electronics above ৳20,000</p>
                <p className="text-[11.5px] text-ink-500">Electronics</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">TECH1000</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-brand-300 bg-brand-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-brand-500 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">25% OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">First service booking</p>
                <p className="text-[11.5px] text-ink-500">Services</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">SERVICE25</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-service-300 bg-service-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-service-500 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">৳150 OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">On AC servicing</p>
                <p className="text-[11.5px] text-ink-500">Home services</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">ACCARE150</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
            <div className="flex items-center rounded-xl border border-dashed border-gold-300 bg-gold-50/40 overflow-hidden">
              
              <div className="w-[104px] shrink-0 bg-gold-400 text-white p-3.5 text-center">
                <p className="font-display text-[16px] font-extrabold leading-tight">10% OFF</p>
              </div>
              
              <div className="flex-1 min-w-0 p-3">
                <p className="text-[12.5px] font-bold clamp-1">Restaurant orders</p>
                <p className="text-[11.5px] text-ink-500">Food &amp; dining</p>
                <p className="text-[11.5px] font-extrabold mono mt-0.5">FOOD10</p>
              </div>
              
              <button className="btn btn-xs btn-dark mr-3 shrink-0" data-toast="Voucher collected" type="button">Collect</button>
            </div>
          </div>
        </div>
        
        <div className="card p-4 sm:p-5 mb-5">
          
          <div className="flex items-end justify-between gap-4 mb-4">
            
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <circle cx="12" cy="12" r="2.6"></circle>
                </svg>
              </span>
              
              <div>
                <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Bank &amp; payment offers</h2>
                <p className="text-[12.5px] text-ink-500">Extra savings with partner banks</p>
              </div>
            </div>
            
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-xl border border-[#e7e9ef]">
              <div className="w-16 h-9 rounded bg-ink-100 grid place-items-center text-[11px] font-extrabold text-ink-600 mb-2.5">bKash</div>
              <p className="text-[13px] font-extrabold mb-0.5">10% cashback up to ৳300</p>
              <p className="text-[11.5px] text-ink-500">Every Friday</p>
            </div>
            <div className="p-4 rounded-xl border border-[#e7e9ef]">
              <div className="w-16 h-9 rounded bg-ink-100 grid place-items-center text-[11px] font-extrabold text-ink-600 mb-2.5">City Bank</div>
              <p className="text-[13px] font-extrabold mb-0.5">0% EMI up to 12 months</p>
              <p className="text-[11.5px] text-ink-500">Amex &amp; Visa</p>
            </div>
            <div className="p-4 rounded-xl border border-[#e7e9ef]">
              <div className="w-16 h-9 rounded bg-ink-100 grid place-items-center text-[11px] font-extrabold text-ink-600 mb-2.5">BRAC Bank</div>
              <p className="text-[13px] font-extrabold mb-0.5">৳500 instant discount</p>
              <p className="text-[11.5px] text-ink-500">Min ৳8,000</p>
            </div>
            <div className="p-4 rounded-xl border border-[#e7e9ef]">
              <div className="w-16 h-9 rounded bg-ink-100 grid place-items-center text-[11px] font-extrabold text-ink-600 mb-2.5">Nagad</div>
              <p className="text-[13px] font-extrabold mb-0.5">15% cashback on groceries</p>
              <p className="text-[11.5px] text-ink-500">Weekends only</p>
            </div>
          </div>
        </div>
        
        <div className="card p-4 sm:p-5">
          
          <div className="flex items-end justify-between gap-4 mb-4">
            
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-service-50 text-service-600 grid place-items-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                  <path d="M13 6l5 5"></path>
                </svg>
              </span>
              
              <div>
                <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Service deals near you</h2>
                <p className="text-[12.5px] text-ink-500">Book verified professionals for less</p>
              </div>
            </div>
            
            <Link href="/services" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-service-600 hover:gap-2 transition-all shrink-0">
              View all 
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 6 6 6-6 6"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3.5">
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
