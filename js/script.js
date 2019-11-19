const $arrList = [];
const $removedSkills = [];
let $newSkill;

$(document).ready(function (){
  $('#add-skill').click(function(evt){

    evt.preventDefault();
    $newSkill = document.querySelector('input').value;
 


    console.log($newSkill)
    
    let $formInvld = document.querySelector('.needs-validation');

    if($formInvld.checkValidity() === false && $newSkill == '' || $newSkill == ' '){
      evt.stopPropagation();
      return alert('Please enter a skill');
    } else {
      $formInvld.classList.add('was-validated');
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
    }else {
      return alert('Skill already entered, please add another skill that is not on the list');
    }
  });

  $('#skills tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(500, function() {
      $(this).remove()
      $arrList.splice($removedSkills.indexOf($newSkill), 1)
    });
  });
  });



