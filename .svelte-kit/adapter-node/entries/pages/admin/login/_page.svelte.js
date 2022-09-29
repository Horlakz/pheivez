import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/index.js";
import axios from "axios";
import "js-cookie";
const Envelope = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}"></path><path d="${"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}"></path></svg>`;
});
const Lock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"currentColor"}" viewBox="${"0 0 448 512"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"}"></path></svg>`;
});
axios.defaults.baseURL = "https://api.pheivez.horlakz.com/api/v1";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.responseEncoding = "utf8";
axios.defaults.headers.common["Origin"] = "https://api.pheivez.horlakz.com/api/v1";
axios.create({});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<form class="${"p-10 sm:px-64"}"><label for="${"email"}" class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">Your Email</label>
  <div class="${"relative mb-6"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}">${validate_component(Envelope, "Envelope").$$render($$result, {}, {}, {})}</div>
    <input type="${"text"}" id="${"email"}" class="${"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}" placeholder="${"admin@pheivez.com"}"${add_attribute("value", email, 0)}></div>
  <label for="${"website-admin"}" class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">Password</label>
  <div class="${"flex"}"><span class="${"inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"}">${validate_component(Lock, "Lock").$$render($$result, {}, {}, {})}</span>
    <input type="${"password"}" id="${"website-admin"}" class="${"rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}" placeholder="${"*******"}"${add_attribute("value", password, 0)}></div>

  <button class="${"w-full mt-6 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 default-transition"}" ${"disabled"}>Login</button></form>`;
});
export {
  Page as default
};
