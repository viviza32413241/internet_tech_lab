function checkClick(event) {
    const tagName = event.target.tagName;
    alert(`${tagName}`);
    event.stopPropagation();
}

$('*').on('click', checkClick);