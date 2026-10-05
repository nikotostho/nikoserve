import Link from "next/link";

export default function CartPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Shopping Cart</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6">
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          
          <div>
            <h1 className="font-display text-[24px] font-extrabold tracking-tight">
              Shopping Cart 
              <span className="text-ink-400 font-bold text-[16px]">(4 items)</span>
            </h1>
            
            <p className="text-[12.5px] text-ink-500 mt-1">Items in your cart are not reserved — check out now to secure the price.</p>
          </div>
          
          <Link href="/products" className="btn btn-sm btn-outline">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 6-6 6 6 6"></path>
            </svg>
            Continue shopping
          </Link>
        </div>
        
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-5">
          
          <div className="min-w-0 space-y-4">
            
            <div className="card p-3.5 flex flex-wrap items-center gap-3">
              
              <label className="check">
                <input type="checkbox" defaultChecked />
                <b>Select all (4)</b>
              </label>
              
              <div className="ml-auto flex gap-2">
                <button className="btn btn-xs btn-outline" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                  Move to wishlist
                </button>
                <button className="btn btn-xs btn-danger" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"></path>
                  </svg>
                  Delete selected
                </button>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#e7e9ef] bg-ink-50/60">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500" />
                <svg className="w-4 h-4 text-ink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h16v12H4z"></path>
                  <path d="M9 8V4h6v4"></path>
                </svg>
                
                <Link href="/shop-profile" className="text-[13px] font-extrabold hover:text-brand-600">Realme Official Store</Link>
                
                <span className="badge badge-green">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Verified
                </span>
                
                <span className="text-[11.5px] text-ink-500 hidden sm:block">· Free delivery over ৳2,000</span>
                
                <button className="btn btn-xs btn-outline ml-auto" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                  Chat
                </button>
              </div>
              
              <div className="flex gap-3 p-4 border-b border-[#f0f1f5] last:border-0">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500 mt-1 shrink-0" />
                
                <span className="ph ph-a w-[86px] h-[86px] rounded-xl shrink-0">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
                
                <div className="flex-1 min-w-0">
                  
                  <Link href="/product-details" className="text-[13.5px] font-semibold hover:text-brand-600 clamp-2">Realme C100x 6/128GB — Dreamy Purple</Link>
                  
                  <p className="text-[11.5px] text-ink-400 mt-1">Sold by Realme Official Store · In stock</p>
                  
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="price !text-[16px]">৳11,499</span>
                    <span className="price-old">৳13,999</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                    
                    <div className="flex items-center border border-[#e7e9ef] rounded-lg h-8">
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <input className="w-9 text-center text-[13px] font-bold" defaultValue="1" />
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                      Save
                    </button>
                    
                    <button className="btn btn-xs btn-ghost !text-ink-400" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"></path>
                      </svg>
                      Remove
                    </button>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      Change variant
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 p-4 border-b border-[#f0f1f5] last:border-0">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500 mt-1 shrink-0" />
                
                <span className="ph ph-b w-[86px] h-[86px] rounded-xl shrink-0">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
                  </svg>
                </span>
                
                <div className="flex-1 min-w-0">
                  
                  <Link href="/product-details" className="text-[13.5px] font-semibold hover:text-brand-600 clamp-2">Anker 20W PD Fast Charger</Link>
                  
                  <p className="text-[11.5px] text-ink-400 mt-1">Sold by Gadget Hub BD · In stock</p>
                  
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="price !text-[16px]">৳1,290</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                    
                    <div className="flex items-center border border-[#e7e9ef] rounded-lg h-8">
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <input className="w-9 text-center text-[13px] font-bold" defaultValue="2" />
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                      Save
                    </button>
                    
                    <button className="btn btn-xs btn-ghost !text-ink-400" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"></path>
                      </svg>
                      Remove
                    </button>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      Change variant
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="card overflow-hidden">
              
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#e7e9ef] bg-ink-50/60">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500" />
                <svg className="w-4 h-4 text-ink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h16v12H4z"></path>
                  <path d="M9 8V4h6v4"></path>
                </svg>
                
                <Link href="/shop-profile" className="text-[13px] font-extrabold hover:text-brand-600">Rongdhonu Fashion</Link>
                
                <span className="badge badge-green">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Verified
                </span>
                
                <span className="text-[11.5px] text-ink-500 hidden sm:block">· Ships from Narayanganj</span>
                
                <button className="btn btn-xs btn-outline ml-auto" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                  Chat
                </button>
              </div>
              
              <div className="flex gap-3 p-4 border-b border-[#f0f1f5] last:border-0">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500 mt-1 shrink-0" />
                
                <span className="ph ph-c w-[86px] h-[86px] rounded-xl shrink-0">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                  </svg>
                </span>
                
                <div className="flex-1 min-w-0">
                  
                  <Link href="/product-details" className="text-[13.5px] font-semibold hover:text-brand-600 clamp-2">Cotton Panjabi — Hand Embroidered (L)</Link>
                  
                  <p className="text-[11.5px] text-ink-400 mt-1">Sold by Rongdhonu Fashion · Only 3 left</p>
                  
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="price !text-[16px]">৳1,200</span>
                    <span className="price-old">৳1,500</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                    
                    <div className="flex items-center border border-[#e7e9ef] rounded-lg h-8">
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <input className="w-9 text-center text-[13px] font-bold" defaultValue="1" />
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                      Save
                    </button>
                    
                    <button className="btn btn-xs btn-ghost !text-ink-400" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"></path>
                      </svg>
                      Remove
                    </button>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      Change variant
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="card overflow-hidden">
              
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-[#e7e9ef] bg-ink-50/60">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500" />
                <svg className="w-4 h-4 text-ink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8h16v12H4z"></path>
                  <path d="M9 8V4h6v4"></path>
                </svg>
                
                <Link href="/shop-profile" className="text-[13px] font-extrabold hover:text-brand-600">Khaas Food Corner</Link>
                
                <span className="badge badge-green">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  Verified
                </span>
                
                <span className="text-[11.5px] text-ink-500 hidden sm:block">· ৳60 delivery</span>
                
                <button className="btn btn-xs btn-outline ml-auto" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                    <path d="M8 12h8M8 9h5"></path>
                  </svg>
                  Chat
                </button>
              </div>
              
              <div className="flex gap-3 p-4 border-b border-[#f0f1f5] last:border-0">
                
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-brand-500 mt-1 shrink-0" />
                
                <span className="ph ph-d w-[86px] h-[86px] rounded-xl shrink-0">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                  </svg>
                </span>
                
                <div className="flex-1 min-w-0">
                  
                  <Link href="/product-details" className="text-[13.5px] font-semibold hover:text-brand-600 clamp-2">Organic Honey — 500g Sundarban</Link>
                  
                  <p className="text-[11.5px] text-ink-400 mt-1">Sold by Khaas Food Corner · In stock</p>
                  
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="price !text-[16px]">৳550</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2.5">
                    
                    <div className="flex items-center border border-[#e7e9ef] rounded-lg h-8">
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                        </svg>
                      </button>
                      <input className="w-9 text-center text-[13px] font-bold" defaultValue="3" />
                      <button className="w-8 h-full grid place-items-center hover:bg-ink-50" type="button">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                      </svg>
                      Save
                    </button>
                    
                    <button className="btn btn-xs btn-ghost !text-ink-400" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"></path>
                      </svg>
                      Remove
                    </button>
                    
                    <button className="btn btn-xs btn-ghost" type="button">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                        <path d="M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                        <path d="M3 21v-5h5"></path>
                      </svg>
                      Change variant
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="card p-4">
              <p className="text-[13px] font-extrabold mb-3">Frequently bought with your cart</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <article className="pcard card-hover group">
                  
                  <Link href="/product-details" className="block relative">
                    
                    <span className="discount-flag">-22%</span>
                    
                    <span className="ph ph-d ratio-sq w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                      </svg>
                    </span>
                    
                  </Link>
                  
                  <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <div className="pcard-body">
                    
                    <Link href="/product-details" className="pcard-title block mb-1.5">Original Jamdani Half Silk Saree with Blouse Piece</Link>
                    
                    <div className="flex items-end gap-2 mb-1">
                      <span className="price">৳4,850</span>
                      <span className="price-old">৳6,200</span>
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
                      <span className="text-2xs text-ink-400">(512)</span>
                      <span className="text-2xs text-ink-400 ml-auto">512 sold</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Tangail</span>
                      <span className="text-ink-200">|</span>
                      <span className="clamp-1">Tangail Weavers House</span>
                    </div>
                    
                  </div>
                </article>
                <article className="pcard card-hover group">
                  
                  <Link href="/product-details" className="block relative">
                    
                    <span className="discount-flag">-23%</span>
                    
                    <span className="ph ph-e ratio-sq w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="3" width="6" height="11" rx="3"></rect>
                        <path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path>
                      </svg>
                    </span>
                    
                  </Link>
                  
                  <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <div className="pcard-body">
                    
                    <Link href="/product-details" className="pcard-title block mb-1.5">Havit HV-H2002d Wired Gaming Headphone RGB</Link>
                    
                    <div className="flex items-end gap-2 mb-1">
                      <span className="price">৳1,890</span>
                      <span className="price-old">৳2,450</span>
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
                      <span className="text-2xs text-ink-400">(891)</span>
                      <span className="text-2xs text-ink-400 ml-auto">8.9k sold</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Dhaka</span>
                      <span className="text-ink-200">|</span>
                      <span className="clamp-1">Star Tech Digital</span>
                    </div>
                    
                  </div>
                </article>
                <article className="pcard card-hover group">
                  
                  <Link href="/product-details" className="block relative">
                    
                    <span className="discount-flag">-15%</span>
                    
                    <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                    
                    <span className="ph ph-f ratio-sq w-full">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                      </svg>
                    </span>
                    
                  </Link>
                  
                  <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                    </svg>
                  </button>
                  
                  <div className="pcard-body">
                    
                    <Link href="/product-details" className="pcard-title block mb-1.5">Aarong Cotton Panjabi — Embroidered Chest</Link>
                    
                    <div className="flex items-end gap-2 mb-1">
                      <span className="price">৳2,450</span>
                      <span className="price-old">৳2,900</span>
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
                      <span className="text-2xs text-ink-400">(274)</span>
                      <span className="text-2xs text-ink-400 ml-auto">274 sold</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                        <circle cx="12" cy="10" r="2.5"></circle>
                      </svg>
                      <span className="clamp-1">Dhaka</span>
                      <span className="text-ink-200">|</span>
                      <span className="clamp-1">Aarong Official</span>
                    </div>
                    
                  </div>
                </article>
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
              </div>
            </div>
            
            <div className="card p-4 flex flex-col sm:flex-row items-center gap-3 bg-service-50/50 border-service-100">
              
              <span className="w-11 h-11 rounded-xl bg-white text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                  <path d="M13 6l5 5"></path>
                </svg>
              </span>
              
              <div className="flex-1 min-w-0 text-center sm:text-left">
                <p className="text-[13.5px] font-extrabold">Need installation for these items?</p>
                <p className="text-[12px] text-ink-500">Add a verified technician visit — pay after the job is done.</p>
              </div>
              
              <Link href="/services" className="btn btn-sm btn-service shrink-0">Add a service</Link>
            </div>
            
          </div>
          
          <aside className="lg:w-[360px] shrink-0 space-y-4">
            
            <div className="card p-4 sticky-24">
              
              <h2 className="text-[15px] font-extrabold mb-3">Order summary</h2>
              
              <div className="space-y-2 text-[13px] mb-3">
                
                <div className="flex justify-between">
                  <span className="text-ink-500">Subtotal (4 items)</span>
                  <b className="">৳16,829</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Item discount</span>
                  <b className="text-green-700">- ৳2,800</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Coupon (SAVE300)</span>
                  <b className="text-green-700">- ৳300</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">Delivery fee</span>
                  <b className="">৳120</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-500">VAT (included)</span>
                  <b className="">৳0</b>
                </div>
              </div>
              
              <div className="dotted-sep my-3"></div>
              
              <div className="flex justify-between items-end mb-1">
                <span className="text-[14px] font-extrabold">Total</span>
                <span className="font-display text-[24px] font-extrabold text-brand-600">৳13,849</span>
              </div>
              
              <p className="text-[11.5px] text-green-700 font-bold mb-3">You saved ৳3,100 on this order 🎉</p>
              
              <div className="flex gap-2 mb-3">
                <input className="input input-sm" placeholder="Enter voucher code" />
                <button className="btn btn-sm btn-dark shrink-0" type="button">Apply</button>
              </div>
              
              <button className="btn btn-xs btn-outline btn-block mb-3" data-modal-open="couponModal" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"></path>
                  <path d="M12 7v10"></path>
                </svg>
                View 12 available coupons
              </button>
              
              <Link href="/checkout" className="btn btn-lg btn-primary btn-block mb-2">
                Proceed to checkout 
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 6 6 6-6 6"></path>
                </svg>
              </Link>
              
              <p className="text-[11.5px] text-ink-400 text-center mb-3">Secure checkout · SSL encrypted</p>
              
              <div className="flex flex-wrap gap-1.5 justify-center">
                <span className="badge badge-gray">bKash</span>
                <span className="badge badge-gray">Nagad</span>
                <span className="badge badge-gray">Rocket</span>
                <span className="badge badge-gray">Visa</span>
                <span className="badge badge-gray">Mastercard</span>
                <span className="badge badge-gray">COD</span>
              </div>
              
              <div className="dotted-sep my-4"></div>
              
              <div className="space-y-2.5 text-[12px]">
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-ink-600">Buyer protection on every order</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 14 4 9l5-5"></path>
                    <path d="M4 9h9a7 7 0 0 1 0 14H8"></path>
                  </svg>
                  <span className="text-ink-600">7-day easy return policy</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                    <circle cx="6.5" cy="17.5" r="1.5"></circle>
                    <circle cx="17.5" cy="17.5" r="1.5"></circle>
                  </svg>
                  <span className="text-ink-600">Delivery to all 64 districts</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"></path>
                  </svg>
                  <span className="text-ink-600">24/7 customer support</span>
                </p>
              </div>
              
            </div>
          </aside>
        </div>
      </main>
      <div className="modal" id="couponModal">
        <div className="modal-backdrop" data-modal-close=""></div>
        <div className="modal-panel is-narrow">
          
          <div className="flex items-center justify-between p-5 border-b border-[#e7e9ef]">
            <h3 className="font-display text-[17px] font-extrabold">Available coupons</h3>
            <button className="icon-btn" data-modal-close="" type="button">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-5 space-y-2.5">
            <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-brand-300 bg-brand-50/50">
              
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-extrabold mono">SAVE300</p>
                <p className="text-[12px] text-ink-500">৳300 off on orders above ৳5,000</p>
                <p className="text-[11px] text-ink-400 mt-0.5">Expires 31 Aug</p>
              </div>
              
              <button className="btn btn-xs btn-outline" data-modal-close="" type="button">Applied</button>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-[#e7e9ef]">
              
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-extrabold mono">BKASH10</p>
                <p className="text-[12px] text-ink-500">10% cashback with bKash, max ৳200</p>
                <p className="text-[11px] text-ink-400 mt-0.5">Expires 25 Aug</p>
              </div>
              
              <button className="btn btn-xs btn-primary" data-modal-close="" type="button">Apply</button>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-[#e7e9ef]">
              
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-extrabold mono">FREESHIP</p>
                <p className="text-[12px] text-ink-500">Free delivery inside Dhaka</p>
                <p className="text-[11px] text-ink-400 mt-0.5">Expires 20 Aug</p>
              </div>
              
              <button className="btn btn-xs btn-primary" data-modal-close="" type="button">Apply</button>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-[#e7e9ef]">
              
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-extrabold mono">NEW500</p>
                <p className="text-[12px] text-ink-500">৳500 off for first order</p>
                <p className="text-[11px] text-ink-400 mt-0.5">New users only</p>
              </div>
              
              <button className="btn btn-xs btn-primary" data-modal-close="" type="button">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
