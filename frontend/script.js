document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const duration = document.getElementById('duration').value;
    const developers = document.getElementById('developers').value;

    fetch('http://localhost:5000/user/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name,description,duration,developers})
    })
    .then(response => response.json())
    .then(data => {
        if (data.user_id) {
            alert(`Juego registrado: ${data.name} (${data.description}) (${data.duration}) (${data.developers})`);
            document.getElementById('name').value = '';
            document.getElementById('description').value = '';
            document.getElementById('duration').value = '';
            document.getElementById('developers').value = '';
        } else {
            alert('Error al registar el juego');
        }
    })
    .catch(error => console.error('Error:', error));
});

function getUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch(`http://localhost:5000/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert('Juego no encontrado');
            } else {
                alert(`Detalles del juego:\nID: ${data.user_id}\nNombre: ${data.name}\nDescription: ${data.description}\nDuration: ${data.duration}\nDevelopers: ${data.developers}`);
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, ingrese un ID del juego válido.');
    }
}

function updateUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        const name = prompt('Ingrese el nuevo nombre:');
        const description = prompt('Ingrese la nueva descripcion:');
        const duration= prompt('Ingrese la duracion restante del juego:');
        const developers= prompt('Ingrese los desarrolladores:');



        if (name && description && duration && developers ) {
            fetch(`http://localhost:5000/user/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, description,duration,developers })
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert('Juego no encontrado');
                } else {
                    alert(`Juego actualizado:\nNombre: ${data.name}\nDescripcion: ${data.description} Duracion: ${data.duration} Desarrolladores: ${data.developers}`);
                }
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Debe ingresar nombre, descripcion, duracion y desarrolladores correctos :-).');
        }
    } else {
        alert('Por favor, ingrese un ID del juego valida.');
    }
}

function deleteUser() {
    const userId = document.getElementById('userId').value;
    if (userId) {
        fetch(`http://localhost:5000/user/${userId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('videojuego eliminado correctamente');
            } else {x
                alert('Error al eliminar el juego');
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Por favor, ingrese un ID de videojuego válido.');
    }
}
