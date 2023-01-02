let members =[{
  idx : 1 ,
  text: 'TestText'
}]
members.forEach((el) => {
    console.log(el.hasOwnProperty(el, "idx")); // Error 
    console.log(el.hasOwnProperty.call(el, "idx")); // true
    console.log(el.hasOwnProperty.call(el, "text")); // true
});
console.log(members);