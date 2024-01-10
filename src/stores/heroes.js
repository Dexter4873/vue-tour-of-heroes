import { defineStore } from 'pinia'

export const useHeroesStore = defineStore('heroes', {
  state: () => ({
    heroes: [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]
  }),
  getters: {
    top() {
      return this.heroes.slice(0, 5)
    }
  },
  actions: {
    findById(id) {
      return this.heroes.find((item) => item.id === id)
    },
    updateName(id, newName) {
      const hero = this.findById(id)
      hero.name = newName
    },
    deleteById(id) {
      const index = this.heroes.findIndex((hero) => hero.id === id)
      this.heroes.splice(index, 1)
    }
  }
})
