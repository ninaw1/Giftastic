let toggle = false 

var topics = [
    "gudetama",
    "hello kitty",
    "shiba",
    "rilakkuma",
    "sanrio",
    "unicorn",
    "cat",
]

function makeButton(searchTerm) {
    console.log('searchTerm:::: ', searchTerm)
    var element = document.createElement("button")
    // element.appendChild(document.createTextNode("gif"))
    // var gifDiv = document.getElementById("gifDiv")
    element.innerHTML = searchTerm
    document.getElementById("gifDiv").append(element)

    console.log(element)
}

// for(var i = 0; i < topics.length; i++) {
//     var button = document.querySelector("button").textContent(topics[i]);
//     button.setAttribute("data-cute", topics[i]);
    
//     if(button.classList) {
//     button.classList.add("cute-button");
//     } else {
//     button.className += '' + className 
//     }
    
//     document.querySelector("#button-group").appendChild(button)
// }

const getGIF = cute => {
    console.log('cute:::: ', cute)
    // document.querySelector('#gifDiv').innerHTML = ''
    fetch(`https://api.giphy.com/v1/gifs/search?q=${cute}&api_key=2sa4vgpws5n5Uijh7KeMMbemwwQcff5Q&rating=g`)
    .then(r => r.json())
    .then(r => {
            console.log(r)
            r.data.forEach((gif) => {
                console.log(gif.images)
                let {
                    url : animated,
                    fixed_height
                } = gif.images
            })
            makeButton(cute)
            // 
            // let { url : still } = r.data.images.fixed_height_still
            // document.querySelector('#gifDiv').innerHTML = `
            //     <img class="gifImg" src="${still}" alt="${cute}Gif" data-still="${still}" data-animated="${animated}">
            // `
            // let gifElem = document.createElement('img')
            // gifElem.setAttribute('src', gif.images.fixed_height.url)
            // document.querySelector('#gifDiv').append(gifElem)
        })
        .catch(e => console.error(e))
}

const pausePlay = gif => {
    let { animated, still } = gif.dataset
    toggle = !toggle
    gif.setAttribute('src', toggle ? animated : still)
}

document.addEventListener('click', ({ target }) => {
    switch (target.className) {
        case 'getGIF':
        getGIF(target.dataset.cute)
        break
        case 'gifImg':
        break
    }
})

document.querySelector("#add-cute-button").addEventListener("click", e => {
    e.preventDefault()
    const userSearch = document.querySelector("#new-cute-input").value
    console.log('userSearch:::: ', userSearch)
    getGIF(userSearch)

})

// create a function makeButton 
// use the for loop to loop through the buttons 
// setAttribute to data-name 
// append btn to where you want it to go 