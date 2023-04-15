


document.addEventListener("DOMContentLoaded", function (event) {
    Movies("1");
    random()
});
function Movies(sorc) {



    $.ajax({
        url: "https://movieto-api.vercel.app/movie/all?page=".concat(sorc),
        method: "GET",
        datatype: "json",
        success: function (data) {

            const element = document.getElementById('movies');
            if (element) {
                element.innerHTML = " ";
            }
            for (i = 0; i < 20; i++) {

                

                const el = `<div class="my-md-5  mx-2 p-3 blur d-none d-md-block   rounded-3" style="width: fit-content; min-height: 600px;font-family: Georgia, 'Times New Roman', Times, serif;">
                  
              <section style="min-height:330px"><img  class="rounded-3  w-100  "   src="${data[i].img_url}" alt="LOADING..." ></section>
              <div style=" min-height: 180px; width: 250px;" class="d-flex flex-column justify-content-between    ">
                  <h4 class="p-1 mt-2 text-center text-white  text-wrap"><b>${data[i].name}</b></h4>
                  <h4 class="text-center text-white  py-sm"><b><i>Rating : ${data[i].rating}%</i></b></h4>
                  <a class="align-self-center w-70 " href="${data[i].url}"><button class=" mb-2 px-4 py-1 btn-secondary border-0   rounded-pill  " >Watch Now</button></a>
              </div>
            
              </div>

              <div class=" my-2 mx-2 p-2 d-flex flex-column justify-content-center d-md-none border border-3 border-secondary    rounded-3" style=" font-family: Georgia, 'Times New Roman', Times, serif;">
                  
              <img  class="rounded-3 "   src="${data[i].img_url}" alt="LOADING..." >
              <div style=" height: min-180px; width:170px; " class="d-flex flex-column m-auto justify-content-between    ">
                  <h4 class="p-1 mt-2 text-center   text-wrap"><b>${data[i].name}</b></h4>
                  <h4 class="text-center   py-sm"><b><i>Rating : ${data[i].rating}%</i></b></h4>
                  <a class="align-self-center w-70 " href="${data[i].url}"><button class=" mb-2 px-4 py-1 btn-secondary border-0   rounded-pill  " >Watch Now</button></a>
              </div>
            

            
              </div>
              `;

                createelement(el, "movies");


            }
            window.scroll({
                top: 0,
                left: 0,
                behavior: "auto",
            });
        },
        error: function (error) {
            console.log("error is = " + error)
        }
    })

}

 

function createelement(src, id) {
    const node = document.createElement("div");
    $(document).ready(function () {
        const element = document.getElementById(id);

        if (element) {
            node.innerHTML = src;
            element.appendChild(node);
        }
    })
}

function random() {

    $.ajax({
        url: "https://movieto-api.vercel.app/movie",
        method: "GET",
        datatype: "json",
        success: function (data) {
            const element = document.getElementById('anymovie');
            if(element){
            element.innerHTML = "";
            }





            const movie = ` 
            <div class="blur  m-lg-3  d-block mt-md-2  blur   d-md-flex mx-2 py-2 py-lg-5 p-0 pe-md-5 ps-md-2 rounded-3" style="width: fit-content; font-family: Georgia, 'Times New Roman', Times, serif;">
                <img class="d-block d-md-none border border-2 border-secondary  rounded-3 p-2  m-auto" style=" min-width: 180px; height:300px"  src="${data.img_url}" alt="" >

                <div style="width:250px;"  class="d-none d-md-flex text-white m-auto  flex-column justify-content-center    ">
                    <h4  class=" p-3 py-md-0 m-0 text-center text-wrap "><b>${data.name}</b></h4>
                    <h4 class="p-3 py-md-0 text-center "><b><i>Rating : ${data.rating}%</i></b></h4>
                   
                        <a class="align-self-center " href="${data.url}"><button class=" my-2 mx-2 px-4 py-2 btn-info text-black border-0   rounded-pill  " > Watch Now</button></a>
                        <a class="align-self-center " onclick="random()" ><button class=" my-3 px-5 mx-2 py-2 btn-primary text-black border-0  rounded-pill  " >Refresh</button></a>
                    
                </div>  
                
                <div style="width:250px;"  class="d-flex d-md-none m-auto flex-column justify-content-center    ">
                <h4  class=" p-3 m-0 text-center text-wrap "><b>${data.name}</b></h4>
                <h4 class="p-3 text-center "><b><i>Rating : ${data.rating}%</i></b></h4>
               
                    <a class="align-self-center " href="${data.url}"><button class=" my-2 mx-2 px-4 py-2 btn-info text-black border-0   rounded-pill  " > Watch Now</button></a>
                    <a class="align-self-center " onclick="random()" ><button class=" my-3 px-5 mx-2 py-2 btn-primary text-black border-0  rounded-pill  " >Refresh</button></a>
                
                </div> 
                <img class="d-none d-lg-block rounded-3" style="height: 420px; min-width: 220px;" class="rounded-3" src="${data.img_url}" alt="" >
                <img class="d-none d-md-block d-lg-none  rounded-3" style=" min-width: 100px; height:250px;" class="rounded-3" src="${data.img_url}" alt="" >
               
            </div>`;

            createelement(movie, "anymovie");
        },
        error: function (errmsg) {
            console.log(errmsg)
        }
    })
}


function Search(){
//    window.
}