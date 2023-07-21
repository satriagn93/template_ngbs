// jquery ajax disini...
function validateEmail($email) {
    var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailReg.test($email);
}

function validate_email(e) {
    $this = $(e);
    $email_val = $(e).val();
    emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    $email = emailReg.test($email_val);
    if ($email == false) {
        $('.error_email').removeClass('hide');
    } else {
        $('.error_email').addClass('hide');
    }
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

$("input.onlyphone").keydown(function() {
    var nilai = $(this).val();
    var hasil = nilai.replace(/[\D\s\._\-]+/g, "");
    if (nilai == "") {
        // $(this).val("08")
    } else {
        $(this).val(hasil)
    }
});

function alphanumeric(inputtxt) {
    var letters = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    if (inputtxt.match(letters)) {
        return 'true';
    } else {
        return 'false';
    }
}

$(document).ready(function() {

    if($(".jsselect").length > 0){
        $('.jsselect').select2({ width: 'resolve' });
    }

    if($(".all_datepicker").length > 0){
        $('.all_datepicker').datepicker({
            dateFormat: "yy-mm-dd",
            timepicker: false,
            maxDate: '+0',
            scrollInput: false,
            changeMonth: true,
            changeYear: true,
            yearRange: "-5:+0"
        });
    }

    if($("#dataTable").length > 0){
        $('#dataTable').DataTable();
    }

    if($(".dataTable").length > 0){
        $('.dataTable').DataTable();
    }


    if ($('#topCategory').length > 0) {

		let isDown = false;
		let startX;
		let scrollLeft;
		const slider = document.querySelector('.ul_topCategory');

		const end = () => {
			isDown = false;
		  slider.classList.remove('active');
		}

		const start = (e) => {
		  isDown = true;
		  slider.classList.add('active');
		  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
		  scrollLeft = slider.scrollLeft;	
		}

		const move = (e) => {
			if(!isDown) return;

		  e.preventDefault();
		  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
		  const dist = (x - startX);
		  slider.scrollLeft = scrollLeft - dist;
		}

		(() => {
			slider.addEventListener('mousedown', start);
			slider.addEventListener('touchstart', start);

			slider.addEventListener('mousemove', move);
			slider.addEventListener('touchmove', move);

			slider.addEventListener('mouseleave', end);
			slider.addEventListener('mouseup', end);
			slider.addEventListener('touchend', end);
		})();


    }

    // if($("#dataTable").length > 0){
    //     $('#dataTable').DataTable();
    // }

    // if($(".dataTable").length > 0){
    //     $('.dataTable').DataTable();
    // }

    $('#hideDetailProduct').click(function () {

        var hurl = window.location.origin;
        console.log(hurl);
        $('.col_detailProduct').removeClass('slideInUp').addClass('slideOutDown');

        setTimeout(function(){
            location.replace(hurl);
        }, 100);

    });

    $('#openCategory').click(function () {
        $('#openCategory').empty().append('<span><i class="fa-solid fa-angle-up"></i></span>');
        $('.row_categoryProduct').fadeIn();

    });

    $('#hideCategoryProduct').click(function () {

        $('#openCategory').empty().append('<span><i class="fa-solid fa-angle-down"></i></span>');
        $('.col_categoryProduct').removeClass('slideInUp').addClass('slideOutDown');

        setTimeout(function(){
            $('.row_categoryProduct').fadeOut();
            $('.col_categoryProduct').removeClass('slideOutDown').addClass('slideInUp');
        }, 200);

    });


    if ($('#showListProduct').length > 0) {

        var testResult = [];
         testResult =   [
                            {
                            
                                img: "https://i.postimg.cc/hjqBRDZq/USA-Shortrib-Angus-Choice-Steak.png",
                                title: "Buntut Sapi Premium 1kg",
                                price: "170.000"
                            },{
                                img: "https://i.postimg.cc/kGwCm4CW/Whats-App-Image-2021-11-19-at-14-46-56.jpg",
                                title: "Buntut Sapi Premium 2kg",
                                price: "270.000"
                            },{
                                img: "https://orderdulu.s3.ap-southeast-1.amazonaws.com/sirloin_65959b26b8.jpeg",
                                title: "Buntut Sapi Premium 3kg",
                                price: "370.000"
                            },{
                                img: "https://orderdulu.s3.ap-southeast-1.amazonaws.com/ribeye_787dfcc9b5.jpeg",
                                title: "Buntut Sapi Premium 4kg",
                                price: "470.000"
                            },{
                                img: "https://orderdulu.s3.ap-southeast-1.amazonaws.com/tender_a66d1a728d.jpeg",
                                title: "Buntut Sapi Premium 5kg",
                                price: "570.000"
                            }
                        ];
                       

        // console.log(testResult.length);


        var showResult = '';

        var startCount = 0;
        var endCount = 10;

        $(window).scroll(function() {
            if($(window).scrollTop() == $(document).height() - $(window).height()) {
                   // ajax call get data from server and append to the div
                // console.log('kena bawah nih');
                
                if(startCount < endCount){
                    for (var i = 0; i < testResult.length; i++) {
                        startCount++;
                        console.log(testResult[i].title);

                        var bodyHtml = `<div class="col-xs-6 col-md-6 col_listProduct">
                                <div class="bx_listProduct">
                                    <div class="mg_listProduct">
                                        <img src="`+testResult[i].img+`">
                                    </div>
                                    <div class="ct_listProduct">
                                        <h2 class="ht_listProduct">`+testResult[i].title+`</h2>
                                        <div class="p_variantProduct">per 100gr</div>
                                        <div class="p_priceProduct">Rp `+testResult[i].price+`</div>
                                    </div>
                                    <div class="bx_openProduct">
                                        <button class="btn_priceProduct">Beli</button>
                                    </div>
                                </div>
                            </div>`;

                        showResult += bodyHtml;
                    }

                    $('#showListProduct').append(showResult);
                }

            }
        });

    }


    // // Data Picker Initialization
    // $('.datepicker').datepicker({
    //         startDate: new Date(),
    //         minDate: 3,
    //         format: "mm/dd/yyyy",
    //         beforeShowDay: $.datepicker.noWeekends
    // });

    // ================ CONFIRMATION PAGE PROSES==============
    if ($('#confirmationPage').length > 0) {
        var counter = 5;
        setInterval(function () {
          --counter;
          // console.log(counter);
          if(counter >= 0){
            $('#countConfirm').empty().append(counter);
          }
          
        }, 1000);


        var hurl = window.location.origin;

        setTimeout(function(){
            location.replace(hurl);
        }, 3000);

    }

    // ================ CONFIRMATION PAGE PROSES==============





});


$('.ul_topCategory li').click(function(){

  $('.ul_topCategory li').removeClass('act');

  var tabs = $(this).data('id');
  console.log(tabs);

  if($(this).hasClass('act')){
      $(this).removeClass('act');
  }else{
      $(this).addClass('act');
      // $('#'+tabs).addClass('act');
  }

});
    
$('.ul_topCategory li').click(function(){


	$(this).addClass('act');
});


function plusQty(){

    var qty = $('input[name="countQty"]').val();
    var plusQty = parseInt(qty)+1;

    $('input[name="countQty"]').val(plusQty);

    var price = $('input[name="priceProduct"]').val();
    var newPrice = addCommas(parseInt(price)*plusQty);

    $('#show_calPrice').empty().append(newPrice);
    
    // console.log(plusQty);

}

function minusQty(){

    var qty = $('input[name="countQty"]').val();
    
    if(parseInt(qty) > 1){
        var minusQty = parseInt(qty)-1;
        $('input[name="countQty"]').val(minusQty);
        // console.log(minusQty);

        var price = $('input[name="priceProduct"]').val();
        var newPrice = addCommas(parseInt(price)*minusQty);
        
        $('#show_calPrice').empty().append(newPrice);

    }
    
}

function addToCart(){
    var idproduct = $('input[name="idProduct"]').val();
    var qty = $('input[name="countQty"]').val();
    // var catatan = $('#catatan').val();
    console.log(idproduct);
    console.log(qty);
    // console.log(catatan);


Swal.fire({
      icon: 'success',
      title: 'Sukses Tambah ke Keranjang',
      // timer: 1500,
      showDenyButton: true,
      showConfirmButton: true,
      
      confirmButtonText: 'Tambah Lain',
      confirmButtonColor: '#F0483F',
      denyButtonText: 'Lanjut Pesan',
      denyButtonColor: 'green'
}).then((result) => {

  if (result.isConfirmed) {
        var hurl = window.location.origin;

        setTimeout(function(){
            location.replace(hurl);
        }, 100);
  } else if (result.isDenied) {
        var hurl = window.location.origin;

        setTimeout(function(){
            location.replace(hurl+`/checkout`);
        }, 100);
  }


})
    // ===> ajax add to cart




}


function goCheckoutNow(){

    $('#txOrderNow').empty().append('Memproses... <span><i class="fa-solid fa-spinner fa-spin"></i></span>');

    setTimeout(function(){
        $('#txOrderNow').empty().append('Order Sekarang <span><i class="fa-solid fa-chevron-right"></i></span>');
    }, 10000);
    // console.log(plusQty);

}

function checkoutNow(){

    $('#txOrderNow').empty().append('Memproses... <span><i class="fa-solid fa-spinner fa-spin"></i></span>');

    setTimeout(function(){
        $('#txOrderNow').empty().append('Order Sekarang <span><i class="fa-solid fa-chevron-right"></i></span>');
    }, 3000);


    var hurl = window.location.origin;

    setTimeout(function(){
        location.replace(hurl+`/konfirmasi`);
    }, 100);

    // console.log(plusQty);

}


function confirmNow(){



    var hurl = window.location.origin;

    // setTimeout(function(){
    //     location.replace(hurl);
    // }, 3000);

    // console.log(plusQty);

}

function loginNow(){

    $('.err_login').fadeOut();
    

    var email = $('input[name="user_email"]');
    var password = $('input[name="user_password"]');

    console.log(validateEmail(email.val()))

    console.log(email.val());

    if(email.val() == ''){
       email.parent().children('.err_login').fadeIn(); 
    }else if(!validateEmail(email.val())){
        email.parent().children('.err_login').fadeIn();
    }else if(password.val() == ''){
        password.parent().children('.err_login').fadeIn();
    }else{
        // ajax login here

        $('#submitLogin').empty().append('Memproses... <span><i class="fa-solid fa-spinner fa-spin"></i></span>');

        var hurl = window.location.origin;

        setTimeout(function(){
            location.replace(hurl);
        }, 1000);

    }   

}


// ====> FOR ADMIN ======

function form_filterReport(e) {
    e.preventDefault();

      var from_date = $('input[name="from_date"]').val();
      var to_date = $('input[name="to_date"]').val();
      var sel_orderstatus = $('select[name="sel_orderstatus"] option:selected').val();

      var sel_user = $('select[name="sel_user"] option:selected').val();
      console.log(sel_user);

      window.location='/dashboard/transaksi/?from_date='+from_date+'&to_date='+to_date+'&us_id='+sel_user;
    
}


function delete_adminKategori(e) {

    var bodyPage = $('#bodyPage').data('code');
    console.log(bodyPage);

    var val_id = e;
    console.log(val_id);

    if(bodyPage == 'brandPage' && val_id !== ''){

        Swal.fire({
          title: 'Anda Yakin ?',
          text: "Mau hapus brand ini ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_deleteBrand',
                            'val_id':val_id
                      },
                      success:function(result) {

                        Swal.fire(
                          'Deleted!',
                          'Kategori sudah di hapus!',
                          'success'
                        )

                        var hurl = window.location.origin;
                        setTimeout(function(){
                            location.replace(hurl+'/dashboard/brand/');
                        }, 1000);

                      }
                });

          }
        })

    }else if(bodyPage == 'kategoriPage' && val_id !== ''){

        Swal.fire({
          title: 'Anda Yakin ?',
          text: "Mau hapus kategori ini ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {

                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_deleteKategori',
                            'val_id':val_id
                      },
                      success:function(result) {

                        Swal.fire(
                          'Deleted!',
                          'Kategori sudah di hapus!',
                          'success'
                        )

                        var hurl = window.location.origin;
                        setTimeout(function(){
                            location.replace(hurl+'/dashboard/kategori/');
                        }, 1000);

                      }
                });

          }
        })

    }


    



}

