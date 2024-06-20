// Напишите функцию, которая использует
// async/await для загрузки данных с удаленного
// сервера (например, с помощью API) и
// возвращает полученный результат.

async function getData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`)
    }

    const data = await response.json();

    return data;
}

getData("https://support.oneskyapp.com/hc/en-us/article_attachments/202761627")
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})