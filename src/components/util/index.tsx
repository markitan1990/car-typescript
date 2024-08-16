export function ToggleClassActive(value: Array<string>) {
    const elClass = "active";
    value.forEach(className => {
        const el = document.querySelector(`.${className}`);
        if (el) {
            el.classList.toggle(elClass);
        }
    });
}
 