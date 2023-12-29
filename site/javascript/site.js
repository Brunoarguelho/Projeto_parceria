
document.getElementById('abrir-menu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(0)';
    document.querySelector('.container').style.filter = 'blur(15px)';
     // Desabilita a rolagem do mouse
     //abre menu lateral
    document.body.style.overflow = 'hidden';
     // Esconde o botão 'abrir-menu'
    document.getElementById('abrir-menu').style.display = 'none';
});

document.getElementById('fechar-menu').addEventListener('click', function() {
    document.querySelector('.menu-lateral').style.transform = 'translateX(-100%)';
    document.querySelector('.container').style.filter = 'none';
   // Habilita a rolagem do mouse
   //abre menu lateral
    document.body.style.overflow = 'auto';
    // Mostra o botão 'abrir-menu'
    document.getElementById('abrir-menu').style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target.closest('.menu-lateral') === null && event.target.id !== 'abrir-menu') {
        document.querySelector('.menu-lateral').style.transform = 'translateX(-100%)';
        document.querySelector('.container').style.filter = 'none';
        document.body.style.overflow = 'auto';
        // Mostra o botão 'abrir-menu'
        // Habilita a rolagem do mouse
        //abre menu lateral
        document.getElementById('abrir-menu').style.display = 'block';
    }
});

/*--------------------------------- */
window.onscroll = function() {
    var menuLateral = document.querySelector('.menu-lateral');
    var imagemTopo = document.querySelector('.imagem-topo');
    var asidenav = document.querySelector('.aside-nav');
    if (window.scrollY > 250) { // Ajuste este valor para quando você quer que o menu lateral se mova para o topo
        menuLateral.style.top = "0";
        asidenav.style.position = "fixed"; //rolar alem de 250 era ficar fixo no top
        imagemTopo.classList.remove('ocultar'); // Mostra a imagem
    } else {
        menuLateral.style.top = "34%";
        asidenav.style.position = "sticky"; // rolar menes que 250px voltara posição original
        imagemTopo.classList.add('ocultar'); // Esconde a imagem
    }
};
/*----------------------------------*/
//menu do stories
const allStories = [
    {
        thumUrl: "../imagens/1-stories.jpg",
        imageUrl: "../imagens/1.jpg",
        title: "Title No. 1",
    },

    {
        thumUrl: "../imagens/2-stories.jpg",
        imageUrl: "../imagens/2.jpg",
        title: "Title No. 2",
    },

    {
        thumUrl: "../imagens/3-stories.jpg",
        imageUrl: "../imagens/3.jpg",
        title: "Title No. 3",
    },

    {
        thumUrl: "../imagens/4-stories.jpg",
        imageUrl: "../imagens/4.jpg",
        title: "Title No. 4",
    },

    {
        thumUrl: "../imagens/5-stories.jpg",
        imageUrl: "../imagens/5.jpg",
        title: "Title No. 5",
    },

    {
        thumUrl: "../imagens/6-stories.jpg",
        imageUrl: "../imagens/6.jpg",
        title: "Title No. 6",
    },

    {
        thumUrl: "../imagens/7-stories.jpg",
        imageUrl: "../imagens/7.jpg",
        title: "Title No. 7",
    },

    {
        thumUrl: "../imagens/8-stories.jpg",
        imageUrl: "../imagens/8.jpg",
        title: "Title No. 8",
    },

    {
        thumUrl: "../imagens/9-stories.jpg",
        imageUrl: "../imagens/9.jpg",
        title: "Title No. 9",
    },

    {
        thumUrl: "../imagens/10-stories.jpg",
        imageUrl: "../imagens/10.jpg",
        title: "Title No. 10",
    },

    {
        thumUrl: "../imagens/11-stories.jpg",
        imageUrl: "../imagens/11.jpg",
        title: "Title No. 11",
    },

    {
        thumUrl: "../imagens/12-stories.jpg",
        imageUrl: "../imagens/12.jpg",
        title: "Title No. 12",
    },

    {
        thumUrl: "../imagens/13-stories.jpg",
        imageUrl: "../imagens/13.jpg",
        title: "Title No. 13",
    },

    {
        thumUrl: "../imagens/14-stories.jpg",
        imageUrl: "../imagens/14.jpg",
        title: "Title No. 14",
    },

    {
        thumUrl: "../imagens/15-stories.jpg",
        imageUrl: "../imagens/15.jpg",
        title: "Title No. 15",
    },

    {
        thumUrl: "../imagens/16-stories.jpg",
        imageUrl: "../imagens/16.jpg",
        title: "Title No. 16",
    },

    {
        thumUrl: "../imagens/17-stories.jpg",
        imageUrl: "../imagens/17.jpg",
        title: "Title No. 17",
    },
];

  const storiesContainer = document.querySelector(".stories-container"); // pai story-full
  const storyFull = document.querySelector(".story-full"); // todo conteudo
  const storyFullimage = document.querySelector(".story-full img"); //img
  const storyFullTitle = document.querySelector(".story-full .title"); // titulo
  const Closebtn = document.querySelector(".story-full .close-btn"); //fechar
  const leftArrow = document.querySelector(".story-full .left-arrow"); // esquerda
  const rightArrow = document.querySelector(".story-full .right-arrow"); // direita

  let currentIndex = 0;

  allStories.forEach((s, i) => {
     const content = document.createElement("div");
     content.classList.add("content");

     const img = document.createElement("img"); // img
     img.setAttribute("src", s.thumUrl); //s.thumUrl

     storiesContainer.appendChild(content);
     content.appendChild(img);

     content.addEventListener("click", () => {
        currentIndex = i;
        storyFull.classList.add("active");
        storyFullimage.setAttribute("src", s.imageUrl); //s.imageUrl
        
        if (!s.title) {
            storyFullTitle.style.display = "none";
        }
        else{
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = s.title;
        }
     });
  });
  //ação de quando clicar vai ativar o pseudo active.
  Closebtn.addEventListener("click", () =>{
    storyFull.classList.remove("active");
  });
/*------------*/
  leftArrow.addEventListener("click", () => {
     if(currentIndex > 0) {
        currentIndex -= 1;
        //ativação da seta da esquerda quando clicar nela
        storyFullimage.setAttribute("src", allStories [currentIndex].imageUrl); 
        
        if (!allStories[currentIndex].title) {
            storyFullTitle.style.display = "none";
        }
        else{
            storyFullTitle.style.display = "block";
            storyFullTitle.innerHTML = allStories[currentIndex].title;
        }
     }
  });
/*------------*/
rightArrow.addEventListener("click", () => {
    if(currentIndex < allStories.length - 1) {
       currentIndex += 1;
       //ativação da seta da direita quando clicar nela
       storyFullimage.setAttribute("src", allStories [currentIndex].imageUrl); 
       
       if (!allStories[currentIndex].title) {
           storyFullTitle.style.display = "none";
       }
       else{
           storyFullTitle.style.display = "block";
           storyFullTitle.innerHTML = allStories[currentIndex].title;
       }
    }
 });
