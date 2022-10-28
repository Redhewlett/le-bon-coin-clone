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
