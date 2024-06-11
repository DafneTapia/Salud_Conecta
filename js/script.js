document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Aquí puedes generar un ID de cliente. Para este ejemplo, usaré un número aleatorio.
    const clientId = Math.floor(Math.random() * 1000000);

    // Mostrar el ID de cliente
    document.getElementById('clientId').innerText = clientId;
    document.getElementById('clientIdContainer').classList.remove('hidden');
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    fetch('/schedule_appointment', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Asumiendo que el servidor devuelve el ID de cliente
        const clientId = data.clientId;
        document.getElementById('clientId').innerText = clientId;
        document.getElementById('clientIdContainer').classList.remove('hidden');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});



function generateCode() {
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    const generatedCodeElement = document.getElementById('generatedCode');
    generatedCodeElement.innerHTML = code;  // Usar innerHTML para actualizar más rápido
    document.getElementById('codeContainer').style.display = 'block';
  }
  
function generateClientId(event) {
        event.preventDefault();
        const clientId = 'ID' + Math.floor(Math.random() * 1000000); // Generar un ID de cliente aleatorio
        document.getElementById('clientId').innerText = clientId;
        document.getElementById('clientIdContainer').classList.remove('hidden');

        // Guardar el ID de cliente en localStorage para uso posterior
        localStorage.setItem('clientId', clientId);
    }

function verifyClientId() {
        const inputClientId = document.getElementById('clientIdInput').value;
        const storedClientId = localStorage.getItem('clientId');

        if (inputClientId === storedClientId) {
            document.getElementById('personalizeEmailsSection').classList.remove('blur');
            document.getElementById('generateCallCodesSection').classList.remove('blur');
        } else {
            alert('ID de cliente incorrecto. Inténtalo de nuevo.');
        }
    }







document.getElementById('appointmentForm').addEventListener('submit', function(event) {
         event.preventDefault(); // Previene el comportamiento predeterminado del formulario

         // Generar un ID de cliente aleatorio
         const clientId = 'ID' + Math.floor(Math.random() * 1000000);
         document.getElementById('clientId').innerText = clientId;
         document.getElementById('clientIdContainer').classList.remove('hidden');

         // Guardar el ID de cliente en localStorage
         localStorage.setItem('clientId', clientId);
      });

      function verifyClientId() {
         const inputClientId = document.getElementById('clientIdInput').value;
         const storedClientId = localStorage.getItem('clientId');

         if (inputClientId === storedClientId) {
            document.getElementById('personalizeEmailsSection').classList.remove('blur');
            document.getElementById('generateCallCodesSection').classList.remove('blur');
         } else {
            alert('ID de cliente incorrecto. Inténtalo de nuevo.');
         }
      }