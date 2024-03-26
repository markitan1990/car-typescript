export function ToggleClassActive(value: Array<string>) {
    const elClass = "active"
    for (let i = 0; i < value.length; i++) {
        var el = document.getElementsByClassName(value[i])[0];

        if (!el.classList.contains(elClass)) {
            el.classList.add(elClass);
        } else {
            el.classList.remove(elClass);
        }
    }
}
 