let images = [
  'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
  'https://lh3.googleusercontent.com/proxy/pY7ZsFHDFJfuxOM3Y-PJBVQCrdhPWs8FTnBYKmw75oH0icc3JjKO0atoDOxZNyez-fRCqHLvaG1fLXngZkI84TNQTlIyDoO1Kj8c3BPvNIYHNnBABCUqtjJw2Xg7Ag',
  'https://i.guim.co.uk/img/media/88f6b98714035656cb18fb282507b60e82edb0d7/0_54_2560_1536/master/2560.jpg?width=300&quality=85&auto=format&fit=max&s=f7a929098eed6c90957ec7679c5bd11b',
  'https://www.lifewire.com/thmb/X46F1PuWJuhGdwkhM8UlU5GxUnE=/1372x1800/filters:fill(auto,1)/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg',
  'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/09/The-Simpsons-Homer-at-Jail.jpg?q=50&fit=crop&w=740&h=370'
];

let num = 0;

let slider = document.getElementById('displayImg');
console.log('slider', slider);
slider.src = images[num];
let timer;
   function prev() {
      num--;
      if (num < 0) {
        num = images.length - 1;
      }
      slider.src = images[num];
    }

    function next() {
      num++;

      if (num >= images.length) {
        num = 0;
      }
      slider.src = images[num];

    }

        function autoForward() {
            timer = setInterval(next, 3000);
        }
        
        function autoBackward(){
        		timer = setInterval(prev, 3000);
        }
        
        function stop() {
            clearInterval(timer)
        }