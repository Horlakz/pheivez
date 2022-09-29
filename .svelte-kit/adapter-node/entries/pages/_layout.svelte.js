import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import Cookie from "js-cookie";
const app = "";
class Storage {
  set(key, value) {
    Cookie.set(key, value, { expires: 1 });
  }
  get(key) {
    return Cookie.get(key);
  }
  check(key) {
    return Cookie.get(key) !== void 0;
  }
  remove(key) {
    Cookie.remove(key);
  }
}
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".active.svelte-o9446s{font-weight:600;--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity))\n}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const storage = new Storage();
  const checkToken = storage.check("token");
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<header class="${"flex justify-between px-10 py-4 bg-gray-50 border-b"}"><a href="${"/"}"><h1 class="${"text-gray-700 font-semibold text-xl"}">Pheivez</h1></a>

  <nav data-sveltekit-prefetch><ul class="${"flex gap-2"}"><li class="${["svelte-o9446s", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}">Home</a></li>
      <li class="${["svelte-o9446s", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}">About</a></li>
      ${checkToken ? `<li class="${["svelte-o9446s", $page.url.pathname === "/logout" ? "active" : ""].join(" ").trim()}"><a href="${"/logout"}">Logout</a></li>` : ``}</ul></nav>
</header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"flex-center border-t py-4 bg-gray-50"}"><p>Copyright \xA9 ${escape(new Date().getFullYear())}, Pheivez Arts</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Pheivez Arts</title>`, ""}<meta name="${"description"}" content="${"Art Gallery"}" data-svelte="svelte-168xpn">`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
