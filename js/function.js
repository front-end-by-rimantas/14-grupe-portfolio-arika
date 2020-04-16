"use strict";
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
                    <h5>${service.title}</h5>
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
        HTML += `<div class="blocks">
                <a href = "#">
                    <img id = "foto" src="./img/${blogs.img}" alt= "Blogs photo">
                </a>
                <p>
                    ${blogs.date.day}
                    ${blogs.date.month}
                    ${blogs.date.year}
                    ${blogs.date.design}
                </p>
                <div>
                    <a href="#">
                        <h4>${blogs.header}</h4>
                    <a/>
                    <p>${blogs.text}</p>
                </div>
                    <a href ="#">
                        <p class="link">${blogs.link}<p/>
                    </a>
            </div>`;




    }


    return document.querySelector('#blogs').innerHTML = HTML;
    
  }

//---------------------------GET IN TOUCH---------------------------




//-----------------------FOOTER---------------------------