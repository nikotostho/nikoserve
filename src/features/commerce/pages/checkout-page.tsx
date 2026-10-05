import Link from "next/link";

export default function CheckoutPage() {
  return (
    <>
      <main className="shell py-6">
        
        <div className="mb-6">
          <h1 className="font-display text-[24px] font-extrabold tracking-tight mb-4">Checkout</h1>
          
          <div className="steps max-w-2xl">
            <span className="step is-done">
              <span className="num">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              Cart
            </span>
            <span className="step-line"></span>
            
            <span className="step is-current">
              <span className="num">2</span>
              Address &amp; payment
            </span>
            <span className="step-line"></span>
            
            <span className="step">
              <span className="num">3</span>
              Review
            </span>
            <span className="step-line"></span>
            <span className="step">
              <span className="num">4</span>
              Done
            </span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-5">
          
          <div className="min-w-0 space-y-4">
            
            <div className="card p-4 sm:p-5">
              
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-[15px] font-extrabold flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  Delivery address
                </h2>
                <button className="btn btn-xs btn-outline" data-modal-open="addrModal" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                  Add new address
                </button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                
                <label className="p-4 rounded-xl border border-brand-400 ring-2 ring-brand-100 bg-brand-50/30 cursor-pointer block">
                  
                  <div className="flex items-start gap-2.5">
                    <input type="radio" name="addr" defaultChecked className="mt-1 accent-brand-500" />
                    
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="badge badge-brand">Home</span>
                        <span className="badge badge-green">Default</span>
                      </div>
                      
                      <p className="text-[13px] font-bold">Nusrat Ahmed</p>
                      <p className="text-[12.5px] text-ink-500">+880 1712-345678</p>
                      <p className="text-[12.5px] text-ink-600 mt-1">Flat 5B, House 27, Road 11, Dhanmondi, Dhaka 1209</p>
                      
                      <div className="flex gap-3 mt-2 text-[12px] font-bold">
                        <button className="link" type="button">Edit</button>
                        <button className="link-muted" type="button">Delete</button>
                      </div>
                    </div>
                  </div>
                </label>
                
                <label className="p-4 rounded-xl border border-[#e7e9ef] cursor-pointer block">
                  
                  <div className="flex items-start gap-2.5">
                    <input type="radio" name="addr" className="mt-1 accent-brand-500" />
                    
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="badge badge-gray">Office</span>
                      </div>
                      
                      <p className="text-[13px] font-bold">Nusrat Ahmed</p>
                      <p className="text-[12.5px] text-ink-500">+880 1912-887766</p>
                      <p className="text-[12.5px] text-ink-600 mt-1">Level 8, Rangs Babylonia, 246 Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka 1208</p>
                      
                      <div className="flex gap-3 mt-2 text-[12px] font-bold">
                        <button className="link" type="button">Edit</button>
                        <button className="link-muted" type="button">Delete</button>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                
                <div>
                  <label className="label">Delivery instructions (optional)</label>
                  <input className="input" placeholder="e.g. Call before arriving, leave with guard" />
                </div>
                
                <div>
                  <label className="label">Alternate contact number</label>
                  <div className="input-affix">
                    <span className="affix">+880</span>
                    <input className="input" placeholder="1XXXXXXXXX" />
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="card p-4 sm:p-5">
              <h2 className="text-[15px] font-extrabold flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                  <circle cx="6.5" cy="17.5" r="1.5"></circle>
                  <circle cx="17.5" cy="17.5" r="1.5"></circle>
                </svg>
                Shipment 1 of 3 — Realme Official Store
              </h2>
              
              <div className="flex gap-3 mb-4">
                <div className="flex gap-2.5 items-center p-2.5 rounded-xl bg-ink-50 flex-1 min-w-0">
                  <span className="ph ph-a w-12 h-12 rounded-lg">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold clamp-2">Realme C100x 6/128GB — Dreamy Purple</p>
                    <p className="text-[11.5px] text-ink-500">Qty 1 · ৳11,499</p>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center p-2.5 rounded-xl bg-ink-50 flex-1 min-w-0">
                  <span className="ph ph-b w-12 h-12 rounded-lg">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold clamp-2">Anker 20W PD Fast Charger</p>
                    <p className="text-[11.5px] text-ink-500">Qty 2 · ৳1,290</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-brand-400 bg-brand-50/30 cursor-pointer">
                  
                  <input type="radio" name="ship1" defaultChecked className="accent-brand-500" />
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold">Express delivery</p>
                    <p className="text-[12px] text-ink-500">Today, before 10 PM</p>
                  </div>
                  
                  <b className="text-[13px] ">৳120</b>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="ship1" className="accent-brand-500" />
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold">Standard delivery</p>
                    <p className="text-[12px] text-ink-500">Wed 19 Aug – Thu 20 Aug</p>
                  </div>
                  
                  <b className="text-[13px] ">৳60</b>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="ship1" className="accent-brand-500" />
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold">Store pickup</p>
                    <p className="text-[12px] text-ink-500">Ready in 2 hours · Mirpur 10</p>
                  </div>
                  
                  <b className="text-[13px] text-green-700">Free</b>
                </label>
              </div>
            </div>
            
            <div className="card p-4 sm:p-5">
              <h2 className="text-[15px] font-extrabold flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                  <path d="M16 12h2"></path>
                </svg>
                Payment method
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-2.5">
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-brand-400 bg-brand-50/30 cursor-pointer">
                  
                  <input type="radio" name="pay" defaultChecked className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">bKash</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">bKash</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">Pay from your bKash wallet · 10% cashback</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">Nagad</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">Nagad</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">Instant payment from Nagad account</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">Rocket</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">Rocket</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">DBBL mobile banking</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">Card</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">Card</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">Visa, Mastercard, AMEX — 3D secure</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">Cash o</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">Cash on delivery</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">Pay ৳13,849 when the parcel arrives</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">Bank t</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">Bank transfer</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">City Bank / BRAC / DBBL</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">EMI</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">EMI</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">0% EMI on 12 banks — from ৳1,154/mo</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e9ef] cursor-pointer">
                  
                  <input type="radio" name="pay" className="accent-brand-500" />
                  
                  <span className="w-10 h-7 rounded bg-ink-100 grid place-items-center text-[9.5px] font-extrabold text-ink-600 shrink-0">HaatBa</span>
                  
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold">HaatBazar wallet</p>
                    <p className="text-[11.5px] text-ink-500 clamp-1">Balance ৳2,340</p>
                  </div>
                </label>
              </div>
              
              <div className="mt-4 p-4 rounded-xl bg-ink-50">
                
                <p className="text-[12.5px] font-extrabold mb-2.5">bKash payment details</p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="label">bKash account number</label>
                    <div className="input-affix">
                      <span className="affix">+880</span>
                      <input className="input" placeholder="1XXXXXXXXX" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="label">Save this number</label>
                    <label className="check h-11 items-center">
                      <input type="checkbox" defaultChecked />
                      Save for faster checkout next time
                    </label>
                  </div>
                </div>
                
                <p className="hint">You will be redirected to the secure bKash page to enter your PIN.</p>
              </div>
            </div>
            
            <div className="card p-4 sm:p-5">
              <h2 className="text-[15px] font-extrabold flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h8l4 4v14H6z"></path>
                  <path d="M14 3v4h4"></path>
                </svg>
                Invoice &amp; extras
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-3">
                
                <div>
                  <label className="label">Invoice type</label>
                  <select className="select">
                    <option>Personal invoice</option>
                    <option>Business invoice (with BIN)</option>
                  </select>
                </div>
                
                <div>
                  <label className="label">Company BIN / VAT number</label>
                  <input className="input" placeholder="Optional" />
                </div>
              </div>
              
              <div className="space-y-2 mt-3">
                <label className="check">
                  <input type="checkbox" />
                  This is a gift — hide prices on the invoice
                </label>
                
                <label className="check">
                  <input type="checkbox" />
                  Add gift wrapping (+৳80)
                </label>
                
                <label className="check">
                  <input type="checkbox" defaultChecked />
                  Send order updates by SMS and email
                </label>
              </div>
              
              <div className="mt-3">
                <label className="label">Gift message</label>
                <textarea className="textarea !min-h-[70px]" placeholder="Write a short note to be printed on the gift card…"></textarea>
              </div>
            </div>
            
          </div>
          
          <aside className="lg:w-[360px] shrink-0 space-y-4">
            
            <div className="card p-4 sticky-24">
              
              <h2 className="text-[15px] font-extrabold mb-3">Order summary</h2>
              
              <div className="space-y-2.5 max-h-[190px] overflow-auto thin-scroll pr-1 mb-3">
                <div className="flex gap-2.5">
                  <span className="ph ph-a w-11 h-11 rounded-lg shrink-0">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                      <path d="M11 19h2"></path>
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold clamp-1">Realme C100x 6/128GB — Dreamy Purple</p>
                    <p className="text-[11px] text-ink-400">Qty 1</p>
                  </div>
                  <span className="text-[12.5px] font-extrabold">৳11,499</span>
                </div>
                <div className="flex gap-2.5">
                  <span className="ph ph-b w-11 h-11 rounded-lg shrink-0">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold clamp-1">Anker 20W PD Fast Charger</p>
                    <p className="text-[11px] text-ink-400">Qty 2</p>
                  </div>
                  <span className="text-[12.5px] font-extrabold">৳1,290</span>
                </div>
                <div className="flex gap-2.5">
                  <span className="ph ph-c w-11 h-11 rounded-lg shrink-0">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold clamp-1">Cotton Panjabi — Hand Embroidered (L)</p>
                    <p className="text-[11px] text-ink-400">Qty 1</p>
                  </div>
                  <span className="text-[12.5px] font-extrabold">৳1,200</span>
                </div>
                <div className="flex gap-2.5">
                  <span className="ph ph-d w-11 h-11 rounded-lg shrink-0">
                    <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12px] font-semibold clamp-1">Organic Honey — 500g Sundarban</p>
                    <p className="text-[11px] text-ink-400">Qty 3</p>
                  </div>
                  <span className="text-[12.5px] font-extrabold">৳550</span>
                </div>
              </div>
              
              <div className="dotted-sep my-3"></div>
              
              <div className="space-y-2 text-[13px] mb-3">
                <div className="flex justify-between">
                  <span className="text-ink-500">Subtotal</span>
                  <b className="">৳16,829</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Discount</span>
                  <b className="text-green-700">- ৳2,800</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Coupon SAVE300</span>
                  <b className="text-green-700">- ৳300</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Delivery (3 shipments)</span>
                  <b className="">৳240</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Gift wrap</span>
                  <b className="">৳0</b>
                </div>
              </div>
              
              <div className="dotted-sep my-3"></div>
              
              <div className="flex justify-between items-end mb-4">
                <span className="text-[14px] font-extrabold">Total payable</span>
                <span className="font-display text-[24px] font-extrabold text-brand-600">৳13,969</span>
              </div>
              
              <label className="check mb-3">
                <input type="checkbox" defaultChecked />
                I have read and agree to the 
                <Link href="/terms" className="link">Terms of Service</Link>
                 and 
                <Link href="/privacy-policy" className="link">Privacy Policy</Link>
                .
              </label>
              
              <Link href="/order-success" className="btn btn-lg btn-primary btn-block">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="10" width="16" height="11" rx="2"></rect>
                  <path d="M8 10V7a4 4 0 0 1 8 0v3"></path>
                </svg>
                Place order · ৳13,969
              </Link>
              
              <p className="text-[11.5px] text-ink-400 text-center mt-2.5">Your payment information is encrypted and never stored on our servers.</p>
            </div>
          </aside>
        </div>
      </main>
      <div className="modal" id="addrModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel">
          
          <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
            <h3 className="font-display text-[17px] font-extrabold">Add a new address</h3>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            
            <div>
              <label className="label">
                Full name 
                <span className="req">*</span>
              </label>
              <input className="input" placeholder="Your name" />
            </div>
            
            <div>
              <label className="label">
                Mobile number 
                <span className="req">*</span>
              </label>
              <div className="input-affix">
                <span className="affix">+880</span>
                <input className="input" placeholder="1XXXXXXXXX" />
              </div>
            </div>
            
            <div>
              <label className="label">
                Division 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Sylhet</option>
                <option>Barishal</option>
                <option>Rangpur</option>
                <option>Mymensingh</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                District 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Dhaka</option>
                <option>Gazipur</option>
                <option>Narayanganj</option>
              </select>
            </div>
            
            <div>
              <label className="label">
                Area / Thana 
                <span className="req">*</span>
              </label>
              <select className="select">
                <option>Dhanmondi</option>
                <option>Gulshan</option>
                <option>Mirpur</option>
                <option>Uttara</option>
              </select>
            </div>
            
            <div>
              <label className="label">Post code</label>
              <input className="input" placeholder="1209" />
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">
                Full address 
                <span className="req">*</span>
              </label>
              <textarea className="textarea !min-h-[80px]" placeholder="House, road, flat, landmark…"></textarea>
            </div>
            
            <div className="sm:col-span-2">
              <label className="label">Address label</label>
              <div className="flex gap-2">
                <button className="chip is-active" type="button">Home</button>
                <button className="chip " type="button">Office</button>
                <button className="chip " type="button">Other</button>
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <div className="rounded-xl overflow-hidden border border-[#e7e9ef]">
                <span className="ph ph-a h-[150px] w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                </span>
              </div>
              <p className="hint">Drag the pin to your exact location for faster delivery.</p>
            </div>
            
            <div className="sm:col-span-2">
              <label className="check">
                <input type="checkbox" defaultChecked />
                Set as default delivery address
              </label>
            </div>
            
            <div className="sm:col-span-2 flex gap-2">
              <button className="btn btn-outline flex-1" data-modal-close="" type="button">Cancel</button>
              <button className="btn btn-primary flex-1" data-modal-close="" data-toast="Address saved" type="button">Save address</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
