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
    <td class="delete" onclick="deleteRow(this)">Del</td>
</tr>`;
  });
  tbody.innerHTML = nwarr.join(" ");
}

let del = document.querySelectorAll(".delete");
function deleteRow(r) {
  r.parentElement.remove();
}
