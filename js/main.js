var lista = [
   {
      imagem: "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
      sinopse:"https://www.adorocinema.com/filmes/filme-263075/",
      nome:"Yesterday"
   },
   {
      imagem: "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
      sinopse:"https://www.adorocinema.com/filmes/filme-226509/",
      nome:"Arrival"
   },
   {
      imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
      sinopse:"https://www.adorocinema.com/filmes/filme-47016/",
      nome:"Escola de Rock"
   }
 ];

const body = document.getElementById("movie");

for (var i = 0; i < lista.length; i++) {
   body.innerHTML += "<div class=movies><a href=" + lista[i].sinopse + " target=_blank>"+
                     "<img src=" + lista[i].imagem + "></a>"+
                     "<br>" + lista[i].nome +"</div>";
}