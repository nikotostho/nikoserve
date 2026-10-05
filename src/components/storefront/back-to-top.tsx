export default function BackToTop() {
  return (
    <button data-to-top="" className="no-print fixed bottom-20 lg:bottom-6 right-4 z-40 w-11 h-11 rounded-full bg-ink-900 text-white grid place-items-center shadow-pop opacity-0 transition-opacity" aria-label="Back to top" type="button">
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V6M6 12l6-6 6 6"></path>
      </svg>
    </button>
  );
}
