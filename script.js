const images = ['a', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'];
let keyframes = '@keyframes peach_alive {';

images.forEach((image, index) => {
  keyframes += `\n\t${index * 4}% {`;
  keyframes += `\n\t\tbackground-image: url('images/${image}.jpg');`;
  keyframes += '\n\t}';
});

keyframes += '\n}';

console.log(keyframes);