import {defineStore, acceptHMRUpdate} from "pinia";

const useStore = defineStore("store", {
    state() {
        return {
            num: 11
        }
    },
    getters: {
        doubleNum(state) {
            return state.num * 2
        }
    },
    actions: {
        increment() {
            this.num += 1;

        },
        decrement(state) {
            this.num -= 1;
        }
    }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
export {useStore}
