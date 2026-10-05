import Link from "next/link";

export default function ComparePage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Compare Products</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6">
        
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          
          <div>
            <h1 className="font-display text-[24px] font-extrabold tracking-tight">Compare products</h1>
            <p className="text-[12.5px] text-ink-500 mt-1">4 of 4 slots used · add up to 4 items</p>
          </div>
          
          <div className="flex gap-2">
            <label className="check">
              <input type="checkbox" defaultChecked />
              Highlight differences
            </label>
            <button className="btn btn-sm btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"></path>
              </svg>
              Clear all
            </button>
            <button className="btn btn-sm btn-outline" type="button">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="2.5"></circle>
                <circle cx="6" cy="12" r="2.5"></circle>
                <circle cx="18" cy="19" r="2.5"></circle>
                <path d="m8 11 8-4M8 13l8 4"></path>
              </svg>
              Share comparison
            </button>
          </div>
        </div>
        
        <div className="card overflow-hidden">
          <div className="tbl-wrap">
            <table className="tbl">
              
              <thead>
                <tr>
                  <th className="w-[170px]">Specification</th>
                  <th className="min-w-[190px]">
                    <div className="py-2">
                      <span className="ph ph-a w-full h-[110px] rounded-xl mb-2">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                          <path d="M11 19h2"></path>
                        </svg>
                      </span>
                      <p className="text-[13px] font-extrabold text-ink-900 normal-case tracking-normal clamp-2">Realme C100x</p>
                      
                      <div className="flex gap-1.5 mt-2">
                        <Link href="/cart" className="btn btn-xs btn-primary flex-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                            <circle cx="10" cy="20" r="1.4"></circle>
                            <circle cx="18" cy="20" r="1.4"></circle>
                          </svg>
                          Add
                        </Link>
                        <button className="btn btn-xs btn-outline" type="button">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <th className="min-w-[190px]">
                    <div className="py-2">
                      <span className="ph ph-b w-full h-[110px] rounded-xl mb-2">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                          <path d="M11 19h2"></path>
                        </svg>
                      </span>
                      <p className="text-[13px] font-extrabold text-ink-900 normal-case tracking-normal clamp-2">Redmi 13C</p>
                      
                      <div className="flex gap-1.5 mt-2">
                        <Link href="/cart" className="btn btn-xs btn-primary flex-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                            <circle cx="10" cy="20" r="1.4"></circle>
                            <circle cx="18" cy="20" r="1.4"></circle>
                          </svg>
                          Add
                        </Link>
                        <button className="btn btn-xs btn-outline" type="button">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <th className="min-w-[190px]">
                    <div className="py-2">
                      <span className="ph ph-c w-full h-[110px] rounded-xl mb-2">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                          <path d="M11 19h2"></path>
                        </svg>
                      </span>
                      <p className="text-[13px] font-extrabold text-ink-900 normal-case tracking-normal clamp-2">Infinix Hot 40i</p>
                      
                      <div className="flex gap-1.5 mt-2">
                        <Link href="/cart" className="btn btn-xs btn-primary flex-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                            <circle cx="10" cy="20" r="1.4"></circle>
                            <circle cx="18" cy="20" r="1.4"></circle>
                          </svg>
                          Add
                        </Link>
                        <button className="btn btn-xs btn-outline" type="button">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                  <th className="min-w-[190px]">
                    <div className="py-2">
                      <span className="ph ph-d w-full h-[110px] rounded-xl mb-2">
                        <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                          <path d="M11 19h2"></path>
                        </svg>
                      </span>
                      <p className="text-[13px] font-extrabold text-ink-900 normal-case tracking-normal clamp-2">Walton Primo NF5</p>
                      
                      <div className="flex gap-1.5 mt-2">
                        <Link href="/cart" className="btn btn-xs btn-primary flex-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6"></path>
                            <circle cx="10" cy="20" r="1.4"></circle>
                            <circle cx="18" cy="20" r="1.4"></circle>
                          </svg>
                          Add
                        </Link>
                        <button className="btn btn-xs btn-outline" type="button">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              
              <tbody>
                <tr>
                  <td className="font-extrabold text-ink-800">Price</td>
                  <td className="text-brand-600 font-extrabold text-[15px]">৳11,499</td>
                  <td className="text-brand-600 font-extrabold text-[15px]">৳12,999</td>
                  <td className="text-brand-600 font-extrabold text-[15px]">৳13,499</td>
                  <td className="text-brand-600 font-extrabold text-[15px]">৳9,999</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Rating</td>
                  <td className="">4.6 (1,240)</td>
                  <td className="">4.5 (890)</td>
                  <td className="">4.4 (410)</td>
                  <td className="">4.1 (2,100)</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Display</td>
                  <td className="">6.8" 90Hz HD+</td>
                  <td className="">6.74" 90Hz HD+</td>
                  <td className="">6.56" 90Hz HD+</td>
                  <td className="">6.5" 60Hz HD+</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Processor</td>
                  <td className="">Unisoc T612</td>
                  <td className="">Helio G85</td>
                  <td className="">Helio G88</td>
                  <td className="">Unisoc T606</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">RAM / Storage</td>
                  <td className="">6 / 128 GB</td>
                  <td className="">6 / 128 GB</td>
                  <td className="">8 / 256 GB</td>
                  <td className="">4 / 64 GB</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Battery</td>
                  <td className="">8000 mAh</td>
                  <td className="">5000 mAh</td>
                  <td className="">5000 mAh</td>
                  <td className="">5000 mAh</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Charging</td>
                  <td className="">45W</td>
                  <td className="">18W</td>
                  <td className="">18W</td>
                  <td className="">10W</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Rear camera</td>
                  <td className="">50 MP + 2 MP</td>
                  <td className="">50 MP + 2 MP</td>
                  <td className="">50 MP + 2 MP</td>
                  <td className="">13 MP</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Front camera</td>
                  <td className="">8 MP</td>
                  <td className="">8 MP</td>
                  <td className="">8 MP</td>
                  <td className="">5 MP</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Network</td>
                  <td className="">4G LTE</td>
                  <td className="">4G LTE</td>
                  <td className="">4G LTE</td>
                  <td className="">4G LTE</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Warranty</td>
                  <td className="">2 years</td>
                  <td className="">1 year</td>
                  <td className="">1 year</td>
                  <td className="">1 year</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Delivery</td>
                  <td className="">Free · today</td>
                  <td className="">৳60 · 2 days</td>
                  <td className="">৳60 · 3 days</td>
                  <td className="">Free · 2 days</td>
                </tr>
                <tr>
                  <td className="font-extrabold text-ink-800">Seller</td>
                  <td className="">Realme Official</td>
                  <td className="">Gadget Hub BD</td>
                  <td className="">Tech Zone</td>
                  <td className="">Walton Plaza</td>
                </tr>
                
                <tr>
                  <td className="font-extrabold text-ink-800">Verdict</td>
                  <td>
                    <span className="badge badge-brand">Best battery &amp; value</span>
                  </td>
                  <td>
                    <span className="badge badge-brand">Balanced all-rounder</span>
                  </td>
                  <td>
                    <span className="badge badge-brand">Most storage</span>
                  </td>
                  <td>
                    <span className="badge badge-brand">Cheapest option</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="card p-5 mt-5">
          <h2 className="text-[15px] font-extrabold mb-3">Add another product to compare</h2>
          
          <div className="input-group max-w-md mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <input className="input" placeholder="Search products to add…" />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-18%</span>
                
                <span className="absolute top-8 left-2 z-[2] badge badge-dark !text-[10px]">Mall</span>
                
                <span className="ph ph-a ratio-sq w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
                
              </Link>
              
              <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <div className="pcard-body">
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Realme C100x 6/128GB 8000mAh 45W 6.8"</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳11,499</span>
                  <span className="price-old">৳13,999</span>
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
                  <span className="text-2xs text-ink-400">(1,240)</span>
                  <span className="text-2xs text-ink-400 ml-auto">12.4k sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Dhaka</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Realme Official Store</span>
                </div>
                
              </div>
            </article>
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-12%</span>
                
                <span className="ph ph-b ratio-sq w-full">
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
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Walton 1.5 Ton Inverter Split AC WSI-KRYSTALINE</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳54,900</span>
                  <span className="price-old">৳62,500</span>
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
                  <span className="text-2xs text-ink-400">(386)</span>
                  <span className="text-2xs text-ink-400 ml-auto">386 sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Dhaka</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Walton Plaza Mirpur</span>
                </div>
                
              </div>
            </article>
            <article className="pcard card-hover group">
              
              <Link href="/product-details" className="block relative">
                
                <span className="discount-flag">-12%</span>
                
                <span className="ph ph-c ratio-sq w-full">
                  <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                    <path d="M11 19h2"></path>
                  </svg>
                </span>
                
              </Link>
              
              <button className="wish-btn" data-toggle-class="is-on" aria-label="Add to wishlist" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                </svg>
              </button>
              
              <div className="pcard-body">
                
                <Link href="/product-details" className="pcard-title block mb-1.5">Xiaomi Redmi Note 13 Pro 8/256GB Global</Link>
                
                <div className="flex items-end gap-2 mb-1">
                  <span className="price">৳28,990</span>
                  <span className="price-old">৳32,990</span>
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
                  <span className="text-2xs text-ink-400">(2,114)</span>
                  <span className="text-2xs text-ink-400 ml-auto">21.1k sold</span>
                </div>
                
                <div className="flex items-center gap-1.5 text-2xs text-ink-500 mb-2.5">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                  <span className="clamp-1">Dhaka</span>
                  <span className="text-ink-200">|</span>
                  <span className="clamp-1">Gadget Hub BD</span>
                </div>
                
              </div>
            </article>
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
          </div>
        </div>
        
      </main>
    </>
  );
}