$('.open_admEditKategori').click(function(){
    var cat_id = $(this).data('catid');
    var cat_name = $(this).data('cat');
    // console.log(cat_name);

    $('#modalKategori').modal('show');

    $('#modalKategoriTitle').empty().append('Ubah Kategori');

    $('input[name="temp_category_id"]').val(cat_id);
    $('input[name="category_name"]').val(cat_name);
});


function edit_adminKategori() {

    var bodyPage = $('#bodyPage').data('code');
    console.log(bodyPage);

    if(bodyPage == 'brandPage'){

        Swal.fire({
          title: 'Simpan Perubahan ?',
          text: "Setuju untuk menyimpan perubahan ini",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Lanjut Simpan!'
        }).then((result) => {
          if (result.isConfirmed) {

            var temp_val_name = $('input[name="category_name"]').val();
            var temp_val_id = $('input[name="temp_category_id"]').val();

            if(temp_val_id || temp_val_id !== ''){
                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_editBrand',
                            'val_id':temp_val_id,
                            'val_name':temp_val_name
                      },
                      success:function(result) {
                        // console.log(result);
                        Swal.fire(
                          'Sukses!',
                          'Brand sudah di perbarui!',
                          'success'
                        )

                        $('#modalKategori').modal('hide');
                        var hurl = window.location.origin;
                        setTimeout(function(){
                            location.replace(hurl+'/dashboard/brand/');
                        }, 1000);

                      }
                });
            }else{ // if null kosong
                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_addBrand',
                            'val_name':temp_val_name
                      },
                      success:function(result) {
                        // console.log(result);
                        Swal.fire(
                          'Sukses!',
                          'Brand baru sudah di tambahkan!',
                          'success'
                        )

                        $('#modalKategori').modal('hide');
                        var hurl = window.location.origin;
                        setTimeout(function(){
                            location.replace(hurl+'/dashboard/brand/');
                        }, 1000);

                      }
                });     
            }

          }
        })

    }else if(bodyPage == 'kategoriPage'){

        Swal.fire({
          title: 'Simpan Perubahan ?',
          text: "Setuju untuk menyimpan perubahan ini",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Lanjut Simpan!'
        }).then((result) => {
          if (result.isConfirmed) {

            var temp_category_name = $('input[name="category_name"]').val();
            var temp_category_id = $('input[name="temp_category_id"]').val();
            console.log(temp_category_name);
            console.log(temp_category_id);

            if(temp_category_id || temp_category_id !== ''){
                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_editKategori',
                            'cat_id':temp_category_id,
                            'cat_name':temp_category_name
                      },
                      success:function(result) {
                        // console.log(result);
                        Swal.fire(
                          'Sukses!',
                          'Kategori sudah di perbarui!',
                          'success'
                        )

                        $('#modalKategori').modal('hide');
                        var hurl = window.location.origin;
                        setTimeout(function(){
                            location.replace(hurl+'/dashboard/kategori/');
                        }, 1000);

                      }
                });
            }else{ // if null kosong
                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_addKategori',
                            'cat_name':temp_category_name
                      },
                      success:function(result) {
                        // console.log(result);
                        Swal.fire(
                          'Sukses!',
                          'Kategori baru sudah di tambahkan!',
                          'success'
                        )

                        $('#modalKategori').modal('hide');
                        var hurl = window.location.origin;
                        setTimeout(function(){
                            location.replace(hurl+'/dashboard/kategori/');
                        }, 1000);

                      }
                });     
            }

          }
        })

    }


}

