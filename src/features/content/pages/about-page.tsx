import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="ph ph-c grid-noise text-white">
        <div className="shell py-14 sm:py-20 relative z-10 max-w-3xl">
          
          <span className="badge !bg-white/20 !text-white mb-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
            </svg>
            Our story
          </span>
          
          <h1 className="font-display text-[32px] sm:text-[46px] font-extrabold leading-[1.1] tracking-tight mb-4">Connecting every Bangladeshi to the products and services they need</h1>
          
          <p className="text-[15px] text-white/85 leading-relaxed">HaatBazar is Bangladesh's first platform where you can buy a smartphone and book an AC technician in the same session — one account, one cart, one trusted experience.</p>
        </div>
      </section>
      <main className="shell py-12">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">4.2M</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Monthly shoppers</p>
          </div>
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">48,320</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Product sellers</p>
          </div>
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">132,400</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Service providers</p>
          </div>
          <div className="card p-5 text-center">
            <p className="font-display text-[30px] font-extrabold text-brand-600">64</p>
            <p className="text-[12.5px] text-ink-500 mt-1">Districts served</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          
          <div>
            <span className="ph ph-b h-[300px] w-full rounded-2xl">
              <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 8h16v12H4z"></path>
                <path d="M9 8V4h6v4"></path>
              </svg>
            </span>
          </div>
          
          <div className="rich">
            <h2 className="!mt-0">Why we exist</h2>
            
            <p>In 2019 our founders ran a small electronics shop in Mirpur. Customers who bought an air conditioner always asked the same question: “Who will install it?” There was no reliable answer — just a phone number scribbled on a business card.</p>
            
            <p>That gap became HaatBazar. We built a single platform where a verified seller can list a product and a verified technician can list a service, so customers never have to choose between convenience and trust.</p>
            
            <p>Today more than 180,000 businesses — from Dhaka mall stores to single-person workshops in Jamalpur — earn a living on HaatBazar, and 4.2 million people shop and book with us every month.</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z"></path>
              </svg>
            </span>
            <p className="text-[15px] font-extrabold mb-1.5">Customer obsession</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Every decision starts with the shopper. If it is not better for them, we do not ship it.</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </span>
            <p className="text-[15px] font-extrabold mb-1.5">Trust by default</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Manual verification, secure payments and honest reviews — no shortcuts.</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3.2"></circle>
                <path d="M2 21a7 7 0 0 1 14 0"></path>
                <path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"></path>
              </svg>
            </span>
            <p className="text-[15px] font-extrabold mb-1.5">Local empowerment</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">We help small businesses in every district compete with the biggest brands.</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z"></path>
              </svg>
            </span>
            <p className="text-[15px] font-extrabold mb-1.5">Speed matters</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Fast pages, fast delivery and fast answers. Waiting is a design failure.</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"></path>
              </svg>
            </span>
            <p className="text-[15px] font-extrabold mb-1.5">Built for Bangladesh</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">bKash, cash on delivery, Bangla support and district-level logistics.</p>
          </div>
          <div className="card p-5">
            <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center mb-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="9" r="5"></circle>
                <path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"></path>
              </svg>
            </span>
            <p className="text-[15px] font-extrabold mb-1.5">Fair for sellers</p>
            <p className="text-[13px] text-ink-500 leading-relaxed">Low commission, weekly payouts and transparent policies.</p>
          </div>
        </div>
        
        <div className="card p-6 sm:p-8 mb-12">
          <h2 className="font-display text-[22px] font-extrabold mb-6">Our journey</h2>
          
          <div className="timeline">
            <div className="tl-item is-done">
              <p className="text-[14px] font-extrabold">2019 — The idea</p>
              <p className="text-[13px] text-ink-500">Founded in a Mirpur electronics shop after one too many “who will install it?” questions.</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[14px] font-extrabold">2020 — First 1,000 sellers</p>
              <p className="text-[13px] text-ink-500">Launched the product marketplace during the pandemic, delivering essentials in Dhaka.</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[14px] font-extrabold">2021 — Services launch</p>
              <p className="text-[13px] text-ink-500">Added the local directory with 8,000 verified providers in 6 cities.</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[14px] font-extrabold">2023 — Nationwide</p>
              <p className="text-[13px] text-ink-500">Reached all 64 districts with our own logistics network.</p>
            </div>
            <div className="tl-item is-done">
              <p className="text-[14px] font-extrabold">2025 — 1 million products</p>
              <p className="text-[13px] text-ink-500">Crossed 1.2M listings and ৳240 crore paid out to sellers.</p>
            </div>
            <div className="tl-item is-active">
              <p className="text-[14px] font-extrabold">2026 — What’s next</p>
              <p className="text-[13px] text-ink-500">Same-hour delivery in 12 cities and an AI assistant that books services for you.</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="font-display text-[22px] font-extrabold mb-5 text-center">Leadership team</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-a w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Tanvir Rahman</p>
              <p className="text-[12px] text-ink-500">Co-founder &amp; CEO</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-b w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Sadia Karim</p>
              <p className="text-[12px] text-ink-500">Co-founder &amp; COO</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-c w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Arif Hossain</p>
              <p className="text-[12px] text-ink-500">Chief Technology Officer</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-d w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Nabila Chowdhury</p>
              <p className="text-[12px] text-ink-500">VP, Seller Growth</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-e w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Mahmud Alam</p>
              <p className="text-[12px] text-ink-500">VP, Logistics</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-f w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Farhana Yeasmin</p>
              <p className="text-[12px] text-ink-500">Head of Trust &amp; Safety</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-g w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Rezaul Karim</p>
              <p className="text-[12px] text-ink-500">Head of Service Network</p>
            </div>
            <div className="card p-5 text-center card-hover">
              <span className="ph ph-h w-20 h-20 rounded-2xl mx-auto mb-3">
                <svg className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.5"></circle>
                  <path d="M5 21a7 7 0 0 1 14 0"></path>
                </svg>
              </span>
              <p className="text-[14px] font-extrabold">Ishrat Jahan</p>
              <p className="text-[12px] text-ink-500">Head of Customer Care</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-2xl ph ph-a grid-noise p-8 text-white text-center">
          <h2 className="font-display text-[26px] font-extrabold mb-2 relative z-10">Join the marketplace</h2>
          
          <p className="text-[14px] text-white/80 mb-5 relative z-10">Whether you sell products or provide services, your next customer is here.</p>
          
          <div className="flex flex-wrap justify-center gap-2.5 relative z-10">
            <Link href="/become-seller" className="btn btn-lg !bg-white !text-brand-600">Start selling</Link>
            <Link href="/become-provider" className="btn btn-lg !bg-white/15 !text-white">List a service</Link>
          </div>
        </div>
        
      </main>
    </>
  );
}
