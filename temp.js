document.querySelectorAll("input[type=\"radio\"][data-x-dafxsm=\"很好\"]").forEach(e => e.checked = true);

let elements = document.getElementsByClassName("b2p-sports-wrapper__item-title");
for (const element of elements) {
    console.log(element.textContent)
}