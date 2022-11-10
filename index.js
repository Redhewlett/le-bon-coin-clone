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

// ------ category list box ------
const categoriesBtn = document.querySelector('.category--button')
const refBox = document.querySelector('.search_tool')
let listBoxIsOpen = false
// array of categories
const CategoriesArray = [
  {
    isActive: true,
    title: 'Vacances',
    icon: '<i class="fa-solid fa-sun"></i>',
    subCategories: ['Locations & gîtes', "Chambres d'hôtes", 'Campings', 'Hébergements insolites', 'hôtels', 'Ventes privées vacances', 'Locations en Espagne']
  },
  {
    isActive: false,
    title: 'Emploi',
    icon: '<i class="fa-solid fa-briefcase"></i>',
    subCategories: ["Offres d'emploi", "Offres d'emploi Cadres", 'Formations Professionnelles']
  },
  {
    isActive: false,
    title: 'Véhicules',
    icon: '<i class="fa-solid fa-car-rear"></i>',
    subCategories: [
      'Voitures',
      'Motos',
      'Caravaning',
      'Utilitaires',
      'Camions',
      'Nautisme',
      'Équipement auto',
      'Équipement moto',
      'Équipement caravaning',
      'Équipement nautisme'
    ]
  },
  {
    isActive: false,
    title: 'Immobilier',
    icon: '<i class="fa-solid fa-house"></i>',
    subCategories: ['Ventes immobilières', 'Immobilier Neuf', 'Locations', 'Colocations', 'Bureaux & Commerces']
  },
  {
    isActive: false,
    title: 'Mode',
    icon: '<i class="fa-solid fa-shirt"></i>',
    subCategories: ['Vêtements', 'Chaussures', 'Accessoires & Bagagerie', 'Montres & Bijoux', 'Équipement bébé', 'Vêtements bébé', 'Luxe et Tendance']
  },
  {
    isActive: false,
    title: 'Maison',
    icon: '<i class="fa-solid fa-couch"></i>',
    subCategories: ['Ameublement', 'Électroménager', 'Arts de la table', 'Décoration', 'Linge de maison', 'Bricolage', 'Jardinage']
  },
  {
    isActive: false,
    title: 'Multimédia',
    icon: '<i class="fa-solid fa-mobile-screen-button"></i>',
    subCategories: ['Informatique', 'Consoles & Jeux vidéo', 'Image & Son', 'Téléphonie']
  },
  {
    isActive: false,
    title: 'Loisir',
    icon: '<i class="fa-solid fa-basketball"></i>',
    subCategories: [
      'DVD - Films',
      'CD - Musique',
      'Livres',
      'Vélos',
      'Sports & Hobbies',
      'Instruments de musique',
      'Collection',
      'Jeux & Jouets',
      'Vins & Gastronomie'
    ]
  },
  {
    isActive: false,
    title: 'Animaux',
    icon: '<i class="fa-solid fa-paw"></i>',
    subCategories: ['Animaux']
  },
  {
    isActive: false,
    title: 'Materiel Professionnel',
    icon: '<i class="fa-solid fa-dolly"></i>',
    subCategories: [
      'Matériel agricole',
      'Transport - Manutention',
      'BTP - Chantier gros-oeuvre',
      'Outillage - Matériaux 2nd-oeuvre',
      'Équipements industriels',
      'Restauration - Hôtellerie',
      'Fournitures de bureau',
      'Commerces & Marchés',
      'Matériel médical'
    ]
  },
  {
    isActive: false,
    title: 'Services',
    icon: '<i class="fa-solid fa-handshake-angle"></i>',
    subCategories: ['Prestations de services', 'Billetterie', 'Évènements', 'Cours particuliers', 'Covoiturage']
  },
  {
    isActive: false,
    title: 'Divers',
    icon: '<i class="fa-solid fa-ellipsis"></i>',
    subCategories: ['Autres']
  }
]
let currentCategory = CategoriesArray[0]
//the html to inject
const listHtml = `
<span id='category__box' class='category__box'>
  <div class='category__box__list'>
    <div id='categoryBtnCopy' class='category__box__list__element'>
        <i class="fa-solid fa-list-ul"></i>
        <p>Toutes les catégories<p/>
    </div>
    ${CategoriesArray.map(
      (category) =>
        `
      <div onclick='handleListElementClick(event)' data-id="${category.title}" class='category__box__list__element ${
          category.isActive ? 'list__element--active' : ''
        }'>
        ${category.icon}
        <p>${category.title}<p/>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    `
    ).join('')}
  </div>
  <div class='category__box__subCategories'>
    <div class='category__box__list__element'>
      ${currentCategory.icon}
      <p>${currentCategory.title}<p/>
    </div>
    ${currentCategory.subCategories
      .map(
        (subcategory) =>
          `<div class='category__box__list__element list__element--subcategories'>
              <p>${subcategory}<p/>
            </div>
      `
      )
      .join('')}
  </div>
<span>
`

