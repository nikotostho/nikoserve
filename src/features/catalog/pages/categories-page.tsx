import Link from "next/link";

export default function CategoriesPage() {
  return (
    <>
      <div className="bg-white border-b border-[#e7e9ef]">
        <div className="shell py-3">
          <nav className="crumb">
            <Link href="/">Home</Link>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6 6 6-6 6"></path>
            </svg>
            <span className="is-current">All Categories</span>
          </nav>
        </div>
      </div>
      <main className="shell py-6">
        
        <div className="card p-5 mb-5">
          <h1 className="font-display text-[24px] font-extrabold tracking-tight mb-1.5">Browse all categories</h1>
          
          <p className="text-[13px] text-ink-500 mb-4">Everything on HaatBazar in one place — 1.2 million products from 48,000 sellers and 132,000 verified service providers across 64 districts.</p>
          
          <div className="input-group max-w-lg">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
            <input className="input" placeholder="Search a category, e.g. 'AC repair' or 'smartphones'" />
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-brand-500 text-white grid place-items-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l1 14H5z"></path>
              <path d="M9 7a3 3 0 0 1 6 0"></path>
            </svg>
          </span>
          
          <div>
            <h2 className="font-display text-[19px] font-extrabold">Shop by product category</h2>
            <p className="text-[12.5px] text-ink-500">10 main categories · 480 sub-categories</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-9">
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                  <path d="M9 20h6M12 16v4"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Electronics &amp; Gadgets</Link>
                
                <p className="text-[11.5px] text-ink-500">184,210 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Smartphones</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Laptops</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Monitors</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cameras</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Headphones</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Smart Watches</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Power Banks</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Printers</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2.5"></rect>
                  <path d="M11 19h2"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Mobile &amp; Tablets</Link>
                
                <p className="text-[11.5px] text-ink-500">96,420 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Android Phones</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">iPhones</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Tablets</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cases &amp; Covers</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Screen Protectors</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Chargers</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cables</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Memory Cards</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3 4 6l2 3 1-1v13h10V8l1 1 2-3-4-3-4 2z"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Fashion &amp; Lifestyle</Link>
                
                <p className="text-[11.5px] text-ink-500">241,860 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Men's Clothing</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Women's Clothing</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Sarees</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Panjabi</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Shoes</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bags</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Watches</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Jewellery</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Health &amp; Beauty</Link>
                
                <p className="text-[11.5px] text-ink-500">58,330 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Skin Care</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Hair Care</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Makeup</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Fragrances</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Personal Care</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Health Devices</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Supplements</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Baby Care</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20V9.5l8-6 8 6V20"></path>
                  <path d="M9.5 20v-6h5v6"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Home &amp; Living</Link>
                
                <p className="text-[11.5px] text-ink-500">112,940 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Furniture</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bedding</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Kitchenware</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Home Decor</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Lighting</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cleaning</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Storage</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Garden</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 7h12l1 14H5z"></path>
                  <path d="M9 7a3 3 0 0 1 6 0"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Groceries &amp; Food</Link>
                
                <p className="text-[11.5px] text-ink-500">41,205 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Rice &amp; Dal</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cooking Oil</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Spices</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Snacks</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Beverages</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Dairy</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Frozen Food</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Organic</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="13" rx="2"></rect>
                  <path d="M3 12h18M12 8v13"></path>
                  <path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Baby, Kids &amp; Toys</Link>
                
                <p className="text-[11.5px] text-ink-500">33,780 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Diapers</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Baby Food</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Toys</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Kids Clothing</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">School Supplies</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Strollers</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Feeding</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bath</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Sports &amp; Outdoor</Link>
                
                <p className="text-[11.5px] text-ink-500">27,110 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cricket</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Football</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Gym Equipment</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cycling</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Camping</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Sportswear</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Yoga</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Swimming</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 16v-4l2-5h10l2 5v4"></path>
                  <path d="M3 16h18v3h-2l-1-2H6l-1 2H3z"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Automobile Parts</Link>
                
                <p className="text-[11.5px] text-ink-500">19,640 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Car Accessories</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bike Accessories</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Engine Oil</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Tyres</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Batteries</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Car Care</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Helmets</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Tools</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 0-2 2z"></path>
                  <path d="M8 7h7"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/products" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Books &amp; Stationery</Link>
                
                <p className="text-[11.5px] text-ink-500">22,470 products</p>
              </div>
              
              <Link href="/products" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Academic Books</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Novels</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Islamic Books</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Notebooks</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pens</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Art Supplies</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Office Supplies</Link>
              <Link href="/products" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Calculators</Link>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <span className="w-9 h-9 rounded-xl bg-service-500 text-white grid place-items-center">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
              <path d="M13 6l5 5"></path>
            </svg>
          </span>
          
          <div>
            <h2 className="font-display text-[19px] font-extrabold">Find a local service</h2>
            <p className="text-[12.5px] text-ink-500">10 main categories · 360 sub-categories</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-9">
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4.5 19 9l-9 9H5v-5z"></path>
                  <path d="M13 6l5 5"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Home Services</Link>
                
                <p className="text-[11.5px] text-ink-500">18,220 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Electrician</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Plumber</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Carpenter</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Painter</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cleaning</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pest Control</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Masonry</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Interior</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M12 10c0-4 6-5 6-1s-4 3-6 3M12 14c0 4-6 5-6 1s4-3 6-3M10 12c-4 0-5-6-1-6s3 4 3 6M14 12c4 0 5 6 1 6s-3-4-3-6"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">AC &amp; Appliance Repair</Link>
                
                <p className="text-[11.5px] text-ink-500">9,860 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">AC Service</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Fridge Repair</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Washing Machine</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Microwave</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">TV Repair</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Water Filter</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Geyser</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Oven</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2.5"></circle>
                  <circle cx="6" cy="18" r="2.5"></circle>
                  <path d="M8 8l12 10M8 16 20 6"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Beauty &amp; Salon</Link>
                
                <p className="text-[11.5px] text-ink-500">12,410 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Ladies Parlour</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Gents Salon</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bridal Makeup</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Spa</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Hair Treatment</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Home Service</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Nail Art</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Skin Clinic</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 4v5a4 4 0 0 0 8 0V4"></path>
                  <path d="M10 13v3a4 4 0 0 0 8 0v-2"></path>
                  <circle cx="18" cy="10" r="2"></circle>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Doctors &amp; Clinics</Link>
                
                <p className="text-[11.5px] text-ink-500">15,970 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">General Physician</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Dentist</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Child Specialist</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Gynaecologist</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Diagnostic</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Physiotherapy</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Eye Care</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Psychologist</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-4 9 4-9 4z"></path>
                  <path d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Tutors &amp; Coaching</Link>
                
                <p className="text-[11.5px] text-ink-500">21,540 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Home Tutor</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">IELTS</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Coaching Centre</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Online Tuition</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Quran Teacher</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Music</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Art Class</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Computer Training</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 21h10l1-8H6z"></path>
                  <path d="M6 13a4 4 0 0 1 2-7 4 4 0 0 1 8 0 4 4 0 0 1 2 7"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Restaurants &amp; Catering</Link>
                
                <p className="text-[11.5px] text-ink-500">30,860 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Restaurants</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Fast Food</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Biryani House</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Catering</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cake Shop</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Chinese</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Thai</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Buffet</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Event &amp; Wedding</Link>
                
                <p className="text-[11.5px] text-ink-500">8,220 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Wedding Planner</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Photographer</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Decorator</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Community Centre</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Car Rental</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Sound System</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Mehendi</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Holud Stage</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"></path>
                  <circle cx="6.5" cy="17.5" r="1.5"></circle>
                  <circle cx="17.5" cy="17.5" r="1.5"></circle>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Packers &amp; Movers</Link>
                
                <p className="text-[11.5px] text-ink-500">5,940 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">House Shifting</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Office Shifting</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Truck Rental</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pickup Van</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Courier</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Cargo</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Labour</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Storage</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21 4-9 16-2-6-6-2z"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Travel Agents</Link>
                
                <p className="text-[11.5px] text-ink-500">6,780 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Air Ticket</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Hajj &amp; Umrah</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Visa Processing</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Tour Package</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Hotel Booking</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Passport Help</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Student Visa</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bus Ticket</Link>
            </div>
          </div>
          
          <div className="card overflow-hidden card-hover">
            
            <div className="flex items-center gap-3 p-4 border-b border-[#e7e9ef]">
              
              <span className="w-11 h-11 rounded-xl bg-service-50 text-service-600 grid place-items-center shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="9" r="2"></circle>
                  <circle cx="12" cy="7" r="2"></circle>
                  <circle cx="17" cy="9" r="2"></circle>
                  <path d="M8 15a4 4 0 0 1 8 0c0 3-2 4-4 4s-4-1-4-4z"></path>
                </svg>
              </span>
              
              <div className="min-w-0 flex-1">
                <Link href="/services" className="text-[14.5px] font-extrabold clamp-1 hover:text-brand-600">Pet Care</Link>
                
                <p className="text-[11.5px] text-ink-500">2,410 providers</p>
              </div>
              
              <Link href="/services" className="btn btn-xs btn-outline shrink-0">View</Link>
            </div>
            
            <div className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Vet Doctor</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pet Grooming</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pet Shop</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pet Food</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Pet Boarding</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Training</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Aquarium</Link>
              <Link href="/services" className="text-[12.5px] text-ink-600 hover:text-brand-600 clamp-1">Bird Care</Link>
            </div>
          </div>
        </div>
        
        <div className="card p-5">
          <h2 className="font-display text-[17px] font-extrabold mb-3">Browse by city</h2>
          
          <div className="flex flex-wrap gap-2">
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Dhaka
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Chattogram
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Khulna
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Rajshahi
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Sylhet
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Barishal
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Rangpur
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Mymensingh
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Cumilla
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Narayanganj
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Gazipur
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Bogura
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Jessore
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Cox's Bazar
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Dinajpur
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Faridpur
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Tangail
            </Link>
            <Link href="/services" className="chip">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"></path>
                <circle cx="12" cy="10" r="2.5"></circle>
              </svg>
              Pabna
            </Link>
          </div>
        </div>
        
      </main>
    </>
  );
}
