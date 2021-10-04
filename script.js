const { body } = document;

function changeBackground(number) {
    // Reset CSS class for body
    body.className = '';
    switch (number) {
        case "1":
            body.classList.add("background-1");
            break;
        case "2":
            body.classList.add("background-2");
            break;
        case 3:
            body.classList.add("background-3");
            break;
        default:
            break;
    }
}
