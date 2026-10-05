import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <main className="shell py-16 text-center max-w-2xl">
        
        <p className="font-display text-[80px] sm:text-[110px] font-extrabold leading-none text-brand-500 mb-2">404</p>
        
        <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-2">This page has gone shopping</h1>
        
        <p className="text-[14px] text-ink-500 mb-6">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        
        <div className="input-group max-w-md mx-auto mb-5">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-3.5-3.5"></path>
          </svg>
          <input className="input !h-12" placeholder="Search products or services…" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2.5 mb-9">
          <Link href="/" className="btn btn-primary">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 20V9.5l8-6 8 6V20"></path>
              <path d="M9.5 20v-6h5v6"></path>
            </svg>
            Back to home
          </Link>
          
          <Link href="/products" className="btn btn-outline">Browse products</Link>
          <Link href="/services" className="btn btn-outline">Find services</Link>
          <Link href="/contact" className="btn btn-ghost">Contact support</Link>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-3 text-left">
          <Link href="/products" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 7h12l1 14H5z"></path>
                <path d="M9 7a3 3 0 0 1 6 0"></path>
              </svg>
            </span>
            <p className="text-[13.5px] font-extrabold">Popular products</p>
          </Link>
          <Link href="/services" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                <path d="M13 6l5 5"></path>
              </svg>
            </span>
            <p className="text-[13.5px] font-extrabold">Top services</p>
          </Link>
          <Link href="/offers" className="card p-4 card-hover flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                <path d="M12 7v10"></path>
              </svg>
            </span>
            <p className="text-[13.5px] font-extrabold">Today's offers</p>
          </Link>
        </div>
        
      </main>
    </>
  );
}
