const password = document.querySelector('.form__password');
const passwordRepeat = document.querySelector('.form__password_repeat');
const errorClassName = "error";
const matchedClassName = "matched";

const setClassName = (node, className, set = false) => {
    if (set) {
        if (!node.classList.contains(className)) node.classList.add(className);
    } else node.classList.remove(className);
}

const setErrorSign = (nodes) => nodes.forEach(node => {
    setClassName(node, errorClassName, true);
    setClassName(node, matchedClassName);
});

const setMatchedSign = (nodes) => nodes.forEach(node => {
    setClassName(node, matchedClassName, true);
    setClassName(node, errorClassName);
});

const flushClassNames = (nodes) => nodes.forEach(node => {
    setClassName(node, errorClassName);
    setClassName(node, matchedClassName);
});

function validate(event) {
    const pass = password.value;
    const passToRepeat = passwordRepeat.value;
    const processingNodes = [password, passwordRepeat];
    if (pass.length > 0 && passToRepeat.length > 0) {
        if (pass === passToRepeat) setMatchedSign(processingNodes);
        else if (pass !== passToRepeat) setErrorSign(processingNodes);
    } else flushClassNames(processingNodes);
}

password.addEventListener('keyup', validate);
passwordRepeat.addEventListener('keyup', validate);