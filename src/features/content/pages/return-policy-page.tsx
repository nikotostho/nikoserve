import Link from "next/link";

export default function ReturnPolicyPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Return &amp; Refund Policy</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] gap-6">
          
          <aside className="lg:sticky-24 h-max">
            <div className="card p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-400 mb-2">On this page</p>
              
              <a href="#s0" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Return window</a>
              <a href="#s1" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Valid return reasons</a>
              <a href="#s2" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Non-returnable items</a>
              <a href="#s3" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Condition requirements</a>
              <a href="#s4" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">How to request a return</a>
              <a href="#s5" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Refund methods and timelines</a>
              <a href="#s6" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Cancellations</a>
              <a href="#s7" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Exchanges</a>
              <a href="#s8" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Warranty claims</a>
              <a href="#s9" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Disputes</a>
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
            <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">Return &amp; Refund Policy</h1>
            
            <p className="text-[12.5px] text-ink-400 mb-5">Last updated: 1 August 2026 · Effective from 15 August 2026</p>
            
            <div className="rich">
              <p className="!text-[15px]">We want you to be completely satisfied. This Policy explains when you can return an item, how the process works, how long refunds take, and what is not eligible.</p>
              
              <h2 id="s0">1. Return window</h2>
              <p>
                You may request a return within 
                <b>7 days</b>
                 of delivery for most categories. Selected electronics carry a 3-day dead-on-arrival window, and fresh food must be reported within 24 hours.
              </p>
              <h2 id="s1">2. Valid return reasons</h2>
              <ul>
                <li>Item arrived damaged or broken</li>
                <li>Wrong item, size, colour or variant delivered</li>
                <li>Item is defective or does not power on</li>
                <li>Item significantly differs from its description or photos</li>
                <li>Counterfeit or unauthorised product</li>
                <li>Missing parts or accessories</li>
              </ul>
              <h2 id="s2">3. Non-returnable items</h2>
              <p>For hygiene, safety and legal reasons the following cannot be returned unless they arrive damaged: innerwear and swimwear, opened cosmetics and skincare, perishable food, medicines, customised or made-to-order items, digital goods and gift cards, and items with a broken security seal.</p>
              <h2 id="s3">4. Condition requirements</h2>
              <p>Items must be returned in their original packaging with all tags, manuals, free gifts and accessories included. Products showing signs of use, installation damage or unauthorised repair may be rejected.</p>
              <h2 id="s4">5. How to request a return</h2>
              <ol>
                <li>
                  Go to 
                  <b>My Orders</b>
                   → select the order → 
                  <b>Return / Cancel</b>
                </li>
                <li>Choose the item and the reason, and upload clear photos</li>
                <li>Submit — you receive a return ID immediately</li>
                <li>Our courier collects the parcel free of charge within 48 hours</li>
                <li>The seller inspects the item within 2 working days</li>
                <li>Your refund is approved and issued</li>
              </ol>
              <h2 id="s5">6. Refund methods and timelines</h2>
              <table>
                <thead>
                  <tr>
                    <th>Original payment</th>
                    <th>Refund destination</th>
                    <th>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bKash / Nagad / Rocket</td>
                    <td>Same wallet</td>
                    <td>1–3 working days</td>
                  </tr>
                  <tr>
                    <td>Card</td>
                    <td>Same card</td>
                    <td>5–10 working days</td>
                  </tr>
                  <tr>
                    <td>Internet banking</td>
                    <td>Same bank account</td>
                    <td>3–7 working days</td>
                  </tr>
                  <tr>
                    <td>Cash on delivery</td>
                    <td>Bank / bKash of your choice</td>
                    <td>3–7 working days</td>
                  </tr>
                  <tr>
                    <td>Any method</td>
                    <td>HaatBazar wallet</td>
                    <td>Instant</td>
                  </tr>
                </tbody>
              </table>
              <h2 id="s6">7. Cancellations</h2>
              <p>Orders can be cancelled free of charge any time before the seller ships them. After shipping, refuse the parcel at the door or file a return. Service bookings can be cancelled up to 4 hours before the slot without any charge.</p>
              <h2 id="s7">8. Exchanges</h2>
              <p>Where the seller has stock, you can request an exchange for a different size or colour instead of a refund. Exchange parcels ship within 2 working days of the returned item passing inspection.</p>
              <h2 id="s8">9. Warranty claims</h2>
              <p>Warranty issues discovered after the return window are handled by the brand’s service centre. Open a support ticket and we will share the nearest authorised centre and help you follow up.</p>
              <h2 id="s9">10. Disputes</h2>
              <p>If a return is rejected and you disagree, escalate to our Resolution Centre within 7 days. An independent HaatBazar agent reviews the evidence and issues a final decision, usually within 5 working days.</p>
              
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
