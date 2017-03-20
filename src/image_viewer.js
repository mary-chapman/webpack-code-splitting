import small from '../assets/small.jpeg';
import '../styles/image_viewer.css';

export default () => {
  //for the small image
  const imageSm = document.createElement('img');
  imageSm.src = small;
  document.body.appendChild(imageSm);
}
