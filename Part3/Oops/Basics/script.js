// function CreateBiscuits(name,price,qty,company,category){
//     this.name=name;
//     this.price=price;
//     this.qty= qty;
//     this.company=company;
//     this.category=category;
// }

// let biscuit1=new CreateBiscuits("Oreo",10,5,"Cadbury","Chocolate");
// let biscuit2=new CreateBiscuits("Fantasy",20,3,"Parle","Chocolate filled biscuit");
// console.log(biscuit1);
// console.log(biscuit2);

function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}

CreatePencil.prototype.write=function(text){
    let h1 = document.createElement("h1");
    h1.textContent=text;
    h1.style.color=this.color;
    document.body.append(h1)
  }

let pencil1=new CreatePencil("Natraj",10,"Black","natraj")
console.log(pencil1);
let pencil2=new CreatePencil("Doms",10,"red","doms")
console.log(pencil2);

