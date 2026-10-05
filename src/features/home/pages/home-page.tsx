import Link from "next/link";
import ProductCardActions from "@/components/catalog/product-card-actions";

export default function HomePage() {
  return (
    <>
      <main>
        
        <section className="pt-4 pb-2">
          <div className="shell grid lg:grid-cols-[1fr_318px] gap-4">
            
            <div className="relative rounded-2xl overflow-hidden" data-slider="">
              
              <div className="slides flex transition-transform duration-500" data-slides="">
                
                <div className="min-w-full relative ph-a h-[240px] sm:h-[320px] lg:h-[368px] grid-noise">
                  
                  <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-10 max-w-[560px] text-white">
                    
                    <span className="badge !bg-white/18 !text-white mb-3 w-fit">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 7h12l1 14H5z"></path>
                        <path d="M9 7a3 3 0 0 1 6 0"></path>
                      </svg>
                      Campaign live now
                    </span>
                    
                    <h2 className="font-display text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight mb-2.5">Eid Mega Sale</h2>
                    
                    <p className="text-[14px] sm:text-[16px] font-semibold text-white/90 mb-1">Up to 60% off on 2 lakh+ products</p>
                    
                    <p className="text-[12.5px] sm:text-[13.5px] text-white/70 mb-5">Free delivery over ৳999 · EMI from ৳500/mo</p>
                    
                    <div className="flex flex-wrap gap-2.5">
                      <Link href="/offers" className="btn btn-lg !bg-white !text-ink-950 hover:!bg-white/90">
                        Shop the sale 
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 6 6 6-6 6"></path>
                        </svg>
                      </Link>
                      
                      <Link href="/categories" className="btn btn-lg !border-white/40 !text-white hover:!bg-white/10 btn-outline !bg-transparent">Browse categories</Link>
                    </div>
                  </div>
                </div>
                <div className="min-w-full relative ph-b h-[240px] sm:h-[320px] lg:h-[368px] grid-noise">
                  
                  <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-10 max-w-[560px] text-white">
                    
                    <span className="badge !bg-white/18 !text-white mb-3 w-fit">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                        <path d="M13 6l5 5"></path>
                      </svg>
                      Verified network
                    </span>
                    
                    <h2 className="font-display text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight mb-2.5">Book verified home services</h2>
                    
                    <p className="text-[14px] sm:text-[16px] font-semibold text-white/90 mb-1">8,500+ background-checked professionals</p>
                    
                    <p className="text-[12.5px] sm:text-[13.5px] text-white/70 mb-5">Electricians, AC repair, cleaning, tutors &amp; more</p>
                    
                    <div className="flex flex-wrap gap-2.5">
                      <Link href="/services" className="btn btn-lg !bg-white !text-ink-950 hover:!bg-white/90">
                        Find a provider 
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 6 6 6-6 6"></path>
                        </svg>
                      </Link>
                      
                      <Link href="/categories" className="btn btn-lg !border-white/40 !text-white hover:!bg-white/10 btn-outline !bg-transparent">Browse categories</Link>
                    </div>
                  </div>
                </div>
                <div className="min-w-full relative ph-c h-[240px] sm:h-[320px] lg:h-[368px] grid-noise">
                  
                  <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-10 max-w-[560px] text-white">
                    
                    <span className="badge !bg-white/18 !text-white mb-3 w-fit">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8h16v12H4z"></path>
                        <path d="M9 8V4h6v4"></path>
                      </svg>
                      For sellers &amp; providers
                    </span>
                    
                    <h2 className="font-display text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.08] tracking-tight mb-2.5">One account, two businesses</h2>
                    
                    <p className="text-[14px] sm:text-[16px] font-semibold text-white/90 mb-1">Sell products &amp; list your services together</p>
                    
                    <p className="text-[12.5px] sm:text-[13.5px] text-white/70 mb-5">Zero commission for the first 3 months</p>
                    
                    <div className="flex flex-wrap gap-2.5">
                      <Link href="/become-seller" className="btn btn-lg !bg-white !text-ink-950 hover:!bg-white/90">
                        Start selling free 
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 6 6 6-6 6"></path>
                        </svg>
                      </Link>
                      
                      <Link href="/categories" className="btn btn-lg !border-white/40 !text-white hover:!bg-white/10 btn-outline !bg-transparent">Browse categories</Link>
                    </div>
                  </div>
                </div>
                
              </div>
              
              <button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white grid place-items-center shadow-pop z-10" data-slide-prev="" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 6-6 6 6 6"></path>
                </svg>
              </button>
              
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white grid place-items-center shadow-pop z-10" data-slide-next="" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </button>
              
              <div className="absolute bottom-4 left-6 flex gap-1.5 z-10" data-slide-dots="">
                <button className="h-1.5 rounded-full transition-all w-7 bg-white" type="button"></button>
                <button className="h-1.5 rounded-full transition-all w-1.5 bg-white/50" type="button"></button>
                <button className="h-1.5 rounded-full transition-all w-1.5 bg-white/50" type="button"></button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              
              <Link href="/services" className="relative rounded-2xl overflow-hidden ph ph-b h-[112px] lg:h-[118px] p-4 text-white flex flex-col justify-center">
                
                <span className="relative z-10">
                  <span className="block font-display text-[15px] font-extrabold leading-tight">
                    Service Provider
                    <br />
                    Network
                  </span>
                  <span className="block text-[11.5px] text-white/75 mt-1">8,500+ verified pros in your city</span>
                </span>
              </Link>
              
              <Link href="/become-seller" className="relative rounded-2xl overflow-hidden ph ph-d h-[112px] lg:h-[118px] p-4 text-white flex flex-col justify-center">
                
                <span className="relative z-10">
                  <span className="block font-display text-[15px] font-extrabold leading-tight">
                    Become a Seller
                    <br />
                    — it's free
                  </span>
                  <span className="block text-[11.5px] text-white/80 mt-1">List today, get paid every week</span>
                </span>
              </Link>
              
              <div className="col-span-2 lg:col-span-1 card p-4 h-[112px] lg:h-[118px] flex items-center gap-3">
                
                <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                    <path d="M12 7v10"></path>
                  </svg>
                </span>
                
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold">Collect ৳500 welcome voucher</p>
                  <p className="text-[11.5px] text-ink-500 mt-0.5 clamp-2">
                    New customers only. Use code 
                    <b className="text-brand-600">HAAT500</b>
                     on your first order or booking.
                  </p>
                  
                  <button className="text-[12px] font-extrabold text-brand-600 mt-1" data-toast="Voucher HAAT500 collected" type="button">Collect now →</button>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        
        <section className="pt-3">
          <div className="shell grid grid-cols-2 md:grid-cols-5 gap-3">
            
            <div className="card flex items-center gap-2.5 p-3.5">
              <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">100% Verified</p>
                <p className="text-[11px] text-ink-500 clamp-1">Every seller &amp; provider is KYC checked</p>
              </div>
            </div>
            <div className="card flex items-center gap-2.5 p-3.5">
              <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                  <circle cx="6.5" cy="17.5" r="1.5"></circle>
                  <circle cx="17.5" cy="17.5" r="1.5"></circle>
                </svg>
              </span>
              
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">Cash on Delivery</p>
                <p className="text-[11px] text-ink-500 clamp-1">Pay when your parcel arrives</p>
              </div>
            </div>
            <div className="card flex items-center gap-2.5 p-3.5">
              <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                </svg>
              </span>
              
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">Instant Booking</p>
                <p className="text-[11px] text-ink-500 clamp-1">Confirm a service in under a minute</p>
              </div>
            </div>
            <div className="card flex items-center gap-2.5 p-3.5">
              <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                </svg>
              </span>
              
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">7-Day Easy Return</p>
                <p className="text-[11px] text-ink-500 clamp-1">No-question return window</p>
              </div>
            </div>
            <div className="card flex items-center gap-2.5 p-3.5">
              <span className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                </svg>
              </span>
              
              <div className="min-w-0">
                <p className="text-[12.5px] font-extrabold clamp-1">24/7 Support</p>
                <p className="text-[11px] text-ink-500 clamp-1">Call, chat or email anytime</p>
              </div>
            </div>
            
          </div>
        </section>
        
        <section className="section pb-0">
          <div className="shell">
            
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display text-[19px] font-extrabold">Shop by category</h2>
                  <p className="text-[12.5px] text-ink-500">240+ categories across products and services</p>
                </div>
                
                <Link href="/categories" className="text-[13px] font-bold text-brand-600 flex items-center gap-1">
                  All categories 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                      <path d="M9 20h6M12 16v4"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Electronics &amp; Gadgets</span>
                  
                  <span className="text-2xs text-ink-400">1200 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Mobile &amp; Tablets</span>
                  
                  <span className="text-2xs text-ink-400">1517 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Fashion &amp; Lifestyle</span>
                  
                  <span className="text-2xs text-ink-400">1834 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Health &amp; Beauty</span>
                  
                  <span className="text-2xs text-ink-400">2151 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V9.5l8-6 8 6V20"></path>
                      <path d="M9.5 20v-6h5v6"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Home &amp; Living</span>
                  
                  <span className="text-2xs text-ink-400">2468 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 7h12l1 14H5z"></path>
                      <path d="M9 7a3 3 0 0 1 6 0"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Groceries &amp; Food</span>
                  
                  <span className="text-2xs text-ink-400">2785 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                      <path d="M3 12h18M12 8v13"></path>
                      <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Baby, Kids &amp; Toys</span>
                  
                  <span className="text-2xs text-ink-400">3102 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Sports &amp; Outdoor</span>
                  
                  <span className="text-2xs text-ink-400">3419 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 16v-4l2-5h10l2 5v4"></path>
                      <path d="M3 16h18v3h-2l-1-2H6l-1 2H3z"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Automobile Parts</span>
                  
                  <span className="text-2xs text-ink-400">3736 listings</span>
                </Link>
                <Link href="/products" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-brand-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 grid place-items-center group-hover:bg-brand-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"></path>
                      <path d="M8 7h7"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Books &amp; Stationery</span>
                  
                  <span className="text-2xs text-ink-400">4053 listings</span>
                </Link>
              </div>
              
              <div className="dotted-sep my-4"></div>
              
              <div className="flex items-center justify-between mb-3">
                <p className="text-[13px] font-extrabold flex items-center gap-2">
                  <svg className="w-4 h-4 text-service-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                    <path d="M13 6l5 5"></path>
                  </svg>
                  Popular local services
                </p>
                
                <Link href="/services" className="text-[13px] font-bold text-service-600 flex items-center gap-1">
                  All services 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
                
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                      <path d="M13 6l5 5"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Home Services</span>
                  <span className="text-2xs text-ink-400">420 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">AC &amp; Appliance Repair</span>
                  <span className="text-2xs text-ink-400">553 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="2.5"></circle>
                      <circle cx="6" cy="18" r="2.5"></circle>
                      <path d="M8 8l12 10M8 16 20 6"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Beauty &amp; Salon</span>
                  <span className="text-2xs text-ink-400">686 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                      <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                      <circle cx="18" cy="10" r="2"></circle>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Doctors &amp; Clinics</span>
                  <span className="text-2xs text-ink-400">819 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-4 9 4-9 4z"></path>
                      <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Tutors &amp; Coaching</span>
                  <span className="text-2xs text-ink-400">952 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 21h10l1-8H6z"></path>
                      <path d="M6 13a4 4 0 0 1 2-7 4 4 0 0 1 8 0 4 4 0 0 1 2 7"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Restaurants &amp; Catering</span>
                  <span className="text-2xs text-ink-400">1085 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Event &amp; Wedding</span>
                  <span className="text-2xs text-ink-400">1218 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                      <circle cx="6.5" cy="17.5" r="1.5"></circle>
                      <circle cx="17.5" cy="17.5" r="1.5"></circle>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Packers &amp; Movers</span>
                  <span className="text-2xs text-ink-400">1351 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21 4-9 16-2-6-6-2z"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Travel Agents</span>
                  <span className="text-2xs text-ink-400">1484 pros</span>
                </Link>
                <Link href="/services" className="group flex flex-col items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-[#eef0f4] hover:border-service-200 hover:shadow-soft transition text-center">
                  
                  <span className="w-14 h-14 rounded-2xl bg-service-50 text-service-600 grid place-items-center group-hover:bg-service-500 group-hover:text-white transition">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="7" cy="9" r="2"></circle>
                      <circle cx="12" cy="7" r="2"></circle>
                      <circle cx="17" cy="9" r="2"></circle>
                      <path d="M8 15a4 4 0 0 1 8 0c0 3-2 4-4 4s-4-1-4-4z"></path>
                    </svg>
                  </span>
                  
                  <span className="text-[12.5px] font-bold text-ink-800 leading-tight clamp-2">Pet Care</span>
                  <span className="text-2xs text-ink-400">1617 pros</span>
                </Link>
              </div>
              
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="shell">
            <div className="card overflow-hidden">
              
              <div className="flex flex-wrap items-center gap-3 p-4 sm:p-5 border-b border-[#e7e9ef]">
                
                <span className="w-10 h-10 rounded-xl bg-brand-500 text-white grid place-items-center shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                  </svg>
                </span>
                
                <div className="mr-auto">
                  <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold">Flash deals today</h2>
                  <p className="text-[12.5px] text-ink-500">Limited stock · products &amp; services together</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-bold text-ink-500">Ends in</span>
                  
                  <div className="flex gap-1" data-countdown="">
                    <span className="w-9 h-9 rounded-lg bg-ink-950 text-white grid place-items-center text-[14px] font-extrabold mono">04</span>
                    <span className="grid place-items-center font-extrabold text-ink-400">:</span>
                    <span className="w-9 h-9 rounded-lg bg-ink-950 text-white grid place-items-center text-[14px] font-extrabold mono">12</span>
                    <span className="grid place-items-center font-extrabold text-ink-400">:</span>
                    <span className="w-9 h-9 rounded-lg bg-ink-950 text-white grid place-items-center text-[14px] font-extrabold mono">52</span>
                  </div>
                </div>
                
                <Link href="/offers" className="btn btn-sm btn-soft">
                  See all deals 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="p-4 sm:p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                
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
                
                <article className="pcard card-hover">
                  
                  <span className="ph ph-b ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                      <path d="M13 6l5 5"></path>
                    </svg>
                  </span>
                  <button className="wish-btn" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <span className="discount-flag !bg-service-500">Service</span>
                  
                  <div className="pcard-body">
                    <Link href="/service-details" className="pcard-title block mb-1.5">Rahim Electric &amp; Wiring Service</Link>
                    
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="rating-pill">
                        4.7 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">(624)</span>
                    </div>
                    
                    <p className="text-[13px] font-extrabold text-service-600 mb-2">৳400 – ৳2,500</p>
                    
                    <button className="btn btn-sm btn-service btn-block" data-modal-open="quoteModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <path d="M8 3v4M16 3v4M3 10h18"></path>
                      </svg>
                      Book now
                    </button>
                  </div>
                </article>
                <article className="pcard card-hover">
                  
                  <span className="ph ph-c ratio-sq w-full">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                    </svg>
                  </span>
                  <button className="wish-btn" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <span className="discount-flag !bg-service-500">Service</span>
                  
                  <div className="pcard-body">
                    <Link href="/service-details" className="pcard-title block mb-1.5">CoolCare AC Servicing &amp; Repair</Link>
                    
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="rating-pill">
                        4.8 
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                        </svg>
                      </span>
                      <span className="text-2xs text-ink-400">(1032)</span>
                    </div>
                    
                    <p className="text-[13px] font-extrabold text-service-600 mb-2">৳600 – ৳3,500</p>
                    
                    <button className="btn btn-sm btn-service btn-block" data-modal-open="quoteModal" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                        <path d="M8 3v4M16 3v4M3 10h18"></path>
                      </svg>
                      Book now
                    </button>
                  </div>
                </article>
                
              </div>
            </div>
          </div>
        </section>
        
        <section className="pb-1">
          <div className="shell">
            
            <div className="flex items-end justify-between gap-4 mb-4">
              
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-service-50 text-service-600 grid place-items-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                </span>
                
                <div>
                  <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Service providers near you</h2>
                  <p className="text-[12.5px] text-ink-500">Top-rated professionals within 5 km of Dhanmondi</p>
                </div>
              </div>
              
              <Link href="/services" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-service-600 hover:gap-2 transition-all shrink-0">
                View all 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              
              <span className="text-[12.5px] font-bold text-ink-500 mr-1">Sort:</span>
              
              <button className="chip chip-service is-active" type="button">Recommended</button>
              <button className="chip chip-service " type="button">Highest rated</button>
              <button className="chip chip-service " type="button">Nearest first</button>
              <button className="chip chip-service " type="button">Most reviewed</button>
              <button className="chip chip-service " type="button">Open now</button>
              
              <Link href="/services" className="btn btn-sm btn-outline ml-auto hidden sm:inline-flex">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
                View on map
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
            </div>
            
            <div className="text-center mt-5">
              <Link href="/services" className="btn btn-outline-brand">
                Browse all 8,500+ providers 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            
          </div>
        </section>
        
        <section className="section">
          <div className="shell">
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Electronics &amp; gadgets</h2>
                    <p className="text-[12.5px] text-ink-500">Direct from authorised local shops and brand stores</p>
                  </div>
                </div>
                
                <Link href="/products" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
                  View all 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="chip is-active" type="button">Recommended</button>
                <button className="chip " type="button">New arrivals</button>
                <button className="chip " type="button">Price: low to high</button>
                <button className="chip " type="button">Top rated</button>
                <button className="chip " type="button">Best selling</button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
              </div>
              
            </div>
          </div>
        </section>
        
        <section className="pb-2">
          <div className="shell grid md:grid-cols-4 gap-3">
            
            <div className="card card-pad flex gap-3">
              <span className="w-10 h-10 rounded-xl bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
              
              <div>
                <p className="text-[13.5px] font-extrabold mb-0.5">Verified providers &amp; sellers</p>
                <p className="text-[12px] text-ink-500 leading-relaxed">KYC, NID and trade licence checked before approval</p>
              </div>
            </div>
            <div className="card card-pad flex gap-3">
              <span className="w-10 h-10 rounded-xl bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                  <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                </svg>
              </span>
              
              <div>
                <p className="text-[13.5px] font-extrabold mb-0.5">Secure payments</p>
                <p className="text-[12px] text-ink-500 leading-relaxed">bKash, Nagad, cards &amp; COD with buyer protection</p>
              </div>
            </div>
            <div className="card card-pad flex gap-3">
              <span className="w-10 h-10 rounded-xl bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
              </span>
              
              <div>
                <p className="text-[13.5px] font-extrabold mb-0.5">Hyper-local focus</p>
                <p className="text-[12px] text-ink-500 leading-relaxed">Results ranked by distance from your exact area</p>
              </div>
            </div>
            <div className="card card-pad flex gap-3">
              <span className="w-10 h-10 rounded-xl bg-ink-50 text-ink-700 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                </svg>
              </span>
              
              <div>
                <p className="text-[13.5px] font-extrabold mb-0.5">Real human support</p>
                <p className="text-[12px] text-ink-500 leading-relaxed">Call 16247 · 8 AM – 11 PM, 7 days a week</p>
              </div>
            </div>
            
          </div>
        </section>
        
        <section className="section">
          <div className="shell">
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Fashion &amp; lifestyle</h2>
                    <p className="text-[12.5px] text-ink-500">Handloom, ethnic and everyday wear from local designers</p>
                  </div>
                </div>
                
                <Link href="/products" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
                  View all 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="chip is-active" type="button">Recommended</button>
                <button className="chip " type="button">New arrivals</button>
                <button className="chip " type="button">Price: low to high</button>
                <button className="chip " type="button">Top rated</button>
                <button className="chip " type="button">Best selling</button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
          </div>
        </section>
        
        <section className="section">
          <div className="shell">
            
            <div className="relative overflow-hidden rounded-3xl bg-ink-950 text-white p-6 sm:p-10 grid lg:grid-cols-[1.15fr_1fr] gap-8 items-center grid-noise">
              
              <div className="relative z-10">
                <span className="badge !bg-white/15 !text-white mb-3">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
                  </svg>
                  Grow with HaatBazar
                </span>
                
                <h2 className="font-display text-[24px] sm:text-[32px] font-extrabold leading-tight mb-3">
                  One vendor account.
                  <br />
                  Two ways to earn.
                </h2>
                
                <p className="text-[14px] text-white/70 max-w-[520px] mb-5">Sell physical products with nationwide delivery, or list your local service business and receive verified customer leads every day. Set up in 10 minutes — no registration fee, zero commission for the first 3 months.</p>
                
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  
                  <div className="rounded-xl bg-white/[.06] border border-white/10 p-3.5">
                    <p className="font-display text-[22px] font-extrabold">2.4M+</p>
                    <p className="text-[11.5px] text-white/60">Monthly buyers</p>
                  </div>
                  <div className="rounded-xl bg-white/[.06] border border-white/10 p-3.5">
                    <p className="font-display text-[22px] font-extrabold">64</p>
                    <p className="text-[11.5px] text-white/60">Districts covered</p>
                  </div>
                  <div className="rounded-xl bg-white/[.06] border border-white/10 p-3.5">
                    <p className="font-display text-[22px] font-extrabold">৳0</p>
                    <p className="text-[11.5px] text-white/60">Setup cost</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  <Link href="/seller-register" className="btn btn-lg btn-primary">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                    Open a free store
                  </Link>
                  
                  <Link href="/become-provider" className="btn btn-lg btn-outline !bg-white/5 !border-white/25 !text-white hover:!bg-white/10">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h16v12H4z"></path>
                      <path d="M9 8V4h6v4"></path>
                    </svg>
                    List my business
                  </Link>
                </div>
              </div>
              
              <div className="relative z-10 grid sm:grid-cols-2 gap-3.5">
                
                <div className="rounded-2xl bg-white p-5 text-ink-900">
                  <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 7h12l1 14H5z"></path>
                      <path d="M9 7a3 3 0 0 1 6 0"></path>
                    </svg>
                  </span>
                  
                  <p className="font-display text-[16px] font-extrabold mb-1.5">Product Seller</p>
                  <p className="text-[12.5px] text-ink-500 leading-relaxed mb-3.5">Inventory, orders, shipping labels, payouts, ads &amp; analytics.</p>
                  
                  <ul className="space-y-1.5 text-[12.5px] text-ink-600">
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Weekly payouts
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Discounted courier rates
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Free product photography tips
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-5 text-ink-900">
                  <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center mb-3">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                      <path d="M13 6l5 5"></path>
                    </svg>
                  </span>
                  
                  <p className="font-display text-[16px] font-extrabold mb-1.5">Service Provider</p>
                  <p className="text-[12.5px] text-ink-500 leading-relaxed mb-3.5">Listings, leads, booking calendar, quotes, reviews &amp; ranking boost.</p>
                  
                  <ul className="space-y-1.5 text-[12.5px] text-ink-600">
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Verified badge after KYC
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Lead credits every month
                    </li>
                    <li className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Appointment reminders by SMS
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="shell">
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-end justify-between gap-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                      <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                      <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Home, kitchen &amp; groceries</h2>
                    <p className="text-[12.5px] text-ink-500">Daily essentials delivered across Bangladesh</p>
                  </div>
                </div>
                
                <Link href="/products" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
                  View all 
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="chip is-active" type="button">Recommended</button>
                <button className="chip " type="button">New arrivals</button>
                <button className="chip " type="button">Price: low to high</button>
                <button className="chip " type="button">Top rated</button>
                <button className="chip " type="button">Best selling</button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
              </div>
              
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="shell">
            
            <div className="flex items-end justify-between gap-4 mb-4">
              
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"></path>
                    <path d="M8 7h7"></path>
                  </svg>
                </span>
                
                <div>
                  <h2 className="font-display text-[19px] sm:text-[21px] font-extrabold tracking-tight">Guides, tips &amp; buying advice</h2>
                  <p className="text-[12.5px] text-ink-500">Fresh from the HaatBazar blog</p>
                </div>
              </div>
              
              <Link href="/blog" className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:gap-2 transition-all shrink-0">
                View all 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              
              <Link href="/blog-details" className="card card-hover overflow-hidden">
                <span className="ph ph-c ratio-wide w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                  </svg>
                </span>
                
                <div className="p-4">
                  <span className="badge badge-brand mb-2">Buying Guide</span>
                  <p className="font-display text-[14.5px] font-extrabold leading-snug mb-2 clamp-2">How to choose the right AC for a Dhaka flat</p>
                  
                  <p className="flex items-center gap-2 text-[11.5px] text-ink-400">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                    6 min read · 12 Aug 2026
                  </p>
                </div>
              </Link>
              <Link href="/blog-details" className="card card-hover overflow-hidden">
                <span className="ph ph-d ratio-wide w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                    <path d="M13 6l5 5"></path>
                  </svg>
                </span>
                
                <div className="p-4">
                  <span className="badge badge-brand mb-2">Service Tips</span>
                  <p className="font-display text-[14.5px] font-extrabold leading-snug mb-2 clamp-2">10 questions to ask before hiring an electrician</p>
                  
                  <p className="flex items-center gap-2 text-[11.5px] text-ink-400">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                    4 min read · 12 Aug 2026
                  </p>
                </div>
              </Link>
              <Link href="/blog-details" className="card card-hover overflow-hidden">
                <span className="ph ph-e ratio-wide w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                
                <div className="p-4">
                  <span className="badge badge-brand mb-2">Seller Story</span>
                  <p className="font-display text-[14.5px] font-extrabold leading-snug mb-2 clamp-2">Seller playbook: your first 100 orders</p>
                  
                  <p className="flex items-center gap-2 text-[11.5px] text-ink-400">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                    8 min read · 12 Aug 2026
                  </p>
                </div>
              </Link>
              <Link href="/blog-details" className="card card-hover overflow-hidden">
                <span className="ph ph-f ratio-wide w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                    <path d="M3 12h18M12 8v13"></path>
                    <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                  </svg>
                </span>
                
                <div className="p-4">
                  <span className="badge badge-brand mb-2">Lifestyle</span>
                  <p className="font-display text-[14.5px] font-extrabold leading-snug mb-2 clamp-2">Eid shopping checklist for a family of four</p>
                  
                  <p className="flex items-center gap-2 text-[11.5px] text-ink-400">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                    5 min read · 12 Aug 2026
                  </p>
                </div>
              </Link>
              
            </div>
          </div>
        </section>
        
        <section className="section pt-0">
          <div className="shell">
            <div className="card overflow-hidden grid lg:grid-cols-2">
              
              <div className="p-6 sm:p-9">
                <span className="badge badge-brand mb-3">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
                  </svg>
                  HaatBazar App
                </span>
                
                <h2 className="font-display text-[24px] sm:text-[28px] font-extrabold leading-tight mb-3">
                  Shop &amp; book faster
                  <br />
                  on the mobile app
                </h2>
                
                <p className="text-[13.5px] text-ink-500 mb-5 max-w-[420px]">App-only vouchers, live order tracking, one-tap service booking and instant chat with sellers. Download free on Android and iOS.</p>
                
                <div className="grid sm:grid-cols-2 gap-2.5 mb-5">
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
                    <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                    </svg>
                    App-only flash vouchers
                  </p>
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
                    <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"></path>
                      <path d="M10 19a2 2 0 0 0 4 0"></path>
                    </svg>
                    Live delivery updates
                  </p>
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
                    <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                      <path d="M8 12h8M8 9h5"></path>
                    </svg>
                    Chat with sellers &amp; pros
                  </p>
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-ink-700">
                    <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                      <path d="M16 12h2"></path>
                    </svg>
                    Save cards securely
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  <a href="#" className="btn btn-lg btn-dark">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 5l11 7-11 7z"></path>
                    </svg>
                    Google Play
                  </a>
                  <a href="#" className="btn btn-lg btn-dark">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 5l11 7-11 7z"></path>
                    </svg>
                    App Store
                  </a>
                </div>
                
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <span className="avatar avatar-sm ring-2 ring-white bg-brand-500">A</span>
                    <span className="avatar avatar-sm ring-2 ring-white bg-service-500">B</span>
                    <span className="avatar avatar-sm ring-2 ring-white bg-gold-400">C</span>
                    <span className="avatar avatar-sm ring-2 ring-white bg-ink-700">D</span>
                  </div>
                  
                  <p className="text-[12.5px] text-ink-500">
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
                    
                    <b className="text-ink-900">4.7</b>
                     from 82,000+ app reviews
                  </p>
                </div>
              </div>
              
              <div className="ph ph-c min-h-[280px] relative grid-noise">
                <div className="absolute inset-0 grid place-items-center p-8">
                  <div className="w-[190px] rounded-3xl bg-white shadow-pop p-3 rotate-3">
                    
                    <div className="h-1.5 w-10 bg-ink-100 rounded-full mx-auto mb-2.5"></div>
                    
                    <div className="rounded-xl ph ph-a h-24 mb-2.5"></div>
                    
                    <div className="space-y-1.5">
                      <div className="h-2 rounded-full bg-ink-100" style={{ width: "80%" }}></div>
                      <div className="h-2 rounded-full bg-ink-100" style={{ width: "60%" }}></div>
                      <div className="h-2 rounded-full bg-ink-100" style={{ width: "90%" }}></div>
                      <div className="h-2 rounded-full bg-ink-100" style={{ width: "45%" }}></div>
                    </div>
                    
                    <div className="mt-3 h-8 rounded-lg bg-brand-500 grid place-items-center text-white text-[11px] font-bold">Add to cart</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        <section className="section pt-0">
          <div className="shell">
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-ink-50 text-ink-600 grid place-items-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                  </span>
                  
                  <div>
                    <h2 className="font-display text-[19px] font-extrabold">Recently viewed</h2>
                    <p className="text-[12.5px] text-ink-500">Pick up where you left off</p>
                  </div>
                </div>
                
                <button className="text-[12.5px] font-bold text-ink-500 hover:text-brand-600" type="button">Clear history</button>
              </div>
              
              <div className="hscroll">
                <div className="w-[170px]">
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
                <div className="w-[170px]">
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
                      
                    </div>
                  </article>
                </div>
                <div className="w-[170px]">
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
                      
                    </div>
                  </article>
                </div>
                <div className="w-[170px]">
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
                      
                    </div>
                  </article>
                </div>
                <div className="w-[170px]">
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
                      
                    </div>
                  </article>
                </div>
                <div className="w-[170px]">
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
                      
                    </div>
                  </article>
                </div>
                <div className="w-[170px]">
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
                      
                    </div>
                  </article>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        
        <section className="pb-4">
          <div className="shell card p-5 sm:p-7">
            
            <h2 className="font-display text-[19px] font-extrabold mb-2">HaatBazar — Bangladesh's marketplace for products and local services</h2>
            
            <p className="text-[13.5px] text-ink-500 leading-relaxed mb-5 max-w-[900px]">From smartphones and sarees to electricians, tutors and wedding planners — HaatBazar brings verified sellers and service providers from all 64 districts into one trusted platform. Compare prices, read genuine reviews, book instantly and pay the way you prefer.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div>
                <p className="text-[13px] font-extrabold mb-2.5">Popular product searches</p>
                <ul className="space-y-2 text-[12.5px] text-ink-500">
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Smartphones under 20000</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Air conditioner price in BD</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Jamdani saree online</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Gaming laptop Dhaka</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Baby diaper offer</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Winter jacket for men</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[13px] font-extrabold mb-2.5">Popular service searches</p>
                <ul className="space-y-2 text-[12.5px] text-ink-500">
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Electrician near me</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">AC servicing Dhaka</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Home tutor for HSC</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Bridal makeup artist</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">House shifting service</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Car servicing Tejgaon</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[13px] font-extrabold mb-2.5">Top cities</p>
                <ul className="space-y-2 text-[12.5px] text-ink-500">
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Dhaka</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Chattogram</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Sylhet</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Khulna</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Rajshahi</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Cumilla</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Narayanganj</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Gazipur</Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[13px] font-extrabold mb-2.5">Helpful links</p>
                <ul className="space-y-2 text-[12.5px] text-ink-500">
                  <li>
                    <Link href="/search" className="hover:text-brand-600">How to order</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Return &amp; refund policy</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Delivery charges</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Become a seller</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">List your business</Link>
                  </li>
                  <li>
                    <Link href="/search" className="hover:text-brand-600">Report a problem</Link>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </section>
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
