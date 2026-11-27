import './style.css'

const products = [
  { name: 'Piattos', category: 'Snacks', price: '₱25', image: '/images/products/piattos.png', tone: 'butter', featured: true },
  { name: 'Chippy', category: 'Snacks', price: '₱20', image: '/images/products/chippy.png', tone: 'tomato' },
  { name: 'Lucky Me! Pancit Canton', category: 'Instant Food', price: '₱18', image: '/images/products/lucky-me-pancit-canton.png', tone: 'noodle', featured: true },
  { name: 'Coca-Cola', category: 'Beverages', price: '₱25', image: '/images/products/coca-cola.png', tone: 'cola' },
  { name: 'Bottled Water', category: 'Beverages', price: '₱15', image: '/images/products/bottled-water.png', tone: 'water' },
  { name: 'SkyFlakes', category: 'Snacks', price: '₱10', image: '/images/products/skyflakes.png', tone: 'cracker' },
  { name: 'Sardines', category: 'Canned Goods', price: '₱28', image: '/images/products/sardines.png', tone: 'sardine' },
  { name: 'Instant Coffee', category: 'Beverages', price: '₱8', image: '/images/products/instant-coffee.png', tone: 'coffee' },
  { name: 'Shampoo Sachet', category: 'Personal Care', price: '₱7', image: '/images/products/shampoo-sachet.png', tone: 'care' },
  { name: 'Laundry Detergent', category: 'Household Products', price: '₱12', image: '/images/products/laundry-detergent.png', tone: 'clean' },
]

const categories = [
  { name: 'Snacks', icon: '🥨', note: 'Something to munch on' },
  { name: 'Beverages', icon: '🧃', note: 'Refreshment for every day' },
  { name: 'Instant Food', icon: '🍜', note: 'Quick and easy favorites' },
  { name: 'Canned Goods', icon: '🥫', note: 'Pantry staples' },
  { name: 'Household Products', icon: '🧹', note: 'Everyday home essentials' },
  { name: 'Personal Care', icon: '🧼', note: 'Little daily necessities' },
]

const app = document.querySelector('#app')

const productCard = (product, index) => `
  <article class="product-card" data-product="${product.name.toLowerCase()}" data-category="${product.category}">
    <div class="product-art product-art--${product.tone}">
      ${product.featured ? '<span class="product-featured">Customer favorite</span>' : ''}
      <img class="product-photo" src="${product.image}" alt="${product.name} package" loading="lazy" />
      <span class="product-number">${String(index + 1).padStart(2, '0')}</span>
    </div>
    <div class="product-info">
      <p class="product-category">${product.category}</p>
      <h3>${product.name}</h3>
      <div class="product-bottom">
        <span class="product-price">${product.price}<small> sample</small></span>
        <span class="availability"><i></i>Ask in store</span>
      </div>
    </div>
  </article>
`

