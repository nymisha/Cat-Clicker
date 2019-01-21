
var kittens= ['cat_image1','cat_image2','cat_image3','cat_image4','cat_image5'];
var counters=[0,0,0,0,0];




function displayKitternsOnUI()
{

   var ul= document.querySelector('.menuItemList');

   for (var kitten of kittens) {
    var li= document.createElement('li');
    li.setAttribute('class','menuItem');
    console.log(kitten);
    li.innerText=kitten;
    ul.append(li);
   }
   var navDiv=document.querySelector('.nav');
   navDiv.classList.toggle('open');

}

displayKitternsOnUI();

$('.menuIcon').click(function()
{
  var nav=document.querySelector('.nav');
  console.log(nav);
  nav.classList.toggle('open');
  removeDisplayImage();
  });

  removeDisplayImage: function(){
  {
    var div=document.querySelector('.display_image');
    var ctr=document.querySelector('.counter');
    var name=document.querySelector('.image_name');
    while (div.firstChild)
    {
     div.removeChild(div.firstChild);

    }
    while(ctr.firstElementChild)
    {
      ctr.removeChild(ctr.firstElementChild);
    }
     while(name.firstChild)
    {
      name.removeChild(name.firstChild);
    }
  }
},


$('.menuItem').click(function()
{

    var value= $(this).text();
    console.log(value);
    removeDisplayImage();
    var div=document.querySelector('.display_image');
    div.setAttribute('id',value);
    var imageName=document.querySelector('.image_name');
    var counter=document.querySelector('.counter')
    var image= document.createElement('img');
    image.setAttribute('src','images/'+value+ '.jpg');
    image.setAttribute('Alt','cat Image '+value );
    image.style.width='400px';
    image.style.width='400px';
    div.append(image);
    var label= document.createElement('label');
    label.textContent='counter : ';
    var span=document.createElement('span');
    span.textContent=counters[kittens.indexOf(value)];
    imageName.textContent= value;
    counter.appendChild(label);
    counter.appendChild(span);
});

  $('.display_image').click(function(event)
  {

    var counterVal=counterFn.countIncrement(this.id);
    console.log(counterVal);
    var counterSpan= document.querySelector('span');
    counterSpan.textContent=counterVal;
  });

  var counterFn=(function(){
  return{
    countIncrement: function(val){
      console.log("enterd");
      var index= kittens.indexOf(val);
      console.log(index);
      counters[index]=counters[index]+1;
      return counters[index];
    },
    reset: function()
    {
      if(counter!==0)
      {
      counters[kittens.indexOf(val)]= counter;
      }
      else{
        counter=0;
      }
      return counter;
    }


  };
  })();





