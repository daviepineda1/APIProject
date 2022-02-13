
/*
function getRandomImg() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomImg2() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomImg2();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
*/

function get_random_dog_image(){

    url = "https://dog.ceo/api/breeds/image/random";
  
    fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      display_image(data.message);
    })
    .catch(function(error){
      console.log("Error: " + error);
    });
  
  
  }
  
  function display_image(image_url){
    document.getElementById("image").src = image_url;
  }
  