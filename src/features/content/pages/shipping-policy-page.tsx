import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Shipping &amp; Delivery Policy</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] gap-6">
          
          <aside className="lg:sticky-24 h-max">
            <div className="card p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-400 mb-2">On this page</p>
              
              <a href="#s0" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Coverage</a>
              <a href="#s1" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Delivery timelines</a>
              <a href="#s2" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Delivery charges</a>
              <a href="#s3" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Order processing</a>
              <a href="#s4" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Delivery attempts</a>
              <a href="#s5" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Packaging standards</a>
              <a href="#s6" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Damaged or lost parcels</a>
              <a href="#s7" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Store pickup</a>
            </div>
            
            <div className="card p-4 mt-4">
              <p className="text-[12.5px] font-extrabold mb-2">Related policies</p>
              
              <div className="space-y-1.5 text-[12.5px]">
                <Link href="/terms" className="block link-muted">Terms of Service</Link>
                <Link href="/privacy-policy" className="block link-muted">Privacy Policy</Link>
                <Link href="/return-policy" className="block link-muted">Return &amp; Refund Policy</Link>
                <Link href="/shipping-policy" className="block link-muted">Shipping Policy</Link>
                <Link href="/terms" className="block link-muted">Seller Agreement</Link>
              </div>
            </div>
          </aside>
          
          <div className="card p-6 sm:p-8">
            <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">Shipping &amp; Delivery Policy</h1>
            
            <p className="text-[12.5px] text-ink-400 mb-5">Last updated: 1 August 2026 · Effective from 15 August 2026</p>
            
            <div className="rich">
              <p className="!text-[15px]">This Policy explains delivery areas, timelines, charges, packaging standards and what happens when something goes wrong in transit.</p>
              
              <h2 id="s0">1. Coverage</h2>
              <p>We deliver to all 64 districts of Bangladesh through HaatBazar Express and partner couriers, covering over 4,800 unions. A small number of char and hill areas may require pickup from the nearest hub.</p>
              <h2 id="s1">2. Delivery timelines</h2>
              <table>
                <thead>
                  <tr>
                    <th>Zone</th>
                    <th>Standard</th>
                    <th>Express</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dhaka metro</td>
                    <td>Next day</td>
                    <td>Same day (order before 2 PM)</td>
                  </tr>
                  <tr>
                    <td>Chattogram, Sylhet, Khulna, Rajshahi</td>
                    <td>2 working days</td>
                    <td>Next day</td>
                  </tr>
                  <tr>
                    <td>Other district towns</td>
                    <td>3 working days</td>
                    <td>2 working days</td>
                  </tr>
                  <tr>
                    <td>Upazila &amp; rural</td>
                    <td>3–5 working days</td>
                    <td>Not available</td>
                  </tr>
                </tbody>
              </table>
              <h2 id="s2">3. Delivery charges</h2>
              <p>Charges start at ৳60 inside Dhaka and ৳120 outside, calculated on weight, size and seller location. Multiple sellers mean multiple shipments, each with its own fee, always shown before payment. Many sellers offer free delivery above a minimum order value.</p>
              <h2 id="s3">4. Order processing</h2>
              <p>Sellers must confirm and hand over parcels within 24 hours (48 hours for made-to-order items). You receive an SMS with tracking as soon as the courier scans your parcel.</p>
              <h2 id="s4">5. Delivery attempts</h2>
              <p>Our rider attempts delivery up to 3 times and calls before each attempt. After 3 failed attempts the parcel returns to the seller and prepaid amounts are refunded, minus the return shipping fee where the failure was avoidable.</p>
              <h2 id="s5">6. Packaging standards</h2>
              <p>Fragile items must be bubble-wrapped and marked; liquids must be sealed and double-bagged; electronics must ship in original boxes. Sellers who repeatedly breach packaging standards face penalties.</p>
              <h2 id="s6">7. Damaged or lost parcels</h2>
              <p>Report damage within 48 hours with photos of the parcel and item. Lost parcels are investigated within 5 working days; if confirmed lost, you receive a full refund or replacement at your choice.</p>
              <h2 id="s7">8. Store pickup</h2>
              <p>Selected sellers offer free pickup from their outlet. Choose “Store pickup” at checkout, wait for the ready notification, and collect within 3 days with your order ID.</p>
              
              <blockquote>
                Questions about this policy? Email 
                <Link href="/contact">legal@haatbazar.com.bd</Link>
                 or call 16247. We respond to every policy enquiry within 3 working days.
              </blockquote>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-[#f0f1f5]">
              <button className="btn btn-sm btn-outline" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 8V3h10v5"></path>
                  <rect x="4" y="8" width="16" height="8" rx="2"></rect>
                  <path d="M7 16h10v5H7z"></path>
                </svg>
                Print
              </button>
              <button className="btn btn-sm btn-outline" type="button">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v12M7 11l5 5 5-5M4 21h16"></path>
                </svg>
                Download PDF
              </button>
              <Link href="/contact" className="btn btn-sm btn-outline">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 1 1-3.2-6.4"></path>
                  <path d="M8 12h8M8 9h5"></path>
                </svg>
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
