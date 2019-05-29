function ThemeStartbootstrapBusiness_casual(){
  this.navbar_set_active = function(){
    $('li.active').removeClass('active');    
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
  }
  this.store_set_time = function(){
    $(".list-hours li").eq(new Date().getDay()).addClass("today");    
  }
}
var ThemeStartbootstrapBusiness_casual = new ThemeStartbootstrapBusiness_casual();
ThemeStartbootstrapBusiness_casual.navbar_set_active();
ThemeStartbootstrapBusiness_casual.store_set_time();
