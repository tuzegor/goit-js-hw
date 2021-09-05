const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItems = images.map(elem => {
    const item = document.createElement('li');

    const itemImg = document.createElement('img');
    itemImg.src = elem.url;
    itemImg.alt = elem.alt;
    itemImg.height = 200;
    itemImg.width = 350;

    item.appendChild(itemImg);
    item.classList.add('gallery_item')
        
    return item;
});
const galleryList = document.querySelector('#gallery');
galleryList.append(...galleryItems)
console.log(galleryList);