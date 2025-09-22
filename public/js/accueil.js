$(document).ready(function() {
    // $('.btn_connect').on('click', function() {
    //     $('.btn_connect').hide();
    //     $('.form-souscri').hide();
    //     $('.form-connection').show(750);
    //     $('.form-connection').css('display', 'flex').css('justify-content', 'center')
    //     $('.btn_souscri').show();
    //     $('.btn_connect_inscri').show();
    //     $('.alert_forgot').hide();
    // });
    ///////////////////////////////////////////////////////////




    $('.btnActualite').on('click', function() {
        $('.spanActualite').toggle()
        $('.spanEvenement').hide()
        $('.spanHistorique').hide()
        $('.spanParametre').hide()
    });
    $('.btnEvenement').on('click', function() {
        $('.spanEvenement').toggle()
        $('.spanActualite').hide()
        $('.spanHistorique').hide()
        $('.spanParametre').hide()
    });
    $('.btnHistorique').on('click', function() {
        $('.spanHistorique').toggle()
        $('.spanActualite').hide()
        $('.spanEvenement').hide()
        $('.spanParametre').hide()
    });
    $('.btnParametre').on('click', function() {
        $('.spanParametre').toggle()
        $('.spanActualite').hide()
        $('.spanEvenement').hide()
        $('.spanHistorique').hide()
    });

    
    // $('.loginItems').dropdown('toggle')


    // $('.bar').on('click', function() {
    //     $('.newMenu').toggle();
    // });
    // Bouton de connexion et ses cas -- Connexion à l accueil

    $('.btn_connection').on('click', function() {
        const PassUserjs = $('.PassUser').val()
        const NomUserjs = $('.NomUser').val()
        if (NomUserjs == '' && PassUserjs == '') {
            $('.btn_connect').show();
            $('.form-souscri').show(650);
            $('.form-connection').hide();
            $('.btn_connect_inscri').hide();
        } else if (NomUserjs == '' && PassUserjs !== '') { $('.NomUser').css('border-bottom-color', 'rgb(255,72, 72)'); } else if (NomUserjs != '' && PassUserjs == '') { $('.PassUser').css('border-bottom-color', 'rgb(255,72, 72)'); }
        //else{alert(NomUserjs);alert(PassUserjs)}

    });
    ////////////////////////////////////////////////////////////

    const marquee = document.getElementById('marqueeMultimedia');
    const videos = marquee.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('click', () => {
          // Vérifie si stop existe avant d'appeler
          if (typeof marquee.stop === "function") {
            marquee.stop();
          } else {
            alert('stop() non supporté par ce navigateur');
          }
          video.addEventListener('ended', () => {
            marquee.start(); // reprend le défilement
           });
        });
      });


    $('.btn_connect_inscri').on('click', function() {
        $('.btn_connect').show();
        $('.form-souscri').show(650);
        $('.form-connection').hide();
        $('.btn_souscri').show();
        $('.btn_connect_inscri').hide();
    });

    $('.forgot').on('click', function() {
        $('.alert_forgot').toggle(100);
        $('.cls_forgot').css('display', 'flex').css('justify-content', 'flex-end').css('font-style', 'normal').css('cursor', 'pointer').css('font-size', '20px');
        $('.alert_forgot').css('display', 'block').css('background-color', 'rgb(235, 255, 235)')
        $('.content_forgot').css('display', 'block').css('font-style', 'italic').css('line-height', '.7em;').css('margin-bottom', '1em');
    });

    $('.cls_forgot').on('click', function() {
        $('.alert_forgot').hide();
    });

    $('.btn_connection').on('click', function() {
        NomUser = $('.NomUser').val();
        $('.nomUser').text() = NomUser

        //alert(NomUser)
    });
    //////////////////////////////////////////////////////

    /*Validation Form  Inscription */
    $('#nomInscri').on('change', function() {
        $('#nomInscri').css('border-bottom-color', 'rgb(72, 72,255)')
    });
    $('.prenomInscri').on('change', function() {
        $('.prenomInscri').css('border-bottom-color', 'rgb(72, 72,255)')
    });
    $('.dateInscri').on('change', function() {
        $('.dateInscri').css('border-bottom-color', 'rgb(72, 72,255)')
    });
    $('.codeInscri').on('change', function() {
        $('.codeInscri').css('border-bottom-color', 'rgb(72, 72,255)')
    });
    $('.MotPasseInscri').change(function() {
        if ($('.MotPasseInscri').val == '') { $('.MotPasseInscri').css('border-bottom-color', 'rgb(255,72, 72)') } else { $('.MotPasseInscri').css('border-bottom-color', 'rgb(72, 72,255)') }
    })


    function data() {
        $('.btn_souscri').on('click', function() {

            const nomsInscrijs = $('.nomsInscri').val();
            const prenomInscrijs = $('.prenomInscri').val();
            const dateInscrijs = $('.dateInscri').val();
            const codeInscrijs = $('.codeInscri').val();
            const MotPasseInscrijs = $('.MotPasseInscri').val()

            if (nomsInscrijs != '' && prenomInscrijs != '' && dateInscrijs != '' && codeInscrijs != '' && MotPasseInscrijs != '') { alert('Val') }
            if (nomsInscrijs == '' && prenomInscrijs == '' && dateInscrijs == '' && codeInscrijs == '' && MotPasseInscrijs == '') {
                $('.inpt_souscri').css('border-bottom-color', 'rgb(255,72, 72)')
            }
            eel.inscription(nomsInscrijs, prenomInscrijs, dateInscrijs, codeInscrijs, MotPasseInscrijs)
            eel.hello('Ok')
        });
    }


    ////////////////////////////////////////////////////

    ////*  */////
    checkScreenSize();
    $(window).resize(function(){
        checkScreenSize();
    })
    function checkScreenSize(){
        if ($(window).width() <=463){
            $('.barMenux').off('click').on('click', function() {
                $('.barMenu').toggle(700);
                $('.barMenux').hide(700);
                $('.navMenu').hide(700);
            });
        }
        else{
        $('.barMenux').off('click').hide()
    }

////////////
        // if ($(window).width() <=463){
        //     $('.barMenu').off('click').on('click', function() {
        //         $('.barMenu').hide(450);
        //         $('.barMenux').show(550);
        //         $('.navMenu').show(550).css('position','absolute').css('z-index',' 9999').css('flex-direction','column').css('','').css('','').css('','').css('','');
        //     });
        // }
        // else{
        //     $('.barMenu').off('click').hide()
        // }

    
    $('.barMenux').off('click').on('click', function() {
        $('.barMenu').toggle(700);
        $('.barMenux').hide(700);
        $('.navMenu').hide(700);
    });


    $('.barMenu').off('click').on('click', function() {
        $('.barMenu').hide(450);
        $('.barMenux').show(550);
        $('.navMenu').show(550).css('position','absolute').css('z-index',' 9999').css('flex-direction','column').css('','').css('','').css('','').css('','');
    });

    ////////////////////////////////////////////

    /*Paramètres*/

    $('.modifMotPasse').on('click', function() {
        $('.formMotPasse').toggle(700);
    });

    $('.modifGalerie').on('click', function() {
        $('.formModifGalerie').toggle(700);
        $('.formSuppGalerie').hide(250);
    });

    $('.suppGalerie').on('click', function() {
        $('.formSuppGalerie').toggle(700);
        $('.formModifGalerie').hide(250);
    });
    //////////

    $('.modifProfil').on('click', function() {
        $('.formModifProfil').toggle(700);
        $('.formSuppProfil').hide(250);
    });

    $('.suppProfil').on('click', function() {
        $('.formSuppProfil').toggle(700);
        $('.formModifProfil').hide(250);
    });
    //////////

    $('.modifTel').on('click', function() {
        $('.formModifTel').toggle(700);
        $('.formSuppTel').hide(250);
    });

    $('.suppTel').on('click', function() {
        $('.formSuppTel').toggle(700);
        $('.formModifTel').hide(250);
    });
    ////////////

    $('.modifPhoto').on('click', function() {
        $('.formModifPhoto').toggle(700);
        $('.formSuppPhoto').hide(250);
    });

    $('.suppPhoto').on('click', function() {
        $('.formSuppPhoto').toggle(700);
        $('.formModifPhoto').hide(250);
    });
    ///////

    $('.carousel').carousel()
    $('.popover').popover()
    $('.btnHistorique').popover('show')
    $('[data-toggle="tooltip"]').tooltip();
    $(function () {
        $('[data-toggle="popover"]').popover()
      })
      $('.btnHistorique').popover(placement='top')
    $(function(){
        $('[data-toggle="popover"]').popover()
    })

    document.addEventLisrener('DOMContentLoaded',function(){
    function togglePassword(){
        const input=document.getElementById('seemore');
        // document.getElementById('btn').on('click',function(){
        input.type=(input.type==='password') ? 'text':'password' // ;})
    }
})
    // const date = new Date().toISOString().split('T')[0];
    // document.querySelectorAll('.form-souscri').forEach(form =>
    document.addEventLisrener('DOMContentLoaded',function(){
        const form =document.querySelector('.formSouscri');
        form.addEventListener('submit',function(e){
        e.preventDefault(); //empeche la redirection
        const formData = new FormData(form);
        const data=Object.fromEntries(formData.entries());
        fetch('/inscription',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())  // ou res.text()
        .then(result => {
            alert(result.message);
            // this.reset(); $('#message').textContent=
        })
        .catch(() => {alert('Erreur suurvenu veuillez verifier')})
    });

    // document.addEventLisrener('DOMContentLoaded',function(){
    document.querySelector('.form-connection').addEventListener('submit',async(e) =>{
        e.preventDefault(); //empeche la redirection
        const data={
            noms:document.querySelector('[name="NomUsers"]').value,
            password:document.querySelector('[name="PassUsers"]').value
        };
        fetch(window.location.pathname ,{     // '/connection'
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())  // ou res.text()
        .then(response => {           // response
            alert(response.message)
            // alert(data.message);
            // document.getElementById('message').innerHTML=data.message
        })
        .catch(() => {
            alert('Erreur serveur')
            // document.getElementById('message').innerHTML='Erreur de connection'
        })
        });
    // });

    });

     if (response.status===409){alert('Cet Utilisateur existe déjà')}
});
