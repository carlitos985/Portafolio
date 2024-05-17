/* skills*/
const skillsTech= document.querySelector('.skills-tech')

const skills =[
    {
        path:'assets/img/bash.svg',
        name:'Bash',
    },
    {
        path:'assets/img/vsc.svg',
        name:'VS Code'
    },

    {
        path:'assets/img/html.svg',
        name:'HTML'
    },
    {
        path:'assets/img/css.svg',
        name:'HTML'
    },
    {
        path:'assets/img/javascript.svg',
        name:'JavaScript'
    },
    {
        path:'assets/img/javascript.svg',
        name:'JavaScript'
    },
    
    {
        path:'assets/img/netlify.svg',
        name:'Netlify'
    },
    {
        path:'assets/img/react.svg',
        name:'React'
    },
    {
        path:'assets/img/nodejs.svg',
        name:'NodeJS'
    },
]

let str='';



for( const skill of skills){

    str +=`
    <div class='skill'>
        <img src='${skill.path}' alt='${skill.name}'></img>
        <h3>${skill.name}</h3>
    </div>
    `
    }
skillsTech.innerHTML=str
/*--------------Nav Bar--------------*/

const navbar= document.querySelector('.nav');
console.log(navbar)
const menu= document.querySelector('.nav-menu');
const links=document.querySelectorAll('.list-link');

navbar.addEventListener('click', function (e) {
    if (e.target.closest('.btn-open')) {
      menu.classList.toggle('show-menu')
    }
    if (e.target.closest('.btn-close')) {
        menu.classList.remove('show-menu')
      }
     if (e.target.closest('.list-link')) {
        menu.classList.remove('show-menu')
      }

      /*QUitar y remover el color resaltado del item de menu seleccionado*/
      if(e.target.closest('.list-link')){
        for(const link of links){
            link.parentElement.classList.remove('active')
        }

        e.target.parentElement.classList.add('active')
      }
})

/*-----------------LIGTH MODE-------------------*/

const btnLight = document.querySelector('.btn-theme')

const theme = window.localStorage.getItem('theme')

if(theme){
    document.body.classList.add('light')
    changeTheme(true)
}else{
    document.body.classList.remove('light')
    changeTheme(false)
}

btnLight.addEventListener('click', function(){
    document.body.classList.toggle('light')

    if(document.body.classList.contains('light')){
        changeTheme(true)
    }else{
        changeTheme(false)
    }
   
})

function changeTheme(bool){
    if(bool){
           
        btnLight.firstElementChild.classList.replace('bxs-sun', 'bxs-moon')
        window.localStorage.setItem('theme','light')
    }else{
        btnLight.firstElementChild.classList.replace('bxs-moon','bxs-sun')
        window.localStorage.removeItem('theme')
    }
    
}

/*-----------Scroll de los section-----------*/
const sections = document.querySelectorAll('section[id]')

let prevPos = window.scrollY

window.addEventListener('scroll', function () {
  const currentPos = window.scrollY

  for (const section of sections) {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 200
    const sectionId = section.getAttribute('id')
    const currentElement = document.querySelector(`.list-link[href*='${sectionId}']`)

    if (prevPos > sectionTop && prevPos <= sectionTop + sectionHeight) {
      currentElement.parentElement.classList.add('active')
    } else {
      currentElement.parentElement.classList.remove('active')
    }
  }

  prevPos = currentPos
})