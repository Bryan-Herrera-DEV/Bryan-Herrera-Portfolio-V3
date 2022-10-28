var fetch_url = 'https://api.github.com/users/Bryan-Herrera-Dev/repos?per_page=10&sort=pushed&type=public';
var project_sec = document.querySelector('#project_sec_ul');

window.onload = function () {
  fetch(fetch_url).then(function (res) {
    return res.json();
  }).then(function (data) {
    data.forEach(function (repo) {
      console.log(repo)
    });
  });
}; // vieww more projects