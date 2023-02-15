document.addEventListener("DOMContentLoaded", function() {

    
    //HERO
    const heroSection = document.querySelector(".hero")
    
    const heroImage = document.createElement("img")
    heroImage.src = hero.image
    heroSection.appendChild(heroImage)
    heroImage.classList.add("heroImage")

    const introduction = document.createElement("div")
    heroSection.appendChild(introduction)
    introduction.classList.add("introduction")

    const headlineArr  = hero.headline.split(" ")
    console.log(headlineArr)
     const s1 = headlineArr.slice(0, headlineArr.indexOf("can")).join(" ")
     const s2 = headlineArr.slice(headlineArr.indexOf("save"), headlineArr.indexOf("in")).join(" ")
     const s3 = headlineArr.slice(headlineArr.indexOf("in"),headlineArr.length).join(" ")
     console.log(s1)

    const openSpan = '<span class ="span1" >'
    const closeSpan = "</span>"

    const headlineWithSpan = s1 + " " + openSpan + s2 + closeSpan + " " + s3
    introduction.innerHTML = `<h2 class="headlineWithSpan"> ${headlineWithSpan} </h2>`
    
    const headParaf = document.createElement("p")
     introduction.appendChild(headParaf)
     headParaf.classList.add("headParaf")
     headParaf.textContent = hero.copy

     const exploreBTN = document.createElement("button")
     introduction.appendChild(exploreBTN)
     exploreBTN.classList.add("exploreBTN")
     exploreBTN.innerHTML = `<img src="${hero.icon}">`
     exploreBTN.innerHTML += '<p>Explore</p>'

    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut