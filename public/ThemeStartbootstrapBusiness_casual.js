function ThemeStartbootstrapBusiness_casual(){
  this.navbar_set_active = function(){
    $('li.active').removeClass('active');    
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
  }
}
var ThemeStartbootstrapBusiness_casual = new ThemeStartbootstrapBusiness_casual();
ThemeStartbootstrapBusiness_casual.navbar_set_active();
