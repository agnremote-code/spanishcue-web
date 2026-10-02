/** Local vector brand marks: no third-party image requests during checkout. */
export default function PaymentBrands({ paypal = false }: { paypal?: boolean }) {
  return <span className="payment-brands" aria-hidden="true">{paypal
    ? <svg viewBox="0 0 86 24" width="86" height="24"><path fill="#003087" d="M4 2h9c8 0 8 10 0 12H9l-1 8H1z"/><path fill="#009cde" d="M10 6h5c7 0 7 9-1 10h-3l-1 6H6z"/><text x="24" y="17" fill="#003087" fontSize="15" fontWeight="800" fontStyle="italic">PayPal</text></svg>
    : <><svg viewBox="0 0 48 25" width="48" height="25"><rect width="48" height="25" rx="4" fill="white"/><text x="4" y="18" fill="#1434cb" fontSize="16" fontWeight="900" fontStyle="italic">VISA</text></svg><svg viewBox="0 0 44 25" width="44" height="25"><rect width="44" height="25" rx="4" fill="white"/><circle cx="17" cy="12.5" r="9" fill="#eb001b"/><circle cx="27" cy="12.5" r="9" fill="#f79e1b" fillOpacity=".9"/></svg><svg viewBox="0 0 44 25" width="44" height="25"><rect width="44" height="25" rx="4" fill="#006fcf"/><text x="3" y="17" fill="white" fontSize="13" fontWeight="900">AMEX</text></svg></>}</span>;
}
