$(function(){

  var model=
{
    getKittens: function()
    {
      var kittens=['cat_image1','cat_image2','cat_image3','cat_image4','cat_image5'];
      return kittens;
    },

    getCounter: function()
    {
      var counters=[0,0,0,0,0];
      return counters;
    },

    getCatImages:function()
    {
        var kittens= model.getKittens()
        var catImages=[];
        for (const kitten of kittens) {
          console.log(kittens.indexOf(kitten));
          catImages[kittens.indexOf(kitten)]= 'images/'+kitten+ '.jpg'

        }
        return catImages;
    }

};

var controller={
  
   kittens: model.getKittens(),
   counters:model.getCounter(),

  kittensList: function()
  {
    return model.getKittens();
  },

  catsListController: function()
  {
    catListView.catsList();
    displayMenu.clickMenu();
    catRenderView.renderCat();
    catRenderView.counterIncrement();
  },

  getCatImage:function(value)
  {
   var catImages= model.getCatImages();
   console.log(this.kittens.indexOf(value));
   return catImages[this.kittens.indexOf(value)];

  },

  getCounter :function(value)
  {
      return this.counters[this.kittens.indexOf(value)];
  },

  countIncrement: function(val){
    console.log("enterd");
    this.counters[this.kittens.indexOf(val)]= this.counters[this.kittens.indexOf(val)]+1;  
    return this.counters[this.kittens.indexOf(val)]
 
  },
  
};

var catListView={

  catsList : function()
  {
    var ul= $('.menuItemList');
    var kittens=controller.kittensList()
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




};


var displayMenu=
{
  clickMenu: function(){
  $('.menuIcon').click(function()
{
  var nav=document.querySelector('.nav');
  console.log(nav);
  nav.classList.toggle('open');
  catRenderView.removeDisplayImage();
  });
  }
}

var catRenderView=
{

  renderCat:function(){
  $('.menuItem').click(function()
  {
      var value= $(this).text();

      catRenderView.removeDisplayImage();
      var div=document.querySelector('.display_image');
      div.setAttribute('id',value);
      var imageName=document.querySelector('.image_name');
      var counter=document.querySelector('.counter')
      var image= document.createElement('img');
      image.setAttribute('src',controller.getCatImage(value));
      image.setAttribute('Alt','cat Image '+value );
      image.style.width='400px';
      image.style.width='400px';
      console.log(image);
      div.append(image);
      var label= document.createElement('label');
      label.textContent='counter : ';
      var span=document.createElement('span');
      span.textContent=controller.getCounter(value);
      imageName.textContent= value;
      counter.appendChild(label);
      counter.appendChild(span);
  });
  },

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

counterIncrement: function()
{
  $('.display_image').click(function(event)
  {

    var counterVal=controller.countIncrement(this.id);
   
    console.log(counterVal);
    var counterSpan= document.querySelector('span');
    counterSpan.textContent=counterVal;
  });
}

};
controller.catsListController();

});

