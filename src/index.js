
 // Navigation Bar with Home, Menu and Contact.
 //Static Navigation bar created in HTML to add stationary tabs
 //remainder of content will be added to "content" div so they are removed upon clicking each tab
 const navContainer = document.querySelector(".nav_container");
 const content = document.querySelector(".content");
 const navBar = document.createElement("nav");
 const navList = document.createElement("ul");
 const homeNavItem = document.createElement("li");
 const menuNavItem = document.createElement("li");
 const contactNavItem = document.createElement("li");
 homeNavItem.textContent = "Home";
 menuNavItem.textContent = "Menu";
 contactNavItem.textContent = "Contact";
 navList.classList.add("nav_list");
 navList.appendChild(homeNavItem);
 navList.appendChild(menuNavItem);
 navList.appendChild(contactNavItem);
 navBar.appendChild(navList);
 navContainer.appendChild(navBar);

 const homePageTitle = document.createElement("h1");
 homePageTitle.textContent = "Larry's Lobsters";
 content.appendChild(homePageTitle);

 const homePageDescription = document.createElement("p");
 homePageDescription.textContent = "The best lobsters in Maine!";
 content.appendChild(homePageDescription);

 const homePageHoursTitle = document.createElement("h2");
 const homePageHoursSunday = document.createElement("div");
 const homePageHoursMonday = document.createElement("div");
 const homePageHoursTuesday = document.createElement("div");
 const homePageHoursWednesday = document.createElement("div");
 const homePageHoursThursday = document.createElement("div");
 const homePageHoursFriday = document.createElement("div");
 const homePageHoursSaturday = document.createElement("div");
 homePageHoursTitle.textContent = "Hours";
 homePageHoursSunday.textContent = "Sunday: 7am - 5pm";
 homePageHoursMonday.textContent = "Monday: 7am - 5pm";
 homePageHoursTuesday.textContent = "Tuesday: 7am - 5pm";
 homePageHoursWednesday.textContent = "Wednesday: 7am - 5pm";
 homePageHoursThursday.textContent = "Thursday: 7am - 5pm";
 homePageHoursFriday.textContent = "Friday: 7am - 5pm";
 homePageHoursSaturday.textContent = "Saturday: 7am - 5pm";
 content.appendChild(homePageHoursTitle);
 content.appendChild(homePageHoursSunday);
 content.appendChild(homePageHoursMonday);
 content.appendChild(homePageHoursTuesday);
 content.appendChild(homePageHoursWednesday);
 content.appendChild(homePageHoursThursday);
 content.appendChild(homePageHoursFriday);
 content.appendChild(homePageHoursSaturday);

 const homePageLocationTitle = document.createElement("h2");
 const homePageLocation = document.createElement("p");
 homePageLocationTitle.textContent = "Location";
 homePageLocation.textContent = "123 Maine Street, Portland, Maine";
 content.appendChild(homePageLocationTitle);
 content.appendChild(homePageLocation);


 


const createHomePage = () =>{

    const homePageTitle = document.createElement("h1");
    homePageTitle.textContent = "Larry's Lobsters";
    content.appendChild(homePageTitle);

    const homePageDescription = document.createElement("p");
    homePageDescription.textContent = "The best lobsters in Maine!";
    content.appendChild(homePageDescription);

    const homePageHoursTitle = document.createElement("h2");
    const homePageHoursSunday = document.createElement("div");
    const homePageHoursMonday = document.createElement("div");
    const homePageHoursTuesday = document.createElement("div");
    const homePageHoursWednesday = document.createElement("div");
    const homePageHoursThursday = document.createElement("div");
    const homePageHoursFriday = document.createElement("div");
    const homePageHoursSaturday = document.createElement("div");
    homePageHoursTitle.textContent = "Hours";
    homePageHoursSunday.textContent = "Sunday: 7am - 5pm";
    homePageHoursMonday.textContent = "Monday: 7am - 5pm";
    homePageHoursTuesday.textContent = "Tuesday: 7am - 5pm";
    homePageHoursWednesday.textContent = "Wednesday: 7am - 5pm";
    homePageHoursThursday.textContent = "Thursday: 7am - 5pm";
    homePageHoursFriday.textContent = "Friday: 7am - 5pm";
    homePageHoursSaturday.textContent = "Saturday: 7am - 5pm";
    content.appendChild(homePageHoursTitle);
    content.appendChild(homePageHoursSunday);
    content.appendChild(homePageHoursMonday);
    content.appendChild(homePageHoursTuesday);
    content.appendChild(homePageHoursWednesday);
    content.appendChild(homePageHoursThursday);
    content.appendChild(homePageHoursFriday);
    content.appendChild(homePageHoursSaturday);

    const homePageLocationTitle = document.createElement("h2");
    const homePageLocation = document.createElement("p");
    homePageLocationTitle.textContent = "Location";
    homePageLocation.textContent = "123 Maine Street, Portland, Maine";
    content.appendChild(homePageLocationTitle);
    content.appendChild(homePageLocation);

}

