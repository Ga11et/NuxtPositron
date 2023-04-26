export const state = () => ({
  products: [
    {
      id: '1',
      name: 'Вытяжное устройство G2H',
      shortName: 'G2H',
      techDescription: '12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия',
      description: 'Вытяжное устройство с датчиком присутствия',
      articul: 'G2H1065',
      price: 12644,
      image: 'g2h.png',
    },
    {
      id: '2',
      name: 'Вытяжное устройство BXC',
      shortName: 'BXC',
      techDescription: '12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия',
      description: 'Вытяжное устройство для механической системы вентиляции',
      articul: 'G2H1065',
      price: 12644,
      image: 'bxc.png',
    },
    {
      id: '3',
      name: 'Вытяжное устройство GHN',
      shortName: 'GHN',
      techDescription: '12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия',
      description: 'Вытяжное устройство с датчиком присутствия',
      articul: 'G2H1065',
      price: 12644,
      image: 'ghn.png',
    },
    {
      id: '4',
      name: 'Вытяжное устройство TDA',
      shortName: 'TDA',
      techDescription: '12-72/168 м³/ч / гидрорегулируемый расход / от датчика присутствия',
      description: 'Вытяжное устройство с датчиком присутствия',
      articul: 'G2H1065',
      price: 12644,
      image: 'tda.png',
    },
  ],
})
export const productsGetters = {
  getAllProducts(state) {
    return state.products
  },
}
