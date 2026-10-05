import Link from "next/link";

export default function BlogDetailsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <Link href="/blog">Blog</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Buying Guide</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-7">
          
          <article className="min-w-0">
            
            <span className="badge badge-brand mb-3">Buying Guide</span>
            
            <h1 className="font-display text-[28px] sm:text-[36px] font-extrabold leading-tight tracking-tight mb-4">How to spot a genuine smartphone before you pay</h1>
            
            <div className="flex flex-wrap items-center gap-3 mb-5 pb-5 border-b border-[#f0f1f5]">
              
              <span className="avatar avatar-md bg-ink-700">T</span>
              
              <div className="flex-1 min-w-0">
                <p className="text-[13.5px] font-extrabold">Tanvir Rahman</p>
                <p className="text-[12px] text-ink-500">Published 14 Aug 2026 · 8 min read · Updated 16 Aug 2026</p>
              </div>
              
              <div className="flex gap-1.5">
                <button className="btn btn-xs btn-outline" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="2.5"></circle>
                    <circle cx="6" cy="12" r="2.5"></circle>
                    <circle cx="18" cy="19" r="2.5"></circle>
                    <path d="m8 11 8-4M8 13l8 4"></path>
                  </svg>
                  Share
                </button>
                <button className="btn btn-xs btn-outline" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
                  </svg>
                  Save
                </button>
                <button className="btn btn-xs btn-outline" type="button">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 8V3h10v5"></path>
                    <rect x="4" y="8" width="16" height="8" rx="2"></rect>
                    <path d="M7 16h10v5H7z"></path>
                  </svg>
                  Print
                </button>
              </div>
            </div>
            
            <span className="ph ph-a h-[260px] sm:h-[380px] w-full rounded-2xl mb-6">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                <path d="M11 19h2"></path>
              </svg>
            </span>
            
            <div className="rich">
              
              <p className="!text-[16px]">Every month our trust team removes thousands of counterfeit listings — but the safest defence is a buyer who knows what to check. This guide walks through the exact five-minute inspection our own quality inspectors use.</p>
              
              <h2>1. Verify the IMEI before opening the box</h2>
              
              <p>
                Dial 
                <b>*#06#</b>
                 on the device and compare the IMEI with the sticker on the retail box and the one printed under the battery cover or SIM tray. All three must match. Then check the IMEI on the BTRC NEIR portal to confirm the handset is legally imported.
              </p>
              
              <blockquote>If a seller refuses to let you check the IMEI before payment, walk away. Genuine sellers never object.</blockquote>
              
              <h2>2. Inspect the seal and packaging</h2>
              
              <p>Original boxes use precise, factory-applied shrink wrap with clean, tight corners. Look for:</p>
              
              <ul>
                <li>Crisp printing with no colour bleed or pixelation</li>
                <li>A model and colour label that matches the handset exactly</li>
                <li>Untampered security stickers with holographic elements</li>
                <li>Accessories in sealed compartments, not loose in the box</li>
              </ul>
              
              <h2>3. Test the display and sensors</h2>
              
              <p>Open the dialler test menu, run a full-screen colour test, and check the touch response at the edges. Confirm the fingerprint sensor registers on the first try and the proximity sensor blanks the screen during calls.</p>
              
              <h2>4. Confirm the warranty card and service network</h2>
              
              <p>An official device includes a warranty card with the importer's stamp. Confirm the brand has authorised care centres in Bangladesh and that your model appears on their supported list.</p>
              
              <h2>5. Apply the price sanity test</h2>
              
              <table>
                <thead>
                  <tr>
                    <th>Situation</th>
                    <th>What it usually means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5–10% below market</td>
                    <td>Normal seller competition — safe</td>
                  </tr>
                  <tr>
                    <td>15–25% below market</td>
                    <td>Grey import or refurbished — ask questions</td>
                  </tr>
                  <tr>
                    <td>40%+ below market</td>
                    <td>Almost certainly counterfeit — avoid</td>
                  </tr>
                </tbody>
              </table>
              
              <h2>What HaatBazar does for you</h2>
              
              <p>Every phone sold by a Mall store is sourced from an authorised importer, and our buyer protection covers you for 7 days after delivery. If a device fails any check above, open a return in one tap and we arrange free pickup.</p>
              
              <p>Still unsure? Book a verified mobile technician near you to inspect the device for a small fee — many of them do house calls the same day.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#f0f1f5]">
              <Link href="/blog" className="chip !h-8">#smartphone</Link>
              <Link href="/blog" className="chip !h-8">#buying guide</Link>
              <Link href="/blog" className="chip !h-8">#counterfeit</Link>
              <Link href="/blog" className="chip !h-8">#IMEI</Link>
              <Link href="/blog" className="chip !h-8">#warranty</Link>
              <Link href="/blog" className="chip !h-8">#consumer tips</Link>
            </div>
            
            <div className="card p-5 mt-6 flex flex-col sm:flex-row gap-4 items-center">
              
              <span className="avatar avatar-xl bg-ink-700">T</span>
              
              <div className="min-w-0 text-center sm:text-left">
                <p className="text-[15px] font-extrabold">Tanvir Rahman</p>
                <p className="text-[12.5px] text-ink-500 mb-2">Co-founder &amp; CEO at HaatBazar. Writes about consumer protection, retail and building marketplaces in Bangladesh.</p>
                
                <div className="flex gap-2 justify-center sm:justify-start">
                  <button className="btn btn-xs btn-outline" type="button">Follow</button>
                  <button className="btn btn-xs btn-outline" type="button">All posts</button>
                </div>
              </div>
            </div>
            
            <div className="card p-5 mt-6">
              <h2 className="text-[16px] font-extrabold mb-3">Comments (24)</h2>
              
              <div className="flex gap-3 mb-5">
                <span className="avatar avatar-md bg-brand-500">N</span>
                
                <div className="flex-1">
                  <textarea className="textarea !min-h-[80px]" placeholder="Share your thoughts…"></textarea>
                  
                  <div className="flex justify-end mt-2">
                    <button className="btn btn-sm btn-primary" type="button">Post comment</button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="avatar avatar-md bg-ink-700">I</span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13.5px] font-extrabold">Imran Hossain</p>
                      <span className="text-[11.5px] text-ink-400">2 days ago</span>
                    </div>
                    
                    <p className="text-[13px] text-ink-600 mt-1">The IMEI tip saved me last week — the box and handset numbers did not match and the seller could not explain why.</p>
                    
                    <div className="flex gap-3 mt-1.5 text-[12px] font-bold text-ink-400">
                      <button className="hover:text-brand-600" type="button">Like</button>
                      <button className="hover:text-brand-600" type="button">Reply</button>
                      <button className="hover:text-brand-600" type="button">Report</button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="avatar avatar-md bg-ink-700">S</span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13.5px] font-extrabold">Sadia Islam</p>
                      <span className="text-[11.5px] text-ink-400">3 days ago</span>
                    </div>
                    
                    <p className="text-[13px] text-ink-600 mt-1">Please write one for laptops too! Same problem with grey imports.</p>
                    
                    <div className="flex gap-3 mt-1.5 text-[12px] font-bold text-ink-400">
                      <button className="hover:text-brand-600" type="button">Like</button>
                      <button className="hover:text-brand-600" type="button">Reply</button>
                      <button className="hover:text-brand-600" type="button">Report</button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="avatar avatar-md bg-ink-700">R</span>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-[13.5px] font-extrabold">Rakib Mia</p>
                      <span className="text-[11.5px] text-ink-400">5 days ago</span>
                    </div>
                    
                    <p className="text-[13px] text-ink-600 mt-1">Very useful. I always check the warranty card now before paying the rider.</p>
                    
                    <div className="flex gap-3 mt-1.5 text-[12px] font-bold text-ink-400">
                      <button className="hover:text-brand-600" type="button">Like</button>
                      <button className="hover:text-brand-600" type="button">Reply</button>
                      <button className="hover:text-brand-600" type="button">Report</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="btn btn-sm btn-outline btn-block mt-4" type="button">Load more comments</button>
            </div>
            
          </article>
          
          <aside className="space-y-4">
            <div className="lg:sticky-24 space-y-4">
              
              <div className="card p-5">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-400 mb-2.5">Table of contents</p>
                
                <div className="space-y-1.5">
                  <a href="#" className="block text-[12.5px] text-brand-600 font-bold hover:text-brand-600">1. Verify the IMEI</a>
                  <a href="#" className="block text-[12.5px] text-ink-600 hover:text-brand-600">2. Inspect the seal</a>
                  <a href="#" className="block text-[12.5px] text-ink-600 hover:text-brand-600">3. Test display &amp; sensors</a>
                  <a href="#" className="block text-[12.5px] text-ink-600 hover:text-brand-600">4. Confirm the warranty</a>
                  <a href="#" className="block text-[12.5px] text-ink-600 hover:text-brand-600">5. Price sanity test</a>
                  <a href="#" className="block text-[12.5px] text-ink-600 hover:text-brand-600">6. What HaatBazar does</a>
                </div>
              </div>
              
              <div className="card p-5">
                <p className="text-[15px] font-extrabold mb-3">Related posts</p>
                
                <div className="space-y-3">
                  <Link href="/blog-details" className="flex gap-2.5">
                    <span className="ph ph-c w-16 h-16 rounded-lg shrink-0">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4 4v14H6z"></path>
                        <path d="M14 3v4h4"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-bold clamp-2">10 questions to ask before hiring an AC technician</p>
                      <p className="text-[11px] text-ink-400 mt-1">12 Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/blog-details" className="flex gap-2.5">
                    <span className="ph ph-d w-16 h-16 rounded-lg shrink-0">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4 4v14H6z"></path>
                        <path d="M14 3v4h4"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-bold clamp-2">Eid shopping on a budget: 25 gifts under ৳1,000</p>
                      <p className="text-[11px] text-ink-400 mt-1">10 Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/blog-details" className="flex gap-2.5">
                    <span className="ph ph-e w-16 h-16 rounded-lg shrink-0">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4 4v14H6z"></path>
                        <path d="M14 3v4h4"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-bold clamp-2">From Jamalpur to nationwide: a nokshi kantha story</p>
                      <p className="text-[11px] text-ink-400 mt-1">8 Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/blog-details" className="flex gap-2.5">
                    <span className="ph ph-f w-16 h-16 rounded-lg shrink-0">
                      <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 3h8l4 4v14H6z"></path>
                        <path d="M14 3v4h4"></path>
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-bold clamp-2">Monsoon home maintenance checklist for Dhaka flats</p>
                      <p className="text-[11px] text-ink-400 mt-1">5 Aug 2026</p>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="card p-5 bg-brand-50 border-brand-100">
                <p className="text-[15px] font-extrabold mb-1.5">Shop verified phones</p>
                
                <p className="text-[12.5px] text-ink-600 mb-3">Browse Mall stores with official warranty and 7-day returns.</p>
                
                <Link href="/products" className="btn btn-sm btn-primary btn-block">Browse smartphones</Link>
              </div>
              
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
