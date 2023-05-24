const users = [
    { name: "John", age: 25, occupation: "Gardener" },
    { name: "Lenny", age: 51, occupation: "Programmer" },
    { name: "Andrew", age: 43, occupation: "Teacher" },
    { name: "Peter", age: 81, occupation: "Teacher" },
    { name: "Anna", age: 43, occupation: "Teacher" },
    { name: "Albert", age: 76, occupation: "Programmer" },
    { name: "Adam", age: 47, occupation: "Teacher" },
    { name: "Robert", age: 72, occupation: "Driver" },
];

function main() { 
    const root = document.getElementById("root");
    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS";
    root.appendChild(h1);

    const ul = document.createElement("ul");
    root.appendChild(ul);
    
    for (let element of users){
    const name = document.createElement("li");
    const age = document.createElement("p");
    const occupation = document.createElement("p");

    ul.appendChild(name);
    ul.appendChild(age);
    ul.appendChild(occupation);

    name.innerHTML = element.name;
    age.innerHTML = element.age;
    occupation.innerHTML = element.occupation;

}
}

//call the main function
main();