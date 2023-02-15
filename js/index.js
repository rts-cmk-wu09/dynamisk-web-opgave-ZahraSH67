document.addEventListener("DOMContentLoaded", function() {

/************************************HERO*****************/


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





    /*******************************SERVICES******************************/


    const serviceSection = document.querySelector(".services")
    services.forEach(element => {


        let serviceDiv = document.createElement("div")
        serviceSection.appendChild(serviceDiv)
        serviceDiv.classList.add("serviceDiv")


        let serviceImage = document.createElement("img")
        serviceDiv.appendChild(serviceImage)
        serviceImage.src = element.illustration  
        serviceImage.classList.add("serviceImage")


        let serviceHeadline = document.createElement("h4")
        serviceDiv.appendChild(serviceHeadline)
        serviceHeadline.textContent = element.headline 
        serviceHeadline.classList.add("serviceHeadline")


        let serviceText = document.createElement("p")
        serviceDiv.appendChild(serviceText)
        serviceText.textContent =  element.text  
        serviceText.classList.add("serviceText")


        let serviceLinkText = document.createElement("h5")
        serviceDiv.appendChild(serviceLinkText)
        serviceLinkText.textContent =  element.linktext
        serviceLinkText.classList.add("serviceLinkText")


    })


    /******************************************facilities************************/


    const facilitieSection = document.querySelector(".facilities")
    const facilities_Headline = document.createElement("h3")
    facilitieSection.appendChild(facilities_Headline)
    facilities_Headline.classList.add("facilities_Headline")
    facilities_Headline.textContent = facilities.headline

    const facilitie_Big_DIV = document.createElement("div")
    facilitieSection.appendChild(facilitie_Big_DIV)
    facilitie_Big_DIV.classList.add("facilitie_Big_DIV")
    facilities.options.forEach(element => {


        let facilities_Div = document.createElement("div")
        facilitie_Big_DIV.appendChild(facilities_Div)
        facilities_Div.classList.add("facilities_Div")


        let facilities_Image = document.createElement("img")
        facilities_Div.appendChild(facilities_Image)
        facilities_Image.src = element.icon  
        facilities_Image.classList.add("facilities_Image")


        let facilities_Small_headline = document.createElement("h4")
        facilities_Div.appendChild(facilities_Small_headline)
        facilities_Small_headline.textContent = element.headline 
        facilities_Small_headline.classList.add("facilities_Small_headline")


        let facilities_Text = document.createElement("p")
       facilities_Div.appendChild(facilities_Text)
       facilities_Text.textContent =  element.text  
        facilities_Text.classList.add("facilities_Text")


        let facilities_LinkText = document.createElement("h5")
       facilities_Div.appendChild(facilities_LinkText)
       facilities_LinkText.innerText = "Show me more"
      facilities_LinkText.classList.add("facilities_LinkText")

    })


/************************************************sites**********************/
    const siteSection = document.querySelector(".sites")

    const site_divWrapper1 = document.createElement("div")
    siteSection.appendChild(site_divWrapper1)
    siteSection.appendChild(site_divWrapper1)
    site_divWrapper1.classList.add("site_divWrapper1")

   

    const site__divWrapper1_Headline = document.createElement("h3")
   site_divWrapper1.appendChild(site__divWrapper1_Headline)
   site__divWrapper1_Headline.classList.add("site__divWrapper1_Headline")
   site__divWrapper1_Headline.textContent = sites.headline


   const site_divWrapper1_text = document.createElement("p")
   site_divWrapper1.appendChild(site_divWrapper1_text)
   site_divWrapper1_text.classList.add("site_divWrapper1_text")
   site_divWrapper1_text.textContent = sites.text


   const site_divWrapper1_button = document.createElement("button")
   site_divWrapper1.appendChild(site_divWrapper1_button)
   site_divWrapper1_button.classList.add("site_divWrapper1_button")
   site_divWrapper1_button.innerHTML = `<img src="${sites.btnicon}">`
    site_divWrapper1_button.innerHTML += '<p>Explore</p>'




     const site_Second_divWrapper = document.createElement("div")
    siteSection.appendChild(site_Second_divWrapper)
    site_Second_divWrapper.classList.add("site_Second_divWrapper")
    sites.places.forEach(element => {
        let sites_places_Div = document.createElement("div")
        site_Second_divWrapper.appendChild(sites_places_Div)
        sites_places_Div.classList.add("sites_places_Div")

        let sites_places_Image = document.createElement("img")
        sites_places_Div.appendChild(sites_places_Image)
        sites_places_Image.classList.add("sites_places_Image")
        sites_places_Image.src = element.img


        let sites_places_Name = document.createElement("h4")
        sites_places_Div.appendChild(sites_places_Name)
        sites_places_Name.classList.add("sites_places_Name")
        sites_places_Name.textContent = element.name


        let sites_places_City = document.createElement("p")
        sites_places_Div.appendChild(sites_places_City)
        sites_places_City.classList.add("sites_places_City")
        sites_places_City.textContent = element.city


        let sites_places_Link = document.createElement("p")
        sites_places_Div.appendChild(sites_places_Link)
        sites_places_Link.classList.add("sites_places_Link")
        sites_places_Link.innerText = "View the site"

    })


  









   


    // slå dig løs her... 

    //eksempel på at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut