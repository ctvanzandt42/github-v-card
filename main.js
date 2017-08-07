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
        `<p>Name: ${data.name}</p>
                      <p>GitHub URL: <a href="${data.url}">ctvanzandt42<a></p>
                      <p id="email">Email: <a href=ctvanzandt42@gmail.com>ctvanzandt42@gmail.com<a></p>
                      <p>Company: ${data.company}</p>
                      <p>Website: <a href="${data.blog}">My Site<a></p>`;

    basics.innerHTML = basic_info;
}

function addPhoto() {
    let data = JSON.parse(this.responseText);
    let userAvatar =
        `<img src=${data.avatar_url}>`;

    photo.innerHTML = userAvatar;
}



