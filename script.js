const boxes = document.querySelectorAll('.box')
//dddddd

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    shado inter

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        function checkBoxe()

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
//ali motahari (:
//code
