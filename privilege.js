var questions = ['Have you ever work part-time from 13 - 21 years old?',
                 'Have you completed a diploma / degree?',
                 'Do you have a student loan or study debt?',
                 'Have you ever been awarded a bursary?',
                 'During primary/secondary school, do you have more than two tutors at any point in time?',
                 'Have you ever attended primary/secondary school with people you felt were like yourself?',
                 'Are you ever a receipent of The Straits Times pocket money fund or any chartiy?',
                 'Are you a Singaporean female and/or eligible for protection under the Woman Charter?',
                 'If you are divorced, are you able to afford the alimony?',
                 'Have you have ever felt unsafe walking alone at night?',
                 'Do you feel good about how your identified culture is portrayed by the media?',
                 'Do you have a blue CHAS card?',
                 'Are you eligible for the full amount of Special CPF Housing Grant (SHG) of $40,000?',
                 'Have you live in a rental flat for more than a year?',
                 'Do you live in a single parent family?',
                 'Does you/your family have health insurance?',
                 'Do you/your family require public financial assistance?',
                 'Are you/your family a grassroots member?',
                 'Have you/your family ever employ a maid/help?',
                 'Have you/your siblings been placed in childcare?',
                 'Do you/your family have any investments/savings?',
                 'Have you/your family ever owe more than a year\'s payment/rental for your home?',
                 'Does your parents ever have to work more than two jobs to supplement the family expenses?',
                 'Have you been the victim of physical violence based on your gender, ethnicity, age or sexual orientation?',
                 'Have you been the victim of family violence, abuse?',
                 'Have you ever been a discharged bankrupt due to family circumstances?',
                 'Do your/your family own one ore more vehicle(car, lorries, motorcycles)?',
                 'Have you/your family ever need to worry about the next meal?',
                 'Is English your first language?',
                 'Are you comfortable in speaking your native language in your community?',
                 'Does your work holidays coincide with religious holidays that you celebrate?',
                 'Have you ever been rejected in an interview or suspended due to your race?',
                 'Do you feel comfortable discussing the culture which you identify with, without fear, oppression or violence?',
                 'Are you a new citizen of Singapore and previously from these countries; People Republic of China, India, Philippines, Laos, Vietnam, Cambodia, Indonesia, Thailand?',
                 'Do you have to serve National Service for the full term of 2 years and subsequently liable for NSMen commitments?'];

function createQuestion(container){
    var sectionlabel, questionlabel, answerlabel;
    for(var i=0; i < questions.length; i++){
        sectionlabel = '<div class="row">';
        questionlabel = '<div class="col-md-5"><div class="question-label">' + questions[i] + '</div></div>';
        answerlabel = '<div class="col-md-3"><input type="checkbox" id="qn-checkbox-'+i+'" name="qn-checkbox-'+i+'" checked /></div>';
        sectionlabel += questionlabel + answerlabel;
        sectionlabel += '</div>';
        $(container).append(sectionlabel);
    }
}

function init() {
    $('#loader').addClass('hide');
    createQuestion($('#content'));
    $('#content').removeClass('hide');
}

$(document).ready(function () {
    init();
});