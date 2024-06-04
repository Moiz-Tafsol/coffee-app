import first from '../assets/Coffee-1.png';
import second from '../assets/Coffee-2.png';
import third from '../assets/Coffee-3.png';
import fourth from '../assets/Coffee-4.png';
import fifth from '../assets/Coffee-5.png';
import sixth from '../assets/Coffee-6.png';
import seventh from '../assets/Coffee-7.png';
import eighth from '../assets/Coffee-8.png';
import ninth from '../assets/Coffee-9.png';
import tenth from '../assets/Coffee-10.png';
import eleventh from '../assets/Coffee-11.png';
import twelfth from '../assets/Coffee-12.png';

const coffeeSelection = [];

for (let i = 1; i <= 12; i++) {
    let name, description, image, price;

    switch (i) {
        case 1:
            name = "Expresso Tradicional";
            image = first;
            price = 1.1;
            description = "O tradicional café expresso, forte e encorpado.";
            break;
        case 2:
            name = "Macchiato";
            image = second;
            price = 2.2;
            description = "Café com uma camada de leite espumoso e um toqu.";
            break;
        case 3:
            name = "Cubano";
            image = third;
            price = 3.3;
            description = "Café expresso com essência de rum e um toque de limão.";
            break;
        case 4:
            name = "Cappuccino";
            image = fourth;
            price = 4.4;
            description = "Uma mistura perfeita de café, leite e espuma com canel.";
            break;
        case 5:
            name = "Mocha";
            image = fifth;
            price = 5.5;
            description = "Café com chocolate e leite, uma combinação clássica.";
            break;
        case 6:
            name = "Latte";
            image = sixth;
            price = 6.6;
            description = "Café suave com muito leite vaporizado, ideal para um ";
            break;
        case 7:
            name = "Americano";
            image = seventh;
            price = 7.7;
            description = "Café expresso diluído, perfeito para saborear lentamente.";
            break;
        case 8:
            name = "Affogato";
            image = eighth
            price = 8.8;
            description = "Uma bola de baunilha afogada em café expresso.";
            break;
        case 9:
            name = "Irlandês";
            image = ninth;
            price = 9.9;
            description = "Café enriquecido com whisky irlandês e coberto com creme.";
            break;
        case 10:
            name = "Café Gelado";
            image = tenth;
            price = 10;
            description = "Bebida refrescante com café forte e gelo, ideal para.";
            break;
        case 11:
            name = "Ristretto";
            image = eleventh;
            price = 11;
            description = "Uma versão mais concentrada e intensa do café expresso.";
            break;
        case 12:
            name = "Filtrado";
            image = twelfth;
            price = 12;
            description = "Café lentamente, destacando a pureza e os aroma.";
            break;
        default:
            name = `Café Desconhecido ${i}`;
            image = "";
            description = `Descrição não disponível para Café ${i}.`;
    }
    coffeeSelection.push({
        id: i,
        name: name,
        description: description,
        image: image,
        price: price
    });
}

export default coffeeSelection;
