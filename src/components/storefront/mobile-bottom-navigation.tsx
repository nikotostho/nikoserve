import Link from "next/link";

export default function MobileBottomNavigation() {
  return (
    <nav data-bottom-nav="" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#e7e9ef] grid grid-cols-5 no-print">
      
      <Link href="/" className="py-2.5 grid place-items-center gap-1 text-ink-500">
        <span className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20V9.5l8-6 8 6V20"></path>
            <path d="M9.5 20v-6h5v6"></path>
          </svg>
        </span>
        <span className="text-[10px] font-bold">Home</span>
      </Link>
      <Link href="/categories" className="py-2.5 grid place-items-center gap-1 text-ink-500">
        <span className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
            <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
          </svg>
        </span>
        <span className="text-[10px] font-bold">Categories</span>
      </Link>
      <Link href="/services" className="py-2.5 grid place-items-center gap-1 text-ink-500">
        <span className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
            <path d="M13 6l5 5"></path>
          </svg>
        </span>
        <span className="text-[10px] font-bold">Services</span>
      </Link>
      <Link href="/cart" className="py-2.5 grid place-items-center gap-1 text-ink-500">
        <span className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
            <circle cx="10" cy="20" r="1.4"></circle>
            <circle cx="18" cy="20" r="1.4"></circle>
          </svg>
          <span className="absolute -top-1.5 -right-2 min-w-[15px] h-[15px] px-1 rounded-full bg-brand-500 text-white text-[9px] font-extrabold grid place-items-center">3</span>
        </span>
        <span className="text-[10px] font-bold">Cart</span>
      </Link>
      <Link href="/login?next=%2Fuser%2Fdashboard" className="py-2.5 grid place-items-center gap-1 text-ink-500">
        <span className="relative">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="3.5"></circle>
            <path d="M5 21a7 7 0 0 1 14 0"></path>
          </svg>
        </span>
        <span className="text-[10px] font-bold">Account</span>
      </Link>
    </nav>
  );
}
