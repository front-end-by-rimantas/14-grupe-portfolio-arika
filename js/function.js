//---------------------------HEADER---------------------------



//---------------------------HERO---------------------------



//---------------------------ABOUT ME---------------------------



//---------------------------MY SERVICES---------------------------

function renderServices( serviceList ) {
    let HTML = '';

    for ( let i=0; i<serviceList.length; i++ ) {
        const service = serviceList[i];
        HTML += `<div class="service">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`
    }

    return document.querySelector('#services').innerHTML = HTML;
}



//---------------------------LATEST WORKS---------------------------



//---------------------------PROFESIONAL SKILLS---------------------------




 //---------------------------MY TESTIMONIOLS---------------------------




//---------------------------BLOGS---------------------------

function renderBlogs (blogList) {
     
    let HTML = '';
  
  

    for ( let i=0; i<blogList.length; i++ ) {
  
        const blogs = blogList[i];
        HTML += `<div class= "blogs">
                <a href ="# class = "photo">
                <img src=".img/blog-1.img" alt="User photo">
                </a>
                </div>`
    }


    return document.querySelector('#blogs').innerHTML = HTML;
    
  }

//---------------------------GET IN TOUCH---------------------------




//-----------------------FOOTER---------------------------