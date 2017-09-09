let basics = document.querySelector("#basic-info");
let photo = document.querySelector("#picture");

let req = new XMLHttpRequest();
req.addEventListener("load", basicInfo)
req.addEventListener("load", addPhoto)
req.open("GET", "https://api.github.com/users/ctvanzandt42");
req.send();

function basicInfo() {

    let data = JSON.parse(this.responseText);
    let basic_info =
        `<p>Nae: ${data.name}<br>
        GitHub URL: <a href="${data.url}">ctvanzandt42<a><br>
        Email: <a href=ctvanzandt42@gmail.com>ctvanzandt42@gmail.com<a><br>
        Company: ${data.company}<br>
        Website: <a href="${data.blog}">My Site<a></p>`;

    basics.innerHTML = basic_info;
}

function addPhoto() {
    let data = JSON.parse(this.responseText);
    let userAvatar =
        `<img src=${data.avatar_url}>`;

    photo.innerHTML = userAvatar;
}



