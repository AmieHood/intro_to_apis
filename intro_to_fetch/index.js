// console.log("Hello World!");
let url ="https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

fetch(url)  // The fetch is a method is available to us in the browser.
//and we supply at least a url and it will kick off a "GET"request to that url
    .then(res => res.json()) // .then() can be chained on a fetch to allow us 
                            // to take the response and do something with it.
    .then(json => {   // In this case, I have used the json data to display in the console
        console.log(json)
        console.log(json.title) //These logs are unique to the json that we got back
        console.log (json.locations)  //and only work on this object's structure
        console.log(json.director)
    })

    /*
    Basic fetch usage
    fetch(url)
        .then(cb to process the data)
        .then(cb to use the data)
    */

    const baseURL = "https://ghibliapi.herokuapp.com"

    fetch(baseURL + "/films") //reaches out to internet to get data
        .then(res => res.json()) // returns only the json data
        .then(json => {
            console.log(json.title)
            let myArr =json.map(film => { // make a new array reducing the items
            console.log(film.title)
            console.log(film.rt_score)
            return {                 
                title: film.title,
                rt_score: Number(film.rt_score) 
            }
        }).sort((cur, prev) => prev.rt_score - cur.rt_score) //sorted by rating

        //    console.log(myArr)
        displayResults(myArr) //passes off the sorted array to be displayed

        })

        //diplay results function 

        function displayResults(films) { //grabs the ul element from the index.html
            console.log('films') //checks to prove I am passing my data
            let filmList = document.getElementById('film-list') //this is the first time we grab a dom element by id
            films.map(film => { //goes through the films that are passed in to the function
                let filmLi = document.createElement('li') //this is our first time making a new tag from javascript...for each film, new li tag
                filmLi.innerText = `${film.title} ${film.rt_score}` //assignment of the film title and rt_score to the inner text
                filmList.appendChild(filmLi) // adds the newly made li tag with text to the ul tag
            })
        }



      

        
            //console.log(json)
            // console.log(json.title)
            // console.log(json.rt_score)
            // Try to use the json [] to grab title and rotten tomatoes score    
            // [
            //     {title: "something", rt_score: 83},
            // {title: "something", rt_score: 83},
            // {title: "something", rt_score: 83},
            // ]      
    //we will come back to this
    // let getLocations = (locURL) => {
    //     fetch(locUrl)
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json[0])
        
    //         })

    // }
    //fetch method takes url and goes out and gets it from the internet. when it comes back, it'll do the next steps in the .then.
    //whatever comes back from fetch we call res for response
    //all we care about is data inside data. json in this case

    