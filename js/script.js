const $arrList = [];
const $removedSkills = [];
let $newSkill;

// const $closeButton = document.querySelector('tr button')
// $closeButton.setAttribute('style', 'float: left; padding-right: 1.5em;')

$(document).ready(function (){
  $('#add-skill').click(function(evt){

    evt.preventDefault();
    $newSkill = document.querySelector('input').value;
 


    console.log($newSkill)

    if($newSkill == '' || $newSkill == ' '){
      return alert('Please enter a skill');
    }
    
    if($newSkill.length > 0 && !($arrList.includes($newSkill +'\n×'))){
      const $addedSkills = 
      $(`<tr>
            <td>
            <button 'type="button" class="close btn btn-sm btn-danger" aria-label="Close"><span class="btn btn-sm btn-danger" id="remove-skill" aria-hidden="true">×</span>
            </button>
            ${$newSkill}
            <hr>
            </td>
        </tr>`);
  
      $('.table tbody').append($addedSkills)
      $arrList.push($newSkill +'\n×')
      $removedSkills.push($newSkill +'\n×')
      document.querySelector('input').value = '';
      // console.log(arrList.indexOf($newSkill))
      // console.log(arrList)
    }else {
      return alert('Skill already entered, please add another skill that is not on the list');
    }
  });

  // for(let i = 0; i < $arrList.length; i++){
  //   const $skillsTd = 
  //   $(`<td><button type="button" class="close" aria-label="Close"><span id="remove-skill" aria-hidden="true">×</span>
  //   </button></td>`);
    
    
    
  //   document.querySelector('td').;
  //   $('.table tbody').append($addedSkills);
  // }
 

  $('#skills tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(500, function() {
      // console.log($(this).closest('tr'));
      // console.log($(this).closest('tr')[0].textContent);
      $(this).remove()
      $arrList.splice($removedSkills.indexOf($newSkill), 1)
      // console.log($arrList)
      // console.log($removedSkills)
      // console.log($arrList.indexOf($newSkill))
    });
  });
  });



