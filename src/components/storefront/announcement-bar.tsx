import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="hidden md:block bg-ink-950 text-white/70 text-xs">
      <div className="shell flex items-center justify-between h-9">
        
        <p className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
          </svg>
          Welcome to HaatBazar — Bangladesh's marketplace for products &amp; verified local services
        </p>
        
        <div className="flex items-center gap-5">
          
          <Link href="/track-order" className="hover:text-white flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
              <circle cx="6.5" cy="17.5" r="1.5"></circle>
              <circle cx="17.5" cy="17.5" r="1.5"></circle>
            </svg>
            Track Order
          </Link>
          
          <Link href="/become-seller" className="hover:text-white">Sell on HaatBazar</Link>
          
          <Link href="/become-provider" className="hover:text-white">List Your Business</Link>
          
          <Link href="/help-center" className="hover:text-white">Help Center</Link>
          
          <span className="w-px h-3.5 bg-white/15"></span>
          
          <div data-dropdown="">
            <button data-dropdown-toggle="" className="hover:text-white flex items-center gap-1.5" type="button">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"></path>
              </svg>
              English 
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            
            <div data-dropdown-menu="" className="right-0 !min-w-[170px]">
              <a className="dd-item !text-brand-600 !bg-brand-50">English</a>
              <a className="dd-item">বাংলা</a>
              <div className="dd-sep"></div>
              <div className="dd-label">Currency</div>
              <a className="dd-item">৳ BDT — Taka</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
