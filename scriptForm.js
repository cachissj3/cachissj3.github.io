document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    document.getElementById("nombreError").textContent = "";
    document.getElementById("telError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("consultaError").textContent = "";
    
    const errorList = document.getElementById('errores');
    errorList.innerHTML = '';
    let hasErrors = false;
  
    
    const nombreInput = document.getElementById("nombre");
    const nombre = nombreInput.value.trim();
    if (nombre === '' || nombre.length > 50) {
        hasErrors = true;
        nombreInput.classList.add('input-error');
        errorList.innerHTML += '<li>El nombre es obligatorio y debe tener un máximo de 50 caracteres.</li>';
    } else {
        nombreInput.classList.remove('input-error');
    }
  
    
    const telefonoInput = document.getElementById("telefono");
    const telefono = telefonoInput.value.trim();
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
        hasErrors = true;
        telefonoInput.classList.add('input-error');
        errorList.innerHTML += '<li>El teléfono es obligatorio y debe ser de 10 números.</li>';
    } else {
        telefonoInput.classList.remove('input-error');
    }
  
    
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) {
        hasErrors = true;
        emailInput.classList.add('input-error');
        errorList.innerHTML += '<li>El correo electrónico no es válido.</li>';
    } else {
        emailInput.classList.remove('input-error');
    }
  
    
    const consultaInput = document.getElementById("consulta");
    const consulta = consultaInput.value.trim();
    if (consulta === "" || consulta.length > 150) {
        hasErrors = true;
        consultaInput.classList.add('input-error');
        errorList.innerHTML += '<li>Debe escribir una consulta de no más de 150 caracteres.</li>';
    } else {
        consultaInput.classList.remove('input-error');
    }
  
    
    if (!hasErrors) {
        document.getElementById('resultado').textContent = 'Formulario enviado correctamente.';
        document.getElementById('nombreIngresado').textContent = nombre;
        document.getElementById('telefonoIngresado').textContent = telefono;
        document.getElementById('emailIngresado').textContent = email;
        document.getElementById('consultaIngresado').textContent = consulta;
        
        document.getElementById('datosIngresados').style.display = 'block';
  
        document.getElementById('formulario').reset();  
    } else {
        document.getElementById('resultado').textContent = '';  
        document.getElementById('datosIngresados').style.display = 'none';
    }
  });