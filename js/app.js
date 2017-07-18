'use strict'


const $viewFish = $('#view-fish');
const $addFishBtn = $("#add-fish-info");
const $fishInfoForm = $("#fish-info-form");
const $cancelBtn = $("#cancel");
const $submitFishBtn = $("#submit-fish");
const $fishTable = $("#view-fish-table");
const $table = $('#table');
const $returnBtn = $('#return-btn'); 
const $editBtn = $("#edit-btn"); 
const $removeBtn = $("#remove-btn");
const $finishBtn = $("#finish-btn");





$addFishBtn.click(function(){
    $addFishBtn.fadeOut(500);
    $fishInfoForm.fadeIn(600);
});

$submitFishBtn.click(function(){
    $fishInfoForm.fadeOut(100);
    $viewFish.fadeOut(100);
    $fishTable.fadeIn(600);
    $editBtn.fadeIn(500);
});

$cancelBtn.click(function(){
    $fishInfoForm.fadeOut(500);
    $viewFish.fadeIn(600);
     $addFishBtn.fadeIn(600);
});

$viewFish.click(function(){
    $addFishBtn.fadeOut(200);
    $fishInfoForm.fadeOut(200);
    $viewFish.fadeOut(200);
    $fishTable.fadeIn(1500);
    $editBtn.fadeIn(500);
});

$returnBtn.click(function(){
    $fishTable.fadeOut(100);
    $viewFish.fadeIn(800);
    $removeBtn.fadeOut(100);
    $finishBtn.fadeOut(100);
    $("tr td:first-child").fadeOut(100);
    $(".dummy-space").remove();
    $addFishBtn.fadeIn(500);
});

$editBtn.click(function(){
        $(".header-row").prepend("<th class='dummy-space'></th>");
        $("tr td:first-child").fadeIn(500);
        $editBtn.fadeOut(100);
        $removeBtn.fadeIn(500).css('display','block');
        $finishBtn.fadeIn(500).css('display','block');

});

$removeBtn.click(function(){
    $("tr input").each(function(){

        
        if(this.checked){

            $(this).parent().parent().remove();
        }
    });
});

$finishBtn.click(function(){
    $removeBtn.fadeOut(200);
    $finishBtn.fadeOut(200);
    $(".header-row th:first-child").remove();
    $("tr td:first-child").fadeOut(200);
    $editBtn.fadeIn(500);
});



$submitFishBtn.on('click', function(event){
        //this count from a closure below
        count.addOneRowId();
          
        let $speciesType = $('#species').val(); 
        let $length = $('#length').val(); 
        let $lbs = $('#weight').val(); 
        let $oz = $('#ounces').val(); 

        
        let $rowInfo = ''; 
  
         $rowInfo += 

       `      
        
        <tr class="${$speciesType}" name="${count.getAmt()}">
          <td><input  type="checkbox"/ for="${count.getAmt()}"></td>
          <td>${$speciesType}</td>
          <td>${$length} inches</td>
          <td>${$lbs} lbs. ${$oz} oz.</td> 
        </tr> 
        `;

      
        $table.children().append($rowInfo);
        
});

function RowId(){

    let rowId = 0;

    this.addOneRowId = function(){
        rowId ++;
    }

    this.getAmt = function(){
            return rowId; 
    }

}

var count =  new RowId(); 



