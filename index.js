const products = [
  {
    id: 1,
    title: 'Blouse Size M (Cantaloupe)',
    price: 25000,
    image: 'images/img1.jpg',
  },

  {
    id: 2,
    title: 'Blouse Size M (Purple)',
    price: 25000,
    image: 'images/img2.jpg',
  },
  {
    id: 3,
    title: 'Blouse Size M (Orange)',
    price: 18000,
    image: 'images/img3.jpg',
  },
  {
    id: 4,
    title: 'Blouse Size M (Blue)',
    price: 18000,
    image: 'images/img4.jpg',
  },
  {
    id: 5,
    title: 'Blouse Size M (Red)',
    price: 18000,
    image: 'images/img5.jpg',
  },
  {
    id: 6,
    title: 'Blouse Size M (Soft Purple)',
    price: 18000,
    image: 'images/img6.jpg',
  },
  {
    id: 7,
    title: 'Blouse Size M (Rose)',
    price: 18000,
    image: 'images/img7.jpg',
  },
  {
    id: 8,
    title: 'Blouse Size M (Cherry)',
    price: 18000,
    image: 'images/img8.jpg',
  },
];

const data = [
  {
    username: 'Slade',
    password: 1111,
    amount: [50000],
  },

  {
    username: 'Robin',
    password: 2222,
    amount: [100000],
  },
];

const btnRight = document.querySelectorAll('.btnRight');
const openBtnForCart = document.querySelector('.Cart');
const closeBtnForCart = document.querySelector('.xMarkBtn');
const name = document.querySelector('.name');
const price = document.querySelector('.price');
const mainContainer = document.querySelector('.name--Price');
const TotalPrice = document.querySelector('.textDecorationForTotal');
const overall = document.querySelector('.total--totalPrice');
const product = document.querySelector('.textDecorationForProduct');
const priceColor = document.querySelector('.priceColor');
const searchBar = document.querySelector('.searchBar');
const searchResult = document.querySelector('.searchResult');
const searchBarResult = document.querySelector('.searchBarResult');
const inputForLoginUser = document.querySelector('.inputForLoginUser');
const inputForLoginPassword = document.querySelector('.inputForLoginPassword');
const enterBtnForLogin = document.querySelector('.enterBtnForLogin');
const displayAmount = document.querySelector('.displayAmount');
const amountPrice = document.querySelector('.amountPrice');
const bankingUserName = document.querySelector('.bankingUserName');
const addMoney = document.querySelector('.addMoney');
const enterBtnForAdd = document.querySelector('.enterBtnForAdd');
const enterBtnForTransfer = document.querySelector('.enterBtnForTransfer');
const inputForTransfer = document.querySelector('.inputForTransfer');
const addMoneyForTransfer = document.querySelector('.addMoneyForTransfer');
const inputForCreatingPass = document.querySelector('.inputForCreatingPass');
const inputForCreatingPass2 = document.querySelector('.inputForCreatingPass2');
const y = document.getElementById('hide1');
const z = document.getElementById('hide2');
const link = document.querySelector('.registerText');
const backKey = document.querySelector('.backKey');
const displayRegister = document.querySelector('.displayRegister');
const createAccBtn = document.querySelector('.createAccBtn');
const inputForCreatingUser = document.querySelector('.inputForCreatingUser');
const inputForDeposit = document.querySelector('.amountForRegister');
const totalAmountHolder = document.getElementById('totalAmountHolder');
const buyBtn = document.querySelector('.buyBtn');
const innerCartDisplay = document.querySelector('.innerCartDisplay');
const paymentAlert = document.querySelector('.paymentAlert');

const toggleDisplay = function () {
  document.querySelector('.cartDisplay').classList.toggle('display');
};

const Amount = function (mov) {
  const TotalAmount = mov.amount.reduce((acc, mov) => acc + mov, 0);
  amountPrice.textContent = `${TotalAmount}K`;
};

const AddingAmount = function (mov) {
  const moneyAmount = Number(addMoney.value);
  mov.amount.push(moneyAmount);
  const update = mov.amount.reduce((acc, mov) => acc + mov, 0);
  amountPrice.textContent = `${update}K`;
};

const balance = function (acc) {
  acc.balance = acc.amount.reduce((acc, mov) => acc + mov, 0);
};

const updateTotalPrice = function () {
  const Total = empty.reduce((acc, mov) => acc + mov, 0);
  TotalPrice.textContent = `${Total} MMK`;
  totalAmountHolder.textContent = `${Total} MMK`;
};

//btn for adding , removing and calc total
let empty = [];

