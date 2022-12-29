const person = {
    name: 'Angel',
    age: 29,
    hobbies: ['Sports','Cooking']
};
let favoriteActivities: string[]; //declaring the type of string array type 
favoriteActivities = ['Sports']; 
console.log(person);

for(const hobby of person.hobbies) { //for of loop to accessing the hobbies property and going through all the hobbies 
    console.log(hobby.toUpperCase());
}

//hobby will be identified as array of strings because if we go into an array of strings the individual values will have to be strings 
//we will get an error if use the map method since we are not accesing arrays we are accessings strings 