// onclick add or remove
categoriesBtn.addEventListener('click', () => {
  // the button itself
  const listBox = document.getElementById('category__box')
  boxHandler(categoriesBtn, listHtml, listBox)
})

// box handling
function boxHandler(refNode, insertElement, insertedElement) {
  let categorysBtnCopy

  if (!listBoxIsOpen) {
    refNode.insertAdjacentHTML('afterEnd', insertElement)
    listBoxIsOpen = true
    categorysBtnCopy = document.getElementById('categoryBtnCopy')
  } else if (listBoxIsOpen) {
    closeBox(insertedElement)
    return
  }
  // if we click on the copycat button
  categorysBtnCopy.addEventListener('click', (e) => {
    const listBox = document.getElementById('category__box')
    closeBox(listBox)
  })
}

// closebox
function closeBox(box) {
  box.remove()
  listBoxIsOpen = false
}

window.addEventListener('mouseup', (e) => {
  // ----for the category listbox-----
  const listBox = document.getElementById('category__box')
  const boxRelatedArr = ['category__box__list', 'category--button', 'category__box', 'category__box__list__element']

  if (listBoxIsOpen) {
    let match = 0
    for (let i = 0; i < boxRelatedArr.length; i++) {
      if (e.target.parentNode.classList.value.includes(boxRelatedArr[i])) {
        match++
      }
    }
    if (match === 0) return closeBox(listBox)
  }
  // ----for the category listbox-----
})

// when click on one category
function handleListElementClick(e) {
  // previous activ item
  const indexPreviousCategory = CategoriesArray.indexOf(currentCategory)
  // click item
  const clickedCategory = e.target
  // early return if similar
  if (clickedCategory.innerText === currentCategory.title) return
  // item we want to set as activ
  const foundItem = CategoriesArray.filter((category) => category.title === clickedCategory.innerText)
  const foundItemIndex = CategoriesArray.indexOf(foundItem[0])
  // change the arrays
  CategoriesArray[foundItemIndex] = { ...CategoriesArray[foundItemIndex], isActive: true }
  CategoriesArray[indexPreviousCategory] = { ...CategoriesArray[indexPreviousCategory], isActive: false }
  const targetDiv = document.querySelector('.category__box__subCategories')
  currentCategory = CategoriesArray[foundItemIndex]
  // 'refresh' the div's content
  targetDiv.innerHTML = `
  <div class='category__box__list__element'>
      ${currentCategory.icon}
      <p>${currentCategory.title}<p/>
    </div>
    ${currentCategory.subCategories
      .map(
        (subcategory) =>
          `<div class='category__box__list__element list__element--subcategories'>
              <p>${subcategory}<p/>
            </div>
      `
      )
      .join('')}
  `
  //---- add and remove the activ class  ----
  // select prev to delete the class from it
  const previousCategoryElement = document.querySelector('.list__element--active')
  previousCategoryElement.classList.remove('list__element--active')
  //add to the new one
  clickedCategory.classList.add('list__element--active')
}
