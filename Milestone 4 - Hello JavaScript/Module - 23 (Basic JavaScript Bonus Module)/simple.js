/* for(let i=1;i<6;i++){
    console.log(i);
} */

function concoleNumber(i){
    if (i==5){
        return;
    }
    console.log(i);
    concoleNumber(i+1);
}

concoleNumber(1);