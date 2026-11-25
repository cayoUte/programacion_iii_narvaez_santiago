let personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry", "Santiago", "Narvaez"];
console.log("Elemento 0: " + personajes[0]); // Rick
console.log("Elemento 1: " + personajes[1]); // Morty
console.log("Elemento 2: " + personajes[2]); // Summer
console.log("Elemento 3: " + personajes[3]); // Beth
console.log("Elemento 4: " + personajes[4]); // Jerry
console.log("Tamaño del arreglo: " + personajes.length); // 7

console.log("Personajes: ", personajes);
console.log("Incluir elementos a un arreglo");
personajes.push("Morocho");
personajes.unshift("Gsus");
console.log("Modificar elementos de un arreglo");
personajes[0] = "Jesus";
console.log("Personajes: ", personajes);
console.log("Eliminar un elemento de un arreglo");
personajes.pop(); // Elimina el último elemento del arreglo
console.log("Personajes: ", personajes);
personajes.shift(); // Elimina el primer elemento del arreglo
console.log("Personajes: ", personajes);
personajes.splice(2, 1); // Elimina el elemento en la posición 2 (Summer)
console.log("Personajes: ", personajes);
