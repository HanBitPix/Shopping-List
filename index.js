'use strict';

$(document).ready(function(){
    
  $('#js-shopping-list-form').on('click', 'button', function(event){
    event.preventDefault();
    //1 User types value and save value
    let newItem = $('.js-shopping-list-entry').val();
    
    // HTML for new item
    let newItemHtml = `
    <li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
       <button class="shopping-item-toggle">
          <span class="button-label">check</span>
       </button>
        <button class="shopping-item-delete">
         <span class="button-label">delete</span>
       </button>
      </div>
    </li>`;
    
    //2 When user "add item" shows the new item 
    $(this).closest('#js-shopping-list-form').siblings('.shopping-list').append(newItemHtml);
  });

  //3 User is able to check off and on items  
  $('ul').on('click','.shopping-item-toggle',function(){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  //4 User is able to delete items
  $('ul').on('click','.shopping-item-delete',function(){
    $(this).closest('li').remove();
  });
 
});
