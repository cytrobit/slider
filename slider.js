const data = [
  {
    sentence: 'No matter what...',
    photo: 'https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    sentence: 'No matter where...',
    photo: 'https://images.pexels.com/photos/5259419/pexels-photo-5259419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    sentence: 'No matter with whom...',
    photo: 'https://images.pexels.com/photos/950902/pexels-photo-950902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    sentence: 'Enjoy your life',
    photo: 'https://images.pexels.com/photos/3115637/pexels-photo-3115637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    sentence: 'And be yourself :)',
    photo: 'https://images.pexels.com/photos/3812738/pexels-photo-3812738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

let counter = 0;
const image = document.querySelector('img');
const paragraph = document.querySelector('p');

function changeSlide() {
  counter++;
  if(counter > data.length - 1) {
    counter = 0;
  }
  // console.log(data.length)
  image.src = data[counter].photo;
  paragraph.textContent = data[counter].sentence;
}

setInterval(changeSlide, 3000);