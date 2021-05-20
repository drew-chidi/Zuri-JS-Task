
// Convert-To-Celsius-Function
const convertFahrToCelsius = (par) =>{
    if(isNaN(par) === false){
        let C = ((par -32) * 5/9).toFixed(4);
        return C;
    }
    else{
        return `${par} is not a valid number but a/an ${typeof(par)}`
    }
}

// Output-the-result-got-from-the-function-call
console.log((convertFahrToCelsius("212")));


// CheckYuGiOh-Array
const checkYuGiOh = n =>{
    let arr = [];
    if(isNaN(n)===false){
    for(let i=1; i<=n; i++){
         arr.push(i);
    }
    const newarr = arr.map(x => {
        if(x%2==0 && x%3==0 && x%5==0){
            console.log(arr)
            return 'yu-gi-oh'
        }
        else if(x%2==0 && x%3==0 && x%5!=0){
            return "yu-gi"
        }
        else if(x%2==0 && x%3!=0 && x%5==0){
            return "yu-oh";
        }
        else if(x%2!=0 && x%3==0 && x%5==0){
            return "gi-oh"
        }
        else if(x%2==0 && x%3!=0 && x%5!=0){
            return "yu"
        }
        else if(x%2!=0 && x%3==0 && x%5!=0){
            return "gi"
        }
        else if(x%2!=0 && x%3!=0 && x%5==0){
            return "oh"
        }
        else {
            return x;
        }
        
    })
    return newarr;

}
else{
    return(`invalid parameter: ${n}`);
}
}

//Output-the-result-got-from-the-function-call
console.log(checkYuGiOh("fizzbuzz is meh"));
