const ul = document.createElement('ul');

ul.setAttribute('class', 'list-group text-center container');
document.body.appendChild(ul);

for (i = 0; i <= 100; i++) {
    let li = document.createElement('li');
    li.textContent = i;
    li.setAttribute('class', 'list-group-item text-center');
    if (i % 15 == 0) {
        li.textContent = "...";
        li.classList.add('bg-danger');
    }
    ul.appendChild(li);
};