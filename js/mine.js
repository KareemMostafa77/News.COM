let topNavLinks = document.getElementsByClassName("top-links");
let botNavLinks = document.getElementsByClassName("bottom-links");


let news,temp;

let category ="general";
let country = "eg";





getNews();


for(var i=0 ; i <topNavLinks.length ; i++)
    {
        topNavLinks[i].addEventListener("click" , function(e){
            category = e.target.innerHTML;
            getNews();
        })
    }

for(var i=0 ; i <botNavLinks.length ; i++)
    {
        botNavLinks[i].addEventListener("click" , function(e){
            if(e.target.innerHTML=="United States")
                country="us";
            else if(e.target.innerHTML=="Russia")
                country="ru";
            else if(e.target.innerHTML=="Egypt")
                country="eg";
            else if(e.target.innerHTML=="Italy")
                country="it";
            else
                country="fr";
            getNews();
        })
    }

// Function To Get Data From URL
function getNews(){
    
    let newsUrl="https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=d34d49ce3a794aca80d1ae821239b0eb";
    
    let req ; // IE5 , IE6 

    if(window.XMLHttpRequest) // modern browsers 
        {
                req = new XMLHttpRequest(); //varial go to every second to ge data from DB without refresh
        }
    else // IE5 ,IE6
        {
               req = new ActiveXObject("Microsoft.XMLHTTP") 
        } 
    // select way of data transfer from url
    req.open('GET',newsUrl);
    
    // get data from url on array of objects
    req.onreadystatechange=function()
    {
        if( req.status==200 && req.readyState==4 ){
            news=JSON.parse(req.response);
            news=news.articles;
            displayNews();
        }
    }
    req.send();
}



/*----------------------------*/

function displayNews(){
    
    temp="";
    
    for(let i=0;i<news.length;i++)
        {
            temp+='<div class="col-lg-4 col-sm-6  mx-auto col-12 mb-3 d-flex align-items-stretch"> <div class="card border border-danger"><img class="card-img-top img-fluid h-50" src="'+news[i].urlToImage+'" alt=""new image cap"><div class="card-body bg-dark"> <h6 class="card-title text-center font-weight-bold text-danger">'+news[i].title+'</h6><p class="card-text text-white">'+news[i].description+'</p><a href="'+news[i].url+'" class="btn btn-danger m-auto" target="_blank" >Read More</a></div></div></div>'
        }
    document.getElementById("news").innerHTML = temp;  
}

/*-----------------------------------*/








