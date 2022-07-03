import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {Component, Suspense, lazy } from 'react';
import $ from 'jquery';
import Layout from "./pages/Layout";
import './global.scss';
const MainPage = lazy(() => import('./MainPage'));
const BuyPacket = lazy(() => import('./pages/BuyPacket'));
const MyWallet = lazy(() => import('./pages/MyWallet'));

class App extends Component {
  componentDidMount() {
    $('select').each(function(){
      var $this = $(this), numberOfOptions = $(this).children('option').length;
    
      $this.addClass('select-hidden'); 
      $this.wrap('<div class="select"></div>');
      $this.after('<div class="select-styled"></div>');
  
      var $styledSelect = $this.next('div.select-styled');
      $styledSelect.text($this.children('option').eq(0).text());
    
      var $list = $('<ul />', {
          'class': 'select-options'
      }).insertAfter($styledSelect);
    
      for (var i = 0; i < numberOfOptions; i++) {
          $('<li />', {
              text: $this.children('option').eq(i).text(),
              rel: $this.children('option').eq(i).val()
          }).appendTo($list);
          //if ($this.children('option').eq(i).is(':selected')){
          //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
          //}
      }
    
      var $listItems = $list.children('li');
    
      $styledSelect.click(function(e) {
          e.stopPropagation();
          $('div.select-styled.active').not(this).each(function(){
              $(this).removeClass('active').next('ul.select-options').hide();
          });
          $(this).toggleClass('active').next('ul.select-options').toggle();
      });
    
      $listItems.click(function(e) {
          e.stopPropagation();
          $styledSelect.text($(this).text()).removeClass('active');
          $this.val($(this).attr('rel'));
          $list.hide();
          //console.log($this.val());
      });
    
      $(document).click(function() {
          $styledSelect.removeClass('active');
          $list.hide();
      });
  
  });
  
	$(document).mouseup( function(e){ // событие клика по веб-документу
		var div = $( ".search" ); // тут указываем ID элемента
		if ( !div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
                
                    $(".search-icon").attr("src", 'img/icon/search.svg');

		}
	});

  $(".search").on("click", function() {
    $(".search-icon").attr("src", 'img/icon/search-active.svg');
});

  }
  render() {
    return (
      <Router>
        <div>
        <Layout>
            <Routes>
              

              
                <Route path="/" element={<MainPage />} />
                <Route path="/packets" element={<BuyPacket />} />
                <Route path="/myWallet" element={<MyWallet />} />
                
            </Routes>
            </Layout>
        </div>
    </Router>
    );
  }
}


export default App;