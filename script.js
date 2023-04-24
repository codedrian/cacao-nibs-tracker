
let count = 0;
let previous_count = 0;

document.getElementById('increment-btn').addEventListener('click', () => {
count++;
document.getElementById('counter').innerText = count;
});

document.getElementById('reset-btn').addEventListener('click', () => {
count = 0;
document.getElementById('counter').innerText = count;
});

document.getElementById('save-btn').addEventListener('click', () => {
    previous_count = count;
    document.getElementById('prev-count').innerText = previous_count;
});

document.getElementById('prev-count').addEventListener('click', () => {
    count = previous_count;
    document.getElementById('counter').innerText = count;
});
