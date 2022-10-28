var fetch_url = 'https://api.github.com/users/Bryan-Herrera-Dev/repos?per_page=60';
let repos;
window.onload = function () {
var project_sec = document.querySelector('#nuevo_proyectos');
  fetch(fetch_url).then(function (res) {
    return res.json();
  }).then(function (data) {
    data.forEach(function (repo) {
        console.log(repo)
        repos = data.sort(function (a, b) {
            return b.stargazers_count - a.stargazers_count;
        });
       
    });
    console.log(repos);
    for (let i = 0; i < 6; i++) {
        project_sec.innerHTML += `
        <div class="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up">
        <div class="position-relative">
            <span class="d-block position-absolute start-50 top-0 translate-middle-x lh-1 display-1" style="opacity: .2;">0${i+1}</span>
            <div class="position-relative pt-4 pt-lg-6">
                <a class="mb-4 h4 link-hover-underline text-white" href="${repos[0].url}" alt="${repos[0].description}" target="_blank"
                rel="noreferrer noopener" >${repos[i].name}</a>
                <p class="mb-0 opacity-75 w-lg-75">${repos[i].description}
                </p>
            </div>
        </div>
    </div>   `
    }
  });
}; // vieww more projects
repos = []