const person : {
    name: string;
    age: number; 
    hobbies: string[];
    role: [number, string] //tuple type ; tells TS with exactly two elements the first should element should be a number and the second a string 
} = {
    name: 'Angel',
    age: 29,
    hobbies: ['Sports','Cooking'], 
    role: [2, 'author']
};

person.role.push('admin') // push an exception that is allowed in tupels 
//person.role[1] = 10 this will not work 

//use Tuples to be stricter and to know the amount of data is you are working with 

let favoriteActivities: string[]; //declaring the type of string array type 
favoriteActivities = ['Sports']; 
console.log(person);

for(const hobby of person.hobbies) { //for of loop to accessing the hobbies property and going through all the hobbies 
    console.log(hobby.toUpperCase());
}

//hobby will be identified as array of strings because if we go into an array of strings the individual values will have to be strings 
//we will get an error if use the map method since we are not accesing arrays we are accessings strings 


