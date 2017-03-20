const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  //imports the image viewer file only after the button has been clicked, returns a promise
  System.import('./image_viewer').then(module => {
    module.default();
  });
};

document.body.appendChild(button);
