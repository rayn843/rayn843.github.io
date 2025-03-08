let progress = 0;
const progressBar = document.querySelector(".progress");
const statusText = document.getElementById("status");

function updateProgress() {
    if (progress < 100) {
        progress += Math.random() * 10;
        progressBar.style.width = progress + "%";
        statusText.innerText = "Загрузка " + Math.floor(progress) + "%";
        setTimeout(updateProgress, 500);
    } else {
        statusText.innerText = "Готово! Вход на сервер...";
    }
}

updateProgress();
