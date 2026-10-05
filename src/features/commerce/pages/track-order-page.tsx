import Link from "next/link";

export default function TrackOrderPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Track Order</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6 max-w-4xl">
        
        <h1 className="font-display text-[24px] font-extrabold tracking-tight mb-1">Track your order</h1>
        
        <p className="text-[13px] text-ink-500 mb-5">Enter your order number and phone to see live status — no login required.</p>
        
        <div className="card p-4 sm:p-5 mb-5">
          <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-3">
            
            <div>
              <label className="label">Order number</label>
              <input className="input" defaultValue="HB-2026-884213" />
            </div>
            
            <div>
              <label className="label">Mobile number</label>
              <div className="input-affix">
                <span className="affix">+880</span>
                <input className="input" defaultValue="1712-345678" />
              </div>
            </div>
            
            <div className="flex items-end">
              <button className="btn btn-primary" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m20 20-3.5-3.5"></path>
                </svg>
                Track
              </button>
            </div>
          </div>
        </div>
        
        <div className="card p-4 sm:p-5 mb-5">
          
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            
            <div>
              <p className="text-[12px] text-ink-500">Order HB-2026-884213 · placed 17 Aug 2026, 8:42 PM</p>
              <p className="font-display text-[18px] font-extrabold">Shipment 1 of 3 — Realme Official Store</p>
            </div>
            
            <span className="badge badge-blue">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                <circle cx="6.5" cy="17.5" r="1.5"></circle>
                <circle cx="17.5" cy="17.5" r="1.5"></circle>
              </svg>
              Out for delivery
            </span>
          </div>
          
          <div className="grid sm:grid-cols-4 gap-2 mb-5">
            <div className="p-3 rounded-xl bg-green-50 text-center">
              <span className="w-8 h-8 rounded-full bg-green-600 text-white grid place-items-center mx-auto mb-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-extrabold">Confirmed</p>
              <p className="text-[11px] text-ink-500">17 Aug</p>
            </div>
            <div className="p-3 rounded-xl bg-green-50 text-center">
              <span className="w-8 h-8 rounded-full bg-green-600 text-white grid place-items-center mx-auto mb-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-extrabold">Packed</p>
              <p className="text-[11px] text-ink-500">17 Aug</p>
            </div>
            <div className="p-3 rounded-xl bg-green-50 text-center">
              <span className="w-8 h-8 rounded-full bg-green-600 text-white grid place-items-center mx-auto mb-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              <p className="text-[12.5px] font-extrabold">Shipped</p>
              <p className="text-[11px] text-ink-500">18 Aug</p>
            </div>
            <div className="p-3 rounded-xl bg-brand-50 text-center">
              <span className="w-8 h-8 rounded-full bg-brand-500 text-white grid place-items-center mx-auto mb-1.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                  <circle cx="6.5" cy="17.5" r="1.5"></circle>
                  <circle cx="17.5" cy="17.5" r="1.5"></circle>
                </svg>
              </span>
              <p className="text-[12.5px] font-extrabold">Delivery</p>
              <p className="text-[11px] text-ink-500">Today</p>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden border border-[#e7e9ef] mb-4">
            <span className="ph ph-a h-[180px] w-full">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="2.5"></circle>
                <circle cx="18" cy="18" r="2.5"></circle>
                <path d="M8.5 6H14a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5"></path>
              </svg>
            </span>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            <div className="p-3 rounded-xl bg-ink-50">
              <p className="text-[11.5px] text-ink-500">Courier</p>
              <p className="text-[13px] font-extrabold">HaatBazar Express</p>
            </div>
            <div className="p-3 rounded-xl bg-ink-50">
              <p className="text-[11.5px] text-ink-500">Tracking ID</p>
              <p className="text-[13px] font-extrabold">HBX-77120934</p>
            </div>
            <div className="p-3 rounded-xl bg-ink-50">
              <p className="text-[11.5px] text-ink-500">Rider</p>
              <p className="text-[13px] font-extrabold">Jamal U. · +880 1799-112233</p>
            </div>
          </div>
          
          <h3 className="text-[14px] font-extrabold mb-3">Tracking history</h3>
          
          <div className="timeline">
            <div className="tl-item is-active">
              <p className="text-[13.5px] font-extrabold">Out for delivery — Dhanmondi hub</p>
              <p className="text-[12px] text-ink-500">Today, 9:15 AM</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[13.5px] font-extrabold">Arrived at Dhanmondi hub</p>
              <p className="text-[12px] text-ink-500">Today, 6:40 AM</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[13.5px] font-extrabold">Departed from Tejgaon sorting centre</p>
              <p className="text-[12px] text-ink-500">Yesterday, 11:20 PM</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[13.5px] font-extrabold">Parcel received by courier</p>
              <p className="text-[12px] text-ink-500">Yesterday, 6:05 PM</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[13.5px] font-extrabold">Seller packed the item</p>
              <p className="text-[12px] text-ink-500">17 Aug, 10:30 PM</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[13.5px] font-extrabold">Order confirmed</p>
              <p className="text-[12px] text-ink-500">17 Aug, 8:42 PM</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="btn btn-sm btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
              </svg>
              Call rider
            </button>
            <button className="btn btn-sm btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                <path d="M8 12h8M8 9h5"></path>
              </svg>
              Chat with support
            </button>
            <button className="btn btn-sm btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                <path d="M8 3v4M16 3v4M3 10h18"></path>
              </svg>
              Reschedule delivery
            </button>
            <button className="btn btn-sm btn-danger" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
              Cancel shipment
            </button>
          </div>
        </div>
        
        <div className="card p-4 sm:p-5">
          <h2 className="text-[15px] font-extrabold mb-3">Other shipments in this order</h2>
          
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
              <span className="w-9 h-9 rounded-lg bg-ink-50 grid place-items-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2h12l1 5H5z"></path>
                  <path d="M5 7v15h14V7"></path>
                  <path d="M9 12h6"></path>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold clamp-1">Shipment 2 — Rongdhonu Fashion</p>
                <p className="text-[12px] text-ink-500">Packed · ships tomorrow</p>
              </div>
              <span className="badge badge-amber">Track</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
              <span className="w-9 h-9 rounded-lg bg-ink-50 grid place-items-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2h12l1 5H5z"></path>
                  <path d="M5 7v15h14V7"></path>
                  <path d="M9 12h6"></path>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold clamp-1">Shipment 3 — Khaas Food Corner</p>
                <p className="text-[12px] text-ink-500">Confirmed · awaiting pickup</p>
              </div>
              <span className="badge badge-gray">Track</span>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}
