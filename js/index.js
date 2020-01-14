const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo\\

//nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
let nav = document.querySelectorAll("a");
nav.forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index + 1}`];
  item.style.color = "green";
});

//extra
let nav2 = document.querySelector("nav");
let newItem = document.createElement("a");
newItem.textContent = "different item";
nav2.prepend(newItem);

let lastItem = document.createElement("a")
lastItem.textContent = "last item";
nav2.append(lastItem);
//cta
let ctaH1 = document.querySelector(".cta .cta-text h1");
let ctaBtn = document.querySelector(".cta .cta-text button");

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

ctaH1.innerHTML = siteContent.cta.h1.split(" ").join("<br>");
ctaBtn.textContent = siteContent.cta.button;

//main top
let topH4 = document.querySelectorAll(".top-content .text-content h4")
let topTextP = document.querySelectorAll(".top-content .text-content p")
let midPage = document.getElementById("middle-img");
midPage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

topH4[0].textContent = siteContent["main-content"]["features-h4"];
topH4[1].textContent = siteContent["main-content"]["about-h4"];

topTextP[0].textContent = siteContent["main-content"]["features-content"];
topTextP[1].textContent = siteContent["main-content"]["about-content"];

//main bottom
let bH4 = document.querySelectorAll(".bottom-content .text-content h4");
let bTextP = document.querySelectorAll(".bottom-content .text-content p");

bH4[0].textContent = siteContent["main-content"]["services-h4"];
bH4[1].textContent = siteContent["main-content"]["product-h4"];
bH4[2].textContent = siteContent["main-content"]["vision-h4"];

bTextP[0].textContent = siteContent["main-content"]["services-content"];
bTextP[1].textContent = siteContent["main-content"]["product-content"];
bTextP[2].textContent = siteContent["main-content"]["vision-content"];
//contact
let contactH4 = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");

contactH4.textContent = siteContent.contact["contact-h4"];

contactP[0].innerHTML = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

//footer
let footerCopyright = document.querySelector("footer p");

footerCopyright.textContent = siteContent.footer.copyright;