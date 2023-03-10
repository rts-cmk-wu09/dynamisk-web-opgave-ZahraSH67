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
     const s1 = headlineArr.slice(0, headlineArr.indexOf("save")).join(" ")
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
    site_divWrapper1_button.innerHTML += '<p>Start</p>'




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



    /***********************************advantages*****************************/
    const advantageSection = document.querySelector(".advantages")

    const advantages_Big_Headline = document.createElement("h3")
    advantageSection.appendChild(advantages_Big_Headline)
    advantages_Big_Headline.classList.add("advantages_Big_Headline")
    advantages_Big_Headline.textContent = "Our Advantages"

    let advantages_Big_Wrapper = document.createElement("div")
    advantageSection.appendChild(advantages_Big_Wrapper)
    advantages_Big_Wrapper.classList.add("advantages_Big_Wrapper")


    advantages.forEach(element => {
        let advantages_Small_Wrapper = document.createElement("div")
        advantages_Big_Wrapper.appendChild(advantages_Small_Wrapper)
        advantages_Small_Wrapper.classList.add("advantages_Small_Wrapper")


        let advantages_Icons = document.createElement("img")
        advantages_Small_Wrapper.appendChild(advantages_Icons)
        advantages_Icons.classList.add("advantages_Icons")
        advantages_Icons.src = element.icon


        let advantages_Headline = document.createElement("h4")
        advantages_Small_Wrapper.appendChild(advantages_Headline)
        advantages_Headline.classList.add("advantages_Headline")
        advantages_Headline.textContent = element.headline


        let advantages_Text = document.createElement("p")
        advantages_Small_Wrapper.appendChild(advantages_Text)
        advantages_Text.classList.add("advantages_Text")
        advantages_Text.textContent = element.text

    })

/*******************************FOOTER**************************/

const footerSection = document.createElement("section")
document.body.appendChild(footerSection)
footerSection.classList.add("footerSection")


const footer_First_Wrapper = document.createElement("section")
footerSection.appendChild(footer_First_Wrapper)
footer_First_Wrapper.classList.add("footer_First_Wrapper")

const footer_Big_Wrapper1 = document.createElement("div")
footer_First_Wrapper.appendChild(footer_Big_Wrapper1)
footer_Big_Wrapper1.classList.add("footer_Big_Wrapper1")

const footer_First_Wrapper1_Headline = document.createElement("h4")
footer_Big_Wrapper1.appendChild(footer_First_Wrapper1_Headline)
footer_First_Wrapper1_Headline.classList.add("footer_First_Wrapper1_Headline")
footer_First_Wrapper1_Headline.textContent = footer.headline

const footer_First_Wrapper1_Text = document.createElement("h1")
footer_Big_Wrapper1.appendChild(footer_First_Wrapper1_Text)
footer_First_Wrapper1_Text.classList.add("footer_First_Wrapper1_Text")
footer_First_Wrapper1_Text.textContent = footer.text


const footer_Big_Wrapper2 = document.createElement("div")
footer_First_Wrapper.appendChild(footer_Big_Wrapper2)
footer_Big_Wrapper2.classList.add("footer_Big_Wrapper2")

footer.relevantLinks.forEach(element => {
    let footer_relevantLinks_Wrapper = document.createElement("div")
    footer_Big_Wrapper2.appendChild(footer_relevantLinks_Wrapper)
    footer_relevantLinks_Wrapper.classList.add("footer_relevantLinks_Wrapper")

    let footer_relevantLinks_List = document.createElement("ul")
    footer_relevantLinks_Wrapper.appendChild(footer_relevantLinks_List)
    footer_relevantLinks_List.classList.add("footer_relevantLinks_List")

    
    let footer_relevantLinks_firstLine = document.createElement("li")
    footer_relevantLinks_List.appendChild(footer_relevantLinks_firstLine)
    footer_relevantLinks_firstLine.classList.add("footer_relevantLinks_firstLine")
    footer_relevantLinks_firstLine.textContent = element.title
 

    let footer_relevantLinks_secondLine = document.createElement("li")
    footer_relevantLinks_List.appendChild(footer_relevantLinks_secondLine)
    footer_relevantLinks_secondLine.classList.add("footer_relevantLinks_Lines")
    footer_relevantLinks_secondLine.textContent = element.firstLine


    let footer_relevantLinks_thirdLine = document.createElement("li")
    footer_relevantLinks_List.appendChild(footer_relevantLinks_thirdLine)
    footer_relevantLinks_thirdLine.classList.add("footer_relevantLinks_Lines")
    footer_relevantLinks_thirdLine.textContent = element.secondLine
    footer_relevantLinks_secondLine.classList.add("footer_relevantLinks_Lines")

    let footer_relevantLinks_fourthLine = document.createElement("li")
    footer_relevantLinks_List.appendChild(footer_relevantLinks_fourthLine)
    footer_relevantLinks_fourthLine.classList.add("footer_relevantLinks_Lines")
    footer_relevantLinks_fourthLine.textContent = element.thirdLine


    let footer_relevantLinks_fifthLine = document.createElement("li")
    footer_relevantLinks_List.appendChild(footer_relevantLinks_fifthLine)
    footer_relevantLinks_fifthLine.classList.add("footer_relevantLinks_Lines")
    footer_relevantLinks_fifthLine.textContent = element.fourthLine
})





const footer_Second_Wrapper = document.createElement("section")
footerSection.appendChild(footer_Second_Wrapper)
footer_Second_Wrapper.classList.add("footer_Second_Wrapper")


const footer_CopyRight = document.createElement("p")
footer_Second_Wrapper.appendChild(footer_CopyRight)
footer_CopyRight.classList.add("footer_CopyRight")
footer_CopyRight.textContent = footer.copyRight



const footer_Small_Wrapper2 = document.createElement("div")
footer_Second_Wrapper.appendChild(footer_Small_Wrapper2)
footer_Small_Wrapper2.classList.add("footer_Small_Wrapper2")


const footer_defaultLinks_List = document.createElement("ul")
footer_Small_Wrapper2.appendChild(footer_defaultLinks_List)
footer_defaultLinks_List.classList.add("footer_defaultLinks_List")

footer.defaultLinks.forEach(element =>{
    let footer_Last_List = document.createElement("li")
    footer_defaultLinks_List.appendChild(footer_Last_List)
    footer_Last_List.classList.add("footer_Last_List")
    footer_Last_List.textContent = element
})












   


    // sl?? dig l??s her... 

    //eksempel p?? at udskrive alle overskrifter i services i konsollen:
    services.forEach(service => console.log(service.headline))

}) // DOMContentLoaded slut