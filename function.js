function getResult(){
    var names1 = document.getElementById('team1_input').value.split('\n')
    var names2 = document.getElementById('team2_input').value.split('\n');

    if(names1.length > 11 || names2.length > 11){
        alert("Number of players have to be no more than 11");
    }

    for(var i = 0;i < names1.length;i++){
        //console.log(names1[i]);
    }

    for(var i = 0;i < names2.length;i++){
        //console.log(names2[i]);
    }

    var score1 = parseInt(document.getElementById("score1").value);
    var score2 = parseInt(document.getElementById("score2").value);
    

    if((score1 + score2) >7){
        alert("The combined number of goals cannot be greater than 7.");
    } else {
        if(score1>score2){
            let result = "Team 1 wins. With possible combnations:   ";
            result += print_all_sum(score1).join(" and ");

            result += "   Team 2 loses and their possible combinations are:   "
            result += print_all_sum(score2).join(" and ");
            document.getElementById("score_list").innerHTML = result;

            console.log("Winners are:");
            for(var i=0; i<names1.length;i++){
                console.log(names1[i]);
            }
            
        } else {
            let result = "Team 2 wins. With possible combnations:   ";
            result += print_all_sum(score2).join(" and ");

            result += "   Team 1 loses and their possible combinations are:   "
            result += print_all_sum(score1).join(" and ");
            document.getElementById("score_list").innerHTML = result;
        
            console.log("Winners are:");
            for(var i=0; i<names2.length;i++){
                console.log(names2[i]);
            }
        }
    }

}


let print_all_sum_rec = function(target, current_sum, start, result, output) {
    if (current_sum === target) {
        output.push(result.slice());
    }

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            result.push(i);
            print_all_sum_rec(target, temp_sum, i, result, output);
            result.pop();
        } else {
            return;
        }
    }
};

let print_all_sum = function(target) {
    let output = [];
    let result = [];
    print_all_sum_rec(target, 0, 1, result, output);
    return output;
};