homeNavItem.addEventListener("click", () => {
    content.textContent = "";
    createHomePage();
})


const createMenuPage = () => {
    const menuPageMenuTitle = document.createElement("h1");
    menuPageMenuTitle.textContent = "Menu";
    content.appendChild(menuPageMenuTitle);

    const menuPageBeveragesTitle = document.createElement("h2");
    menuPageBeveragesTitle.textContent = "Beverages";
    content.appendChild(menuPageBeveragesTitle);
    const lemonade = document.createElement("p");
    lemonade.textContent = "Lemonade: $4.00";
    content.appendChild(lemonade);
    const icedTea = document.createElement("p");
    icedTea.textContent = "Iced Tea: $3.00";
    content.appendChild(icedTea);
    const coffee = document.createElement("p");
    coffee.textContent = "Coffee: $5.00";
    content.appendChild(coffee);

    const menuPageAppetizersTitle = document.createElement("h2");
    menuPageAppetizersTitle.textContent = "Appetizers";
    content.appendChild(menuPageAppetizersTitle);
    const bakedCrapDip = document.createElement("p");
    bakedCrapDip.textContent = "Baked Crab Dip: $9.00";
    content.appendChild(bakedCrapDip);
    const shrimpCakeSliders = document.createElement("p");
    shrimpCakeSliders.textContent = "Shrimp Cake Sliders: $12.00";
    content.appendChild(shrimpCakeSliders);
    const smokedSalmonBites = document.createElement("p");
    smokedSalmonBites.textContent = "Smoked Salmon Bites: $11.00";
    content.appendChild(smokedSalmonBites);

    const menuPageMainDishesTitle = document.createElement("h2");
    menuPageMainDishesTitle.textContent = "Main Dishes";
    content.appendChild(menuPageMainDishesTitle);
    const lobsterRoll = document.createElement("p");
    lobsterRoll.textContent = "Lobster Roll: $36.00";
    content.appendChild(lobsterRoll);
    const shrimpScampi = document.createElement("p");
    shrimpScampi.textContent = "Shrimp Scampi: $28.00";
    content.appendChild(shrimpScampi);
    const honeyGarlicShrimp = document.createElement("p");
    honeyGarlicShrimp.textContent = "Honey Garlic Shrimp: $30.00";
    content.appendChild(honeyGarlicShrimp);
}


menuNavItem.addEventListener("click", () => {
    content.textContent = "";
    createMenuPage();
})


const createContactUsPage = () => {
    const contactUsTitle = document.createElement("h1");
    contactUsTitle.textContent = "Contact Us";
    content.appendChild(contactUsTitle);

    const larry =document.createElement("h2");
    larry.textContent = "Larry";
    content.appendChild(larry);
    const larryTitle = document.createElement("p");
    larryTitle.textContent = "Owner";
    content.appendChild(larryTitle);
    const larryPhoneNumber = document.createElement("p");
    larryPhoneNumber.textContent = "444-444-0001";
    content.appendChild(larryPhoneNumber);

    const barry =document.createElement("h2");
    barry.textContent = "Barry";
    content.appendChild(barry);
    const barryTitle = document.createElement("p");
    barryTitle.textContent = "Chef";
    content.appendChild(barryTitle);
    const barryPhoneNumber = document.createElement("p");
    barryPhoneNumber.textContent = "444-444-0002";
    content.appendChild(barryPhoneNumber);

    const carry =document.createElement("h2");
    carry.textContent = "Carry";
    content.appendChild(carry);
    const carryTitle = document.createElement("p");
    carryTitle.textContent = "Waiter";
    content.appendChild(carryTitle);
    const carryPhoneNumber = document.createElement("p");
    carryPhoneNumber.textContent = "444-444-0003";
    content.appendChild(carryPhoneNumber);
}

contactNavItem.addEventListener("click", () => {
    content.textContent = "";
    createContactUsPage();
})

   








