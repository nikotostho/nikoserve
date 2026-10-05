import Link from "next/link";

export default function SitemapPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Sitemap</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        
        <div className="max-w-2xl mb-7">
          <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">Sitemap</h1>
          
          <p className="text-[14px] text-ink-500">
            Every page on HaatBazar in one place — 
            <b>137 pages</b>
             across the marketplace, customer dashboard, seller centre and admin panel.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          <div className="card p-5">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"></path>
              </svg>
            </span>
            <p className="font-display text-[26px] font-extrabold">38</p>
            <p className="text-[12.5px] text-ink-500">Storefront pages</p>
          </div>
          <div className="card p-5">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="3.5"></circle>
                <path d="M5 21a7 7 0 0 1 14 0"></path>
              </svg>
            </span>
            <p className="font-display text-[26px] font-extrabold">15</p>
            <p className="text-[12.5px] text-ink-500">Customer dashboard</p>
          </div>
          <div className="card p-5">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16v12H4z"></path>
                <path d="M9 8V4h6v4"></path>
              </svg>
            </span>
            <p className="font-display text-[26px] font-extrabold">31</p>
            <p className="text-[12.5px] text-ink-500">Seller centre</p>
          </div>
          <div className="card p-5">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-2.5">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <p className="font-display text-[26px] font-extrabold">53</p>
            <p className="text-[12.5px] text-ink-500">Admin panel</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">1</span>
              Marketplace &amp; discovery
              <span className="badge badge-gray ml-auto">12</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Home
              </Link>
              <Link href="/categories" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Categories
              </Link>
              <Link href="/products" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Products
              </Link>
              <Link href="/product-details" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Product Details
              </Link>
              <Link href="/services" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Services
              </Link>
              <Link href="/service-details" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Service Details
              </Link>
              <Link href="/shops" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Shops
              </Link>
              <Link href="/shop-profile" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Shop Profile
              </Link>
              <Link href="/brands" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Brands
              </Link>
              <Link href="/offers" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Offers
              </Link>
              <Link href="/search" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Search
              </Link>
              <Link href="/compare" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Compare
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">2</span>
              Shopping &amp; checkout
              <span className="badge badge-gray ml-auto">4</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/cart" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Cart
              </Link>
              <Link href="/checkout" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Checkout
              </Link>
              <Link href="/order-success" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Order Confirmed
              </Link>
              <Link href="/track-order" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Track Order
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">3</span>
              Account &amp; onboarding
              <span className="badge badge-gray ml-auto">9</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Login
              </Link>
              <Link href="/register" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Register
              </Link>
              <Link href="/otp-verify" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Verify OTP
              </Link>
              <Link href="/forgot-password" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Forgot Password
              </Link>
              <Link href="/reset-password" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reset Password
              </Link>
              <Link href="/become-seller" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Become Seller
              </Link>
              <Link href="/seller-register" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Seller Register
              </Link>
              <Link href="/become-provider" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Become Provider
              </Link>
              <Link href="/provider-register" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Provider Register
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">4</span>
              Company, help &amp; policies
              <span className="badge badge-gray ml-auto">13</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/about" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                About
              </Link>
              <Link href="/contact" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Contact
              </Link>
              <Link href="/careers" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Careers
              </Link>
              <Link href="/blog" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Blog
              </Link>
              <Link href="/blog-details" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Blog Details
              </Link>
              <Link href="/help-center" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Help Center
              </Link>
              <Link href="/faq" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                FAQ
              </Link>
              <Link href="/terms" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Privacy Policy
              </Link>
              <Link href="/return-policy" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Return Policy
              </Link>
              <Link href="/shipping-policy" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Shipping Policy
              </Link>
              <Link href="/sitemap" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Sitemap
              </Link>
              <Link href="/404" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                404 Page
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">5</span>
              Customer dashboard
              <span className="badge badge-gray ml-auto">15</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fuser%2Faddresses" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Addresses
              </Link>
              <Link href="/login?next=%2Fuser%2Fbookings" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Bookings
              </Link>
              <Link href="/login?next=%2Fuser%2Fdashboard" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Dashboard
              </Link>
              <Link href="/login?next=%2Fuser%2Fmessages" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Messages
              </Link>
              <Link href="/login?next=%2Fuser%2Fnotifications" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Notifications
              </Link>
              <Link href="/login?next=%2Fuser%2Forder-details" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Order Details
              </Link>
              <Link href="/login?next=%2Fuser%2Forders" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Orders
              </Link>
              <Link href="/login?next=%2Fuser%2Fprofile" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Profile
              </Link>
              <Link href="/login?next=%2Fuser%2Freturns" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Returns
              </Link>
              <Link href="/login?next=%2Fuser%2Freviews" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reviews
              </Link>
              <Link href="/login?next=%2Fuser%2Fsettings" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Settings
              </Link>
              <Link href="/login?next=%2Fuser%2Fsupport" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Support
              </Link>
              <Link href="/login?next=%2Fuser%2Fvouchers" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Vouchers
              </Link>
              <Link href="/login?next=%2Fuser%2Fwallet" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Wallet
              </Link>
              <Link href="/login?next=%2Fuser%2Fwishlist" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Wishlist
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">6</span>
              Seller centre — products
              <span className="badge badge-gray ml-auto">11</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fvendor%2Fdashboard" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Dashboard
              </Link>
              <Link href="/login?next=%2Fvendor%2Fproducts" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Products
              </Link>
              <Link href="/login?next=%2Fvendor%2Fadd-product" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Add Product
              </Link>
              <Link href="/login?next=%2Fvendor%2Finventory" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Inventory
              </Link>
              <Link href="/login?next=%2Fvendor%2Forders" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Orders
              </Link>
              <Link href="/login?next=%2Fvendor%2Forder-details" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Order Details
              </Link>
              <Link href="/login?next=%2Fvendor%2Freturns" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Returns
              </Link>
              <Link href="/login?next=%2Fvendor%2Fshipping" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Shipping
              </Link>
              <Link href="/login?next=%2Fvendor%2Fquestions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Questions
              </Link>
              <Link href="/login?next=%2Fvendor%2Freviews" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reviews
              </Link>
              <Link href="/login?next=%2Fvendor%2Fshop-profile" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Shop Profile
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">7</span>
              Seller centre — services &amp; growth
              <span className="badge badge-gray ml-auto">11</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fvendor%2Fservices" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Services
              </Link>
              <Link href="/login?next=%2Fvendor%2Fadd-service" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Add Service
              </Link>
              <Link href="/login?next=%2Fvendor%2Fleads" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Leads
              </Link>
              <Link href="/login?next=%2Fvendor%2Fbookings" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Bookings
              </Link>
              <Link href="/login?next=%2Fvendor%2Fbusiness-profile" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Business Profile
              </Link>
              <Link href="/login?next=%2Fvendor%2Fpromotions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Promotions
              </Link>
              <Link href="/login?next=%2Fvendor%2Fads" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Ads &amp; Sponsored
              </Link>
              <Link href="/login?next=%2Fvendor%2Fanalytics" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Analytics
              </Link>
              <Link href="/login?next=%2Fvendor%2Freports" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reports
              </Link>
              <Link href="/login?next=%2Fvendor%2Facademy" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Seller Academy
              </Link>
              <Link href="/login?next=%2Fvendor%2Fsubscription" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Subscription &amp; Plan
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">8</span>
              Seller centre — finance &amp; account
              <span className="badge badge-gray ml-auto">9</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fvendor%2Fpayouts" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Payouts
              </Link>
              <Link href="/login?next=%2Fvendor%2Ftransactions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Transactions
              </Link>
              <Link href="/login?next=%2Fvendor%2Finvoices" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Invoices
              </Link>
              <Link href="/login?next=%2Fvendor%2Fcustomers" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Customers
              </Link>
              <Link href="/login?next=%2Fvendor%2Fmessages" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Messages
              </Link>
              <Link href="/login?next=%2Fvendor%2Fnotifications" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Notifications
              </Link>
              <Link href="/login?next=%2Fvendor%2Fstaff" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Staff &amp; Admins
              </Link>
              <Link href="/login?next=%2Fvendor%2Fdocuments" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Documents &amp; KYC
              </Link>
              <Link href="/login?next=%2Fvendor%2Fsettings" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Settings
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">9</span>
              Admin — overview &amp; catalog
              <span className="badge badge-gray ml-auto">13</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fadmin%2Fdashboard" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Dashboard
              </Link>
              <Link href="/login?next=%2Fadmin%2Fanalytics" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Analytics
              </Link>
              <Link href="/login?next=%2Fadmin%2Freports" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reports
              </Link>
              <Link href="/login?next=%2Fadmin%2Fproducts" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Products
              </Link>
              <Link href="/login?next=%2Fadmin%2Fproduct-approvals" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Product Approvals
              </Link>
              <Link href="/login?next=%2Fadmin%2Fcategories" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Categories
              </Link>
              <Link href="/login?next=%2Fadmin%2Fbrands" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Brands
              </Link>
              <Link href="/login?next=%2Fadmin%2Fattributes" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Attributes &amp; Specs
              </Link>
              <Link href="/login?next=%2Fadmin%2Finventory" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Inventory
              </Link>
              <Link href="/login?next=%2Fadmin%2Fservices" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Services
              </Link>
              <Link href="/login?next=%2Fadmin%2Fservice-approvals" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Service Approvals
              </Link>
              <Link href="/login?next=%2Fadmin%2Fservice-categories" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Service Categories
              </Link>
              <Link href="/login?next=%2Fadmin%2Fleads" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Leads
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">10</span>
              Admin — sales &amp; finance
              <span className="badge badge-gray ml-auto">11</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fadmin%2Forders" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Orders
              </Link>
              <Link href="/login?next=%2Fadmin%2Fbookings" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Bookings
              </Link>
              <Link href="/login?next=%2Fadmin%2Fshipping" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Shipping
              </Link>
              <Link href="/login?next=%2Fadmin%2Fdisputes" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Disputes
              </Link>
              <Link href="/login?next=%2Fadmin%2Fabandoned-carts" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Abandoned Carts
              </Link>
              <Link href="/login?next=%2Fadmin%2Finvoices" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Invoices
              </Link>
              <Link href="/login?next=%2Fadmin%2Ftransactions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Transactions
              </Link>
              <Link href="/login?next=%2Fadmin%2Fpayouts" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Payouts
              </Link>
              <Link href="/login?next=%2Fadmin%2Fcommissions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Commission Plans
              </Link>
              <Link href="/login?next=%2Fadmin%2Fgift-cards" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Gift Cards &amp; Wallets
              </Link>
              <Link href="/login?next=%2Fadmin%2Ftaxes" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Tax &amp; VAT
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">11</span>
              Admin — people &amp; moderation
              <span className="badge badge-gray ml-auto">11</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fadmin%2Fcustomers" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Customers
              </Link>
              <Link href="/login?next=%2Fadmin%2Fvendors" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Vendors
              </Link>
              <Link href="/login?next=%2Fadmin%2Fvendor-approvals" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Vendor Approvals
              </Link>
              <Link href="/login?next=%2Fadmin%2Fkyc" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                KYC Verification
              </Link>
              <Link href="/login?next=%2Fadmin%2Fstaff" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Staff &amp; Admins
              </Link>
              <Link href="/login?next=%2Fadmin%2Froles" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Roles &amp; Permissions
              </Link>
              <Link href="/login?next=%2Fadmin%2Freviews" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reviews
              </Link>
              <Link href="/login?next=%2Fadmin%2Fquestions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Questions
              </Link>
              <Link href="/login?next=%2Fadmin%2Fmoderation" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Reports &amp; Abuse
              </Link>
              <Link href="/login?next=%2Fadmin%2Ftickets" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Tickets
              </Link>
              <Link href="/login?next=%2Fadmin%2Fchats" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Live Chat
              </Link>
            </div>
          </div>
          <div className="card p-5">
            
            <h2 className="text-[15px] font-extrabold mb-3 pb-3 border-b border-[#f0f1f5] flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 grid place-items-center text-[12px] font-extrabold">12</span>
              Admin — marketing, content &amp; system
              <span className="badge badge-gray ml-auto">18</span>
            </h2>
            
            <div className="space-y-1">
              <Link href="/login?next=%2Fadmin%2Fcampaigns" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Campaigns
              </Link>
              <Link href="/login?next=%2Fadmin%2Fpromotions" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Promotions
              </Link>
              <Link href="/login?next=%2Fadmin%2Fads" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Ads &amp; Sponsored
              </Link>
              <Link href="/login?next=%2Fadmin%2Fnotifications" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Notifications
              </Link>
              <Link href="/login?next=%2Fadmin%2Femail-templates" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Email &amp; SMS Templates
              </Link>
              <Link href="/login?next=%2Fadmin%2Fseo" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                SEO &amp; Sitemaps
              </Link>
              <Link href="/login?next=%2Fadmin%2Fcms" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Banners &amp; Home Layout
              </Link>
              <Link href="/login?next=%2Fadmin%2Fpages" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Pages
              </Link>
              <Link href="/login?next=%2Fadmin%2Fblog" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Blog
              </Link>
              <Link href="/login?next=%2Fadmin%2Ffaq" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                FAQ
              </Link>
              <Link href="/login?next=%2Fadmin%2Fmedia" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Media Library
              </Link>
              <Link href="/login?next=%2Fadmin%2Fsettings" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Settings
              </Link>
              <Link href="/login?next=%2Fadmin%2Flocations" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Locations &amp; Zones
              </Link>
              <Link href="/login?next=%2Fadmin%2Fpayment-methods" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Payment Methods
              </Link>
              <Link href="/login?next=%2Fadmin%2Fintegrations" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Integrations &amp; API
              </Link>
              <Link href="/login?next=%2Fadmin%2Factivity" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                Audit Log
              </Link>
              <Link href="/login?next=%2Fadmin%2Flogs" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                System Logs
              </Link>
              <Link href="/login?next=%2Fadmin%2Fsystem-health" className="flex items-center gap-2 py-1.5 text-[13px] text-ink-600 hover:text-brand-600">
                <svg className="w-3.5 h-3.5 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
                System Health
              </Link>
            </div>
          </div>
        </div>
        
        <div className="card p-6 mt-7 text-center">
          <p className="text-[15px] font-extrabold mb-1.5">Looking for something else?</p>
          
          <p className="text-[13px] text-ink-500 mb-4">Search the whole marketplace or ask our support team.</p>
          
          <div className="flex flex-wrap justify-center gap-2.5">
            <Link href="/search" className="btn btn-primary">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-3.5-3.5"></path>
              </svg>
              Search HaatBazar
            </Link>
            <Link href="/help-center" className="btn btn-outline">Help centre</Link>
            <Link href="/contact" className="btn btn-outline">Contact support</Link>
          </div>
        </div>
        
      </main>
    </>
  );
}
