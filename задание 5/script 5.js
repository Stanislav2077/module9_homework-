const resultNode = document.querySelector("#result")
    const btnNode = document.querySelector("#request")

    const resultInnerHTML = localStorage.getItem("resultInnerHTML")
    if (resultInnerHTML)
        resultNode.innerHTML = resultInnerHTML

    function doRequest(url, cb) {
        fetch(url)
        .then(data => data.json())
        .then(data => cb(data))
        .catch(error => {
            console.error(error)
            alert(error)
        })
    }

    function displayResult(data) {
        let cards = ""

    data.forEach(item => {
        cards = cards + `
            <div class="card border-dark mb-3">
            <img src="${item.download_url}" class="card-img-top" alt="img" />
            <div class="card-body">
                <p class="card-text">Author: ${item.author}</p>
            </div>
        </div>
        `
    })
    resultNode.innerHTML = cards
    localStorage.setItem("resultInnerHTML", cards)
    }

    btnNode.addEventListener("click", e => {
    e.preventDefault()

    let
        p = document.querySelector("#pageNo").value,
        l = document.querySelector("#limit").value,
        error

    if (!(p >= 1 && p <= 10)) {
        p = -1
        error = "Номер страницы вне диапазона от 1 до 10"
    }

    if (!(l >= 1 && l <= 10)) {
        l = -1
        error = "Лимит вне диапазона от 1 до 10"
    }

    if (p === -1 && l === -1)
        error = "Номер страницы и лимит вне диапазона от 1 до 10"

    if (error)
        resultNode.innerHTML = `<p style="color:red;">${error}</p>`
    else {
        doRequest(`https://picsum.photos/v2/list?page=${p}&limit=${l}`, displayResult)
        }
    })