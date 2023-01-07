document.getElementById('botonOcultador').addEventListener('click', () => {
    console.log('boton clickeado')
    document.getElementById('texto').innerHTML = 'Chasgracias :)';
    document.getElementById('imgholdit').src = './assets/img/ty.jpg';
    document.getElementById('botonOcultador').style.display = 'none';
    setTimeout(() => {
        document.getElementById('cartelito').style.display = 'none';
    },3000)
});