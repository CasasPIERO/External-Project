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
        

        // INICIO EFECTOS SECCION EQUIPO //
        const btnTeam1 = document.getElementById('btn-team1');
        const btnTeam2 = document.getElementById('btn-team2');
        const team1 = document.getElementById('team1');
        const team2 = document.getElementById('team2');

        btnTeam1.addEventListener('click', function(){
            if(team1.classList.contains('cards-none')){
                team2.classList.add('cards-none');
                team1.classList.remove('cards-none');
            }
        });
        btnTeam2.addEventListener('click', function(){
            team2.classList.remove('cards-none');
            team1.classList.add('cards-none');
        });
        // FIN EFECTOS SECCION EQUIPO //
    });
})();