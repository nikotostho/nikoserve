import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <>
      <main className="shell py-8 max-w-3xl">
        
        <div className="card p-6 sm:p-8 text-center mb-5">
          
          <span className="w-16 h-16 rounded-full bg-green-50 text-green-600 grid place-items-center mx-auto mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </span>
          
          <h1 className="font-display text-[26px] font-extrabold tracking-tight mb-2">Thank you! Your order is confirmed</h1>
          
          <p className="text-[13.5px] text-ink-500 mb-5">
            A confirmation has been sent to 
            <b className="text-ink-800">nusrat.ahmed@email.com</b>
             and 
            <b className="text-ink-800">+880 1712-345678</b>
            .
          </p>
          
          <div className="grid sm:grid-cols-3 gap-3 mb-6 text-left">
            
            <div className="p-3.5 rounded-xl bg-ink-50">
              <p className="text-[11.5px] text-ink-500 mb-0.5">Order number</p>
              <p className="text-[13.5px] font-extrabold">HB-2026-884213</p>
            </div>
            <div className="p-3.5 rounded-xl bg-ink-50">
              <p className="text-[11.5px] text-ink-500 mb-0.5">Payment</p>
              <p className="text-[13.5px] font-extrabold">bKash · ৳13,969 paid</p>
            </div>
            <div className="p-3.5 rounded-xl bg-ink-50">
              <p className="text-[11.5px] text-ink-500 mb-0.5">Estimated delivery</p>
              <p className="text-[13.5px] font-extrabold">Wed, 19 Aug 2026</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            
            <Link href="/track-order" className="btn btn-primary">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="2.5"></circle>
                <circle cx="18" cy="18" r="2.5"></circle>
                <path d="M8.5 6H14a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6.5"></path>
              </svg>
              Track my order
            </Link>
            
            <Link href="/login?next=%2Fuser%2Forders" className="btn btn-outline">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2h12l1 5H5z"></path>
                <path d="M5 7v15h14V7"></path>
                <path d="M9 12h6"></path>
              </svg>
              View order details
            </Link>
            
            <button className="btn btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 8V3h10v5"></path>
                <rect x="4" y="8" width="16" height="8" rx="2"></rect>
                <path d="M7 16h10v5H7z"></path>
              </svg>
              Print receipt
            </button>
            
            <Link href="/" className="btn btn-ghost">Continue shopping</Link>
          </div>
        </div>
        
        <div className="card p-5 mb-5">
          <h2 className="text-[15px] font-extrabold mb-3">What happens next</h2>
          
          <div className="timeline">
            <div className="tl-item is-done">
              <p className="text-[13.5px] font-extrabold">Order placed</p>
              <p className="text-[12.5px] text-ink-500">Just now — we received your order</p>
            </div>
            <div className="tl-item is-active">
              <p className="text-[13.5px] font-extrabold">Seller confirmation</p>
              <p className="text-[12.5px] text-ink-500">Within 2 hours — sellers accept and pack</p>
            </div>
            <div className="tl-item ">
              <p className="text-[13.5px] font-extrabold">Handover to courier</p>
              <p className="text-[12.5px] text-ink-500">Today evening</p>
            </div>
            <div className="tl-item ">
              <p className="text-[13.5px] font-extrabold">Out for delivery</p>
              <p className="text-[12.5px] text-ink-500">Wed, 19 Aug, morning</p>
            </div>
            <div className="tl-item ">
              <p className="text-[13.5px] font-extrabold">Delivered</p>
              <p className="text-[12.5px] text-ink-500">Wed, 19 Aug, before 10 PM</p>
            </div>
          </div>
        </div>
        
        <div className="card p-5 mb-5">
          <h2 className="text-[15px] font-extrabold mb-3">Items in this order (3 shipments)</h2>
          
          <div className="space-y-3">
            <div className="flex gap-3 items-center">
              <span className="ph ph-a w-14 h-14 rounded-lg shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                  <path d="M11 19h2"></path>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold clamp-1">Realme C100x 6/128GB — Dreamy Purple</p>
                <p className="text-[11.5px] text-ink-500">Realme Official Store · Qty 1</p>
              </div>
              <span className="text-[13px] font-extrabold">৳11,499</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="ph ph-b w-14 h-14 rounded-lg shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold clamp-1">Anker 20W PD Fast Charger</p>
                <p className="text-[11.5px] text-ink-500">Gadget Hub BD · Qty 2</p>
              </div>
              <span className="text-[13px] font-extrabold">৳1,290</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="ph ph-c w-14 h-14 rounded-lg shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold clamp-1">Cotton Panjabi — Hand Embroidered (L)</p>
                <p className="text-[11.5px] text-ink-500">Rongdhonu Fashion · Qty 1</p>
              </div>
              <span className="text-[13px] font-extrabold">৳1,200</span>
            </div>
            <div className="flex gap-3 items-center">
              <span className="ph ph-d w-14 h-14 rounded-lg shrink-0">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold clamp-1">Organic Honey — 500g Sundarban</p>
                <p className="text-[11.5px] text-ink-500">Khaas Food Corner · Qty 3</p>
              </div>
              <span className="text-[13px] font-extrabold">৳550</span>
            </div>
          </div>
          
          <div className="dotted-sep my-4"></div>
          
          <div className="flex justify-between text-[15px] font-extrabold">
            <span>Total paid</span>
            <span className="text-brand-600">৳13,969</span>
          </div>
        </div>
        
        <div className="card p-5">
          <h2 className="text-[15px] font-extrabold mb-3">You may also like</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-17%</span>
                
                <span className="ph ph-g ratio-sq w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                    <path d="M16 12h2"></path>
                  </svg>
                </span>
                
              </Link>
              
              <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <div className="pcard-body">
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Anker 323 PowerBank 20000mAh 22.5W PD</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳3,290</span>
                  <span className="price-old">৳3,990</span>
                </div>
                
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="stars ">
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </span>
                  <span className="text-2xs text-ink-400">(1,533)</span>
                  <span className="text-2xs text-ink-400 ml-auto">15.3k sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Dhaka</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Anker Bangladesh</span>
                </div>
                
              </div>
            </article>
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-19%</span>
                
                <span className="ph ph-h ratio-sq w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                  </svg>
                </span>
                
              </Link>
              
              <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <div className="pcard-body">
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Sunflower Organic Honey 500gm — Sundarban</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳690</span>
                  <span className="price-old">৳850</span>
                </div>
                
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="stars ">
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </span>
                  <span className="text-2xs text-ink-400">(402)</span>
                  <span className="text-2xs text-ink-400 ml-auto">402 sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Dhaka</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Khaas Food</span>
                </div>
                
              </div>
            </article>
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-8%</span>
                
                <span className="ph ph-i ratio-sq w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <path d="M9 20h6M12 16v4"></path>
                  </svg>
                </span>
                
              </Link>
              
              <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <div className="pcard-body">
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Asus Vivobook 15 Core i5 12th Gen 8/512GB</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳78,500</span>
                  <span className="price-old">৳85,000</span>
                </div>
                
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="stars ">
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </span>
                  <span className="text-2xs text-ink-400">(168)</span>
                  <span className="text-2xs text-ink-400 ml-auto">168 sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Dhaka</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Ryans Computers</span>
                </div>
                
              </div>
            </article>
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-15%</span>
                
                <span className="ph ph-a ratio-sq w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                  </svg>
                </span>
                
              </Link>
              
              <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <div className="pcard-body">
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Philips HL7756 Mixer Grinder 750W 3 Jars</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳8,450</span>
                  <span className="price-old">৳9,900</span>
                </div>
                
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="stars ">
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                    <svg viewBox="0 0 24 24" style={{ color: "#d8dce4" }}>
                      <path d="m12 2 2.9 6.3 6.8.7-5 4.6 1.4 6.7L12 17l-6.1 3.3L7.3 13.6l-5-4.6 6.8-.7z"></path>
                    </svg>
                  </span>
                  <span className="text-2xs text-ink-400">(96)</span>
                  <span className="text-2xs text-ink-400 ml-auto">96 sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Chattogram</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Electro Mart</span>
                </div>
                
              </div>
            </article>
          </div>
        </div>
        
      </main>
    </>
  );
}
