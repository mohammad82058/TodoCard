// alert("Hello World!");
// console.log(10*8);
// let myFirstName="mohammad";
// console.log(myFirstName)
// camelcase

//  // NUMBER
//  let numberType =10*8;
//  console.log(typeof numberType);

//  //string
//  let stringType = "mohammad";
//  console.log(typeof stringType);

//  //boolean
//  let booleanType =false;
//  console.log(typeof booleanType);

//  //undifind

//  let undifindType;
//  console.log(typeof undifindType);

//  //Null
//  let NullType = null;
//  console.log(typeof NullType);
//  let myFirstName = "mohammad";

//  const birthday=2002;

// const myBirthDay = 2002;
// const now =2022;
// const myage = 20;
// const aliage = 23;
// const myAgeOlder = aliage <myage ;
// console.log(myAgeOlder);
// console.log(now - myBirthDay);
// console.log(aliage + myage);
// console.log(now /2);

// const vaznmohammad = 65;
// const ghadmohammad = 1.83;
// const mohammadbmi = vaznmohammad/(ghadmohammad**2);
// const mohammadhealty = mohammadbmi<25;
// const mohammadfat=mohammadbmi>30;
// console.log(mohammadbmi,mohammadfat,mohammadhealty);
// if(mohammadbmi<25){
//     console.log("mohammad is healthy");
// } else {
//   console.log("mohammad is not healthy");
// }

// let days = "friday";
// switch (days){
//     case "friday":
//         console.log("tatile");
//         break;
//         default:
//             console.log("nadarim");
// }

// const mah = (0);
// switch (mah){
//     case 1:
//         console.log("joz bahare");
//         break;
//         case 2:
//             console.log("joz bahare");
//             break;
//             case 3:
//                 console.log("joz bahare");
//                 break;
//         case 4:
//             console.log("joz tabestoone");
//             break;
//             case 5:
//                 console.log("joz tabestoone");
//                 break;
//                 case 6:
//                     console.log("joz tabestoone");
//                     break;
//             case 7:
//                 console.log("joz paeeze");
//                 break;
//                 case 8:
//                     console.log("joz paeeze");
//                     break;
//                     case 9:
//                         console.log("joz paeeze");
//                         break;
//                 case 10:
//                     console.log("joz zemestoone");
//                     break;
//                     case 11:
//                         console.log("joz zemestoone");
//                         break;
//                         case 12:
//                             console.log("joz zemestoone");
//                             break;
//                     default:
//                     console.log("na motabar");
//                     break;
// }

// const locationHend = true;
// const battery = 100 ;
// const stroge = 12 ;
// if(locationHend && battery>=50 && stroge>=10){
//     console.log("you need a update")
// } else{
//     console.log("you need not update");
// }

// function nameLogger (){
//     console.log("my name is mohammadreza");
// }
// nameLogger()

// function nameLogger (name){
//     console.log(" my name is " + name);
// }
// nameLogger(" ali ");

// function nameLogger (name){
//     const StarName= "****" + name + "****";
//     return StarName;
// }
// const MohammadrezareturnName = nameLogger("mohammadreza") ;
// const AlireturnName = nameLogger("Ali") ;
// const AbbasreturnName = nameLogger("Abbas") ;

// console.log(MohammadrezareturnName);
// console.log(AlireturnName);
// console.log(AbbasreturnName);
// console.log(nameLogger("sahar") ) ;


// function juice (Apple , Orange , Benana){
//     return Apple + Orange + Benana;
// }
// const juiser = (juice (4 , 2 , 6));
// console.log(juiser);



// const age = ( now,birthday) => {
//    const myage = now - birthday;
//    const uni70 = 70 - myage;
//    return uni70;
// }
// console.log(age(2022 , 2002));


// const Food = (Animal , Age) => {
//     if(Animal == "Dog" && Age ==3 ){
//         return "dry food";
//     } else{
//         return "soft food";
//     }
// }
// const returnfood= Food("Dog" , 3);
// console.log(returnfood);

// function Food (Animal , Age){
//     if(Animal=="Dog" || Age == 3){
//       return "food dry";
//     } else{
//         return "soft food";
//     }
// }
// const returnfood = Food("Dog" , 3);
// console.log(returnfood);

// const Friend1 = "Ali";
// const Friend2 = "Hossein" ;
// const Friend3 = "Abbas";
// const Friends = ["Ali" , "Hossein" , "Abbas"];
// console.log(Friends);
// const arrayFriends2 = Friends[1];
// console.log(arrayFriends2);

// Friends[2]="Mohammad";
// console.log(Friends);
// const lastarrayFriends = Friends [Friends.length-1];
// console.log(lastarrayFriends);

// const varibelFriends = [Friend1 , 2022-2002 , Friend3];  
// console.log(varibelFriends);

// const Friends = ["Ali" , "Hossein" , "Abbas" , "Hasan"];
// const pushreturned = Friends.push("mostafa");
// console.log(Friends,pushreturned);
// const unshiftreturned = Friends.unshift("milad");
// console.log(Friends,unshiftreturned);
// const popReturn =Friends.pop();
// console.log(Friends , popReturn);

// const shiftReturn = Friends.shift();
// console.log(Friends , shiftReturn);

// const indexofHossein = Friends.indexOf("Hossein");
// console.log(indexofHossein);

// const inclodesvalue = Friends.includes("Abbas");
// console.log(inclodesvalue);



//LOOPS

// let B = 5;


// // while(B <= 10 ){
// //  console.log("B ="  + B);
// //  B = B + 1;
// // }
// // console.log("final while" + " " + B);


// do{
//   console.log("B=" + B);
//   B = B + 1;
// } while(B <=10)
// console.log("Final while" + B);

// for (B = 5 ; B <= 10 ; B= B+1 ){
//     console.log("B =" + B)
// }


// const Friends = ["Ali" , "Hossein" , "Abbas" , "Hasan"];

// for(let i = Friends.length - 1;i >=0 ;i= i - 1 ){
//     console.log(Friends[i]);
// }

// let num0 = [1+2+3+4+5+6+7+8+9];
// for(let i = num0.length-1;i<=0;i=i+1){
//     console.log(num0[i])
// }

let  num0 = ["0","2","4","6","8"];
let  num1 = ["1","3","5","7","9"];
for(let i=num0.length-1 && num1.length-1;i>=0;i=i-1){
    console.log(num0[i],num1[i]);
    
}