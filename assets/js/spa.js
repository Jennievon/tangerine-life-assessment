import Column from "../../pages/columns.js";
import IndexPage from "../../pages/index.js";
import ErrorPage from "../../pages/error.js";

const pages = {
  column: "columns",
  index: "index",
  error: "error",
};

let mainApp = document.getElementById("app");

document.addEventListener("readystatechange", (event) => {
  if (location.hash === "") {
    servePage(pages.index);
  }
});

export function servePage(page) {
  console.log(page);
  if (page == "columns") {
    mainApp.innerHTML = Column();
  } else if (page == "index") {
    mainApp.innerHTML = IndexPage();
  } else if (page == "error") {
    mainApp.innerHTML = ErrorPage();
  }
}
