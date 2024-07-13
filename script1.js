document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form'); // Get the form element

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            let name = document.getElementById('username').value;
            let pass = document.getElementById('password').value;

            if (name === 'Aarcha' && pass === 'art') {
                window.location.href = "todo.html";
            }
        });
    }
});
