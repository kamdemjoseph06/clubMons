$(document).ready(function(){

    //alert('0x0x0x0x0x0x')
    //$('.tbodyy').css('color','fuchsia')
    $('.type_doC').on('change',function(){
        select_doc=$('.type_doC').val() 
        if (select_doc=="CNI " || select_doc=='Passport ' ){$('.numId_doc').slideDown(650),$('.autre_doc').css('display','none'),$('.autre_doc').val()==''}
        else($('.numId_doc').css('display','none'),$('.autre_doc').val()=='')//,alert($('.numId_doc').val()),alert($('.autre_doc').val()))
        // if(select_doc=='Autres((ex:Téléphone) etc..) '){$('.autre_doc').slideDown(650),$('.numId_doc').css('display','none'),$('.numId_doc').val()==''} 
        // else($('.autre_doc').css('display','none'),$('.numId_doc').val()=='',alert($('.numId_doc').val()),alert($('.autre_doc').val()))
    })

    /////////////////////////////////////////////////////////////////////////////////////

    data_search=$('.input_search').val()  

    $('.button_search').on('click',function(){
        if (data_search !==''){
            $('.insert_CNI').css('opacity','0')
            $('.insert_CNI').hide() 
            $('.span_save').hide()
            $('.div_svg').hide()
            $('.button_back').slideDown(1500)
            $('.table_data').show(1500)
            $('.taBle').show(1500)
        // $('.div_svG').hide()
    }
        else(pass)
    })
///////////////////////////////////////////////////

    $('.span_card').click(function(){
        $('.i_card').toggle(700)
    });

    $('.span_expediteur').click(function(){
        $('.i_card').toggle(700)
    });

    $('.fa-user-large').click(function(){
        $('.span_expediteur').toggle(800)
    });

    $('.i_expediteur').on('click',function(){
        $('.modal').show()
    });

    $('.close_popover').on('click', function(){
        $('.pop_over').hide()
        $('.span_save').toggle()
    });
/////////Fermer le modal //////////////////////////
    $('.close_modal').on('click', function(){
        $('.modal').hide()
    });

    $('.btn_modal').on('click', function(){
        $('.modal').hide()
    });
//////////////////////////////////////////////////
///////// Bouton de validation des champs ///////
    $('.button_data').click(function(){
        var nom_docC=$('.nom_doc').val()
        var prenom_docC=$('.prenom_doc').val()
        var type_docC=$('.type_doc').val()
        var Noms_expP=$('.Noms_exp').val()
        var CNI_expP=$('.CNI_exp').val()
        var Tel_expP=$('.Tel_exp').val()

        if ( nom_docC =='' ){
            //alert(type_docC)
            // $('.span_save').hide()&& type_docC !=='' 
            //$('.pop_over').css('display','inline-block')
            //$('.div_popover').show(1500)
            $('.nom_doc').css('border-bottom-color','red')  
        }
        else{$('.nom_doc').css('border-bottom-color','green')}
        if(Tel_expP =='') {$('.Tel_exp').css('border-bottom-color','red')}
        else{$('.Tel_exp').css('border-bottom-color','green')}

        if(CNI_expP =='') {$('.CNI_exp').css('border-bottom-color','red')}
        else{$('.CNI_exp').css('border-bottom-color','green')}

        if(Noms_expP =='') {$('.Noms_exp').css('border-bottom-color','red')}
        else{$('.Noms_exp').css('border-bottom-color','green')}

        if(type_docC =='') {$('.type_doc').css('border-bottom-color','red')}
        else{$('.type_doc').css('border-bottom-color','green')}
    });

});
//////////////////////////////////////////////



