fetch('http://127.0.0.1:8080/index.html'
    .then(response => response.text())
    .then(data => {
        document.getElementById('shared-container').innerHTML = data;
    }));
    /*.catch(error => {
        console.error('Error fetching shared.html:', error);
    });*/

/*fetch('http://localhost:8080/shared.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('shared-container iframe').srcdoc = data;
    })
    .catch(error => {
        console.error('Error fetching index.html:', error);
    });*/