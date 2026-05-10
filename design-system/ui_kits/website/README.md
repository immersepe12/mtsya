# MTSYA Website UI Kit

Click-through hi-fi recreation of the MTSYA web experience. Desktop-first at 1440 px, mobile patterns reflowed.

## Screens

- **Homepage** (`#/`) — full-bleed hero, founder's letter, four stacked category previews
- **/shirts** (`#/shirts`) — the five shirts, three columns, generous gaps
- **Product detail** (`#/product/manu-white`) — 60/40 above-fold, fabric story below
- **/bag** (`#/bag`) — single column, item rows, trust statement
- **Checkout** (`#/checkout`) — three steps: address → shipping → payment

## Components

- `Header`, `Footer` — chrome
- `Hero`, `FoundersLetter`, `CategoryStack` — homepage blocks
- `ProductGrid`, `ProductCard` — listing
- `ProductDetail`, `FitSelector`, `SizeSelector`, `FabricStory` — PDP
- `Bag`, `CartRow`, `CartSummary` — cart
- `Checkout`, `CheckoutStepper`, `AddressForm`, `ShippingForm`, `PaymentForm` — checkout
- `Button`, `Input`, `Pill` — primitives
- `FishEmblem` — the only graphic mark; uses `assets/mtsya-logo.png` cropped

## Files

- `index.html` — host shell + router (`#/route`)
- `app.jsx` — top-level navigation + routes
- `chrome.jsx`, `home.jsx`, `listing.jsx`, `product.jsx`, `bag.jsx`, `checkout.jsx`, `primitives.jsx`

## What's faked

- Photography — the hero and product images are Paper-Cream coloured panels with the product name. Replace with real "Worn" and "Still" photographs.
- Payment — the payment step accepts any input and "places" a fake order.
