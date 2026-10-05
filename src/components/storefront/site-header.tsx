import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[#e7e9ef]" data-sticky-head="">
      <div className="shell">
        
        <div className="flex items-center gap-3 lg:gap-4 py-3">
          
          <button className="lg:hidden icon-btn -ml-2" data-drawer-open="mobileMenu" aria-label="Menu" type="button">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 6h18M3 12h18M3 18h18"></path>
            </svg>
          </button>
          
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-10 h-10 rounded-xl bg-brand-500 grid place-items-center shadow-brand">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V9.5l8-6 8 6V20"></path>
                <path d="M9.5 20v-6h5v6"></path>
              </svg>
            </span>
            
            <span className="leading-none">
              <span className="block font-display text-[21px] font-extrabold tracking-tight text-ink-950">
                Haat
                <span className="text-brand-500">Bazar</span>
              </span>
              <span className="hidden sm:block text-[9.5px] font-semibold tracking-[.14em] text-ink-400 uppercase mt-1">Shop &amp; Services</span>
            </span>
          </Link>
          
          <button className="hidden xl:flex items-center gap-2 h-11 px-3 rounded-xl border border-[#e7e9ef] hover:border-brand-200 transition shrink-0" data-modal-open="locationModal" type="button">
            <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
              <circle cx="12" cy="10" r="2.5"></circle>
            </svg>
            
            <span className="text-left leading-tight">
              <span className="block text-[9.5px] font-bold text-ink-400 uppercase tracking-wider">Deliver / service in</span>
              <span className="block text-[13px] font-bold text-ink-900">Dhanmondi, Dhaka</span>
            </span>
            <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          
          <div className="flex-1 min-w-0 relative" data-search-box="">
            
            <form className="flex items-stretch h-11 rounded-xl border-2 border-brand-500 overflow-hidden bg-white" data-prevent-submit data-search-form>
              
              <div data-dropdown="" className="hidden sm:block">
                <button type="button" data-dropdown-toggle="" className="h-full px-3 flex items-center gap-1.5 bg-brand-50 text-brand-700 text-[13px] font-bold border-r border-brand-100">
                  All 
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                
                <div data-dropdown-menu="" className="left-0 !min-w-[190px]">
                  <a className="dd-item !text-brand-600 !bg-brand-50">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    Everything
                  </a>
                  <a className="dd-item">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2h12l1 5H5z"></path>
                      <path d="M5 7v15h14V7"></path>
                      <path d="M9 12h6"></path>
                    </svg>
                    Products only
                  </a>
                  <a className="dd-item">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                      <path d="M13 6l5 5"></path>
                    </svg>
                    Services only
                  </a>
                  <a className="dd-item">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 8h16v12H4z"></path>
                      <path d="M9 8V4h6v4"></path>
                    </svg>
                    Shops &amp; Businesses
                  </a>
                </div>
              </div>
              
              <input type="search" className="flex-1 min-w-0 px-3.5 text-sm outline-none" placeholder="Search products, services, shops or businesses…" />
              
              <button className="px-4 sm:px-6 bg-brand-500 hover:bg-brand-600 text-white text-sm font-bold flex items-center gap-2 transition" type="submit">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m20 20-3.5-3.5"></path>
                </svg>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
            
            <div data-search-panel="" className="mega absolute left-0 right-0 top-[calc(100%+8px)] bg-white rounded-2xl border border-[#e7e9ef] shadow-pop p-4 grid sm:grid-cols-2 gap-5 z-50">
              
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[.09em] text-ink-400 mb-2">Trending searches</p>
                <div className="space-y-1">
                  
                  <Link href="/search" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px] font-medium">
                    <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    Smartphones under ৳20,000
                  </Link>
                  <Link href="/search" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px] font-medium">
                    <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    AC servicing in Dhaka
                  </Link>
                  <Link href="/search" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px] font-medium">
                    <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    Jamdani saree original
                  </Link>
                  <Link href="/search" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px] font-medium">
                    <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    Best biryani near me
                  </Link>
                  <Link href="/search" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px] font-medium">
                    <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7"></circle>
                      <path d="m20 20-3.5-3.5"></path>
                    </svg>
                    Home tutor for class 9
                  </Link>
                </div>
              </div>
              
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[.09em] text-ink-400 mb-2">Recently viewed</p>
                <div className="space-y-1">
                  
                  <Link href="/product-details" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px]">
                    <span className="ph ph-b w-9 h-9 rounded-lg">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                        <path d="M11 19h2"></path>
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold clamp-1">Realme C100x 6/128GB</span>
                      <span className="block text-2xs text-ink-400">Mobile &amp; Gadgets · ৳11,499</span>
                    </span>
                  </Link>
                  
                  <Link href="/service-details" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-ink-50 text-[13.5px]">
                    <span className="ph ph-a w-9 h-9 rounded-lg">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                        <path d="M13 6l5 5"></path>
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold clamp-1">Rahim Electric Service</span>
                      <span className="block text-2xs text-ink-400">Electrician · Mirpur · 4.7★</span>
                    </span>
                  </Link>
                  
                  <button className="text-xs font-bold text-brand-600 hover:underline px-2 pt-1" type="button">Clear recent searches</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-0.5 shrink-0">
            
            <Link href="/services" className="hidden lg:grid place-items-center w-16 h-12 rounded-xl hover:bg-ink-50 text-ink-600 hover:text-brand-600 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              <span className="text-[10.5px] font-bold mt-1">Nearby</span>
            </Link>
            
            <Link href="/compare" className="hidden lg:grid place-items-center w-16 h-12 rounded-xl hover:bg-ink-50 text-ink-600 hover:text-brand-600 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 9 5-9 5-9-5z"></path>
                <path d="m3 13 9 5 9-5"></path>
              </svg>
              <span className="text-[10.5px] font-bold mt-1">Compare</span>
            </Link>
            
            <Link href="/login?next=%2Fuser%2Fwishlist" className="relative grid place-items-center w-12 lg:w-16 h-12 rounded-xl hover:bg-ink-50 text-ink-600 hover:text-brand-600 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
              </svg>
              <span className="hidden lg:block text-[10.5px] font-bold mt-1">Wishlist</span>
              <span className="absolute top-1 right-1 lg:right-3 min-w-[17px] h-[17px] px-1 rounded-full bg-ink-900 text-white text-[10px] font-extrabold grid place-items-center">5</span>
            </Link>
            
            <Link href="/cart" className="relative grid place-items-center w-12 lg:w-16 h-12 rounded-xl hover:bg-ink-50 text-ink-600 hover:text-brand-600 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                <circle cx="10" cy="20" r="1.4"></circle>
                <circle cx="18" cy="20" r="1.4"></circle>
              </svg>
              <span className="hidden lg:block text-[10.5px] font-bold mt-1">Cart</span>
              <span className="absolute top-1 right-1 lg:right-3 min-w-[17px] h-[17px] px-1 rounded-full bg-brand-500 text-white text-[10px] font-extrabold grid place-items-center" data-cart-count="">3</span>
            </Link>
            
            <div data-dropdown="" className="hidden sm:block">
              <button data-dropdown-toggle="" className="flex items-center gap-2 h-12 pl-1.5 pr-2.5 rounded-xl hover:bg-ink-50 transition" type="button">
                <span className="avatar avatar-md bg-gradient-to-br from-ink-700 to-ink-950">NA</span>
                
                <span className="hidden xl:block text-left leading-tight">
                  <span className="block text-[10px] text-ink-400 font-bold">Hello,</span>
                  <span className="block text-[13px] font-bold text-ink-900">Nusrat A.</span>
                </span>
                <svg className="hidden xl:block w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              
              <div data-dropdown-menu="" className="right-0 !min-w-[250px]">
                
                <div className="flex items-center gap-3 p-2.5 mb-1 rounded-xl bg-ink-50">
                  <span className="avatar avatar-md bg-brand-500">NA</span>
                  <span className="min-w-0">
                    <span className="block text-[13.5px] font-bold clamp-1">Nusrat Ahmed</span>
                    <span className="block text-[11.5px] text-ink-500">+880 1712-345678</span>
                  </span>
                </div>
                
                <Link href="/login?next=%2Fuser%2Fdashboard" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
                  </svg>
                  My Dashboard
                </Link>
                
                <Link href="/login?next=%2Fuser%2Forders" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h12l1 5H5z"></path>
                    <path d="M5 7v15h14V7"></path>
                    <path d="M9 12h6"></path>
                  </svg>
                  My Orders
                  <span className="ml-auto badge badge-brand">2</span>
                </Link>
                
                <Link href="/login?next=%2Fuser%2Fbookings" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                    <path d="M8 3v4M16 3v4M3 10h18"></path>
                  </svg>
                  Service Bookings
                </Link>
                
                <Link href="/login?next=%2Fuser%2Fmessages" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                  My Inquiries
                </Link>
                
                <Link href="/login?next=%2Fuser%2Freviews" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                  </svg>
                  My Reviews
                </Link>
                
                <Link href="/login?next=%2Fuser%2Fwishlist" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                  Wishlist &amp; Saved
                </Link>
                
                <Link href="/login?next=%2Fuser%2Fwallet" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <path d="M16 12h2"></path>
                  </svg>
                  Wallet &amp; Vouchers
                </Link>
                
                <Link href="/login?next=%2Fuser%2Fprofile" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3.2"></circle>
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"></path>
                  </svg>
                  Account Settings
                </Link>
                
                <div className="dd-sep"></div>
                <Link href="/login?next=%2Fvendor%2Fdashboard" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                  Seller / Provider Center
                </Link>
                
                <Link href="/login?next=%2Fadmin%2Fdashboard" className="dd-item">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  Admin Panel
                </Link>
                
                <Link href="/login" className="dd-item is-danger">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                  Sign out
                </Link>
              </div>
            </div>
            
            <Link href="/login" className="sm:hidden icon-btn">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3.5"></circle>
                <path d="M5 21a7 7 0 0 1 14 0"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block border-t border-[#eef0f4]">
        <div className="shell flex items-center gap-5">
          
          <div className="has-mega relative">
            <button className="nav-link !text-white bg-ink-950 hover:!text-white px-4 rounded-t-lg" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18M3 12h18M3 18h18"></path>
              </svg>
              All Categories 
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            
            <div className="mega absolute left-0 top-full w-[900px] bg-white rounded-b-2xl rounded-tr-2xl border border-[#e7e9ef] shadow-pop grid grid-cols-[236px_1fr] overflow-hidden z-50">
              
              <div className="bg-ink-50/70 border-r border-[#e7e9ef] py-2 max-h-[430px] overflow-y-auto thin-scroll">
                
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-brand-600 bg-white shadow-[inset_3px_0_0_#ff2525]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <path d="M9 20h6M12 16v4"></path>
                  </svg>
                  <span className="flex-1">Electronics &amp; Gadgets</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                  <span className="flex-1">Mobile &amp; Tablets</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                  </svg>
                  <span className="flex-1">Fashion &amp; Lifestyle</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                  </svg>
                  <span className="flex-1">Health &amp; Beauty</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 20V9.5l8-6 8 6V20"></path>
                    <path d="M9.5 20v-6h5v6"></path>
                  </svg>
                  <span className="flex-1">Home &amp; Living</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 7h12l1 14H5z"></path>
                    <path d="M9 7a3 3 0 0 1 6 0"></path>
                  </svg>
                  <span className="flex-1">Groceries &amp; Food</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                    <path d="M3 12h18M12 8v13"></path>
                    <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                  </svg>
                  <span className="flex-1">Baby, Kids &amp; Toys</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"></path>
                  </svg>
                  <span className="flex-1">Sports &amp; Outdoor</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 16v-4l2-5h10l2 5v4"></path>
                    <path d="M3 16h18v3h-2l-1-2H6l-1 2H3z"></path>
                  </svg>
                  <span className="flex-1">Automobile Parts</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/products" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-brand-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"></path>
                    <path d="M8 7h7"></path>
                  </svg>
                  <span className="flex-1">Books &amp; Stationery</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                
                <div className="my-2 mx-4 h-px bg-[#e2e5eb]"></div>
                <p className="px-4 pb-1.5 text-[10px] font-extrabold tracking-[.11em] uppercase text-service-600">Local Services</p>
                
                <Link href="/services" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-service-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                    <path d="M13 6l5 5"></path>
                  </svg>
                  <span className="flex-1">Home Services</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/services" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-service-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                  </svg>
                  <span className="flex-1">AC &amp; Appliance Repair</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/services" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-service-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="6" r="2.5"></circle>
                    <circle cx="6" cy="18" r="2.5"></circle>
                    <path d="M8 8l12 10M8 16 20 6"></path>
                  </svg>
                  <span className="flex-1">Beauty &amp; Salon</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/services" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-service-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                    <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                    <circle cx="18" cy="10" r="2"></circle>
                  </svg>
                  <span className="flex-1">Doctors &amp; Clinics</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/services" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-service-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-4 9 4-9 4z"></path>
                    <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
                  </svg>
                  <span className="flex-1">Tutors &amp; Coaching</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                <Link href="/services" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] font-semibold text-ink-700 hover:text-service-600 hover:bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 21h10l1-8H6z"></path>
                    <path d="M6 13a4 4 0 0 1 2-7 4 4 0 0 1 8 0 4 4 0 0 1 2 7"></path>
                  </svg>
                  <span className="flex-1">Restaurants &amp; Catering</span>
                  <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
                
                <Link href="/categories" className="flex items-center gap-2 px-4 py-3 text-[13px] font-extrabold text-brand-600">
                  All 240+ categories 
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="p-5 grid grid-cols-3 gap-5 max-h-[430px] overflow-y-auto thin-scroll">
                
                <div>
                  <p className="text-[12.5px] font-extrabold text-ink-900 mb-2">Mobile &amp; Accessories</p>
                  <ul className="space-y-1.5 text-[12.5px] text-ink-600">
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Smartphones</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Feature Phones</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Power Banks</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Chargers &amp; Cables</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Cases &amp; Covers</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Screen Protectors</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-[12.5px] font-extrabold text-ink-900 mb-2">Computers</p>
                  <ul className="space-y-1.5 text-[12.5px] text-ink-600">
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Laptops</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Desktops</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Monitors</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Printers</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Keyboards &amp; Mice</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-[12.5px] font-extrabold text-ink-900 mb-2">Audio &amp; Wearables</p>
                  <ul className="space-y-1.5 text-[12.5px] text-ink-600">
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Bluetooth Speakers</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Earbuds</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Headphones</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Smart Watches</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Fitness Bands</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-[12.5px] font-extrabold text-ink-900 mb-2">Home Appliances</p>
                  <ul className="space-y-1.5 text-[12.5px] text-ink-600">
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Air Conditioners</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Refrigerators</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Rechargeable Fans</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Rice Cookers</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Blenders</Link>
                    </li>
                    <li>
                      <Link href="/products" className="hover:text-brand-600">Water Filters</Link>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Link href="/offers" className="block rounded-xl overflow-hidden ph ph-a h-[128px] p-4 text-white">
                    <span className="relative z-10 block">
                      <span className="badge !bg-white/20 !text-white mb-1.5">Campaign</span>
                      <span className="block font-display text-[15px] font-extrabold leading-tight">
                        Eid Mega Sale
                        <br />
                        up to 60% off
                      </span>
                    </span>
                  </Link>
                  
                  <Link href="/services" className="block rounded-xl overflow-hidden ph ph-b h-[128px] p-4 text-white">
                    <span className="relative z-10 block">
                      <span className="badge !bg-white/20 !text-white mb-1.5">Services</span>
                      <span className="block font-display text-[15px] font-extrabold leading-tight">
                        8,500+ verified
                        <br />
                        providers near you
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/offers" className="nav-link !text-brand-600 ">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
            </svg>
            Flash Deals
          </Link>
          <Link href="/services" className="nav-link  ">Home Services</Link>
          <Link href="/products" className="nav-link  ">Electronics</Link>
          <Link href="/services" className="nav-link  ">Doctors</Link>
          <Link href="/products" className="nav-link  ">Fashion</Link>
          <Link href="/services" className="nav-link  ">Restaurants</Link>
          <Link href="/brands" className="nav-link  ">Brand Mall</Link>
          <Link href="/shops" className="nav-link  ">Shops</Link>
          
          <div className="ml-auto flex items-center gap-2 py-1.5">
            <Link href="/become-seller" className="btn btn-sm btn-soft">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
              Become a Seller
            </Link>
            <Link href="/help-center" className="btn btn-sm btn-outline">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"></path>
              </svg>
              Help
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}
