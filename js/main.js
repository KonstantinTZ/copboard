let triggers = document.querySelectorAll(".door-handle")
let door = document.querySelectorAll('.door')
let sticker = document.getElementById('sticker')
let doorOpenSound = document.querySelector('.open-sound')
let handlerTouchSound = document.querySelector('.touch-sound')

triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        doorOpenSound.play()
        handlerTouchSound.play()
        door.forEach((item) => {
            item.classList.add("open")
        })
        sticker.classList.add("open")
    })
})