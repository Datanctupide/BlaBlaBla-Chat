const button = document.getElementById('loadBtn');
const statusText = document.getElementById('status');
const list = document.getElementById('userList');

button.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    statusText.textContent = 'Zhdat...';
    list.innerHTML = '';

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);

            users.forEach(function (user) {
                const li = document.createElement('li');
                li.textContent = `${user.name} - ${user.email}`;
                list.appendChild(li);
            });

            statusText.textContent = '';
        } else {
            statusText.textContent = 'Lol'
        }
    };

    xhr.onerror = function () {
        statusText.textContent = 'Lol';
    };
});