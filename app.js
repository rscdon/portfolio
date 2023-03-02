// items
const menu = [
    {
        "Event": "Salsa Sundays",
        "Weekday": "Sunday",
        "Location": "Wine & Bottle, Westlands",
        "Image": "./images/SalsaSundays.jpg"
    },
    {
        "Event": "Salsa Tuesdays",
        "Weekday": "Tuesday",
        "Location": "Brew Bistro, Westlands",
        "Image": "./images/SalsaTuesdays.jpg"
    },
    {
        "Event": "Kizomba Special",
        "Weekday": "Wednesday",
        "Location": "Wine & Bottle, Westlands",
        "Image": "./images/KizombaSpecial.jpg"
    },
    {
        "Event": "Afro Latin Wednesdays",
        "Weekday": "Wednesday",
        "Location": "Brazilian Rodizio, Lavington",
        "Image": "./images/AfroLatinWednesdays.jpg"
    },
    {
        "Event": "Latino Night",
        "Weekday": "Thursday",
        "Location": "Nairobi Street Kitchen, Westlands",
        "Image": "./images/LatinoNight.jpg"
    },
    {
        "Event": "Kizomba Afterwork",
        "Weekday": "Thursday",
        "Location": "Britam Tower Upper Hill, Nairobi",
        "Image": "./images/KizombaAfterwork.jpg"
    },
    {
        "Event": "Kizomba Sundowner",
        "Weekday": "Friday",
        "Location": "Library, Sarit Center, Westlands",
        "Image": "./images/KizombaSundowner.jpg"
    },
    {
        "Event": "Afro Latin Fridays",
        "Weekday": "Friday",
        "Location": "Barrels & Stools, Westlands",
        "Image": "./images/afroLatinFridays.jpg"
    },
    {
        "Event": "Salsa Fridays at Metro Lounge",
        "Weekday": "Friday",
        "Location": "Metro Lounge, Nairobi",
        "Image": "./images/SalsaFriday.jpg"
    },
    {
        "Event": "Salsa Fridays",
        "Weekday": "Friday",
        "Location": "Wasani Restaurant, Nairobi",
        "Image": "./images/afroLatinFridays.jpg"
    },
    {
        "Event": "Nairobi Afro Latin Social",
        "Weekday": "Saturday",
        "Location": "Fika Restaurant, Aspire, Westlands",
        "Image": "./images/NairobiAfroLatinSocial.jpg"
    }
]
    ;
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')

// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item)
        return `<article class="menu-item">
                <Image src=${item.Image} class="photo" alt="${item.Event}">
                <div class="item-info">
                    <header>
                        <h4>${item.Event}</h4>
                    </header>
                    <p class="item-text"><b>Location:</b> ${item.Location}</p>
                    <p class="item-text"><b>Weekday:</b><i> ${item.Weekday}</i></p>
                </div>
            </article>`
    });
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.Weekday)) {
            values.push(item.Weekday);
        }
        return values
    },
        ['all']
    )
    const WeekdayBtns = categories.map(function (Weekday) {
        return `<button class="filter-btn" type="button" data-id=${Weekday}>${Weekday}</button>`
    }).join("");
    container.innerHTML = WeekdayBtns
    const filterBtns = document.querySelectorAll('.filter-btn')
    //filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const Weekday = e.currentTarget.dataset.id;
            const menuWeekday = menu.filter(function (menuItem) {
                if (menuItem.Weekday === Weekday) {
                    return menuItem;
                }
            })
            if (Weekday === 'all') {
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuWeekday)
            }
        });
    });
}