import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App);

import LoginForm from "./components/LoginForm.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheTopbar from "./components/TheTopbar.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";
import SearchBox from "./components/SearchBox.vue";
import Table from "./components/Table.vue";

app.component("login-form", LoginForm);
app.component("sidebar", TheSidebar);
app.component("topbar", TheTopbar);
app.component("breadcrumb", Breadcrumbs);
app.component("searchbox", SearchBox);
app.component("app-table", Table);
app.use(store).use(router).mount("#app");
