const latestPhones = [
    {
        id: 1,
        name: "Google Pixel 8",
        image: "phone_pixel8.png",
        features: ["Tensor G3", "6.2\" OLED", "50MP Main", "4575mAh", "IP68"],
        releaseDate: "Oct 2023",
        store: "Amazon",
        discount: "-15% off"
    },
    {
        id: 2,
        name: "OnePlus 12",
        image: "phone_oneplus12.png",
        features: ["Snapdragon 8 Gen 3", "6.82\" AMOLED", "50MP Triple", "5400mAh", "100W Charging"],
        releaseDate: "Dec 2023",
        store: "Best Buy",
        discount: "-5% off"
    },
    {
        id: 3,
        name: "iPhone 15 Pro",
        image: "phone_iphone15.png",
        features: ["A17 Pro", "6.1\" OLED", "48MP Main", "Type-C", "Action Button"],
        releaseDate: "Sep 2023",
        store: "Apple Store",
        discount: "Free Upgrade"
    },
    {
        id: 4,
        name: "Samsung S24 Ultra",
        image: "phone_s24ultra.png",
        features: ["Snapdragon 8 Gen 3", "6.8\" AMOLED", "200MP Quad", "S-Pen", "5000mAh"],
        releaseDate: "Jan 2024",
        store: "Samsung Shop",
        discount: "-10% off"
    },
    {
        id: 5,
        name: "Google Pixel 8 Pro",
        image: "phone_pixel8.png",
        features: ["Tensor G3", "6.7\" OLED", "Telephoto Lens", "5050mAh", "AI Features"],
        releaseDate: "Oct 2023",
        store: "Google Store",
        discount: "-$100 credit"
    }
];

window.initLatestPhonesTable = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
        <div class="latest-table-wrapper">
            <div class="table-header">
                <h2>Latest Phones</h2>
            </div>
            <div class="table-body">
    `;

    latestPhones.forEach(phone => {
        html += `
            <div class="phone-row">
                <div class="phone-row-img">
                    <img src="${phone.image}" alt="${phone.name}">
                </div>
                <div class="phone-row-info">
                    <div class="phone-row-name">${phone.name}</div>
                    <div class="phone-row-specs">
                        ${phone.features.map((f, index) => 
                            `<span class="spec-item">${f}${index === phone.features.length - 1 ? '.' : ', '}</span>`
                        ).join('')}
                    </div>
                    <div class="phone-row-date">${phone.releaseDate}</div>
                </div>
                <div class="phone-row-deal">
                    <span class="store-name">${phone.store}</span>
                    <button class="btn-primary">View Deal</button>
                    <span class="discount-tag">${phone.discount}</span>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;
};