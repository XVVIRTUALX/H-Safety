function saveProject(){

let name = document.getElementById("projectName").value
let industry = document.getElementById("industry").value
let notes = document.getElementById("notes").value

let project = {
name:name,
industry:industry,
notes:notes
}

let projects = JSON.parse(localStorage.getItem("hs_projects")) || []

projects.push(project)

localStorage.setItem("hs_projects", JSON.stringify(projects))

loadProjects()

}

function loadProjects(){

let list = document.getElementById("projectList")

let projects = JSON.parse(localStorage.getItem("hs_projects")) || []

list.innerHTML=""

projects.forEach(p => {

let li = document.createElement("li")

li.innerHTML =
"<b>"+p.name+"</b> ("+p.industry+")<br>"+p.notes

list.appendChild(li)

})

}

loadProjects()
