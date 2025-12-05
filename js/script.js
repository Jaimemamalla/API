$(document).ready(function(){
    // $.ajax({
    // url: 'https://randomuser.me/api/',
    // dataType: 'json',
    // success: function(data) {
    //     console.log(data);
    // }

    const $container = $("#user-cont");


    fetch("https://randomuser.me/api/?nat=ES&gender=female")
        .then(function(response){
            if (!response.ok){
                throw new Error("Error al obtener los usuarios.")
            }
            return response.json();
        })
        .then(function(result){
            console.log(result);
            // console.log(result.results[0].name.first);
            // console.log(result.results[0].name.last);
            // console.log(result.results[0].picture.large);

            // // PRIMERA VERSION 
            // // $("#user-cont").append(result.results[0].name.first);
            // // $("#user-cont").append(result.results[0].name.last);
            // // $("#user-cont").append('<img src="' + result.results[0].picture.large + '"alt="">');
            // // $("#user-cont").append(`<img src="${result.results[0].picture.medium} "alt="">`);

            // // SEGUNDA VERSION 
            // let fullName = result.results[0].name.first + " " + result.results[0].name.last;
            // let fullContact = result.results[0].cell + " " + result.results[0].email;
            // let fullLocation = result.results[0].location.city +", " + result.results[0].location.country;


            // // $("#uName").append(result.results[0].name.first);
            // // $("#uName").append(result.results[0].name.last);
            // $("#uName").append(fullName);

            // $("#uImg").append('<img src="' + result.results[0].picture.large + '"alt="">');

            // // $("#uLocation").append(result.results[0].location.city);
            // // $("#uLocation").append(result.results[0].location.country);
            // $("#uLocation").append(fullLocation);

            // // $("#uContact").append(result.results[0].cell);
            // // $("#uContact").append(result.results[0].email);
            // $("#uContact").append(fullContact);


            let user = result.results[0];

            let card = `
                <div>
                    <img src="${user.picture.large}" alt="">
                    <div>
                        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
                        <p>${user.location.city} - ${user.location.country}</p>
                        <div>
                            <a href="mailto:${user.email}">${user.email}</a>
                            <span>${user.phone}</span>
                        </div>
                    </div>
                </div>
            `;

            $container.append(card);
            
        })

        .catch(function(){
            $container.append("Lo sentimos mucho, pero ha ocurrido un error:" + error.messaje)
        });
});