$('#addAdmCategory').click(function(){
    $('#modalKategori').modal('show');

    $('#modalKategoriTitle').empty().append('Tambah Kategori');
    $('input[name="temp_category_id"]').val('');
    $('input[name="category_name"]').val('');

});


function save_admProduct(){



        Swal.fire({
          title: 'Simpan Perubahan ?',
          text: "Setuju untuk menyimpan perubahan ini",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Lanjut Simpan!'
        }).then((result) => {
          if (result.isConfirmed) {

                var pro_id = $('input[name="pro_id"]').val();
                var sel_brand = $('select[name="sel_brand"] option:selected').val();
                var sel_category = $('select[name="sel_category"] option:selected').val();

                $.ajax({
                      url : ajaxscript.ajaxurl,
                      data: {
                            'action':'admin_saveProduct',
                            'pro_id':pro_id,
                            'br_id':sel_brand,
                            'cat_id':sel_category
                      },
                      success:function(result) {
                        console.log(result);
                        Swal.fire(
                          'Sukses!',
                          'Produk sudah di perbarui!',
                          'success'
                        )

                        // $('#modalKategori').modal('hide');
                        // var hurl = window.location.origin;
                        setTimeout(function(){
                            location.reload();
                            // location.replace(hurl+'/dashboard/brand/');
                        }, 1000);

                      }
                });
          

          }
        })

    console.log(sel_brand);
    console.log(sel_category);

}