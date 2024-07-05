// NAV BAR RESPONSIVE MENU
const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const showSideMenu = () => {
    sideMenu.style.display = 'block';
};

const hideSideMenu = () => {
    sideMenu.style.display = 'none';
};

menuBtn.addEventListener('click', showSideMenu);
closeBtn.addEventListener('click', hideSideMenu);

const handleResize = () => {
    if (window.innerWidth >= 760) {
        sideMenu.style.display = 'block';
    } else {
        if (!sideMenu.classList.contains('active')) {
            sideMenu.style.display = 'none';
        }
    }
};

window.addEventListener('resize', handleResize);

// DARK MODE 
const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variants');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
}); 

// ORDERS DISPLAY ON TABLE
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 
        'red' : order.status === 'Pending' ? 
        'warning' : 'success'}">${order.status}</td>
        <td class="primary">Details</td>    
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});