//your JS code here. If required.

let tbody = document.getElementById("book-list");
let submit = document.getElementById("submit");

let obj = {};
let arr = [];

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;
  let id = 0;
  obj = { id, title, author, isbn };
  id++;
  arr.push(obj);

  display();
});
function display() {
  let nwarr = arr.map((val) => {
    return `<tr>
    <td>${val.title}</td>
    <td>${val.author}</td>
    <td>${val.isbn}</td>
    <td>< a href="#" class="delete" onclick="deletRow()">Del</a></td>
</tr>`;
  });
  tbody.innerHTML = nwarr.join(" ");
}

function deletRow() {
  let btn = document.querySelectorAll(".delete");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      btn[i].parentElement.remove();
    });
  }
}
