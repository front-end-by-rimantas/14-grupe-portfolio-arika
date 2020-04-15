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



//---------------------------GET IN TOUCH---------------------------




//-----------------------FOOTER---------------------------