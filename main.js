// let num = 5;

//targil 1
// if (num == 2) {
//   console.log(2 * num);
// } else if (num == 5) {
//   console.log(5 * num);
// } else if (num == 7) {
//   console.log(7 * num);
// } else if (num == 10) {
//   console.log(10 * num);
// } else {
//   console.log(num);
// }

//targil 2
// switch (num) {
//   case 2:
//     console.log(2 * num);
//     break;
//   case 5:
//     console.log(5 * num);
//     break;
//   case 7:
//     console.log(7 * num);
//     break;
//   case 10:
//     console.log(10 * num);
//     break;
//   default:
//     console.log(num);
//     break;
// }

//targil 3
// switch (num) {
//   case 1:
//     console.log("It's Sunday");
//     break;
//   case 2:
//     console.log("It's Monday");
//     break;
//   case 3:
//     console.log("It's Tuesday");
//     break;
//   case 4:
//     console.log("It's Wednesday");
//     break;
//   case 5:
//     console.log("It's Thursday");
//     break;
//   case 6:
//     console.log("It's Friday");
//     break;
//   case 7:
//     console.log("It's Saturday");
//     break;
//   default:
//     console.log("The number can't be a day");
//     break;
// }

//targil 4
// let obj = {
//   type: "admin",
//   email: "yakov133@gmail.com",
//   name: "jacob",
// };
// switch (obj.type) {

//   case "admin":
//     console.log("you are admin");
//     break;

//   case "super admin":
//     console.log("you are a super admin");
//     break;

//   default:
//     console.log("you are our loyal client");
//     break;
// }

//targil 5
let btns = document.getElementsByClassName("btn");
for(let elm of btns) {
    elm.onclick=()=>{
        btnName(elm.innerText);
    }
}
function btnName(data){
    console.log(data);
}

//targil 6
let arr = [
  {
    model: "Opel",
    year: "2000",
    price: 10000,
    discount: 10,
    pic: "https://cdn.pixabay.com/photo/2017/08/11/10/16/opel-rekord-p1-2630262__480.png",
  },
  {
    model: "Volvo",
    year: "2020",
    price: 100000,
    discount: 25,
    pic: "https://cdn.pixabay.com/photo/2017/06/12/16/24/volvo-2396040__340.jpg",
  },
  {
    model: "Citroen",
    year: "2013",
    price: 15000,
    discount: 7,
    pic: "https://cdn.pixabay.com/photo/2016/08/06/22/43/citroen-11cv-1575274__480.jpg",
  },
  {
    model: "TOYOTA",
    year: "2021",
    price: 400000,
    discount: 10,
    pic: "https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__480.jpg",
  },
  {
    model: "B.M.W",
    year: "2000",
    price: 10000,
    discount: 3,
    pic: "https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg",
  },
];
//targil 1
for (const iterator of arr) {
  document.write(`
    <div>
    <p>model: ${iterator.model}</p>
    <p>year: ${iterator.year}$</p>
    <p>price: ${iterator.price}$</p>
    <p>price(discont): ${iterator.price * ((100 - iterator.discount) / 100)}</p>
    <img src="${iterator.pic}" width="500px" height="400px">
    </div>
    <br>`);

}
//targil 2
setTimeout(()=>{

    for (const iterator of arr) {
        switch (iterator.discount) {
          case 25:
            alert(`${iterator.model} crazy sell`);
            break;
          case 10:
            alert(`${iterator.model} good dell for you`);
            break;
          case 7:
            alert(`${iterator.model} not bad`);
            break;
          case 3:
            alert(`${iterator.model} this is a joke`);
            break;
        default:
            break;
        }
    }
    
},2000)