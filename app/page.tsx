"use client";

import { FormEvent, useMemo, useState } from "react";

type Product = {
  name: string;
  category: string;
  color: string;
  price: number;
  image: string;
};

export default function ZesLandingPage() {
  const [activeCollection, setActiveCollection] = useState("Footwear");
  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const products: Product[] = [
    {
      name: "ZES Marble Slides",
      category: "Footwear",
      color: "Marble White & Gold",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Marble Hightops",
      category: "Footwear",
      color: "Marble White & Gold",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Marble Boots",
      category: "Footwear",
      color: "White & Gold Edition",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1542838687-fbb1db3b08c3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Fur Maxi Coat",
      category: "Coats",
      color: "Gold & Fur Edition",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Icon Coat",
      category: "Coats",
      color: "Royal Gold Edition",
      price: 449,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Gold Vest",
      category: "Vests",
      color: "Matte Gold Finish",
      price: 749,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Obsidian Vest",
      category: "Vests",
      color: "Black & Gold Classic",
      price: 649,
      image:
        "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "ZES Legacy Hoodie",
      category: "Clothing",
      color: "Marble Cream & Gold",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const features = [
    ["Premium Quality", "Crafted with the finest materials."],
    ["Iconic Design", "Inspired by ancient Greek heritage."],
    ["Built to Last", "Comfort, structure, and durability."],
    ["Worldwide Shipping", "Delivering excellence to your door."],
  ];

  const categories = ["Footwear", "Coats", "Vests", "Clothing"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.category === activeCollection);
  }, [activeCollection, products]);

  const addToCart = (product: Product) => {
    setCart((currentCart) => [...currentCart, product]);
    setCartOpen(true);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setNewsletterSent(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#fbf7ef] text-[#14110d]">
      <header className="sticky top-0 z-50 border-b border-[#d8bc76]/40 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="font-serif text-5xl tracking-[0.14em] text-[#b88a25]"
          >
            ZES
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-wide md:flex">
            <a
              href="#home"
              className="border-b-2 border-[#b88a25] pb-1 text-[#b88a25]"
            >
              Home
            </a>
            <a href="#shop" className="hover:text-[#b88a25]">
              Shop
            </a>
            <a href="#collections" className="hover:text-[#b88a25]">
              Collections
            </a>
            <a href="#lookbook" className="hover:text-[#b88a25]">
              Lookbook
            </a>
            <a href="#contact" className="hover:text-[#b88a25]">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4 text-[#b88a25]">
            <button type="button" className="text-2xl" aria-label="Search">
              ⌕
            </button>
            <button type="button" className="text-2xl" aria-label="Account">
              ♙
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative text-2xl"
              aria-label="Open cart"
            >
              ♧
              <span className="absolute -right-3 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#b88a25] text-xs font-bold text-white">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {cartOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/40"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="ml-auto h-full w-full max-w-md bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#d8bc76]/40 pb-4">
              <h2 className="font-serif text-3xl font-bold">Your Cart</h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-2xl"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="mt-8 text-[#665a4a]">Your cart is empty.</p>
            ) : (
              <div className="mt-6 space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex gap-4 border-b border-[#eee2c8] pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-serif text-lg font-bold">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#6d6254]">{item.color}</p>
                      <p className="mt-1 font-bold text-[#b88a25]">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between pt-4 text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#b88a25]">${cartTotal}</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#b88a25] px-5 py-4 font-bold uppercase tracking-wide text-white"
                >
                  Checkout
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      <section
        id="home"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fbf7ef_42%,#efe3cc_100%)]"
      >
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_10%,rgba(184,138,37,0.18),transparent_26%),linear-gradient(115deg,rgba(184,138,37,0.09)_1px,transparent_1px),linear-gradient(45deg,rgba(50,40,25,0.05)_1px,transparent_1px)] [background-size:auto,95px_95px,120px_120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#b88a25]">
              Divine Collection
            </p>

            <h1 className="font-serif text-6xl font-black leading-none md:text-7xl">
              Divine <span className="text-[#b88a25]">Style.</span>
              <br /> Timeless <span className="text-[#b88a25]">Power.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-[#504639]">
              ZES is more than clothing. It is a statement of strength,
              purpose, and legacy.
            </p>

            <a
              href="#shop"
              className="mt-8 inline-flex bg-[#c5972f] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              Shop Collection →
            </a>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute right-0 top-6 h-[460px] w-[63%] rounded-t-full bg-[#d1a13b] shadow-2xl" />
            <div className="absolute right-8 top-16 h-[360px] w-[38%] rounded-t-full bg-[#111] shadow-xl" />

            <div className="absolute bottom-0 left-0 grid w-full grid-cols-3 gap-4">
              <div className="rounded-t-[4rem] border border-[#d8bc76] bg-[#d1a13b] p-5 shadow-xl">
                <div className="h-56 rounded-t-[3rem] bg-[linear-gradient(135deg,#f6cc50,#b98a1d)]" />
                <p className="mt-4 font-serif text-2xl font-bold text-white">
                  Gold Vest
                </p>
              </div>

              <div className="rounded-t-[4rem] border border-[#d8bc76] bg-white p-5 shadow-xl">
                <div className="h-56 rounded-t-[3rem] bg-[linear-gradient(135deg,#ffffff,#e7dfd3,#c5972f)]" />
                <p className="mt-4 font-serif text-2xl font-bold">
                  Marble Shoes
                </p>
              </div>

              <div className="rounded-t-[4rem] border border-[#d8bc76] bg-[#15120d] p-5 shadow-xl">
                <div className="h-56 rounded-t-[3rem] bg-[linear-gradient(135deg,#111,#2b251d,#c5972f)]" />
                <p className="mt-4 font-serif text-2xl font-bold text-white">
                  Obsidian
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8bc76]/40 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-4">
          {features.map(([title, text]) => (
            <div
              key={title}
              className="flex gap-4 border-[#d8bc76]/40 md:border-r md:pr-6 last:border-r-0"
            >
              <div className="text-4xl text-[#b88a25]">♜</div>
              <div>
                <p className="font-bold uppercase tracking-wide">{title}</p>
                <p className="mt-1 text-sm leading-6 text-[#675b4b]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#b88a25]">
            Our Collection
          </p>
          <h2 className="mt-3 font-serif text-5xl font-bold">
            Clothing & Footwear
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#c5972f]" />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCollection(category)}
              className={`border px-5 py-3 text-sm font-bold uppercase tracking-wide transition ${
                activeCollection === category
                  ? "border-[#b88a25] bg-[#b88a25] text-white"
                  : "border-[#d8bc76] bg-white text-[#b88a25] hover:bg-[#f4ead6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden border border-[#d6c7a6] bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-[#f1eadc]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 bg-[#b88a25] px-3 py-1 text-xs font-bold uppercase text-white">
                  New
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#665a4a]">{product.color}</p>
                <h3 className="mt-1 font-serif text-2xl font-bold">
                  {product.name}
                </h3>
                <p className="mt-3 text-3xl font-semibold text-[#b88a25]">
                  ${product.price}
                </p>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="mt-5 w-full border border-[#c5972f] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#b88a25] transition hover:bg-[#c5972f] hover:text-white"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div className="min-h-[460px] bg-[linear-gradient(135deg,#f8f4ec,#ffffff,#d0a13a)] p-8 shadow-xl">
            <div className="h-full border border-[#c5972f]/40 bg-white/45 p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#b88a25]">
                Lookbook
              </p>
              <h2 className="mt-4 font-serif text-5xl font-bold">
                Discover the Collection
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-[#594d3f]">
                Designed for those who lead. Every piece represents power,
                elevated style, and heritage-inspired luxury.
              </p>
              <a
                href="#shop"
                className="mt-8 inline-flex bg-[#c5972f] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
              >
                Explore Lookbook →
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="border border-[#d6c7a6] bg-[#fbf7ef] p-6">
              <p className="font-serif text-3xl font-bold">Footwear</p>
              <p className="mt-2 text-[#665a4a]">
                Marble textures, gold trim, and bold silhouettes.
              </p>
            </div>

            <div className="border border-[#d6c7a6] bg-[#fbf7ef] p-6">
              <p className="font-serif text-3xl font-bold">Luxury Coats</p>
              <p className="mt-2 text-[#665a4a]">
                Statement outerwear designed around power and prestige.
              </p>
            </div>

            <div className="border border-[#d6c7a6] bg-[#fbf7ef] p-6">
              <p className="font-serif text-3xl font-bold">Signature Vests</p>
              <p className="mt-2 text-[#665a4a]">
                Greek-inspired armor styling with premium finishing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 border-y border-[#d8bc76]/40 py-12 md:grid-cols-4">
          {[
            [
              "Made to Stand Out",
              "Bold designs. Royal details. You were never meant to blend in.",
            ],
            [
              "Inspired by Greatness",
              "Rooted in Greek heritage. Worn by modern leaders.",
            ],
            [
              "Confidence in Every Thread",
              "Premium materials, flawless fit, power you can feel.",
            ],
            [
              "Secure & Trusted",
              "Encrypted payments and dedicated customer care.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="text-center">
              <div className="mx-auto mb-4 text-5xl text-[#b88a25]">♛</div>
              <p className="font-bold uppercase tracking-wide">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[#665a4a]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-serif text-5xl tracking-[0.14em] text-[#b88a25]">
              ZES
            </p>
            <p className="mt-3 max-w-sm text-[#665a4a]">
              Strength. Legacy. Excellence. Wear your power.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-bold uppercase">Shop</p>
              <p className="mt-3 text-sm text-[#665a4a]">All Products</p>
              <p className="mt-2 text-sm text-[#665a4a]">Footwear</p>
              <p className="mt-2 text-sm text-[#665a4a]">Coats</p>
              <p className="mt-2 text-sm text-[#665a4a]">Accessories</p>
            </div>

            <div>
              <p className="font-bold uppercase">Customer Care</p>
              <p className="mt-3 text-sm text-[#665a4a]">FAQ</p>
              <p className="mt-2 text-sm text-[#665a4a]">
                Shipping & Delivery
              </p>
              <p className="mt-2 text-sm text-[#665a4a]">
                Returns & Exchanges
              </p>
              <p className="mt-2 text-sm text-[#665a4a]">Track Order</p>
            </div>

            <form onSubmit={handleNewsletter}>
              <p className="font-bold uppercase">Stay Connected</p>
              <p className="mt-3 text-sm text-[#665a4a]">
                Be the first to know about new releases and exclusive offers.
              </p>

              <div className="mt-4 flex border border-[#d6c7a6]">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-3 outline-none"
                />
                <button type="submit" className="bg-[#c5972f] px-4 text-white">
                  →
                </button>
              </div>

              {newsletterSent && (
                <p className="mt-2 text-sm font-semibold text-[#b88a25]">
                  Thanks — you are on the list.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-[#d8bc76]/40 py-4 text-center text-xs text-[#665a4a]">
          © 2024 ZES. All rights reserved.
        </div>
      </section>
    </main>
  );
}