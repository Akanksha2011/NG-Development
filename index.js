function fun()
{
    let one = "Monday",
     two = 'Tuesday',
    three = "Wednesday",
     four = "Thursday",
     five = "Friday",
    six = "Saturday",
    seven = "Sunday";
    return {
     one,two,three,four,five,six,seven,
    };
}
let{one,two,three,four,five,six,seven} = fun();
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);