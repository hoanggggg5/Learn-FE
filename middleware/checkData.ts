import { Context } from "@nuxt/types";
import controllers from "@/controllers";
import store from "~/controllers/store";

export default async function(context: Context) {
  if(store.value.first_route) {
    store.value.first_route = false
    await controllers.GetLogged(context.$axios)
  }
}