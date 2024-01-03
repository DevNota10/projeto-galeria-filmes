window.onload = function(){

    // Invite to watche movies
    const container_date = document.querySelector(".container-date");
    const days_of_the_week = new Date();
    let day = days_of_the_week.getDay();

    function createElements(text){
        const h4 = document.createElement('h4');
        container_date.appendChild(h4);
        h4.innerHTML = text; 
    }

    switch(day){
       
        case 0:
            day = "Domingo" 
            createElements(`Não há nada melhor neste <strong> ${day}! </strong> então, pegue a pipoca e relaxe assistindo a um filme!`)
            break;
        case 1:
            day = "Segunda-feira";
            createElements(`Não há nada melhor nesta <strong> ${day}! </strong> então, pegue a pipoca e relaxe assistindo a um filme!`)  
            
            break;
        case 2:
            day = "Terça-feira";
            createElements(`Não há nada melhor nesta <strong> ${day}! </strong> então, pegue a pipoca e relaxe assistindo um filme!`)
            break;
        case 3:
            day = "quarta-feira";
           
            createElements(`Não há nada melhor nesta <strong> ${day}! </strong> então, pegue a pipoca e relaxe assistindo um filme!`);  
            break;
        case 4:
            day = "quinta-feira"
            createElements(`Não há nada melhor nesta <strong> ${day}! </strong> então, pegue a pipoca e relaxe assistindo um filme!`);
          
            break;
        case 5:

            day = "sexta-feira"
            createElements(`Não há nada melhor nesta <strong> <stron! </strong>> ${day} </stron>! então, pegue a pipoca e relaxe assistindo um filme!`)
           
            break;
        case 6:
            day = "sabado";
            createElements(`Não há nada melhor neste <strong> ${day}! </strong> então, pegue a pipoca e relaxe assistindo um filme!`)
    }
    
    // clusePupup:
    const close_txt = document.querySelector(".close-txt");
    close_txt.addEventListener("click",closeBtn)

   function closeBtn (){
    container_date.style.display = 'none';

    }

    setTimeout(()=>{
        container_date.style.opacity = 1;
},3000)
    


    //Input Pesquisa:
    const apikey =`9e2d3b38`;
    const btn_pesquisa =document.getElementById("btn-pesquisa");
    let input = document.querySelector(".pesquisa");
    const box_film = document.querySelector(".box-film")
    

    btn_pesquisa.addEventListener("click",searchMovies);
    input.addEventListener('focus',()=>{
        input.style.background ='#fff';
        input.value = ''    
    });

    btn_pesquisa.click()
    function searchMovies(e){
        e.preventDefault()
        let searchValue = input.value;
        if(searchValue === ''){
            searchValue= 'Batman';
            
        };
    
        const URL = `https://omdbapi.com/?apikey=${apikey}&s=${searchValue}`;

         fetch( URL)
         .then((response)=> {response.json()
            .then((data)=>{
               let arr = data.Search;
               arr.forEach((movie)=>{
                carregarInfo(movie)
               })          
            })         
        });
    };
    const carregarInfo = (movie) =>{
        
        const container_img_mv = document.createElement('div');
        container_img_mv.classList.add('container-img-mv')
        box_film.prepend(container_img_mv)
        
        const divMovie = document.createElement("div");
        divMovie.classList.add('divMovie')
        container_img_mv.prepend(divMovie)
        const img = document.createElement("img");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
    
        container_img_mv.prepend(h1)
        divMovie.prepend(img);
        h1.innerHTML =  `${movie.Title}`;
        img.src = `${movie.Poster}`;
        divMovie.appendChild(h2);
        h2.innerHTML+= `Ano: ${movie.Year}`      
    }

        const hot_link = document.querySelector(".hot-link")
        const pranks = document.querySelector(".pranks")
        hot_link.addEventListener('click',()=>{
            pranks.style.display ='block'
            
          document.querySelector('audio').play()

          setTimeout(()=>{
            pranks.style.display ='none'
          },10000)
        })
    

    
    // Favoritos:
    // const btn_heart = document.querySelectorAll(".fa-heart");
    // function favFunc(){
    //     btn_heart.forEach((heart)=>{
    //         heart.addEventListener('click', changeColor);
    //     })

    //     function changeColor(currentColor){
    //         currentColor = this;
    //         if(currentColor.style.color == 'red' ){
    //             currentColor.style.color = '#c4c6ca'
    //         }else{
    //             currentColor.style.color = 'red'
    //         };       
    //     };  
    // };
    // favFunc();



  

}