import 'virtual:uno.css'

// ----- เมนูมือถือ -----
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle')
const nav = document.querySelector<HTMLElement>('.site-nav')

toggle?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open') ?? false
  toggle.setAttribute('aria-expanded', String(open))
})

// ----- ค้นหา/กรองข่าว -----
const search = document.querySelector<HTMLInputElement>('.search-input')
const cards = Array.from(document.querySelectorAll<HTMLElement>('.news-card[data-search]'))

search?.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase()

  cards.forEach((card) => {
    const text = (card.dataset.search ?? '').toLowerCase()
    card.classList.toggle('is-hidden', q !== '' && !text.includes(q))
  })
})
