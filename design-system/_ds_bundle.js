/* @ds-bundle: {"format":3,"namespace":"MTSYADesignSystem_019e10","components":[],"sourceHashes":{"ui_kits/website/app.jsx":"f36c946dc0a2","ui_kits/website/bag.jsx":"379601ccb9ec","ui_kits/website/checkout.jsx":"ea33a38cd376","ui_kits/website/chrome.jsx":"a88f8b189bbe","ui_kits/website/home.jsx":"2b192193c647","ui_kits/website/listing.jsx":"5a9d3ad700c0","ui_kits/website/primitives.jsx":"ffb747510a14","ui_kits/website/product.jsx":"0f962e752a0c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MTSYADesignSystem_019e10 = window.MTSYADesignSystem_019e10 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/app.jsx
try { (() => {
// MTSYA · app.jsx — top-level router and bag state

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = React.useCallback(to => {
    window.location.hash = to;
    window.scrollTo(0, 0);
  }, []);
  return [hash, navigate];
}
function App() {
  const [route, navigate] = useHashRoute();
  const [bag, setBag] = React.useState([{
    product: PRODUCTS[0],
    fit: 'Modern',
    size: 'M'
  }]);
  const addToBag = (product, fit, size) => {
    setBag(b => [...b, {
      product,
      fit,
      size
    }]);
    navigate('#/bag');
  };
  const removeFromBag = i => setBag(b => b.filter((_, idx) => idx !== i));
  const isHome = route === '#/' || route === '';
  const isCheckout = route.startsWith('#/checkout');
  const productMatch = route.match(/^#\/product\/(.+)$/);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isCheckout ? /*#__PURE__*/React.createElement(MiniHeader, null) : /*#__PURE__*/React.createElement(Header, {
    route: route,
    navigate: navigate,
    bagCount: bag.length,
    transparent: isHome
  }), /*#__PURE__*/React.createElement("div", {
    "data-screen-label": isHome ? '01 Homepage' : route === '#/shirts' ? '02 The Five Shirts' : productMatch ? `03 Product · ${productMatch[1]}` : route === '#/bag' ? '04 Bag' : isCheckout ? '05 Checkout' : 'Page'
  }, isHome && /*#__PURE__*/React.createElement(HomePage, {
    navigate: navigate
  }), route === '#/shirts' && /*#__PURE__*/React.createElement(ListingPage, {
    navigate: navigate
  }), productMatch && /*#__PURE__*/React.createElement(ProductPage, {
    slug: productMatch[1],
    navigate: navigate,
    onAddToBag: addToBag
  }), route === '#/bag' && /*#__PURE__*/React.createElement(BagPage, {
    bag: bag,
    removeFromBag: removeFromBag,
    navigate: navigate
  }), isCheckout && /*#__PURE__*/React.createElement(CheckoutPage, {
    bag: bag,
    navigate: navigate
  }), (route === '#/tees' || route === '#/story' || route === '#/journal') && /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '128px 80px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      color: '#1F3A4D',
      margin: '0 0 24px',
      letterSpacing: 0
    }
  }, "this page is not here yet."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: '#5A6B78',
      fontStyle: 'italic'
    }
  }, "The brand is small. Most of it is at /shirts."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => navigate('#/shirts')
  }, "The five shirts")))), !isCheckout && /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('app')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/bag.jsx
