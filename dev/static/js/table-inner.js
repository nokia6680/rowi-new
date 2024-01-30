let tableOpener = document.querySelectorAll('.r-report__expand');
let tableCloser = document.querySelectorAll('.r-balance__close');
let tableBody = document.querySelector('.r-report');
let resBody = document.querySelector('.result__body');

tableOpener.forEach(item => {
    item.addEventListener('click', (e) => {
        tableOpener.forEach(el => {
            el.classList.remove('is-active');
        });
        tableBody.classList.toggle('is-active');
        item.classList.toggle('is-active');
        resBody.classList.toggle('table-active');
    });

    tableCloser.forEach(closer => {
        closer.addEventListener('click', (e) => {
            tableBody.classList.remove('is-active');
            item.classList.remove('is-active');
            resBody.classList.remove('table-active');
        });
    });
});

const tables = document.querySelectorAll(".r-table");

tables.forEach((table) => {
    table.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const dataType = clickedElement.closest("tr").getAttribute("data-type");

        if (dataType === "has-inner") {
            const row = clickedElement.closest("tr");
            row.classList.toggle("is-active");
        }
    });
});

const innerTables = document.querySelectorAll('.table-inner');
innerTables.forEach((innerTable) => {
    innerTable.addEventListener("click", (event) => {
        const clickedElement = event.target;
        const dataType = clickedElement.closest("tr").getAttribute("data-type");

        if (dataType === "has-inner-double") {
            const row = clickedElement.closest("tr");
            row.classList.toggle("is-active");
        }
    });
});