// ---------- header Scroll ----------
const header = document.querySelector('.mainHeader')
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    header.classList.add('mainHeader--grown')
  } else {
    header.classList.remove('mainHeader--grown')
  }
}
// ---------- header Scroll ----------

// ---------- toogle button ----------
const text = document.querySelector('.withShipping__text')
const btn = document.querySelector('.withShipping__btnContainer')
const toggle = document.getElementById('withShipping__btn')
const shippingArray = [text, btn]
for (let i = 0; i < shippingArray.length; i++) {
  shippingArray[i].addEventListener('click', () => {
    if (toggle.className != 'withShipping__btn--active') {
      toggle.classList.add('withShipping__btn--active')
      toggle.innerHTML = '<i class="fa-solid fa-check"></i>'
    } else {
      toggle.classList.remove('withShipping__btn--active')
      toggle.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
  })
}
// ---------- toogle button ----------

// ---------- caroussel ---------------

const imgList = document.getElementById('imgList')
const scrollRight = document.getElementById('scrollRight')
const scrollLeft = document.getElementById('scrollLeft')
const btns = [scrollRight, scrollLeft]
let currentScroll = 0

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', (e) => {
    scroll(e)
  })
}

function scroll(e) {
  const id = e.target.id
  const max = 1440

  if (currentScroll === 0 && id === 'scrollLeft') {
    imgList.scrollLeft = max
    currentScroll = max
    console.log(currentScroll)
    return
  }
  if (currentScroll <= max) {
    if (id === 'scrollRight') {
      imgList.scrollBy(240, 0)
      currentScroll += 240
    } else if (id === 'scrollLeft') {
      imgList.scrollBy(-240, 0)
      currentScroll -= 240
    }
    console.log(currentScroll)
  }
  if (currentScroll >= max && id === 'scrollRight') {
    imgList.scrollLeft = 0
    currentScroll = 0
    console.log('return to base', currentScroll)
  }
}

// ------ country selector -------
const countrySelector = document.querySelector('.countrySelector')
const select = document.querySelector('.countrySelector__initial')
const countryList = document.getElementById('countrySelector__list')

select.addEventListener('click', () => {
  countryList.classList.toggle('hidden')
})
countryList.addEventListener('mouseleave', () => {
  countryList.classList.toggle('hidden')
})
// ------ country selector end -------

// offer and demandes radio buttons
const offer = document.getElementById('offres')
const demandes = document.getElementById('demandes')
const withPrice = document.querySelector('.priceButton')
const withShipping = document.querySelector('.withShipping')

const arr = [offer, demandes]

arr.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (offer.checked) {
      withPrice.classList.remove('hidden')
      withShipping.classList.remove('hidden')
    }
    if (demandes.checked) {
      withPrice.classList.add('hidden')
      withShipping.classList.add('hidden')
    }
  })
})
