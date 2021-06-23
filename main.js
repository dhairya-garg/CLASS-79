
var name_of_the_array=[];

function submit(){

    var name_1=document.getElementById("name_of_student_1").value
    var name_2=document.getElementById("name_of_student_2").value
    var name_3=document.getElementById("name_of_student_3").value
    var name_4=document.getElementById("name_of_student_4").value

    name_of_the_array.push(name_1,name_2,name_3,name_4)

    console.log(name_of_the_array);

    document.getElementById("display_name").innerHTML=name_of_the_array
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sorting_button").style.display="inline-block"
}

function sorting(){

    name_of_the_array.sort();
document.getElementById("display_name").innerHTML=name_of_the_array

}