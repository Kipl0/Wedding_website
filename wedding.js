let gallery = document.getElementById("gallery")
let popup = document.getElementById("popup")
let selected = document.getElementById("selected_image")

let image_indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let selected_index = null

image_indexes.forEach((i) => {
    let image = document.createElement("img")
    image.src = `/img/wedding/wedding-${i}.JPG`
    image.alt = `cover for Episode {i}`
    image.classList.add('gallery_img')

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`
        selected.src = `/img/wedding/wedding-${i}.JPG`
        selected.alt = `cover for Episode {i}`

    })

    gallery.appendChild(image)
}) 

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`
    popup.src = ''
    popup.alt = ''
})