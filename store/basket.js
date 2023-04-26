export const state = () => ({
  price: 0,
  count: 0,
  shouldInstall: false,
  products: [],
  loading: false,
})

export const mutations = {
  setPrice(state, payload) {
    state.price = payload
  },
  setCount(state, payload) {
    state.count = payload
  },
  setShouldInstall(state, payload) {
    state.shouldInstall = payload
  },
  setBasketProducts(state, payload) {
    state.products = payload
  },
  changeBasketProduct(state, payload) {
    const found = state.products.find((el) => el.id === payload.id)
    if (found !== undefined) {
      found.count = payload.count
    }
  },
  setLoading(state, payload) {
    state.loading = payload
  },
}

export const actions = {
  async buyProducts({ commit, state }) {
    commit('setLoading', true)

    const data = {
      totalPrice: state.price,
      totalCount: state.count,
      shouldInstall: state.shouldInstall,
      products: [...state.products],
    }
    await postRequest(data)

    commit('setLoading', false)
  },
  async toggleShouldInstall({ commit, state }) {
    commit('setLoading', true)
    commit('setShouldInstall', !state.shouldInstall)
    commit('setLoading', false)
  },
  async addBasketProduct({ commit, rootState, state }) {
    commit('setLoading', true)

    const randomProduct = getRandomProduct(rootState)
    const sameProductInState = state.products.find((el) => el.id === randomProduct.id)

    if (sameProductInState) increaseProductCount(commit, sameProductInState)
    else addNewProduct(commit, state, randomProduct)

    commit('setCount', state.count + 1)
    commit('setPrice', state.price + randomProduct.price)
    commit('setLoading', false)
  },
  async changeBasketProductCount({ commit, state, dispatch }, payload) {
    commit('setLoading', true)

    const found = state.products.find((el) => el.id === payload.id)

    const productShouldBeDeleted = found !== undefined && payload.count === 0
    if (productShouldBeDeleted) {
      dispatch('deleteBasketProduct', found.id)
    }

    const productCountShouldChange = found !== undefined && payload.count > 0
    if (productCountShouldChange) {
      changeProductCount(commit, state, found, payload)
    }

    commit('setLoading', false)
  },
  async deleteBasketProduct({ commit, state }, payload) {
    commit('setLoading', true)

    const product = state.products.find((el) => el.id === payload)
    if (product !== undefined) deleteBasketProduct(commit, state, product, payload)

    commit('setLoading', false)
  },
  async deleteAllBasket({ commit }) {
    commit('setLoading', true)
    commit('setBasketProducts', [])
    commit('setCount', 0)
    commit('setPrice', 0)
    commit('setLoading', false)
  },
}

const getRandomProduct = (state) => {
  const allProducts = state.products.products
  const productsLength = allProducts.length
  const randomIndex = Math.floor(Math.random() * productsLength)
  return allProducts[randomIndex]
}
const increaseProductCount = (commit, product) => {
  commit('changeBasketProduct', { ...product, count: product.count + 1 })
}
const addNewProduct = (commit, state, product) => {
  commit('setBasketProducts', [...state.products, { ...product, count: 1 }])
}
const changeProductCount = (commit, state, found, payload) => {
  if (found.count < payload.count) {
    commit('setCount', state.count + 1)
    commit('setPrice', state.price + found.price)
    commit('changeBasketProduct', { ...found, count: found.count + 1 })
  } else {
    commit('setCount', state.count - 1)
    commit('setPrice', state.price - found.price)
    commit('changeBasketProduct', { ...found, count: found.count - 1 })
  }
}
const deleteBasketProduct = (commit, state, product, payload) => {
  commit('setCount', state.count - product.count)
  commit('setPrice', state.price - product.price * product.count)
  commit(
    'setBasketProducts',
    state.products.filter((el) => el.id !== payload),
  )
}
const postRequest = async (data) => {
  await fetch('somethere', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  })
}
