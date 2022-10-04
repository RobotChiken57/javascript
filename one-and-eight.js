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