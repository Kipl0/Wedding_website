let gallery = document.getElementById("gallery")
let popup = document.getElementById("popup")
let selected = document.getElementById("selected_image")

let next = document.getElementById("next")

let image_indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let selected_index = null

image_indexes.forEach((i) => { //gør at alle billederne bliver printet som Img filer på siden
    let image = document.createElement("img")
    image.src = `/img/wedding/wedding-${i}.JPG`
    image.alt = `cover for Episode {i}`
    image.classList.add('gallery_img')

    image.addEventListener('click', () => { //funktionen der gør at billedet popper op
        popup.style.transform = `translateY(0)`
        selected.src = `/img/wedding/wedding-${i}.JPG`
        selected.alt = `cover for Episode {i}`
 
    })


    gallery.appendChild(image)
}) 



// popup.addEventListener('click', () => {
//     popup.style.transform = `translateY(-100%)`
//     popup.src = ''
//     popup.alt = ''
// })
