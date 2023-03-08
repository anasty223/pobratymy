// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });


  const getMinMax = (arr) =>{
    min=arr[0];
    max=min;
    for(i=1;i<arr.length; i++){
        if(arr[i]>max) max=arr[i]
        if(arr[i]<min)min=arr[i]
    }
    }

    getMinMax(min,max)