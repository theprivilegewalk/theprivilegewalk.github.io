var explainnotes = '<div class="explain-notes">Scores range from -34 to 25.<br/>If your score is above 12, you are above avareage.<br/>If your score is -20 and below, you are among the least privileged.</div>'
var questions = ['Have you ever work part-time from 13 - 21 years old?',                                                                    //1
                 'Have you completed a tertiary education (diploma / degree)?',                                                                                  //2
                 'Do you have an outstanding student loan or study debt?',                                                                  //3
                 'Have you ever been awarded a bursary for needy students?',                                                                //4
                 'During primary/secondary school, do you have more than two tutors at any point in time?',                                 //5
                 'Have you ever been the only person of your race/gender/sexual orientation in a classroom or workplace setting?',          //6
                 'Are you ever a receipent of The Straits Times pocket money fund or any chartiy?',                 //7
                 'Are you a Singaporean female and/or eligible for protection under the Woman Charter?',            //8
                 'If you are divorced, are you able to afford the alimony? (Answer yes if not applicable)',         //9
                 'Have you have ever felt unsafe walking alone at night?',                                          //10
                 'Have you ever felt like there was NOT adequate or accurate representation of your racial group, sexual orientation group, gender group, in the media?', //11
                 'Do you have a blue CHAS card?',                                                                   //12
                 'Have you ever went on a family vacation?',                                                        //13
                 'Have you traveled outside of South East Asia?',                                                   //14
                 'Do you ever felt socially obliged by your friends to eat at a place out of your budget',          //15
                 'Do you live in a single parent family?',                                                          //16
                 'Does you/your family have private health insurance?',
                 'Do you/your family require public financial assistance?',
                 'Are you/your family a grassroots member?',
                 'Have you/your family ever employ a maid/help?',
                 'Have you/your siblings been placed in childcare?',                                                //21
                 'Do you/your family have any investments/savings?',
                 'Have you/your family ever owe more than a year\'s payment/rental for your home?',
                 'Does your parents ever have to work more than two jobs to supplement the family expenses?',
                 'Have you been the victim of physical violence based on your gender, ethnicity, age or sexual orientation?',
                 'Have you been the victim of family violence, abuse?',                                            //26
                 'Have you ever been a discharged bankrupt due to family circumstances?',
                 'Do you/your family own one or more vehicle(car, vans, motorcycles) for personal use?',
                 'Have you/your family ever need to worry about the next meal?',
                 'Is English your first language?',
                 'Are you comfortable in speaking your native language in your community?',                       //31
                 'Does your work holidays coincide with religious holidays that you celebrate?',
                 'Have you ever been rejected in a job interview because of your race/skin colour?',
                 'Do you feel comfortable discussing the culture which you identify with, without fear, oppression or violence?',   //34
                 'Are you a new citizen of Singapore and previously from these countries; People Republic of China, India, Philippines, Laos, Vietnam, Cambodia, Indonesia, Thailand?',
                 'Do you have to serve National Service for the full term of 2 years and subsequently liable for NSMen commitments?'];
             
var scores = [{'yes': -1, 'no': 1}, //1
              {'yes': 1, 'no': -1}, //2
              {'yes': -1, 'no': 0}, //3
              {'yes': -1, 'no': 0}, //4
              {'yes': 1, 'no': 0},  //5
              {'yes': -1, 'no': 0}, //6
              {'yes': -1, 'no': 0}, //7
              {'yes': 1, 'no': 0},  //8
              {'yes': 0, 'no': -1}, //9
              {'yes': -1, 'no': 0}, //10
              {'yes': -1, 'no': 0}, //11
              {'yes': -1, 'no': 1}, //12
              {'yes': 1, 'no': 0}, //13
              {'yes': 1, 'no': 0},     //14
              {'yes': -1, 'no': 0},     //15
              {'yes': -1, 'no': 1},     //16
              {'yes': 1, 'no':  -1},   //17
              {'yes': -1, 'no': 0},   //18
              {'yes': 2, 'no': 0},   //19
              {'yes': 1, 'no': 0},   //20
              {'yes': 1, 'no': 0},   //21
              {'yes': 1, 'no': -1},   //
              {'yes': -2, 'no': 1},   //
              {'yes': -2, 'no': 1},   //
              {'yes': -2, 'no': 0},   //
              {'yes': -2, 'no': 0},   //26
              {'yes': -2, 'no': 1},   //  
              {'yes': 1, 'no': -1},   //
              {'yes': -1, 'no': 1},   //
              {'yes': 1, 'no': -1},   //  
              {'yes': 1, 'no': -1},   //31
              {'yes': 1, 'no': -1},   //
              {'yes': -1, 'no':0},   //
              {'yes': 1, 'no': -1},   //
              {'yes': 2, 'no': 0},   //
              {'yes': -2, 'no': 2}];  //36

function createQuestion(container){
    var sno, sectionlabel, questionlabel, answerlabel;
    for(var i=0; i < questions.length; i++){
        sno = i+1;
        sectionlabel = '<div class="row qsec">';
        questionlabel = '<div class="col-md-5"><div class="question-label">' + sno + ". " + questions[i] + '</div></div>';
        answerlabel = '<div class="col-md-3"><input type="checkbox" id="qn-checkbox-'+i+'" name="qn-checkbox-'+i+'" class="answer-switch" checked /></div>';
        sectionlabel += questionlabel + answerlabel;
        sectionlabel += '</div>';
        $(container).append(sectionlabel);
    }
}

function initAnswers(){
    for(var i=0; i < questions.length; i++){
        $("#qn-checkbox-"+i).bootstrapSwitch({
            'onText' : 'Yes',
            'offText' : 'No',
            'offColor' : 'danger'
        });
    }
}

function calculateScore(){
    var score = 0;
    for(var i=0; i < questions.length; i++){
        if($("#qn-checkbox-"+i).prop('checked')){
           score += scores[i].yes;
        }else{
           score += scores[i].no;
        }
    }
    $('#results-tab').html('<div class="scoreboard">Your privilege score is ' + score + '</div>');
    $('#results-tab').append(explainnotes);
    $("#scoreModal").modal('show');
}

function init() {
    $('#loader').addClass('hide');
    createQuestion($('#contentarea'));
    initAnswers();
    $('#content').removeClass('hide');
}

$(document).ready(function () {
    init();
});