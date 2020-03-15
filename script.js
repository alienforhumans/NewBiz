function dropdownMenuNav(){
	document.getElementById("drop").style.display = "block"
}

function dropdownMenuNavClose(){
	document.getElementById("drop").style.display = "none"
}

function dropdownSecondMenuNav(){
	document.getElementById("drop2").style.display = "block"
}

function dropdownSecondMenuNavClose(){
	document.getElementById("drop2").style.display = "none"
}

let generalObj = [
    {
        categorie: 'card',
        title: 'Card 1',
        subtitle: 'Card',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/card1.jpg'
    },
    {
        categorie: 'card',
        title: 'Card 2',
        subtitle: 'Card',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/card2.jpg'
    },
    {
        categorie: 'card',
        title: 'Card 3',
        subtitle: 'Card',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/card3.jpg'
    },
    {
        categorie: 'app',
        title: 'App 1',
        subtitle: 'App',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/app1.jpg'
    },
    {
        categorie: 'app',
        title: 'App 2',
        subtitle: 'App',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/app2.jpg'
    },
    {
        categorie: 'app',
        title: 'App 3',
        subtitle: 'App',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/app3.jpg'
    },
    {
        categorie: 'web',
        title: 'Web 1',
        subtitle: 'Web',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/web1.jpg'
    },
    {
        categorie: 'web',
        title: 'Web 2',
        subtitle: 'Web',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/web2.jpg'
    },
    {
        categorie: 'web',
        title: 'Web 3',
        subtitle: 'Web',
        image: 'https://bootstrapmade.com/demo/themes/NewBiz/assets/img/portfolio/web3.jpg'
    }
]

function filterObj(cat){
    let filteredObj = [];
    if (cat == 'all') {
        filteredObj = generalObj;
    }
    else{
        filteredObj = generalObj.filter(function(el){return (el.categorie == cat)});
    }
    konstruktor(filteredObj);
}

function konstruktor(obj){
    document.getElementById('tab-pane').innerHTML = '';
    for (var i = 0; i < obj.length; i++) {
        var div = document.createElement("DIV");
        div.className += 'col-lg-4 portfolio-item filter-app float-left'
        div.style.height = "100%"
        div.innerHTML = `
        <div class="portfolio-wrap position-relative">
        <img src=${obj[i].image} class="rounded img-fluid portfolio-image">
        <div class="portfolio-info rounded text-center text-light position-absolute">
                            <div style="margin-top: auto;margin-bottom: auto">
                                <h4><a href="#" class="portfolioH4">${obj[i].title}</a></h4>
                                <p>${obj[i].subtitle}</p>
                                <div>
                                  <a href="${obj[i].image}" class="link-tabs">
                                    <ion-icon name="eye-outline"></ion-icon>
                                  </a>
                                  <a href="#" class="link-tabs">
                                    <ion-icon name="open-outline"></ion-icon>
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>`

    document.getElementById('tab-pane').appendChild(div);
    }
}