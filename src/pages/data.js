import barraco from './itens/barraco.jpg'
import gin from './itens/gin.jpg'
import gin2 from './itens/gin2.jpg'
import bramble from './itens/bramble.jpg'
import moscow from './itens/moscow.jpg'
import penicilin from './itens/penicilin.jpg'
import ponei from './itens/ponei.jpg'
import verde from './itens/verde.jpg'
import bruxa from './itens/bruxa.jpg'
import negroni from './itens/negroni.jpg'
import chazin from './itens/chazin.jpg'
import cubalibre from './itens/cubalibre.jpg'
import gargarejo from './itens/gargarejo.jpg'
import coca from './itens/coca.jpg'
import chevette from './itens/chevette.jpg'
import martelinho from './itens/martelinho.jpg'
import drogata from './itens/drogata.jpg'
import halls from './itens/halls.jpg'
import trident from './itens/trident.jpg'
import agua from './itens/agua.jpg'
import copao from './itens/copao.jpg'

export const drinks = [{

    id: 0,
    name: 'Barra cô ',
    ingredients: 'Vodka, Licor de café e Espuma de caramelo salgado',
    price: 'R$ 22,00' ,
    size: '400ml',
    image: barraco,
    color: '#dbb4c9'
    
}, {
    id: 1,
    name: 'Gin Tônica ',
    ingredients: 'Gin, água tônica, limão e alecrim ',
    price: 'R$ 18,00' ,
    size: '500 ml',
    image: gin,
    color: '#CBD1AA'
}, {
    id: 2,
    name: 'Gin Tropical',
    ingredients: 'Gin, energético tropical e rodela de laranja',
    price: 'R$ 16,00' ,
    size: '500ml',
    image: gin2,
    color: '#B1AAD1'
}, {
    id: 3,
    name: 'Bramble',
    ingredients: 'Gin, limão e purê de amora',
    price: 'R$ 22,00' ,
    size: '540ml',
    image: bramble,
    color: '#F4ACB7'
},{
    id: 4,
    name: 'Moscow Mule',
    ingredients: 'Vodka, limão, gengibre e água tônica',
    price: 'R$ 22,00' ,
    size: '500ml',
    image: moscow,
    color: '#EADFA9'
},{
    id: 5,
    name: 'Penicilin',
    ingredients: 'Whisky, mel, gengibre e limão',
    price: 'R$ 25,00' ,
    size: '400ml',
    image: penicilin,
    color: '#BEDEC5'
},{
    id: 6,
    name: 'Cuba Libre',
    ingredients: 'Rum Ouro, limão e coca-cola',
    price: 'R$ 18,00' ,
    size: '500ml',
    image : cubalibre,
    color: '#FFE5DD'
},{
    id: 7,
    name: 'Chevette',
    ingredients: 'Vodka, água de coco, limão e baunilha',
    price: 'R$ 20,00' ,
    size: '500ml',
    image : chevette,
    color: '#B1D4DE'
},{
    id: 8,
    name: 'Negroni',
    ingredients: 'Campari, gim e vermute tinto',
    price: 'R$ 22,00' ,
    size: '300ml',
    image : negroni,
    color: '#A9B2CF'
},{
    id: 9,
    name: 'Drinks fora da carta',
    ingredients: '(consulte disponibilidade)',
    price: 'R$ 28,00' ,
    size: '',
    color: '#FFFFFF'
}];

export const shots = [{
    id: 0,
    name: 'Martelinho',
    ingredients: 'Cachaça, cravo e canela',
    price: 'R$ 8,00' ,
    image : martelinho
},{
    id: 1,
    name: 'Gargarejo',
    ingredients: 'Cachaça de jambu e licor de menta',
    price: 'R$ 13,00',
    image : gargarejo
},{
    id: 2,
    name: 'Pônei Maldito',
    ingredients: 'Vodka, Licor de cereja, limão e marshmellow',
    price: 'R$ 15,00' ,
    image: ponei
    
},{
    id: 3,
    name: 'Da Bruxa',
    ingredients: 'Whisky, canela e laranja flambada',
    price: 'R$ 16,00' ,
    image: bruxa
},{
    id: 4,
    name: 'Drogata',
    ingredients: 'Tequila, licor de laranja, limão e sal',
    price: 'R$ 18,00' ,
    image : drogata
},{
    id: 5,
    name: 'Diabo verde',
    ingredients: 'Absinto Flambado',
    price: 'R$ 20,00' ,
    image: verde
},];

export const alcoholFree = [{
    id: 0,
    name: 'Cházin',
    ingredients: 'Chá mate batido com açucar e limão',
    size:'500ml',
    price: 'R$ 16,00',
    image : chazin
},{
    id: 1,
    name: 'Suquin',
    ingredients: 'Purê de amora batido com gengibre e limão',
    size:'400ml',
    price: 'R$ 15,00',
    image: bramble
},{
    id: 2,
    name: 'Água garrafa',
    size:'500ml',
    price: 'R$ 5,00',
    image : agua
},{
    id: 3,
    name: 'Coca/tônica',
    size:'500ml',
    price: 'R$ 6,00' ,
    image : coca
},{
    id: 4,
    name: 'Copão energético',
    size:'600ml',
    price: 'R$ 6,00' ,
    image: copao
}];

export const others = [{
    id: 0,
    name: 'Cerveja long neck',
    price: 'R$ 12,00' ,
},{
    id: 1,
    name: 'Trident',
    price: 'R$ 4,00' ,
    image : trident
},{
    id: 2,
    name: 'Halls',
    price: 'R$ 3,00' ,
    image : halls
},{
    id: 3,
    name: 'Gudanzin',
    price: 'R$ 3,00' ,
},{
    id: 4,
    name: 'Batata Chips',
    price: 'R$ 6,00' ,
},{
    id: 5,
    name: 'Cigarro avulso',
    price: 'R$ 2,00' ,
    image: ''
},];


