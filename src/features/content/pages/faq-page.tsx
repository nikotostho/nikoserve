import Link from "next/link";

export default function FaqPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">FAQ</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        
        <div className="max-w-2xl mb-7">
          <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">Frequently asked questions</h1>
          
          <p className="text-[14px] text-ink-500 mb-4">Quick answers about orders, payments, delivery, returns, services and selling.</p>
          
          <div className="input-group">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <input className="input" placeholder="Search a question…" />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-[240px_minmax(0,1fr)] gap-6">
          
          <aside className="lg:sticky-24 h-max">
            <div className="card p-3">
              <a href="#g0" className="dd-item !bg-brand-50 !text-brand-700">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                  <circle cx="10" cy="20" r="1.4"></circle>
                  <circle cx="18" cy="20" r="1.4"></circle>
                </svg>
                Orders &amp; shopping
              </a>
              <a href="#g1" className="dd-item ">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <path d="M16 12h2"></path>
                </svg>
                Payments &amp; pricing
              </a>
              <a href="#g2" className="dd-item ">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                  <circle cx="6.5" cy="17.5" r="1.5"></circle>
                  <circle cx="17.5" cy="17.5" r="1.5"></circle>
                </svg>
                Delivery &amp; shipping
              </a>
              <a href="#g3" className="dd-item ">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                </svg>
                Returns &amp; refunds
              </a>
              <a href="#g4" className="dd-item ">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                  <path d="M13 6l5 5"></path>
                </svg>
                Services &amp; bookings
              </a>
              <a href="#g5" className="dd-item ">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                  <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                </svg>
                Account &amp; security
              </a>
              <a href="#g6" className="dd-item ">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h16v12H4z"></path>
                  <path d="M9 8V4h6v4"></path>
                </svg>
                Selling on HaatBazar
              </a>
            </div>
            
            <div className="card p-5 mt-4 text-center">
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mx-auto mb-2.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
              </span>
              
              <p className="text-[13.5px] font-extrabold mb-1">Still stuck?</p>
              <p className="text-[12px] text-ink-500 mb-3">Our team replies in about 2 minutes.</p>
              
              <Link href="/contact" className="btn btn-sm btn-primary btn-block">Contact support</Link>
            </div>
          </aside>
          
          <div className="space-y-6">
            <div className="card p-5" id="g0">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                    <circle cx="10" cy="20" r="1.4"></circle>
                    <circle cx="18" cy="20" r="1.4"></circle>
                  </svg>
                </span>
                Orders &amp; shopping
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4" open>
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I place an order?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Add products to your cart, choose a delivery address and payment method, then tap “Place order”. You can also check out as a guest using just your phone number.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Can I change or cancel my order?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Yes — before the seller ships it. Go to My Orders, open the order and tap Cancel. Once shipped, you can refuse the parcel at delivery or start a return.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I track my order?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Open My Orders in your dashboard, or use the Track Order page with your order number and phone. You will also get SMS updates at every stage.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Why was my order split into multiple parcels?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Items from different sellers ship separately so each one reaches you as fast as possible. You are charged delivery per shipment, shown at checkout.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div className="card p-5" id="g1">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <path d="M16 12h2"></path>
                  </svg>
                </span>
                Payments &amp; pricing
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    What payment methods can I use?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">bKash, Nagad, Rocket, Visa/Mastercard/Amex, internet banking, EMI on 12 banks, HaatBazar wallet and cash on delivery.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Is cash on delivery available everywhere?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">COD is available in all 64 districts for orders below ৳50,000. Some remote unions may require partial advance payment.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    When am I charged?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Online payments are captured at checkout. For COD you pay the rider on delivery. Failed payments are auto-refunded within 3–7 working days.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do vouchers and cashback work?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Collect vouchers from the Offers page or seller pages, then apply them in the cart. Bank cashback is credited by the bank within 30 days.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div className="card p-5" id="g2">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                    <circle cx="6.5" cy="17.5" r="1.5"></circle>
                    <circle cx="17.5" cy="17.5" r="1.5"></circle>
                  </svg>
                </span>
                Delivery &amp; shipping
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How long does delivery take?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Inside Dhaka: same day or next day. Other cities: 2–3 days. Remote areas: 3–5 days. Every product page shows an exact estimate for your area.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How much is the delivery fee?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">From ৳60 inside Dhaka and ৳120 outside, calculated by weight and seller location. Many sellers offer free delivery above a minimum spend.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Can I choose a delivery time?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Yes — express slots are available in Dhaka, Chattogram and Sylhet. You can also reschedule a delivery once from the tracking page.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    What if I am not home?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">The rider will call you and attempt delivery up to 3 times. You can also nominate a neighbour or ask for hold at the nearest hub.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div className="card p-5" id="g3">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                  </svg>
                </span>
                Returns &amp; refunds
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    What is the return policy?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Most items can be returned within 7 days of delivery if damaged, defective, wrong or significantly different from the description. Some categories are non-returnable for hygiene reasons.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I return an item?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Go to My Orders → Return/Cancel, choose the item and reason, upload photos, and we arrange a free pickup within 48 hours.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    When will I get my refund?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Refunds are issued within 3–7 working days after the item passes inspection. bKash/Nagad refunds are instant to your HaatBazar wallet if you prefer.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Which items cannot be returned?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Innerwear, cosmetics that have been opened, perishable food, customised items and digital products — unless they arrive damaged.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div className="card p-5" id="g4">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                    <path d="M13 6l5 5"></path>
                  </svg>
                </span>
                Services &amp; bookings
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I book a service provider?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Open the provider’s page and tap Book now or Request a quote. Choose a date and time slot, describe the job and confirm. Many providers also accept direct calls.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Do I pay through HaatBazar for services?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">For most jobs you pay the provider directly after the work is completed. Some providers accept advance online booking payments, clearly marked on their page.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Are providers verified?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Verified Pro and Premium providers have submitted NID and trade licence, which our team checks manually. Look for the green verified badge.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    What if the provider does not show up?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Report it from your Bookings page. We follow up with the provider, refund any advance and may suspend repeat offenders.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div className="card p-5" id="g5">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                  </svg>
                </span>
                Account &amp; security
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I create an account?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Tap Register, enter your name, phone number and password, then verify the 6-digit OTP. You can also sign up with Google, Facebook or Apple.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    I forgot my password — what now?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Use Forgot password on the sign-in page. We send a reset code to your registered phone or email; the code expires in 10 minutes.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do you protect my data?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">All traffic is encrypted with TLS, passwords are hashed, and card details are handled by PCI-DSS certified gateways — we never store them.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I delete my account?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Go to Profile → Settings → Delete account. We remove your personal data within 30 days, keeping only what tax law requires.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
            <div className="card p-5" id="g6">
              
              <h2 className="font-display text-[18px] font-extrabold mb-4 flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 grid place-items-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                Selling on HaatBazar
              </h2>
              
              <div className="space-y-2.5">
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    How do I become a seller?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Complete the seller registration form with your NID and business details. Most accounts are approved within 24 hours.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    What are the fees?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">No listing or monthly fees. Category commission is 3–8% and is only charged on delivered orders.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    When do sellers get paid?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Every Sunday for all orders delivered and past the return window. Funds arrive in your bank or bKash within 1–2 working days.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
                <details className="rounded-xl border border-[#e7e9ef] p-4">
                  
                  <summary className="flex items-center justify-between gap-3 cursor-pointer text-[14px] font-extrabold list-none">
                    Can I sell both products and services?
                    <svg className="w-4 h-4 text-ink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </summary>
                  
                  <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Yes. Your seller centre lets you switch between the product shop and the service listing dashboards from one login.</p>
                  
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#f4f5f8]">
                    <span className="text-[12px] text-ink-400">Was this helpful?</span>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20V6M6 12l6-6 6 6"></path>
                      </svg>
                      Yes
                    </button>
                    <button className="btn btn-xs btn-outline" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v14M6 12l6 6 6-6"></path>
                      </svg>
                      No
                    </button>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
