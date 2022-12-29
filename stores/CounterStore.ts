export const useCounterStore = defineStore("CounterStore", {
  state: () => ({
    counter: 2022,
  }),
  getters: {
    // Hint: Accessing the state only can be simply done with arrow function:
    // automatically infers the return type as a number
    getCounter: state => state.counter,
    // Hint: If a getter needs to access an other getter, we need a function
    // the return type **must** be explicitly set
    doubleCounter(): number {
      // autocompletion and typings for the whole store ✨
      return this.getCounter * 2;
    } 
  },
  actions: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
  }
})