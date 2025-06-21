const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");
const brand__logo = document.querySelector("#logo-lf");
const favicon = document.getElementById("favicon");

const logoDark = "assets/images/logo-lf-dark.png"; // Caminho para a imagem do tema escuro
const logoLight = "assets/images/logo-lf-light.png"; // Caminho para a imagem do tema claro
const faviconDark = "favicon_io/favicon-dark.ico"; // Caminho para o favicon do tema escuro
const faviconLight = "favicon_io/favicon-light.ico"; // Caminho para o favicon do tema claro

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
    brand__logo.src = logoLight; // Troca para a imagem do tema claro
    favicon.href = faviconLight; // Troca para o favicon do tema claro
  } else {
    rootHtml.setAttribute("data-theme", "dark");
    brand__logo.src = logoDark; // Troca para a imagem do tema escuro
    favicon.href = faviconDark; // Troca para o favicon do tema escuro
  }

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})