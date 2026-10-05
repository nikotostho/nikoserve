import Link from "next/link";

export default function BecomeSellerPage() {
  return (
    <>
      <section className="ph ph-a grid-noise text-white">
        
        <div className="shell py-14 sm:py-20 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <span className="badge !bg-white/20 !text-white mb-3">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16v12H4z"></path>
                <path d="M9 8V4h6v4"></path>
              </svg>
              Seller Centre
            </span>
            
            <h1 className="font-display text-[32px] sm:text-[44px] font-extrabold leading-[1.1] tracking-tight mb-4">Sell to 4.2 million shoppers across Bangladesh</h1>
            
            <p className="text-[15px] text-white/85 leading-relaxed mb-6">Open your online shop in 15 minutes. Zero commission for the first 3 months, free product photography in Dhaka, and payouts every week.</p>
            
            <div className="flex flex-wrap gap-2.5 mb-7">
              <Link href="/seller-register" className="btn btn-lg !bg-white !text-brand-600">
                Start selling free 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
              
              <Link href="/login?next=%2Fvendor%2Fdashboard" className="btn btn-lg !bg-white/15 !text-white">Seller sign in</Link>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="font-display text-[24px] font-extrabold">48,320</p>
                <p className="text-[12px] text-white/70">Active sellers</p>
              </div>
              <div>
                <p className="font-display text-[24px] font-extrabold">৳240cr+</p>
                <p className="text-[12px] text-white/70">Paid to sellers</p>
              </div>
              <div>
                <p className="font-display text-[24px] font-extrabold">64</p>
                <p className="text-[12px] text-white/70">Districts covered</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <span className="ph ph-d h-[300px] w-full rounded-2xl">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
              </svg>
            </span>
          </div>
        </div>
      </section>
      <main className="shell py-12">
        
        <div className="text-center max-w-2xl mx-auto mb-9">
          <h2 className="font-display text-[26px] font-extrabold tracking-tight mb-2">Why sell on HaatBazar?</h2>
          
          <p className="text-[14px] text-ink-500">Everything you need to run an online business — traffic, tools, logistics and payments.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2"></circle>
                <path d="M2 21a7 7 0 0 1 14 0"></path>
                <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Ready-made customers</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">4.2 million monthly shoppers already browsing categories like yours.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                <circle cx="12" cy="12" r="2.6"></circle>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Low commission</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">3–8% category commission with zero listing fees, ever.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                <circle cx="6.5" cy="17.5" r="1.5"></circle>
                <circle cx="17.5" cy="17.5" r="1.5"></circle>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Nationwide logistics</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">We pick up from your door and deliver to all 64 districts.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                <path d="M16 12h2"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Weekly payouts</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Money in your bank or bKash every Sunday — no minimum.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Business insights</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Live dashboards on traffic, conversion, stock and returns.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h3l2-2h6l2 2h3v12H4z"></path>
                <circle cx="12" cy="14" r="3.2"></circle>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Free photography</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Complimentary studio shoot for your first 20 products in Dhaka.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Marketing tools</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Vouchers, flash sales, sponsored ads and push campaigns.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Dedicated support</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">A named account manager once you cross ৳1 lakh monthly sales.</p>
          </div>
          <div className="card p-5 card-hover">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            
            <p className="text-[15px] font-extrabold mb-1.5">Fraud protection</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Verified buyers, secured payments and dispute mediation.</p>
          </div>
        </div>
        
        <div className="card p-6 sm:p-8 mb-12">
          <h2 className="font-display text-[24px] font-extrabold tracking-tight text-center mb-8">Start selling in 4 simple steps</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="relative">
              <span className="w-10 h-10 rounded-xl bg-ink-950 text-white grid place-items-center font-display text-[16px] font-extrabold mb-3">1</span>
              
              <p className="text-[14.5px] font-extrabold mb-1.5">Create your account</p>
              <p className="text-[13px] text-ink-500 leading-relaxed">Sign up with your phone number and business name — takes 2 minutes.</p>
            </div>
            <div className="relative">
              <span className="w-10 h-10 rounded-xl bg-ink-950 text-white grid place-items-center font-display text-[16px] font-extrabold mb-3">2</span>
              
              <p className="text-[14.5px] font-extrabold mb-1.5">Verify your identity</p>
              <p className="text-[13px] text-ink-500 leading-relaxed">Upload NID and trade licence (if any). Approval within 24 hours.</p>
            </div>
            <div className="relative">
              <span className="w-10 h-10 rounded-xl bg-ink-950 text-white grid place-items-center font-display text-[16px] font-extrabold mb-3">3</span>
              
              <p className="text-[14.5px] font-extrabold mb-1.5">List your products</p>
              <p className="text-[13px] text-ink-500 leading-relaxed">Add photos, price and stock. Use bulk upload for large catalogues.</p>
            </div>
            <div className="relative">
              <span className="w-10 h-10 rounded-xl bg-ink-950 text-white grid place-items-center font-display text-[16px] font-extrabold mb-3">4</span>
              
              <p className="text-[14.5px] font-extrabold mb-1.5">Start earning</p>
              <p className="text-[13px] text-ink-500 leading-relaxed">Get orders, ship with our courier and receive weekly payouts.</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-5 mb-12">
          
          <div className="card p-6">
            <h2 className="font-display text-[20px] font-extrabold mb-4">Commission &amp; fees</h2>
            
            <div className="tbl-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Commission</th>
                    <th>Payout cycle</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td className="font-semibold text-ink-900">Electronics &amp; Gadgets</td>
                    <td className="font-extrabold text-brand-600">3%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-ink-900">Mobile &amp; Tablets</td>
                    <td className="font-extrabold text-brand-600">3%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-ink-900">Fashion &amp; Lifestyle</td>
                    <td className="font-extrabold text-brand-600">8%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-ink-900">Health &amp; Beauty</td>
                    <td className="font-extrabold text-brand-600">7%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-ink-900">Home &amp; Living</td>
                    <td className="font-extrabold text-brand-600">6%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-ink-900">Groceries &amp; Food</td>
                    <td className="font-extrabold text-brand-600">5%</td>
                    <td>Weekly</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-ink-900">Books &amp; Stationery</td>
                    <td className="font-extrabold text-brand-600">4%</td>
                    <td>Weekly</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-[12px] text-ink-400 mt-3">No listing fee · no monthly fee · commission charged only on delivered orders.</p>
          </div>
          
          <div className="card p-6">
            <h2 className="font-display text-[20px] font-extrabold mb-4">What you need to register</h2>
            
            <div className="space-y-3">
              <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">National ID (NID)</p>
                  <p className="text-[12px] text-ink-500">Front and back photo of the owner’s NID</p>
                </div>
              </div>
              <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">Business name &amp; address</p>
                  <p className="text-[12px] text-ink-500">Shop name, pickup address and contact number</p>
                </div>
              </div>
              <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 10 12 4l9 6"></path>
                    <path d="M5 10v10h14V10M9 20v-6h6v6"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">Bank or bKash account</p>
                  <p className="text-[12px] text-ink-500">For receiving your weekly payouts</p>
                </div>
              </div>
              <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">Trade licence</p>
                  <p className="text-[12px] text-ink-500">Optional for individuals, required for companies</p>
                </div>
              </div>
              <div className="flex gap-3 p-3.5 rounded-xl border border-[#e7e9ef]">
                <span className="w-9 h-9 rounded-lg bg-ink-50 text-ink-600 grid place-items-center shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h8l4 4v14H6z"></path>
                    <path d="M14 3v4h4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">TIN / BIN certificate</p>
                  <p className="text-[12px] text-ink-500">Required for VAT-registered businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6 sm:p-8 mb-12">
          <h2 className="font-display text-[22px] font-extrabold text-center mb-6">Seller success stories</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl border border-[#e7e9ef]">
              <svg className="w-7 h-7 text-brand-200 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h4v6H8a4 4 0 0 0 3 4M17 7h-4v6h3a4 4 0 0 1-3 4"></path>
              </svg>
              
              <p className="text-[13.5px] text-ink-700 leading-relaxed mb-4">“We went from 20 orders a month at our physical shop to 900+ online orders. The free photography really helped.”</p>
              
              <div className="flex items-center gap-2.5">
                <span className="ph ph-a w-10 h-10 rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">Rongdhonu Fashion</p>
                  <p className="text-[11.5px] text-ink-500">Narayanganj · ৳18 lakh monthly sales</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-[#e7e9ef]">
              <svg className="w-7 h-7 text-brand-200 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h4v6H8a4 4 0 0 0 3 4M17 7h-4v6h3a4 4 0 0 1-3 4"></path>
              </svg>
              
              <p className="text-[13.5px] text-ink-700 leading-relaxed mb-4">“Our organic honey now reaches customers in Rangpur and Cox’s Bazar. Payouts arrive on time, every week.”</p>
              
              <div className="flex items-center gap-2.5">
                <span className="ph ph-b w-10 h-10 rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">Khaas Food Corner</p>
                  <p className="text-[11.5px] text-ink-500">Gulshan, Dhaka · 2,400 orders/month</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-[#e7e9ef]">
              <svg className="w-7 h-7 text-brand-200 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h4v6H8a4 4 0 0 0 3 4M17 7h-4v6h3a4 4 0 0 1-3 4"></path>
              </svg>
              
              <p className="text-[13.5px] text-ink-700 leading-relaxed mb-4">“As a women-led craft collective, HaatBazar gave 40 artisans a national market from a small town.”</p>
              
              <div className="flex items-center gap-2.5">
                <span className="ph ph-c w-10 h-10 rounded-xl">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 8h16v12H4z"></path>
                    <path d="M9 8V4h6v4"></path>
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-extrabold">Nokshi Handicrafts</p>
                  <p className="text-[11.5px] text-ink-500">Jamalpur · 40 artisans employed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card p-6 sm:p-8 mb-12">
          <h2 className="font-display text-[22px] font-extrabold mb-5">Seller FAQ</h2>
          
          <div className="space-y-2.5">
            <details className="rounded-xl border border-[#e7e9ef] p-4 group" open>
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-extrabold list-none">
                How much does it cost to start selling?
                <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Nothing. Registration, listing and your shop page are completely free. We only charge a category commission on delivered orders.</p>
            </details>
            <details className="rounded-xl border border-[#e7e9ef] p-4 group">
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-extrabold list-none">
                When do I get paid?
                <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Payouts are processed every Sunday for all orders delivered and past the 7-day return window. Money reaches your bank or bKash within 1–2 working days.</p>
            </details>
            <details className="rounded-xl border border-[#e7e9ef] p-4 group">
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-extrabold list-none">
                Who handles delivery?
                <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">HaatBazar Express picks up from your address, or you can use your own courier. Pickup is free inside Dhaka, Chattogram and Sylhet.</p>
            </details>
            <details className="rounded-xl border border-[#e7e9ef] p-4 group">
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-extrabold list-none">
                Can I sell services instead of products?
                <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Yes — service providers use a separate listing flow. Visit the “List your service” page to get started.</p>
            </details>
            <details className="rounded-xl border border-[#e7e9ef] p-4 group">
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-extrabold list-none">
                What happens if a customer returns an item?
                <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">The customer raises a return, we inspect it, and if it is your fault we deduct the amount. If the claim is invalid, you keep the payment.</p>
            </details>
            <details className="rounded-xl border border-[#e7e9ef] p-4 group">
              <summary className="flex items-center justify-between cursor-pointer text-[14px] font-extrabold list-none">
                Do I need a trade licence?
                <svg className="w-4 h-4 text-ink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              
              <p className="text-[13px] text-ink-500 leading-relaxed mt-2.5">Individuals can start with NID only. Companies and VAT-registered businesses must upload a trade licence and BIN certificate.</p>
            </details>
          </div>
        </div>
        
        <div className="rounded-2xl ph ph-c grid-noise p-8 sm:p-10 text-white text-center">
          
          <h2 className="font-display text-[26px] sm:text-[32px] font-extrabold tracking-tight mb-2 relative z-10">Ready to grow your business?</h2>
          
          <p className="text-[14px] text-white/80 mb-5 relative z-10">Join 48,320 sellers already earning on HaatBazar.</p>
          
          <div className="flex flex-wrap justify-center gap-2.5 relative z-10">
            <Link href="/seller-register" className="btn btn-lg !bg-white !text-ink-950">Create seller account</Link>
            <Link href="/contact" className="btn btn-lg !bg-white/15 !text-white">Talk to our team</Link>
          </div>
        </div>
        
      </main>
    </>
  );
}