try { (() => {
// MTSYA · bag.jsx

function CartRow({
  item,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '96px 1fr auto',
      gap: 24,
      alignItems: 'flex-start',
      padding: '24px 0',
      borderTop: '1px solid #BFC4C9'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 120,
      background: item.product.hex
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: '#1F3A4D',
      margin: '0 0 6px'
    }
  }, item.product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: '#5A6B78',
      margin: '0 0 12px'
    }
  }, item.product.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: '#5A6B78',
      letterSpacing: '0.05em'
    }
  }, item.fit, " \xB7 ", item.size), /*#__PURE__*/React.createElement("a", {
    onClick: onRemove,
    style: {
      display: 'inline-block',
      marginTop: 12,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: '#5A6B78',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      cursor: 'pointer'
    }
  }, "remove")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      color: '#1F3A4D',
      fontFeatureSettings: '"lnum" 1'
    }
  }, "\u20B93,000"));
}
function BagPage({
  bag,
  removeFromBag,
  navigate
}) {
  const total = bag.length * 3000;
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 960,
      margin: '0 auto',
      padding: '96px 80px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      color: '#5A6B78',
      textAlign: 'center',
      margin: '0 0 96px',
      letterSpacing: 0
    }
  }, "bag"), bag.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: '#5A6B78',
      fontStyle: 'italic',
      maxWidth: 'none'
    }
  }, "The bag is empty. Most of the brand is at /shirts."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => navigate('#/shirts')
  }, "The five shirts"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, bag.map((item, i) => /*#__PURE__*/React.createElement(CartRow, {
    key: i,
    item: item,
    onRemove: () => removeFromBag(i)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #BFC4C9'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78'
    }
  }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 18,
      color: '#1F3A4D',
      fontFeatureSettings: '"lnum" 1'
    }
  }, "\u20B9", total.toLocaleString('en-IN'))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: '#5A6B78',
      marginTop: 12
    }
  }, "Free shipping in India."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: () => navigate('#/checkout')
  }, "Continue to checkout")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: '#5A6B78',
      marginTop: 24,
      textAlign: 'center'
    }
  }, "Returns within 30 days, no questions, no need to explain.")));
}
Object.assign(window, {
  BagPage,
  CartRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/bag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/checkout.jsx
try { (() => {
// MTSYA · checkout.jsx — three steps, single column

function CheckoutStepper({
  step
}) {
  const steps = ['address', 'shipping', 'payment'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 32,
      margin: '0 0 64px'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: i === step ? '#1F3A4D' : '#9DA8B2'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFeatureSettings: '"lnum" 1'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: i === step ? '1px solid #1F3A4D' : 'none',
      paddingBottom: 2
    }
  }, s), i < 2 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#BFC4C9'
    }
  }, "\u2014"))));
}
function AddressForm({
  value,
  onChange
}) {
  const set = k => v => onChange({
    ...value,
    [k]: v
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      rowGap: 32
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name",
    value: value.first,
    onChange: set('first')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name",
    value: value.last,
    onChange: set('last')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Street",
    value: value.street,
    onChange: set('street')
  })), /*#__PURE__*/React.createElement(Input, {
    label: "City",
    value: value.city,
    onChange: set('city')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Pincode",
    value: value.pin,
    onChange: set('pin')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    value: value.phone,
    onChange: set('phone')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    value: value.email,
    onChange: set('email'),
    type: "email"
  }));
}
function ShippingForm({
  value,
  onChange
}) {
  const opts = [{
    id: 'standard',
    label: 'Standard',
    meta: '2–4 days · India · free'
  }, {
    id: 'express',
    label: 'Express',
    meta: '1–2 days · India · ₹250'
  }];
  return /*#__PURE__*/React.createElement("div", null, opts.map(o => /*#__PURE__*/React.createElement("label", {
    key: o.id,
    onClick: () => onChange(o.id),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 0',
      borderTop: '1px solid #BFC4C9',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      border: value === o.id ? '5px solid #1F3A4D' : '1px solid #BFC4C9',
      borderRadius: 999,
      // OK exception: a radio dot is a dot
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      color: '#1F3A4D'
    }
  }, o.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: '#5A6B78',
      letterSpacing: '0.05em'
    }
  }, o.meta))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #BFC4C9'
    }
  }));
}
function PaymentForm({
  value,
  onChange
}) {
  const set = k => v => onChange({
    ...value,
    [k]: v
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      rowGap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Card number",
    value: value.card,
    onChange: set('card'),
    placeholder: "0000 0000 0000 0000"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Expiry",
    value: value.exp,
    onChange: set('exp'),
    placeholder: "MM / YY"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVC",
    value: value.cvc,
    onChange: set('cvc')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name on card",
    value: value.name,
    onChange: set('name')
  })));
}
function CheckoutPage({
  bag,
  navigate
}) {
  const [step, setStep] = React.useState(0);
  const [addr, setAddr] = React.useState({});
  const [ship, setShip] = React.useState('standard');
  const [pay, setPay] = React.useState({});
  const [done, setDone] = React.useState(false);
  const total = bag.length * 3000 + (ship === 'express' ? 250 : 0);
  if (done) {
    return /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 720,
        margin: '0 auto',
        padding: '96px 80px 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 36,
        fontWeight: 400,
        color: '#1F3A4D',
        margin: '0 0 48px',
        letterSpacing: 0
      }
    }, "Your MTSYA shirt is ordered."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: '#1F3A4D',
        lineHeight: 1.65,
        textAlign: 'left'
      }
    }, "Thank you. The shirt will leave the studio within two working days. We will write again the morning it ships, with a tracking link and nothing else."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: '#1F3A4D',
        lineHeight: 1.65,
        marginTop: 24,
        textAlign: 'left'
      }
    }, "If anything is not right when it reaches you \u2014 anything at all \u2014 write back to this email. Returns are within thirty days, no questions, no need to explain."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement(FishEmblem, {
      size: 48
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        color: '#5A6B78',
        marginTop: 16
      }
    }, "\u2014 kushal at mtsya"), /*#__PURE__*/React.createElement("hr", {
      style: {
        border: 0,
        borderTop: '1px solid #BFC4C9',
        margin: '64px 0'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 13,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#5A6B78'
      }
    }, "Order #MT-2026-1083 \xB7 \u20B9", total.toLocaleString('en-IN')));
  }
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      padding: '96px 80px 0'
    }
  }, /*#__PURE__*/React.createElement(CheckoutStepper, {
    step: step
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 400,
      color: '#1F3A4D',
      margin: '0 0 48px',
      letterSpacing: 0
    }
  }, step === 0 && 'Where to send it', step === 1 && 'How to send it', step === 2 && 'How to pay'), step === 0 && /*#__PURE__*/React.createElement(AddressForm, {
    value: addr,
    onChange: setAddr
  }), step === 1 && /*#__PURE__*/React.createElement(ShippingForm, {
    value: ship,
    onChange: setShip
  }), step === 2 && /*#__PURE__*/React.createElement(PaymentForm, {
    value: pay,
    onChange: setPay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, step > 0 ? /*#__PURE__*/React.createElement("a", {
    onClick: () => setStep(step - 1),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      textDecoration: 'underline',
      textUnderlineOffset: 4,
      cursor: 'pointer'
    }
  }, "\u2190 back") : /*#__PURE__*/React.createElement("span", null), step < 2 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setDone(true)
  }, "Place order \xB7 \u20B9", total.toLocaleString('en-IN'))));
}
Object.assign(window, {
  CheckoutPage,
  CheckoutStepper,
  AddressForm,
  ShippingForm,
  PaymentForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/chrome.jsx
try { (() => {
// MTSYA · chrome.jsx — header + footer

function Header({
  route,
  navigate,
  bagCount = 0,
  transparent = false
}) {
  const items = [{
    label: 'shirts',
    to: '#/shirts'
  }, {
    label: 'tees',
    to: '#/tees'
  }, {
    label: 'the story',
    to: '#/story'
  }, {
    label: 'journal',
    to: '#/journal'
  }, {
    label: `bag${bagCount ? ` (${bagCount})` : ''}`,
    to: '#/bag'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      height: 80,
      background: transparent ? 'transparent' : '#F5F1EA',
      borderBottom: transparent ? '0' : '1px solid #BFC4C9',
      transition: 'background 200ms ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      height: '100%',
      padding: '0 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => navigate('#/')
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    onClick: () => navigate(it.to),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#1F3A4D',
      textDecoration: 'none'
    },
    onMouseEnter: e => {
      e.target.style.textDecoration = 'underline';
      e.target.style.textUnderlineOffset = '4px';
    },
    onMouseLeave: e => {
      e.target.style.textDecoration = 'none';
    }
  }, it.label)))));
}
function MiniHeader() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 80,
      borderBottom: '1px solid #BFC4C9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  }));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#F5F1EA',
      padding: '96px 80px',
      marginTop: 128
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  }), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      fontStyle: 'italic',
      color: '#5A6B78',
      fontSize: 14,
      marginTop: 14,
      maxWidth: 'none'
    }
  }, "the wardrobe that endures the deluge")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['shirts', 'tees', 'the story', 'journal', 'contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: '#5A6B78',
      letterSpacing: '0.05em'
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      marginBottom: 8
    }
  }, "Letters, twice a year"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "email",
    style: {
      width: '100%',
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid #5A6B78',
      padding: '12px 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: '#1F3A4D',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: '64px auto 0',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: '#5A6B78',
      letterSpacing: '0.05em',
      paddingTop: 24,
      borderTop: '1px solid #BFC4C9'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 MTSYA \xB7 Made in India"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", null, "privacy"), /*#__PURE__*/React.createElement("a", null, "returns"), /*#__PURE__*/React.createElement("a", null, "instagram"))));
}
Object.assign(window, {
  Header,
  MiniHeader,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
// MTSYA · home.jsx — homepage

function Hero({
  navigate
}) {
  // The hero is the welcome. No overlay text. No CTA. Single image.
  // Stand-in: full-bleed Paper-Cream-into-product-warmth panel with subtle photo-mood label.
  return /*#__PURE__*/React.createElement("section", {
    style: {
      width: '100%',
      height: '100vh',
      minHeight: 720,
      background: '#F4EFE5',
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      background: '#F4EFE5'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: '38%',
      background: '#EFE6D2'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 80,
      bottom: 40,
      fontFamily: 'var(--font-ui)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(31,58,77,0.45)'
    }
  }, "mood \xB7 worn \xB7 manu white \xB7 morning"));
}
function FoundersLetter({
  navigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      padding: '128px 80px 96px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '65ch',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      textAlign: 'center',
      marginBottom: 48
    }
  }, "a letter"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.65,
      color: '#1F3A4D',
      marginBottom: 24
    }
  }, "There was a deluge. A boat was carried through it, tied to the horn of a fish, and what the boat carried became the world."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.65,
      color: '#1F3A4D',
      marginBottom: 24
    }
  }, "A wardrobe is a small thing. It is, in the end, fewer than a hundred objects. The working part of it \u2014 the part a man actually reaches for \u2014 is fewer than thirty. Of those, fewer than ten will see him through the year that matters. There is, somewhere in that drawer, a single shirt he packs first. He does not always know which one. But there is one."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.65,
      color: '#1F3A4D',
      marginBottom: 24
    }
  }, "MTSYA makes those things. Not collections, not seasons, not trends. Five plain shirts and five plain T-shirts in Egyptian Giza cotton woven with TENCEL Lyocell, \u20B93,000 each. Colours a man can live inside for years. Details that are felt rather than seen."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.65,
      color: '#1F3A4D',
      marginBottom: 48
    }
  }, "This is not minimalism. Minimalism is a style, and styles change. This is something older. This is what the fish carried in the boat."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 24,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(FishEmblem, {
    size: 56
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      color: '#5A6B78',
      fontSize: 16
    }
  }, "\u2014 kushal at mtsya"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => navigate('#/shirts'),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: '#1F3A4D',
      textDecoration: 'underline',
      textUnderlineOffset: 6,
      cursor: 'pointer'
    }
  }, "the five shirts \u2192"))));
}
function CategoryStack({
  navigate
}) {
  const cats = [{
    label: 'shirts',
    product: PRODUCTS[0],
    to: '#/shirts'
  }, {
    label: 'tees',
    product: PRODUCTS[2],
    to: '#/tees'
  }, {
    label: 'the story',
    product: PRODUCTS[3],
    to: '#/story'
  }, {
    label: 'journal',
    product: PRODUCTS[4],
    to: '#/journal'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      padding: '0 80px',
      display: 'flex',
      flexDirection: 'column',
      gap: 128
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    onClick: () => navigate(c.to),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '80vh',
      minHeight: 600,
      background: c.product.hex
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      color: '#1F3A4D',
      textDecoration: 'underline',
      textUnderlineOffset: 8
    }
  }, c.label)))));
}
function HomePage({
  navigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    navigate: navigate
  }), /*#__PURE__*/React.createElement(FoundersLetter, {
    navigate: navigate
  }), /*#__PURE__*/React.createElement(CategoryStack, {
    navigate: navigate
  }));
}
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/listing.jsx
try { (() => {
// MTSYA · listing.jsx — /shirts grid

function ProductCard({
  product,
  navigate
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => navigate(`#/product/${product.slug}`)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: hover ? 0.85 : 1,
      transition: 'opacity 200ms ease'
    }
  }, /*#__PURE__*/React.createElement(ImagePanel, {
    product: product
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: '#1F3A4D'
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: '#5A6B78',
      marginTop: -10
    }
  }, product.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: '#1F3A4D',
      marginTop: -8
    }
  }, "\u20B93,000"));
}
function ListingPage({
  navigate
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      padding: '96px 80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: '65ch',
      margin: '0 auto 96px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 32,
      fontWeight: 400,
      color: '#5A6B78',
      margin: '0 0 48px',
      lineHeight: 1.2,
      letterSpacing: 0
    }
  }, "the five shirts"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      lineHeight: 1.6,
      color: '#1F3A4D'
    }
  }, "Five shirts, each named for a moment in the myth. Made of Egyptian Giza cotton woven with TENCEL Lyocell. \u20B93,000 each. Three fits. Restocked every eight weeks; the silhouettes do not change.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: 48,
      rowGap: 96
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.slug,
    product: p,
    navigate: navigate
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      margin: '128px 0 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => navigate('#/tees'),
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: '#5A6B78',
      textDecoration: 'underline',
      textUnderlineOffset: 6,
      cursor: 'pointer'
    }
  }, "\u2014 and five plain T-shirts.")));
}
Object.assign(window, {
  ListingPage,
  ProductCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/listing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/primitives.jsx
try { (() => {
// MTSYA · primitives.jsx
// Buttons, inputs, pills, fish emblem, and the products dataset.

const PRODUCTS = [{
  slug: 'manu-white',
  name: 'Manu White',
  subtitle: 'the boat — what carries',
  hex: '#F4EFE5',
  dark: false
}, {
  slug: 'deluge-indigo',
  name: 'Deluge Indigo',
  subtitle: 'the night — when the rain came',
  hex: '#1B2A47',
  dark: true
}, {
  slug: 'veda-cream',
  name: 'Veda Cream',
  subtitle: 'old paper — preserved',
  hex: '#EFE6D2',
  dark: false
}, {
  slug: 'tide-stone',
  name: 'Tide Stone',
  subtitle: 'wet rock — the boat rested',
  hex: '#B8BCB6',
  dark: false
}, {
  slug: 'coast-olive',
  name: 'Coast Olive',
  subtitle: 'dry land — life again',
  hex: '#545A3D',
  dark: true
}];
function Button({
  variant = 'primary',
  children,
  full,
  onClick,
  type = 'button',
  disabled
}) {
  const base = {
    fontFamily: 'var(--font-ui)',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    padding: '16px 32px',
    border: '1px solid #1F3A4D',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 200ms ease, color 200ms ease, border-color 200ms ease',
    width: full ? '100%' : 'auto',
    display: 'inline-block',
    textAlign: 'center'
  };
  const variants = {
    primary: {
      background: disabled ? '#5A6B78' : '#1F3A4D',
      color: '#F5F1EA',
      borderColor: disabled ? '#5A6B78' : '#1F3A4D'
    },
    ghost: {
      background: 'transparent',
      color: '#1F3A4D',
      borderColor: '#1F3A4D'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === 'primary' ? {
    background: '#15293A',
    borderColor: '#15293A'
  } : {
    background: '#1F3A4D',
    color: '#F5F1EA'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle
    }
  }, children);
}
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value || '',
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: 'block',
      width: '100%',
      background: 'transparent',
      border: 0,
      borderBottom: `${focus ? 2 : 1}px solid ${error ? '#C9603A' : focus ? '#1F3A4D' : '#5A6B78'}`,
      padding: focus ? '12px 0 11px' : '12px 0',
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: '#1F3A4D',
      borderRadius: 0,
      outline: 'none',
      boxSizing: 'border-box'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: '#C9603A'
    }
  }, error));
}
function Pill({
  selected,
  children,
  onClick
}) {
  const style = {
    fontFamily: 'var(--font-ui)',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#1F3A4D',
    padding: selected ? '9px 17px' : '10px 18px',
    border: selected ? '2px solid #1F3A4D' : '1px solid #BFC4C9',
    borderRadius: 0,
    background: 'transparent',
    cursor: 'pointer',
    transition: 'border-color 200ms ease'
  };
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: onClick
  }, children);
}

