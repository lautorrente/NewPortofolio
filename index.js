 let planes = [
    {id: 1, nombre : "Plan Basico", precio: 499},
    {id: 2, nombre : "Plan Standard", precio: 599},
    {id: 3, nombre : "Plan Advanced", precio: 699}
];
let plan = prompt(`Hola! soy LT y te voy a ayudar a crear tu página web. Elige que plan quieres.\n1. Plan Básico.\n2. Plan Standard.\n3. Plan Advanced.`);
let plan1 = planes[0];
let plan2 = planes[1];
let plan3 = planes[2];


if (plan == plan1.nombre || plan == 1) {
    alert(`Estas eligiendo el ${plan}. su precio es de $${plan1.precio}USD.`);
    let observaciones = prompt(`Por favor, introduce que tipo de web deseas, que alcance tendrá y los colores que deseas para esta.`);
}
else if (plan == plan2.nombre || plan == 2) {
    alert(`Estas eligiendo el ${plan}. su precio es de $${plan2.precio}USD.`);
    let observaciones = prompt(`Por favor, introduce que tipo de web deseas, que alcance tendrá y los colores que deseas para esta.`);
}
else if (plan == plan3.nombre || plan == 3)  {
    alert(`Estas eligiendo el ${plan}. su precio es de $${plan3.precio}USD.`);
    let observaciones = prompt(`Por favor, introduce que tipo de web deseas, que alcance tendrá y los colores que deseas para esta.`);
}
else {
    alert("No se encontró el plan deseado.")
}
let email = prompt("Por último, introduce tu email para que podamos contactarte");
email;


alert(`En el plazo de 48hs nos estaremos contactando a ${email} para enviarte recomedaciones y cosas a agregar. Saludos, LT Co.`)