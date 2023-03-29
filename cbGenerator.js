CowBullGenPForFinal = function () {
    testInput = "QboyRHhbcjsTggMlewKITTltld2QcfG6x4Q1qZov9CfbjzTcsmckKH8qJzLbyroFgyVTqlMJ2jQEbkr7fJnnKW1dX3M4P2GGNwkUwmeUhLIvNqXlTysfBrh6su6LhSXKguQ0DOWhZ1otcMHAKTpK1CjzLDLMIbAVIvX8Hd4OBnHX9pszsB4QY3JVADuqaUSX2Ptwe8c5"
    testOutput = testInput.substr(17,1)+testInput.substr(13,1) + testInput.substr(98,2)
    return testOutput;
}
cowBullNum = function(){
    num = Math.floor(Math.random() * 9 )+1
    for(i=1;i<4;i++){
        do{
            cbdigit = Math.floor(Math.random()*10)

        }while (num.toString().indexOf(cbdigit.toString())>-1)
        num = (num * 10) + cbdigit
    }
    //console.log(num.toString())
    return num
}

getCowsNBulls = function(cbNum, guess) {
    if(cbNum==guess){return "is correct.  Use "+ CowBullGenPForFinal() +" in your password"}
    var bulls = 0;
    var cows = 0;
    if(guess.length!=4){
        return " is the Wrong length"
    }

    for (i=0;i<3;i++){

        for (j=i+1;j<4;j++){
            if(guess.substr(i,1)==guess.substr(j,1)){
                return " has Repeat"
            }
        }
    }
    for(i=0;i<4;i++) {
        c=0;
        dig = guess.substr(i,1);
        for(j=0;j<4;j++){
            cdig = cbNum.toString().substr(j,1);
            if(dig==cdig){
                c++;
                if(i==j){
                    bulls ++;
                }else{
                    cows ++;
                }
                console.log("Count " + c)
                if (c>1){
                    return "REPEAT";
                }
            }

        }


    }

    return "has " + bulls + " Bulls " + cows + " cows";
};
guesses = [];
playCB = function (cnum) {

    input = document.getElementById("GuessInput").value

    //input = prompt("Enter your cow bull number: ","")
    out = getCowsNBulls(cnum,input)
    if(input.length!=0){guesses.push( input + " " + out )}
    // console.log(guesses)
    document.getElementById("cbresponse").innerHTML = "Guesses: " + guesses+ "<p>" + input + " " + out +"</p>"  ;

}
//Used for testing
