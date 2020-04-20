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

function progresBarsHtml(){
    const HTML = ` 
    <div class="progress-bar">
        <div class="texts">
            <div class="label">HTML5</div>
            <div class="value">92%</div>
        </div>
        <div class="bar">
            <div class="value" style="width: 92%;">
                <div class="loading"></div>
            </div>
        </div>
    </div>
    <div class="progress-bar">
        <div class="texts">
            <div class="label">Word Press</div>
            <div class="value">55%</div>
        </div>
        <div class="bar">
            <div class="value" style="width: 55%;">
                <div class="loading"></div>
            </div>
        </div>
    </div>
    <div class="progress-bar">
            <div class="texts">
                <div class="label">Magento</div>
                <div class="value">86%</div>
            </div>
            <div class="bar">
                <div class="value" style="width: 86%;">
                    <div class="loading"></div>
                </div>
            </div>
        </div>
        <div class="progress-bar">
            <div class="texts">
                <div class="label">UI/UX</div>
                <div class="value">88%</div>
            </div>
            <div class="bar">
                <div class="value" style="width: 88%;">
                    <div class="loading"></div>
                </div>
            </div>
        </div>`;

    return document.querySelector('.col-6.skills').insertAdjacentHTML('beforeend', HTML);
}


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
                    <h4>
                        <a class = "marketing" href="#">${blogs.header}</a>
                    <h4/>
                    <p>${blogs.text}</p>
                </div>
                    <p>
                        <a class = "link" href ="#">${blogs.link}<a/>
                    </p>
            </div>`;




    }


    return document.querySelector('#blogs').innerHTML = HTML;
    
  }

//---------------------------GET IN TOUCH---------------------------




//-----------------------FOOTER---------------------------