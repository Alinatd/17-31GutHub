const data = [
    {
    title:'7:25',
    image:'air1.png',
    description: 'Boston'
},
{
    title:'8:15',
    image:'air2.png',
    description: 'Madrid'
},
{
    title:'Translate',
    image:'translate.png',
    description: 'Boston'
},
{
    title:'Bike',
    image:'bike1.png',
    description: '13.1 miles'
}, 
{
    title:'Boat',
    image:'boat1.png',
    description: '90 minutes'
},
{
    title:'Drive',
    image:'car1.png',
    description: '48 miles'
},
{
    title:'Morning',
    image:'coffee.png',
    description: 'Coffee'
},
{
    title:'Afternoon',
    image:'gym.png',
    description: 'Gym'
},
{
    title:'Night',
    image:'hot.png',
    description: 'Hot tub'
}
]



let container = document.createElement('div')
container.classList.add('container')

const renderBlock =() =>{
    let fragment = new DocumentFragment();
data.map((item,id)=>{
let block = document.createElement('div')
block.className=('block-item')
   block.innerHTML = `  
<div>${item.title}</div>
<img width="100px" src=${item.image}>
<div>${item.decription}</div>`
fragment.append(block)
})
return fragment;

}

container.append(renderBlock())

document.body.append(container)

