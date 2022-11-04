var LanguageList = {
    "EN" : "English",
    "ES" : "Español",
    "PT" : "Português",
    "PL" : "Polski",
    "RU" : "Русский"
  };
  
  // How many Splash Screens are registered?
  var SplashScreenTextCount = 5;
  
  
  // For Translations

  window.onload = initialize;
  
  function initialize() {
    var $dropdown = $("#country_select");    
    $.each(LanguageList, function(key, value) {
      $dropdown.
        append($("<option/>").
        val(key).
        text(value));
      });
      
    loadsLanguage("EN");
  }
  
  function loadsLanguage(lang){
    /*fills all the span tags with class=lang pattern*/ 
    $('span[class^="lang"]').each(function(){
      var LangVar = (this.className).replace('lang-','');
      var Text = window["WORDS_"+lang][LangVar];
      $(this).text(Text);     
    });
  }