app.innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home" aria-label="Kapitbahay Store home">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none"><path d="M7 17.5 10 8h20l3 9.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 17.5h24v15H8zM15 32.5V22h10v10.5M7 17.5c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        <span class="brand-copy"><strong>Kapitbahay</strong><small>SARI-SARI STORE</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">
        <span></span><span></span>
      </button>
      <nav class="primary-nav" id="primary-navigation" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#promotions">Promotions</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact</a>
        <a class="nav-cta" href="#contact">Find our store <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot"></span> A LITTLE STORE, A LOT OF HEART</p>
          <h1>Your neighborhood store, <em>just around the corner.</em></h1>
          <p class="hero-description">Your everyday essentials, favorite snacks, and household needs are always within reach.</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#products">Browse products <span aria-hidden="true">↗</span></a>
            <a class="button button-quiet" href="#contact"><span class="button-icon" aria-hidden="true">✳</span> Contact us</a>
          </div>
          <p class="hero-footnote"><span aria-hidden="true">✳</span> Your suki stop for the little things.</p>
        </div>
        <div class="hero-visual">
          <div class="hero-image-frame">
            <img src="/images/hero-storefront.png" alt="Illustrated Filipino neighborhood sari-sari store" />
          </div>
          <div class="hero-sticker"><span aria-hidden="true">☺</span><strong>Uy, kapitbahay!</strong><small>Drop by anytime</small></div>
          <span class="hero-sparkle sparkle-one" aria-hidden="true">✳</span>
          <span class="hero-sparkle sparkle-two" aria-hidden="true">✳</span>
          <span class="hero-caption">YOUR EVERYDAY STOP <span>•</span> MADE FOR THE NEIGHBORHOOD</span>
        </div>
      </div>
      <div class="hero-bottom container">
        <span>GOOD THINGS, CLOSE TO HOME</span>
        <span class="hero-bottom-line"></span>
        <span>MADE FOR EVERYDAY MOMENTS</span>
      </div>
    </section>

    <section class="category-band" aria-label="Shop by category">
      <div class="container category-band-inner">
        <p>YOUR DAILY<br />PICK-ME-UP</p>
        ${categories.slice(0, 4).map((category) => `<a href="#products" data-category-link="${category.name}"><span aria-hidden="true">${category.icon}</span>${category.name}</a>`).join('')}
        <a class="category-all" href="#products" data-category-link="All"><span aria-hidden="true">＋</span> See everything</a>
      </div>
    </section>

    <section class="section products-section" id="products">
      <div class="container">
        <div class="section-heading products-heading">
          <div>
            <p class="eyebrow">A FEW NEIGHBORHOOD FAVORITES</p>
            <h2>Little things you'll <em>love.</em></h2>
            <p class="section-intro">A peek at the snacks and everyday essentials you might find on our shelves.</p>
          </div>
          <label class="search-box">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" stroke-width="1.6"/><path d="m13.2 13.2 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
            <input id="product-search" type="search" placeholder="Find a product..." aria-label="Search products" />
            <span> / </span>
          </label>
        </div>
        <div class="category-grid" aria-label="Filter products by category">
          <button class="category-card is-active" type="button" data-filter="All" aria-pressed="true"><span class="category-icon">✳</span><span>Everything</span><small>See all the good stuff</small></button>
          ${categories.map((category) => `<button class="category-card" type="button" data-filter="${category.name}" aria-pressed="false"><span class="category-icon">${category.icon}</span><span>${category.name}</span><small>${category.note}</small></button>`).join('')}
        </div>
        <div class="product-grid" id="product-grid">
          ${products.map(productCard).join('')}
        </div>
        <p class="product-disclaimer"><span aria-hidden="true">ⓘ</span> Sample products, prices, and availability are for display only. Please confirm current stock and prices with the store owner.</p>
      </div>
    </section>

    <section class="promo-section" id="promotions">
      <div class="container promo-layout">
        <div class="promo-intro">
          <p class="eyebrow">GOOD THINGS ARE COMING</p>
          <h2>A little something <em>extra.</em></h2>
          <p>We're making room for the fun stuff. These are sample promo ideas, not active offers.</p>
          <a class="text-link" href="#contact">Ask what's in store <span aria-hidden="true">↗</span></a>
          <span class="promo-doodle" aria-hidden="true">✳</span>
        </div>
        <div class="promo-grid">
          <article class="promo-card promo-card--yellow">
            <span class="promo-tag">SAMPLE IDEA 01</span><span class="promo-emoji" aria-hidden="true">🎉</span>
            <h3>Featured deals</h3><p>A little spotlight for a shelf favorite.</p><span class="promo-card-note">Example only · confirm before publishing</span>
          </article>
          <article class="promo-card promo-card--cream">
            <span class="promo-tag">SAMPLE IDEA 02</span><span class="promo-emoji" aria-hidden="true">🥤</span>
            <h3>Snack-time bundles</h3><p>Pair up a merienda favorite and a drink.</p><span class="promo-card-note">Example only · no discount specified</span>
          </article>
          <article class="promo-card promo-card--mint">
            <span class="promo-tag">SAMPLE IDEA 03</span><span class="promo-emoji" aria-hidden="true">🗓️</span>
            <h3>Weekly picks</h3><p>Share a new set of neighborhood picks.</p><span class="promo-card-note">Example only · confirm schedule</span>
          </article>
          <article class="promo-card promo-card--peach">
            <span class="promo-tag">SAMPLE IDEA 04</span><span class="promo-emoji" aria-hidden="true">✨</span>
            <h3>Fresh on the shelf</h3><p>Let everyone know when something new arrives.</p><span class="promo-card-note">Example only · confirm new arrivals</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section about-section" id="about">
      <div class="container about-grid">
        <div class="about-visual">
          <div class="about-image-frame"><img src="/images/about-storefront.png" alt="Illustrated placeholder for a sari-sari store interior" /></div>
          <div class="about-note"><span aria-hidden="true">♡</span><span>Real stories,<br />from right here.</span></div>
          <span class="about-caption">A PLACE FOR THE EVERYDAY</span>
        </div>
        <div class="about-copy">
          <p class="eyebrow">HELLO, KAPITBAHAY</p>
          <h2>A familiar face.<br />A handy little <em>place.</em></h2>
          <p>This space is for the story of your store: what you carry, what matters to you, and what makes it part of the neighborhood. Add your own words here when they're ready.</p>
          <div class="values-list">
            <div><span>01</span><p><strong>Rooted in the neighborhood</strong><small>Replace with a detail that's true to your store.</small></p></div>
            <div><span>02</span><p><strong>Here for everyday needs</strong><small>Share the products your customers count on.</small></p></div>
            <div><span>03</span><p><strong>Always a warm welcome</strong><small>Use only if it reflects your real customer experience.</small></p></div>
          </div>
          <p class="owner-reminder">Draft introduction and values — please confirm or personalize with the store owner.</p>
        </div>
      </div>
    </section>

    <section class="why-section">
      <div class="container">
        <div class="section-heading why-heading">
          <div><p class="eyebrow">THE NEIGHBORHOOD DIFFERENCE</p><h2>Small store, <em>everyday goodness.</em></h2></div>
          <p>Suggested reasons to visit. Keep only the points the store owner can confirm.</p>
        </div>
        <div class="benefit-grid">
          <article><span class="benefit-icon benefit-icon--yellow">⌖</span><h3>Close to home</h3><p>Share how your store fits into the neighborhood once confirmed.</p></article>
          <article><span class="benefit-icon benefit-icon--green">✳</span><h3>Everyday essentials</h3><p>Highlight the products shoppers can really find on your shelves.</p></article>
          <article><span class="benefit-icon benefit-icon--peach">☺</span><h3>A friendly hello</h3><p>Tell visitors what to expect from your service in your own words.</p></article>
          <article><span class="benefit-icon benefit-icon--blue">↗</span><h3>Easy to find</h3><p>Add your verified address and directions for a simple visit.</p></article>
        </div>
        <p class="benefit-disclaimer">Suggested copy only — confirm all store benefits with the owner before publishing.</p>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <div class="container contact-layout">
        <div class="contact-copy">
          <p class="eyebrow">WE'RE JUST AROUND THE CORNER</p>
          <h2>Come on by,<br />or <em>say hello.</em></h2>
          <p>Have a question about a product? Stop by or reach out using the store's confirmed contact details.</p>
          <a class="button button-light" href="#store-details">Get in touch <span aria-hidden="true">↗</span></a>
          <div class="contact-decoration" aria-hidden="true">✳</div>
        </div>
        <div class="contact-details" id="store-details">
          <div class="detail-row"><span class="detail-icon" aria-hidden="true">⌖</span><div><small>FIND THE STORE</small><p>[Bangkal Relocation Davao City]</p></div></div>
          <div class="detail-row"><span class="detail-icon" aria-hidden="true">☏</span><div><small>GIVE US A CALL</small><p>[09292989921]</p></div></div>
          <div class="detail-row"><span class="detail-icon" aria-hidden="true">◷</span><div><small>STORE HOURS</small><p>[8 AM - 9 PM]</p></div></div>
          <div class="detail-row"><span class="detail-icon" aria-hidden="true">f</span><div><small>FOLLOW ALONG</small><p>[Kapit Bahay Official Page]</p></div></div>
          <div class="social-actions">
            <a href="#contact" aria-label="Facebook page placeholder">Facebook <span aria-hidden="true">↗</span></a>
            <a href="#contact" aria-label="Messenger link placeholder">Messenger <span aria-hidden="true">↗</span></a>
          </div>
          <p class="detail-note">Replace these placeholders with the owner's verified contact and social links.</p>
        </div>
        <div class="map-placeholder">
          <div class="map-grid" aria-hidden="true"></div><span class="map-pin" aria-hidden="true">⌖</span>
          <p>OUR LITTLE CORNER OF THE NEIGHBORHOOD</p>
          <span>Map embed will be added after the store address is confirmed.</span>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-brand">
        <a class="brand brand--footer" href="#home">
          <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M7 17.5 10 8h20l3 9.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 17.5h24v15H8zM15 32.5V22h10v10.5M7 17.5c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8c0 2.2 1.4 3.8 3.4 3.8s3.4-1.6 3.4-3.8" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="brand-copy"><strong>Kapitbahay</strong><small>SARI-SARI STORE</small></span>
        </a>
        <p>Good things, close to home.<br />A sample website for a neighborhood store.</p>
      </div>
      <div class="footer-links"><strong>EXPLORE</strong><a href="#products">Products</a><a href="#promotions">Promotions</a><a href="#about">About us</a><a href="#contact">Visit & contact</a></div>
      <div class="footer-contact"><strong>COME SAY HELLO</strong><p>[Bangkal Relocation Davao City]</p><p>[09292989921]</p><a href="#contact">Facebook · Messenger ↗</a></div>
      <a class="back-top" href="#home" aria-label="Back to top">↑</a>
    </div>
    <div class="container footer-bottom"><span>© <span id="current-year"></span> Kapitbahay Sari-Sari Store</span><span>Store name and details are temporary placeholders.</span></div>
  </footer>
