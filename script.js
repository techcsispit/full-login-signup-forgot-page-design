document.getElementById('login').addEventListener('click', runInAnimations);
document.getElementById('signout').addEventListener('click', runOutAnimations)

function runInAnimations() {
    const leftBox = document.getElementById('leftBox');
    const slantedLine = document.getElementById('slantedLine');
    const welcomeText = document.getElementById('welcomeText');

    leftBox.classList.remove('run-right-left');
    slantedLine.classList.remove('run-cool-box');
    welcomeText.classList.remove('run-left-right');
    leftBox.classList.remove('run-right-left-reverse');
    slantedLine.classList.remove('run-cool-box-reverse');
    welcomeText.classList.remove('run-left-right-reverse');

    void leftBox.offsetWidth;
    void slantedLine.offsetWidth;
    void welcomeText.offsetWidth;

    leftBox.classList.add('run-right-left');
    slantedLine.classList.add('run-cool-box');
    welcomeText.classList.add('run-left-right');
}

function runOutAnimations() {
    const leftBox = document.getElementById('leftBox');
    const slantedLine = document.getElementById('slantedLine');
    const welcomeText = document.getElementById('welcomeText');

    leftBox.classList.add('run-right-left-reverse');
    slantedLine.classList.add('run-cool-box-reverse');
    welcomeText.classList.add('run-left-right-reverse');
}