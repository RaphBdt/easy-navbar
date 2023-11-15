// import './style.css'

function easyNavbar() {
    const easyNavbar = document.querySelector('#easyNavbar');

    if (easyNavbar == null) {
        return;
    }
  
    const jsonPath = easyNavbar.getAttribute('data-json');

    if (jsonPath == null) {
        return;
    }
  
    let dataJson = null;
  
    fetch(jsonPath)
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then((json) => {
  
    dataJson = json;
    const color = dataJson.color;
    const logo = dataJson.logo;
    const data = dataJson.pages;
  
    let navbar = `
    <div class="page-wrapper">
        <div class="nav-wrapper">
            <div class="grad-bar"></div>
            <nav class="navbar">
                <img src="${logo}">
                <div class="menu-toggle" id="mobile-menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <ul class="nav no-search">
    `;
  
    data.forEach((page: any) => {
        if (page.openNewTab === true) {
            navbar += `<li class="nav-item"><a href="${page.link}" target="_blank">${page.name}</a></li>`;
        } else {
            navbar += `<li class="nav-item"><a href="${page.link}">${page.name}</a></li>`;
        }
    })
  
    navbar += `
                    </ul>
                </nav>
            </div>
            <section class="headline">
                <h1>Easy Navbar</h1>
            </section>
        </div>
    </div>
    `;
  
    easyNavbar.innerHTML = navbar;

    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const borderTop: any = document.querySelector('.grad-bar');

    if (menuToggle == null || nav == null || borderTop == null) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('mobile-nav');
        menuToggle.classList.toggle('is-active');
    });

    borderTop.style.background = color;

    var css = `.nav-item a:hover{ color: ${color}!important }`;
    var style: any = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
    })
    .catch((e) => {
        easyNavbar.innerHTML = `<p style="text-align: center; margin: 15px 0;">An error occurred: ${e}</p>`;
    })
}

export default easyNavbar;