const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

const orders = [
  {
    productName: 'Foldable Mini Drone',
    productNumber: '85412',
    paymentStatus: 'Due',
    shipping: 'Pending',
  },
  {
    productName: 'Lavender KF102 Drone',
    productNumber: '74216',
    paymentStatus: 'Refunded',
    shipping: 'Declined',
  },
  {
    productName: 'Loko F11 Pro Drone',
    productNumber: '13248',
    paymentStatus: 'Due',
    shipping: 'Pending',
  },
  {
    productName: 'Drone With Camera',
    productNumber: '4652',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  },
  {
    productName: '4K Camera Drone',
    productNumber: '87421',
    paymentStatus: 'Paid',
    shipping: 'Delivered',
  },
  {
    productName: 'Diesel Drone',
    productNumber: '15465',
    paymentStatus: 'Due',
    shipping: 'Pending',
  },
];

// show menu
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

// hide menu
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});

// toggle theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});

// render orders table

orders.forEach((order) => {
  const tr = document.createElement('tr');
  const trContent = `
  <tr>
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${
      order.shipping === 'Declined'
        ? 'danger'
        : order.shipping === 'Pending'
        ? 'warning'
        : 'primary'
    }">${order.shipping}</td>
    <td class="primary">Details</td>
  </tr> 
  `;

  tr.innerHTML = trContent;

  document.querySelector('table tbody').appendChild(tr);
});
