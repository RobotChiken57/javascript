var animals = ["Кот","Рыба","Лемур","Комодский варан"];
for (var i = 0; i<animals.length; i++){
    animals[i]=animals[i]+" - прекрасное животное";
}
console.log(animals);




var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length<6){
    var index=Math.floor(Math.random()*alphabet.length);
    randomString = randomString + alphabet[index];




}
console.log(randomString);


var input="javascript is awesome";
var output = "";
for (var i=0; i<input.length; i++){
    if (input[i]=="a"){
        output=output+4;
    }
     else if (input[i]=="e"){
        output=output+3;
    }
    else if (input[i]=="i"){
        output=output+1;
    }
    else if(input[i]=="o"){
        output=output+0;
    }
    else{
        output=output+input[i];
    }
}
console.log(output);