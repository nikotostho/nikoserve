export default function VouchersPage() {
  return (
    <>
      <div className="page-head"><div><nav className="crumb mb-1.5"><a href="/user/dashboard">My Account</a><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg><span className="is-current">Payments</span><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg><span className="is-current">Vouchers</span></nav>
      <h1>Vouchers &amp; Rewards</h1><p>Collected vouchers, loyalty points, referrals and gift cards.</p></div>
      <div className="flex flex-wrap items-center gap-2"><button className="btn btn-sm btn-outline" data-modal-open="redeem"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/><path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"/></svg>Redeem code</button><a href="/offers" className="btn btn-sm btn-primary"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 12 3h8v8l-9 9z"/><circle cx="16" cy="8" r="1.5"/></svg>Collect more</a></div></div>
      
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3.5 mb-4"><div className="stat">
      <div className="flex items-start justify-between mb-3"><span className="ico bg-brand-50 text-brand-600"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 0 0 4v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-4z"/><path d="M12 7v10"/></svg></span>
      </div>
      <p className="val">5</p><p className="lbl">Active vouchers</p></div><div className="stat">
      <div className="flex items-start justify-between mb-3"><span className="ico bg-gold-50 text-gold-600"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-3 5 3-1.5-7"/></svg></span>
      <span className="trend up"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V6M6 12l6-6 6 6"/></svg>+180</span></div>
      <p className="val">2,480</p><p className="lbl">Points balance</p></div><div className="stat">
      <div className="flex items-start justify-between mb-3"><span className="ico bg-service-50 text-service-600"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12 12 3h8v8l-9 9z"/><circle cx="16" cy="8" r="1.5"/></svg></span>
      </div>
      <p className="val">৳12,480</p><p className="lbl">Total saved</p></div><div className="stat">
      <div className="flex items-start justify-between mb-3"><span className="ico bg-brand-50 text-brand-600"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 11a3 3 0 1 0 0-6M18 21a6 6 0 0 0-2-4.5"/></svg></span>
      </div>
      <p className="val">৳1,500</p><p className="lbl">Referral earnings</p><p className="text-[11.5px] text-ink-400 mt-1.5">3 friends joined</p></div></div>
      <div className="tabs  mb-4" data-tabs><button className="tab is-active" data-tab="t0">Active<span className="count">5</span></button><button className="tab " data-tab="t1">Used<span className="count">22</span></button><button className="tab " data-tab="t2">Expired<span className="count">8</span></button><button className="tab " data-tab="t3">Gift cards<span className="count">2</span></button><button className="tab " data-tab="t4">Referrals<span className="count">3</span></button></div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3.5"><div className="card overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500"></div>
      <div className="p-4 pl-5"><div className="flex items-start justify-between gap-2 mb-2">
      <div><p className="text-[20px] font-extrabold text-brand-600 tracking-tight">৳400 OFF</p><p className="text-[12px] text-ink-500">On orders above ৳3,000</p></div>
      <span className="badge badge-red">6 days left</span></div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-50 border border-dashed border-ink-200 mb-3">
      <span className="text-[13px] font-extrabold tracking-widest flex-1">NEW400</span>
      <button className="btn btn-xs btn-outline" data-copy="NEW400" data-toast="Code NEW400 copied"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>Copy</button></div>
      <div className="flex items-center justify-between text-[11.5px] text-ink-400 mb-3"><span>All categories</span><span>Expires 31 Aug 2026</span></div>
      <div className="flex gap-2"><a href="/products" className="btn btn-sm btn-primary flex-1">Use now</a><button className="btn btn-sm btn-outline">Terms</button></div></div></div><div className="card overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-500"></div>
      <div className="p-4 pl-5"><div className="flex items-start justify-between gap-2 mb-2">
      <div><p className="text-[20px] font-extrabold text-brand-600 tracking-tight">20% OFF</p><p className="text-[12px] text-ink-500">Max discount ৳1,500</p></div>
      <span className="badge badge-red">8 days left</span></div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-50 border border-dashed border-ink-200 mb-3">
      <span className="text-[13px] font-extrabold tracking-widest flex-1">ELEC20</span>
      <button className="btn btn-xs btn-outline" data-copy="ELEC20" data-toast="Code ELEC20 copied"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>Copy</button></div>
      <div className="flex items-center justify-between text-[11.5px] text-ink-400 mb-3"><span>Electronics only</span><span>Expires 25 Aug 2026</span></div>
      <div className="flex gap-2"><a href="/products" className="btn btn-sm btn-primary flex-1">Use now</a><button className="btn btn-sm btn-outline">Terms</button></div></div></div><div className="card overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-service-500"></div>
      <div className="p-4 pl-5"><div className="flex items-start justify-between gap-2 mb-2">
      <div><p className="text-[20px] font-extrabold text-service-600 tracking-tight">FREE DELIVERY</p><p className="text-[12px] text-ink-500">On orders above ৳999</p></div>
      <span className="badge badge-teal">44 days left</span></div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-50 border border-dashed border-ink-200 mb-3">
      <span className="text-[13px] font-extrabold tracking-widest flex-1">FREESHIP</span>
      <button className="btn btn-xs btn-outline" data-copy="FREESHIP" data-toast="Code FREESHIP copied"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>Copy</button></div>
      <div className="flex items-center justify-between text-[11.5px] text-ink-400 mb-3"><span>All categories</span><span>Expires 30 Sep 2026</span></div>
      <div className="flex gap-2"><a href="/products" className="btn btn-sm btn-service flex-1">Use now</a><button className="btn btn-sm btn-outline">Terms</button></div></div></div><div className="card overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-service-500"></div>
      <div className="p-4 pl-5"><div className="flex items-start justify-between gap-2 mb-2">
      <div><p className="text-[20px] font-extrabold text-service-600 tracking-tight">৳200 OFF</p><p className="text-[12px] text-ink-500">On any service booking</p></div>
      <span className="badge badge-teal">34 days left</span></div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-50 border border-dashed border-ink-200 mb-3">
      <span className="text-[13px] font-extrabold tracking-widest flex-1">SERVICE200</span>
      <button className="btn btn-xs btn-outline" data-copy="SERVICE200" data-toast="Code SERVICE200 copied"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>Copy</button></div>
      <div className="flex items-center justify-between text-[11.5px] text-ink-400 mb-3"><span>Services only</span><span>Expires 20 Sep 2026</span></div>
      <div className="flex gap-2"><a href="/products" className="btn btn-sm btn-service flex-1">Use now</a><button className="btn btn-sm btn-outline">Terms</button></div></div></div><div className="card overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500"></div>
      <div className="p-4 pl-5"><div className="flex items-start justify-between gap-2 mb-2">
      <div><p className="text-[20px] font-extrabold text-gold-600 tracking-tight">15% CASHBACK</p><p className="text-[12px] text-ink-500">Pay with bKash · Max ৳300</p></div>
      <span className="badge badge-amber">14 days left</span></div>
      <div className="flex items-center gap-2 p-2.5 rounded-lg bg-ink-50 border border-dashed border-ink-200 mb-3">
      <span className="text-[13px] font-extrabold tracking-widest flex-1">BKASH15</span>
      <button className="btn btn-xs btn-outline" data-copy="BKASH15" data-toast="Code BKASH15 copied"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>Copy</button></div>
      <div className="flex items-center justify-between text-[11.5px] text-ink-400 mb-3"><span>Payment offer</span><span>Expires 31 Aug 2026</span></div>
      <div className="flex gap-2"><a href="/products" className="btn btn-sm btn-primary flex-1">Use now</a><button className="btn btn-sm btn-outline">Terms</button></div></div></div></div>
      
      <div className="grid lg:grid-cols-2 gap-4 mt-4">
      <div className="card "><div className="card-head"><h3>Loyalty points</h3><div className="flex items-center gap-2"></div></div><div className="p-5">
      <div className="flex items-end gap-3 mb-4"><p className="text-[34px] font-extrabold text-gold-500 leading-none">2,480</p><p className="text-[12.5px] text-ink-500 mb-1">points ≈ ৳248 value</p></div>
      <div className="flex items-center gap-2 mb-2 text-[12px] font-bold"><span className="badge badge-amber">Gold tier</span><span className="text-ink-400 ml-auto">Platinum at 6,000 pts</span></div>
      <div className="bar mb-4"><i style={{width: "41%"}}></i></div>
      <div className="tbl-wrap"><table className="tbl tbl-compact">
      <thead><tr><th>Activity</th><th>Points</th><th>Date</th></tr></thead>
      <tbody><tr><td>Order HB-884213 completed</td><td><b className="text-green-600">+113</b></td><td>15 Aug 2026</td></tr><tr><td>Product review published</td><td><b className="text-green-600">+25</b></td><td>13 Aug 2026</td></tr><tr><td>Redeemed for ৳200 voucher</td><td><b className="text-brand-600">-2,000</b></td><td>10 Aug 2026</td></tr><tr><td>Referral bonus — Sadia joined</td><td><b className="text-green-600">+500</b></td><td>4 Aug 2026</td></tr><tr><td>Service booking completed</td><td><b className="text-green-600">+90</b></td><td>2 Aug 2026</td></tr></tbody></table></div>
      <div className="p-4 pt-3"><button className="btn btn-sm btn-gold btn-block"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/><path d="M8 8a2.5 2.5 0 1 1 4-2 2.5 2.5 0 1 1 4 2"/></svg>Convert 2,000 points → ৳200 voucher</button></div></div></div>
      <div className="card "><div className="card-head"><h3>Refer &amp; earn ৳500</h3><div className="flex items-center gap-2"></div></div><div className="p-5">
      <p className="text-[13px] text-ink-600 mb-4">Invite a friend to HaatBazar. When they complete their first order of ৳1,000+, you both get a ৳500 voucher.</p>
      <label className="label">Your referral link</label>
      <div className="flex gap-2 mb-4"><input className="input" defaultValue="haatbazar.com.bd/r/NUSRAT2480" readOnly /><button className="btn btn-primary" data-copy="haatbazar.com.bd/r/NUSRAT2480" data-toast="Referral link copied"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/></svg>Copy</button></div>
      <div className="flex flex-wrap gap-2 mb-4"><button className="btn btn-sm btn-outline"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 1 1-3.2-6.4"/><path d="M8 12h8M8 9h5"/></svg>WhatsApp</button><button className="btn btn-sm btn-outline"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8 11 8-4M8 13l8 4"/></svg>Facebook</button><button className="btn btn-sm btn-outline"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>Email</button><button className="btn btn-sm btn-outline"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>SMS</button></div>
      <div className="grid grid-cols-3 gap-2 text-center mb-4"><div className="p-3 rounded-xl bg-ink-50"><p className="text-[16px] font-extrabold">12</p><p className="text-[11px] text-ink-500">Invites sent</p></div><div className="p-3 rounded-xl bg-ink-50"><p className="text-[16px] font-extrabold">3</p><p className="text-[11px] text-ink-500">Friends joined</p></div><div className="p-3 rounded-xl bg-ink-50"><p className="text-[16px] font-extrabold">৳1,500</p><p className="text-[11px] text-ink-500">Earned</p></div></div>
      <div className="tbl-wrap"><table className="tbl tbl-compact">
      <thead><tr><th>Friend</th><th>Joined</th><th>Status</th><th>Reward</th></tr></thead>
      <tbody><tr><td>Sadia Rahman</td><td>4 Aug 2026</td><td><span className="st st-done">Completed</span></td><td><b>৳500</b></td></tr><tr><td>Tanvir Ahmed</td><td>22 Jul 2026</td><td><span className="st st-done">Completed</span></td><td><b>৳500</b></td></tr><tr><td>Mehedi Hasan</td><td>12 Jul 2026</td><td><span className="st st-done">Completed</span></td><td><b>৳500</b></td></tr><tr><td>Rifat Islam</td><td>16 Aug 2026</td><td><span className="st st-pending">Pending</span></td><td>—</td></tr></tbody></table></div></div></div>
      </div>
      
      <div className="card mt-4"><div className="card-head"><h3>Gift cards</h3><div className="flex items-center gap-2"></div></div><div className="p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3"><div className="p-4 rounded-2xl bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute -right-6 -top-8 w-28 h-28 rounded-full bg-brand-500/25"></div>
      <p className="text-[11px] uppercase tracking-widest text-white/50 mb-1">HaatBazar gift card</p>
      <p className="text-[26px] font-extrabold mb-1">৳1,000</p><p className="text-[12px] text-white/70 mb-3">Balance ৳1,000 · Valid till 12 Dec 2026</p>
      <p className="text-[12px] font-mono tracking-wider text-white/80 mb-3">GC-8842-1123-9902</p>
      <button className="btn btn-xs !bg-white !text-ink-950">Use at checkout</button></div><div className="p-4 rounded-2xl bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute -right-6 -top-8 w-28 h-28 rounded-full bg-brand-500/25"></div>
      <p className="text-[11px] uppercase tracking-widest text-white/50 mb-1">HaatBazar gift card</p>
      <p className="text-[26px] font-extrabold mb-1">৳500</p><p className="text-[12px] text-white/70 mb-3">Balance ৳120 · Valid till 3 Oct 2026</p>
      <p className="text-[12px] font-mono tracking-wider text-white/80 mb-3">GC-7731-4420-1188</p>
      <button className="btn btn-xs !bg-white !text-ink-950">Use at checkout</button></div>
      <button className="p-4 rounded-2xl border-2 border-dashed border-ink-200 grid place-items-center text-ink-400 hover:border-brand-300 hover:text-brand-600" data-modal-open="redeem">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg><p className="text-[12.5px] font-bold mt-1">Redeem a gift card</p></button></div></div>
      
      <div className="modal" id="redeem"><div className="modal-backdrop" data-modal-close></div><div className="modal-panel is-narrow">
      <div className="card-head"><h3>Redeem code</h3><button data-modal-close className="icon-btn"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
      <div className="p-5"><label className="label">Voucher or gift card code <span className="req">*</span></label>
      <input className="input mb-3 tracking-widest uppercase" placeholder="e.g. HAAT-2026-XXXX" />
      <p className="hint mb-4">Codes are case-insensitive. Gift cards are added to your wallet instantly.</p>
      <div className="flex gap-2"><button className="btn btn-outline flex-1" data-modal-close>Cancel</button><button className="btn btn-primary flex-1" data-modal-close data-toast="Code redeemed successfully">Redeem</button></div></div></div></div>
    </>
  );
}
