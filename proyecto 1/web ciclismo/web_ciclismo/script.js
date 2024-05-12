// script.js

$(document).ready(function() {
    // Cargar la lista de corredores al cargar la página
    loadCorredores();
  
    // Enviar el formulario de nuevo corredor al hacer submit
    $('#corredorForm').submit(function(event) {
      event.preventDefault();
      var formData = {
        curpRun: $('#curpRun').val(),
        genero: $('#genero').val()
        // Agrega más campos según sea necesario
      };
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/corredores',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(data) {
          alert('Corredor agregado exitosamente');
          loadCorredores();
        },
        error: function(xhr, status, error) {
          alert('Error al agregar corredor: ' + xhr.responseText);
        }
      });
    });
  
    // Función para cargar la lista de corredores
    function loadCorredores() {
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/corredores',
        success: function(data) {
          displayCorredores(data);
        },
        error: function(xhr, status, error) {
          alert('Error al cargar corredores: ' + xhr.responseText);
        }
      });
    }
  
    // Función para mostrar la lista de corredores en la página
    function displayCorredores(corredores) {
      var corredoresList = $('#corredoresList');
      corredoresList.empty();
      corredores.forEach(function(corredor) {
        corredoresList.append('<div>' + corredor.curpRun + ' - ' + corredor.genero + '</div>');
        // Agrega más campos según sea necesario
      });
    }
  });
  