for (let i = 0; i < btnRight.length; i++) {
  btnRight[i].addEventListener('click', function () {
    const displayProduct = products.map(mov => mov.title);
    const displayPrice = products.map(mov => mov.price);

    //console.log(displayProduct[i]);
    //console.log(displayPrice[i]);

    const h4Product = document.createElement('h4');
    h4Product.classList.add('textDecorationForProduct');

    h4Product.textContent = displayProduct[i];
    name.append(h4Product);

    const minidiv = document.createElement('div');
    minidiv.classList.add('miniDiv');

    const h4Price = document.createElement('h4');
    h4Price.classList.add('textDecorationForPrice');
    h4Price.classList.add('priceColor');
    h4Price.textContent = `${displayPrice[i]} MMK`;

    const minusbtn = document.createElement('button');
    minusbtn.classList.add('minusBtn');
    minusbtn.textContent = `🗑`;
    minidiv.append(h4Price, minusbtn);
    price.append(minidiv);

    empty.push(displayPrice[i]);
    console.log(empty);

    updateTotalPrice();

    minusbtn.addEventListener('click', function () {
      const index = empty.findIndex(acc => acc);
      const NewReduce = empty.splice(index, 1);

      //console.log(empty);
      console.log(empty); // have to use this for delete
      h4Product.classList.add('hidden');
      h4Price.classList.add('hidden');
      minusbtn.classList.add('hidden');
      minidiv.classList.add('hidden');

      updateTotalPrice();
    });
  });
}

//openbtn for cart display
openBtnForCart.addEventListener('click', toggleDisplay);

//closebtn for cart display
closeBtnForCart.addEventListener('click', toggleDisplay);

//search bar
searchBar.addEventListener('keyup', e => {
  searchBarResult.innerHTML = '';

  const searchInput = e.target.value.toLowerCase();

  if (searchInput.length === 0) {
    return;
  }

  const Filtered = products.filter(product => {
    return product.title.toLowerCase().includes(searchInput);
  });

  console.log(Filtered);
  const lengthCheck = Filtered.length > 0;

  if (lengthCheck) {
    for (let i = 0; i < Filtered.length; i++) {
      const mainContainer = document.createElement('div');
      mainContainer.classList.add('mainContainerForSearchBar');

      const title = document.createElement('div');
      title.classList.add('titleForSearchBar');
      title.append(Filtered[i].title);

      const img = document.createElement('img');
      img.classList.add('imgForSearchBar');
      img.src = Filtered[i].image;

      mainContainer.append(title, img);
      searchBarResult.append(mainContainer);
    }
  }
});

//Banking
let currentuser;

enterBtnForLogin.addEventListener('click', function () {
  const username = inputForLoginUser.value;

  currentuser = data.find(acc => acc.username === username);
  //console.log(currentuser);
  if (currentuser?.password === Number(inputForLoginPassword.value)) {
    inputForLoginUser.value = inputForLoginPassword.value = '';
    //display
    displayAmount.style.display = 'block';

    //display Amount
    Amount(currentuser);

    //display username
    bankingUserName.textContent = `Welcome ${currentuser.username}`;
  }
});

//adding money
enterBtnForAdd.addEventListener('click', function () {
  AddingAmount(currentuser);

  addMoney.value = '';
});

//transfer
enterBtnForTransfer.addEventListener('click', function () {
  const name = data.find(mov => mov.username === inputForTransfer.value);
  console.log(name);

  const amount = Number(addMoneyForTransfer.value);

  console.log(amount);
  balance(currentuser);

  if (
    name &&
    currentuser.balance >= amount &&
    name.username !== currentuser.username
  ) {
    currentuser.amount.push(-amount);
    name.amount.push(amount);

    //update
    Amount(currentuser);
  }
  inputForTransfer.value = addMoneyForTransfer.value = '';
});

//eyeBtn
const eye = function () {
  if (inputForCreatingPass.type === 'password') {
    inputForCreatingPass.type = 'gamil';
    y.style.display = 'block';
    z.style.display = 'none';
  } else {
    inputForCreatingPass.type = 'password';
    y.style.display = 'none';
    z.style.display = 'block';
  }
};

//register
const linkAndBack = function () {
  if (backKey.style.display === 'none') {
    link.style.display = 'none';
    backKey.style.display = 'block';
    if (displayAmount.style.display === 'block') {
      displayAmount.style.display = 'none';
      displayRegister.style.display = 'block';
    } else {
      displayRegister.style.display = 'block';
    }
  } else {
    link.style.display = 'block';
    backKey.style.display = 'none';
    displayRegister.style.display = 'none';
  }
};

createAccBtn.addEventListener('click', function () {
  const username = inputForCreatingUser.value;
  const amount = [Number(inputForDeposit.value)];
  displayRegister.style.display = 'none';
  backKey.style.display = 'none';
  link.style.display = 'block';

  if (inputForCreatingPass.value === inputForCreatingPass2.value) {
    const password = Number(inputForCreatingPass2.value);
    data.push({ username, password, amount });
  }
  inputForCreatingUser.value =
    inputForCreatingPass.value =
    inputForCreatingPass2.value =
    inputForDeposit.value =
      '';

  console.log(data);
});

//payment
buyBtn.addEventListener('click', function () {
  const totalamount = empty.reduce((acc, mov) => acc + mov, 0);
  const amount = currentuser.amount.reduce((acc, mov) => acc + mov, 0);

  if (amount >= totalamount) {
    //alert
    alert('Payement successful');

    //display
    mainContainer.classList.add('hidden');
    overall.classList.add('hidden');
    paymentAlert.classList.remove('hidden');

    //empty
    empty = [];

    //update
    updateTotalPrice();

    //-
    currentuser.amount.push(-totalamount);
    Amount(currentuser);
  } else {
    alert('Insufficient amount');
  }
});
