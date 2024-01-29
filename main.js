let userNames = document.getElementById("user-names");
let postTitles = document.getElementById("post-titles");

userNames.innerHTML = "";
postTitles.innerHTML = "";

loadUsers();

//  User functions
function loadUsers() {
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/users`);
    request.responseType = "json";
    request.send();
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            for (const user of users) {
                let str = `<div class="user-info" onclick="getPostsByUser(${user.id},this)">
                    <h6 class="uName">${user.name}</h6>
                    <p class="uEmail">${user.email}</p>
                </div>`;
                userNames.innerHTML += str;
            }
        }
    };
}


//  Posts functions
function getPostsByUser(uId,btn) {
    let alluser = document.getElementsByClassName("user-info");
    for (const user of alluser) {
        user.className = "user-info";
    }
    btn.className="user-info active";
    postTitles.innerHTML = "";
    let request = new XMLHttpRequest();
    request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${uId}`);
    request.responseType = "json";
    request.send();
    request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            for (const post of posts) {
                let str = `<div class="post-info">
                    <h6 class="pTitle">${post.title}</h6>
                    <p class="PBody">${post.body}</p>
                </div>`;
            postTitles.innerHTML += str;
            }
        }
    };
}
