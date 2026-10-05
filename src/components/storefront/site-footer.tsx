import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-white mt-14">
      
      <div className="shell py-12 grid gap-9 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <span className="w-10 h-10 rounded-xl bg-brand-500 grid place-items-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V9.5l8-6 8 6V20"></path>
                <path d="M9.5 20v-6h5v6"></path>
              </svg>
            </span>
            <span className="font-display text-[20px] font-extrabold">
              Haat
              <span className="text-brand-400">Bazar</span>
            </span>
          </Link>
          
          <p className="text-[13px] text-white/60 leading-relaxed mb-5 max-w-[290px]">Bangladesh's dual marketplace — buy authentic products from verified sellers and hire trusted local service providers, all from one account.</p>
          
          <p className="text-[11px] font-extrabold uppercase tracking-[.1em] text-white/40 mb-2.5">Get the app</p>
          
          <div className="flex gap-2.5 mb-5">
            <a href="#" className="flex items-center gap-2 h-11 px-3.5 rounded-xl border border-white/12 hover:border-white/30 hover:bg-white/5 transition">
              <svg className="w-4 h-4 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 5l11 7-11 7z"></path>
              </svg>
              <span className="leading-tight">
                <span className="block text-[9px] text-white/50 uppercase tracking-wide">Get it on</span>
                <span className="block text-[12.5px] font-bold">Google Play</span>
              </span>
            </a>
            <a href="#" className="flex items-center gap-2 h-11 px-3.5 rounded-xl border border-white/12 hover:border-white/30 hover:bg-white/5 transition">
              <svg className="w-4 h-4 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 5l11 7-11 7z"></path>
              </svg>
              <span className="leading-tight">
                <span className="block text-[9px] text-white/50 uppercase tracking-wide">Get it on</span>
                <span className="block text-[12.5px] font-bold">App Store</span>
              </span>
            </a>
          </div>
          
          <p className="text-[11px] font-extrabold uppercase tracking-[.1em] text-white/40 mb-2.5">Follow us</p>
          
          <div className="flex gap-2">
            <a href="#" className="w-9 h-9 rounded-lg border border-white/12 grid place-items-center text-[12px] font-bold text-white/60 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition">f</a>
            <a href="#" className="w-9 h-9 rounded-lg border border-white/12 grid place-items-center text-[12px] font-bold text-white/60 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition">in</a>
            <a href="#" className="w-9 h-9 rounded-lg border border-white/12 grid place-items-center text-[12px] font-bold text-white/60 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition">X</a>
            <a href="#" className="w-9 h-9 rounded-lg border border-white/12 grid place-items-center text-[12px] font-bold text-white/60 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition">ig</a>
            <a href="#" className="w-9 h-9 rounded-lg border border-white/12 grid place-items-center text-[12px] font-bold text-white/60 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition">yt</a>
          </div>
        </div>
        
        <div>
          <p className="text-[13px] font-extrabold mb-3.5">Shop Products</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/categories" className="f-link">All Categories</Link>
            </li>
            <li>
              <Link href="/offers" className="f-link">Flash Deals</Link>
            </li>
            <li>
              <Link href="/brands" className="f-link">Brand Mall</Link>
            </li>
            <li>
              <Link href="/shops" className="f-link">All Shops</Link>
            </li>
            <li>
              <Link href="/products" className="f-link">New Arrivals</Link>
            </li>
            <li>
              <Link href="/products" className="f-link">Best Sellers</Link>
            </li>
            <li>
              <Link href="/offers" className="f-link">Gift Cards</Link>
            </li>
            <li>
              <Link href="/products" className="f-link">Bulk / Wholesale</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-extrabold mb-3.5">Local Services</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/services" className="f-link">Browse Services</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Home Services</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Doctors &amp; Clinics</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Tutors &amp; Coaching</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Restaurants</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Event Planners</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Get Free Quotes</Link>
            </li>
            <li>
              <Link href="/services" className="f-link">Emergency Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-extrabold mb-3.5">Sell &amp; Grow</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/become-seller" className="f-link">Sell on HaatBazar</Link>
            </li>
            <li>
              <Link href="/become-provider" className="f-link">List Your Business</Link>
            </li>
            <li>
              <Link href="/login?next=%2Fvendor%2Fdashboard" className="f-link">Seller Center</Link>
            </li>
            <li>
              <Link href="/login?next=%2Fvendor%2Fleads" className="f-link">Provider Center</Link>
            </li>
            <li>
              <Link href="/terms" className="f-link">Seller Policies</Link>
            </li>
            <li>
              <Link href="/terms" className="f-link">Commission &amp; Fees</Link>
            </li>
            <li>
              <Link href="/become-seller" className="f-link">Advertising Solutions</Link>
            </li>
            <li>
              <Link href="/become-seller" className="f-link">Affiliate Program</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-extrabold mb-3.5">Help &amp; Company</p>
          <ul className="space-y-2.5">
            <li>
              <Link href="/help-center" className="f-link">Help Center</Link>
            </li>
            <li>
              <Link href="/track-order" className="f-link">Track My Order</Link>
            </li>
            <li>
              <Link href="/return-policy" className="f-link">Returns &amp; Refunds</Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="f-link">Shipping &amp; Delivery</Link>
            </li>
            <li>
              <Link href="/about" className="f-link">About HaatBazar</Link>
            </li>
            <li>
              <Link href="/careers" className="f-link">Careers</Link>
            </li>
            <li>
              <Link href="/contact" className="f-link">Contact Us</Link>
            </li>
            <li>
              <Link href="/blog" className="f-link">Blog &amp; Guides</Link>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="shell pb-8">
        <div className="rounded-2xl border border-white/10 bg-white/[.03] p-5 grid md:grid-cols-2 gap-5 items-center">
          
          <div>
            <p className="font-display text-[15px] font-extrabold mb-1">Weekly deals &amp; service offers in your inbox</p>
            <p className="text-[12.5px] text-white/55">Join 240,000+ subscribers. Unsubscribe anytime.</p>
          </div>
          
          <form className="flex gap-2" data-prevent-submit>
            <input type="email" className="input !bg-white/5 !border-white/15 !text-white placeholder:!text-white/40" placeholder="you@example.com" />
            <button className="btn btn-primary shrink-0" type="button">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-white/8">
        <div className="shell py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-[12px] text-white/45">© 2026 HaatBazar Ltd. All rights reserved. Trade licence: TRAD/DNCC/043921/2024 · e-TIN: 431-902-773</p>
          
          <div className="flex flex-wrap items-center gap-4 text-[12px] text-white/45">
            
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
            <Link href="/return-policy" className="hover:text-white">Refund Policy</Link>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
          
          <div className="flex items-center gap-1.5">
            <span className="px-2 py-1 rounded-md bg-white/8 text-[10px] font-bold text-white/70">bKash</span>
            <span className="px-2 py-1 rounded-md bg-white/8 text-[10px] font-bold text-white/70">Nagad</span>
            <span className="px-2 py-1 rounded-md bg-white/8 text-[10px] font-bold text-white/70">Rocket</span>
            <span className="px-2 py-1 rounded-md bg-white/8 text-[10px] font-bold text-white/70">Visa</span>
            <span className="px-2 py-1 rounded-md bg-white/8 text-[10px] font-bold text-white/70">Mastercard</span>
            <span className="px-2 py-1 rounded-md bg-white/8 text-[10px] font-bold text-white/70">COD</span>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
