import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">Terms of Service</span>
          </nav>
        </div>
      </div>
      <main className="shell py-8">
        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)] gap-6">
          
          <aside className="lg:sticky-24 h-max">
            <div className="card p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-wider text-ink-400 mb-2">On this page</p>
              
              <a href="#s0" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Definitions</a>
              <a href="#s1" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Eligibility and accounts</a>
              <a href="#s2" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Marketplace role</a>
              <a href="#s3" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Listings and content</a>
              <a href="#s4" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Pricing, payment and taxes</a>
              <a href="#s5" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Delivery and performance</a>
              <a href="#s6" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Cancellations, returns and refunds</a>
              <a href="#s7" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Reviews and community rules</a>
              <a href="#s8" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Intellectual property</a>
              <a href="#s9" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Limitation of liability</a>
              <a href="#s10" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Suspension and termination</a>
              <a href="#s11" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Governing law and disputes</a>
              <a href="#s12" className="block py-1.5 text-[12.5px] text-ink-600 hover:text-brand-600">Changes to these Terms</a>
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
            <h1 className="font-display text-[28px] font-extrabold tracking-tight mb-2">Terms of Service</h1>
            
            <p className="text-[12.5px] text-ink-400 mb-5">Last updated: 1 August 2026 · Effective from 15 August 2026</p>
            
            <div className="rich">
              <p className="!text-[15px]">These Terms govern your use of HaatBazar — our website, mobile apps and all related services. By creating an account, placing an order, booking a service or listing a business, you agree to these Terms in full.</p>
              
              <h2 id="s0">1. Definitions</h2>
              <p>“Platform” means the HaatBazar website and apps. “Customer” means any person who browses, buys or books. “Vendor” means a product seller or service provider listing on the Platform. “Order” means a purchase of goods; “Booking” means an appointment for a service; “Lead” means a customer enquiry sent to a provider.</p>
              <h2 id="s1">2. Eligibility and accounts</h2>
              <p>You must be at least 18 years old, or use the Platform under the supervision of a parent or guardian. You are responsible for keeping your password confidential and for all activity under your account.</p>
              <ul>
                <li>One person may hold one customer account.</li>
                <li>Vendor accounts require identity verification (NID) and, where applicable, a trade licence.</li>
                <li>We may suspend accounts that provide false information, abuse promotions, or violate these Terms.</li>
              </ul>
              <h2 id="s2">3. Marketplace role</h2>
              <p>HaatBazar is a marketplace. Contracts for goods are formed between the customer and the seller; contracts for services are formed between the customer and the provider. We facilitate discovery, communication, payment and dispute resolution, but we are not the manufacturer or the service performer unless a listing is explicitly marked “Fulfilled by HaatBazar”.</p>
              <h2 id="s3">4. Listings and content</h2>
              <p>Vendors are solely responsible for the accuracy of their listings, including price, stock, specifications, images and service descriptions. Prohibited listings include counterfeit goods, weapons, narcotics, prescription-only medicine without licence, wildlife products, adult content, and anything illegal under Bangladeshi law.</p>
              <h2 id="s4">5. Pricing, payment and taxes</h2>
              <p>All prices are in Bangladeshi Taka and include VAT unless stated otherwise. We accept mobile financial services, cards, bank transfer, EMI and cash on delivery. Where a price is listed in obvious error, we may cancel the order and refund you in full.</p>
              <h2 id="s5">6. Delivery and performance</h2>
              <p>Delivery estimates are indicative. Risk passes to the customer on delivery. For services, the provider must arrive within the agreed slot or notify the customer at least 2 hours in advance.</p>
              <h2 id="s6">7. Cancellations, returns and refunds</h2>
              <p>
                Cancellation and return rights are described in our 
                <Link href="/return-policy">Return &amp; Refund Policy</Link>
                , which forms part of these Terms.
              </p>
              <h2 id="s7">8. Reviews and community rules</h2>
              <p>Reviews must reflect genuine experience. We remove reviews containing abuse, personal data, competitor promotion or paid manipulation, and we may suspend accounts that post them.</p>
              <h2 id="s8">9. Intellectual property</h2>
              <p>The HaatBazar name, logo, design and software are our property. Vendors grant us a non-exclusive licence to display their content for the purpose of operating and marketing the Platform.</p>
              <h2 id="s9">10. Limitation of liability</h2>
              <p>To the maximum extent permitted by law, our aggregate liability for any claim is limited to the value of the order or booking concerned. We are not liable for indirect or consequential loss.</p>
              <h2 id="s10">11. Suspension and termination</h2>
              <p>We may suspend or terminate access for breach of these Terms, fraud, repeated policy violations or legal requirement. You may close your account at any time from your profile settings.</p>
              <h2 id="s11">12. Governing law and disputes</h2>
              <p>These Terms are governed by the laws of Bangladesh. Disputes are subject to the exclusive jurisdiction of the courts of Dhaka. We encourage you to contact our resolution centre first — most disputes are settled within 7 days.</p>
              <h2 id="s12">13. Changes to these Terms</h2>
              <p>We may update these Terms. Material changes are notified by email or in-app notice at least 7 days before they take effect. Continued use after that date means you accept the updated Terms.</p>
              
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