// The fish: we render the master logo and crop the bottom wordmark away when only the fish is needed.
function FishEmblem({
  size = 64
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      overflow: 'hidden',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mtsya-logo.png",
    alt: "mtsya",
    style: {
      width: size,
      height: size * (4000 / 3100),
      // crop wordmark below
      display: 'block',
      objectFit: 'cover',
      objectPosition: 'center top'
    }
  }));
}
function Wordmark({
  size = 24
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: '0.2em',
      textTransform: 'lowercase',
      color: '#1F3A4D',
      lineHeight: 1,
      display: 'inline-block'
    }
  }, "mtsya");
}
function Divider({
  margin = 48
}) {
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid #BFC4C9',
      margin: `${margin}px 0`,
      width: '100%'
    }
  });
}

// Image placeholder that paints in product hex with subtle product-name tag.
function ImagePanel({
  product,
  ratio = '4 / 5',
  tag = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: product.hex,
      position: 'relative',
      width: '100%'
    }
  }, tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 14,
      fontFamily: 'var(--font-ui)',
      fontSize: 9,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: product.dark ? 'rgba(244,239,229,0.55)' : 'rgba(31,58,77,0.4)'
    }
  }, product.name));
}
Object.assign(window, {
  PRODUCTS,
  Button,
  Input,
  Pill,
  FishEmblem,
  Wordmark,
  Divider,
  ImagePanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/product.jsx
try { (() => {
// MTSYA · product.jsx — product detail

function FitSelector({
  value,
  onChange
}) {
  const fits = ['Slim', 'Modern', 'Relaxed'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      marginBottom: 12
    }
  }, "Fit"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, fits.map(f => /*#__PURE__*/React.createElement(Pill, {
    key: f,
    selected: value === f,
    onClick: () => onChange(f)
  }, f))));
}
function SizeSelector({
  value,
  onChange
}) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      marginBottom: 12
    }
  }, "Size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, sizes.map(s => /*#__PURE__*/React.createElement(Pill, {
    key: s,
    selected: value === s,
    onClick: () => onChange(s)
  }, s))));
}
function FabricStory() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 960,
      margin: '128px auto 0',
      padding: '0 80px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#5A6B78',
      textAlign: 'center',
      marginBottom: 48
    }
  }, "the cloth"), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: 2,
      columnGap: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.65,
      color: '#1F3A4D',
      margin: '0 0 16px'
    }
  }, "The cloth is woven in a small mill outside Coimbatore from Egyptian Giza 87 cotton \u2014 long-staple, hand-picked, the same fibre that has dressed Mediterranean shoulders for a hundred years \u2014 twisted with TENCEL Lyocell drawn from sustainably harvested eucalyptus."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.65,
      color: '#1F3A4D',
      margin: '0 0 16px'
    }
  }, "The blend is 70 / 30. The Giza gives the shirt its hand \u2014 that close-grained, slightly cool surface that improves with washing. The Lyocell gives it drape, a quiet sheen, and a weight that does not shrink in monsoon."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      lineHeight: 1.65,
      color: '#1F3A4D',
      margin: '0 0 16px'
    }
  }, "The garment is cut in three fits and finished with mother-of-pearl buttons, French-seamed sides, and a single embroidered fish at the inside-tail seam. There is no logo on the chest.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 48,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.05em',
      color: '#5A6B78'
    }
  }, "Care: cold wash, line dry in shade, warm iron on reverse."));
}
function ProductPage({
  slug,
  navigate,
  onAddToBag
}) {
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const [fit, setFit] = React.useState('Modern');
  const [size, setSize] = React.useState('M');
  const [hero, setHero] = React.useState(0);
  const thumbs = [product, product, product];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1440,
      margin: '0 auto',
      padding: '96px 80px 0',
      display: 'grid',
      gridTemplateColumns: '60% 40%',
      columnGap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ImagePanel, {
    product: product
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
      marginTop: 16
    }
  }, thumbs.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setHero(i),
    style: {
      cursor: 'pointer',
      height: 96,
      background: p.hex,
      opacity: i === hero ? 1 : 0.6
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 24,
      position: 'sticky',
      top: 120,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 400,
      color: '#1F3A4D',
      margin: '0 0 12px',
      letterSpacing: 0
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      color: '#5A6B78',
      margin: '0 0 24px'
    }
  }, product.subtitle, ". the foundational shirt."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 18,
      color: '#1F3A4D',
      margin: '0 0 48px',
      fontFeatureSettings: '"lnum" 1'
    }
  }, "\u20B93,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(FitSelector, {
    value: fit,
    onChange: setFit
  }), /*#__PURE__*/React.createElement(SizeSelector, {
    value: size,
    onChange: setSize
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: () => onAddToBag(product, fit, size)
  }, "Add to bag"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: '#5A6B78',
      marginTop: 32
    }
  }, "Free shipping in India. Returns within 30 days, no questions, no need to explain."))), /*#__PURE__*/React.createElement(FabricStory, null), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      margin: '128px 0 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => navigate('#/shirts'),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: '#1F3A4D',
      textDecoration: 'underline',
      textUnderlineOffset: 6,
      cursor: 'pointer'
    }
  }, "\u2190 back to the five shirts")));
}
Object.assign(window, {
  ProductPage,
  FitSelector,
  SizeSelector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/product.jsx", error: String((e && e.message) || e) }); }

})();