`

const filterButtons = [...document.querySelectorAll('[data-filter]')]
const productCards = [...document.querySelectorAll('.product-card')]
const searchInput = document.querySelector('#product-search')
let activeCategory = 'All'

function updateProducts() {
  const query = searchInput.value.trim().toLowerCase()
  let visibleCount = 0

  productCards.forEach((card) => {
    const matchesCategory = activeCategory === 'All' || card.dataset.category === activeCategory
    const matchesSearch = card.dataset.product.includes(query) || card.dataset.category.toLowerCase().includes(query)
    const isVisible = matchesCategory && matchesSearch
    card.hidden = !isVisible
    if (isVisible) visibleCount += 1
  })

  let emptyMessage = document.querySelector('.empty-products')
  if (!visibleCount && !emptyMessage) {
    emptyMessage = document.createElement('p')
    emptyMessage.className = 'empty-products'
    emptyMessage.textContent = 'No matching products yet. Try another search or category.'
    document.querySelector('#product-grid').after(emptyMessage)
  } else if (visibleCount && emptyMessage) {
    emptyMessage.remove()
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.filter
    filterButtons.forEach((item) => {
      const isActive = item === button
      item.classList.toggle('is-active', isActive)
      item.setAttribute('aria-pressed', String(isActive))
    })
    updateProducts()
  })
})

searchInput.addEventListener('input', updateProducts)

document.querySelectorAll('[data-category-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const category = link.dataset.categoryLink
    const matchingButton = filterButtons.find((button) => button.dataset.filter === category)
    matchingButton?.click()
  })
})

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.primary-nav')

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
  menuToggle.setAttribute('aria-expanded', String(!isOpen))
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu')
  navigation.classList.toggle('is-open', !isOpen)
})

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Open navigation menu')
    navigation.classList.remove('is-open')
  })
})

document.querySelector('#current-year').textContent = new Date().getFullYear()
