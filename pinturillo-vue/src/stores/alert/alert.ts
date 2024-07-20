import { Alert } from "@/entities/entities";
import { defineStore, acceptHMRUpdate } from "pinia";

export const useAlertStore = defineStore({
  id: "alert",
  state: (): Alert => ({
    type: "",
    message: "",
  }),
  getters: {
    isOpen: (state: Alert) => {
      console.log(state.message);

      return Boolean(state.message);
    },
    description: (state: Alert) => {
      const firstLetter = state.type.slice(0, 1);
      const restWord = state.type.slice(1, state.type.length);

      return firstLetter.toLocaleUpperCase() + restWord.toLocaleLowerCase();
    },
  },
  actions: {
    setAlert(alert: Alert): void {
      this.$state = alert;
    },
    clearAlert(): void {
      this.type = "";
      this.message = "";
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlertStore, import.meta.hot));
}
