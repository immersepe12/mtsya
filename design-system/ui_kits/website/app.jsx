// MTSYA · app.jsx — top-level router and bag state

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const navigate = React.useCallback((to) => { window.location.hash = to; window.scrollTo(0, 0); }, []);
  return [hash, navigate];
}

function App() {
  const [route, navigate] = useHashRoute();
  const [bag, setBag] = React.useState([
    { product: PRODUCTS[0], fit: 'Modern', size: 'M' },
  ]);

  const addToBag = (product, fit, size) => {
    setBag(b => [...b, { product, fit, size }]);
    navigate('#/bag');
  };
  const removeFromBag = (i) => setBag(b => b.filter((_, idx) => idx !== i));

  const isHome = route === '#/' || route === '';
  const isCheckout = route.startsWith('#/checkout');
  const productMatch = route.match(/^#\/product\/(.+)$/);

  return (
    <>
      {isCheckout
        ? <MiniHeader />
        : <Header route={route} navigate={navigate} bagCount={bag.length} transparent={isHome} />}

      <div data-screen-label={
        isHome ? '01 Homepage' :
        route === '#/shirts' ? '02 The Five Shirts' :
        productMatch ? `03 Product · ${productMatch[1]}` :
        route === '#/bag' ? '04 Bag' :
        isCheckout ? '05 Checkout' : 'Page'
      }>
        {isHome && <HomePage navigate={navigate} />}
        {route === '#/shirts' && <ListingPage navigate={navigate} />}
        {productMatch && <ProductPage slug={productMatch[1]} navigate={navigate} onAddToBag={addToBag} />}
        {route === '#/bag' && <BagPage bag={bag} removeFromBag={removeFromBag} navigate={navigate} />}
        {isCheckout && <CheckoutPage bag={bag} navigate={navigate} />}
        {(route === '#/tees' || route === '#/story' || route === '#/journal') && (
          <main style={{ maxWidth: 720, margin: '0 auto', padding: '128px 80px', textAlign: 'center' }}>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize: 32, fontWeight: 400, color: '#1F3A4D', margin: '0 0 24px', letterSpacing: 0 }}>
              this page is not here yet.
            </h1>
            <p style={{ fontFamily:'var(--font-serif)', fontSize:18, color:'#5A6B78', fontStyle:'italic' }}>
              The brand is small. Most of it is at /shirts.
            </p>
            <div style={{ marginTop: 48 }}>
              <Button variant="ghost" onClick={() => navigate('#/shirts')}>The five shirts</Button>
            </div>
          </main>
        )}
      </div>

      {!isCheckout && <Footer />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
