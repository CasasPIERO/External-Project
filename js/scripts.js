(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        
        // INICIO MENU HAMBURGUESA
        const btnMenu = document.getElementById('btnMenu');
        const navegacion = document.getElementById('navegacion');
        const icon = document.getElementById('icon');
        btnMenu.addEventListener('click', function(){
            navegacion.classList.toggle('nav-navegacion-visible');
            if(navegacion.classList.contains('nav-navegacion-visible')){
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }else{
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }); 
        // FIN MENU HAMBURGUESA
        
    });
})();