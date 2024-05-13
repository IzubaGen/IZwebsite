function toggleAccordion(accordion) {
    const body = accordion.nextElementSibling;
    const icon = accordion.querySelector('span');
    if (body.style.display === 'none') {
        body.style.display = 'block';
        icon.textContent = '-';
    } else {
        body.style.display = 'none';
        icon.textContent = '+';
    }
}