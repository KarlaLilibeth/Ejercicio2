let calificaciones=[50,80,9,75,45,90];
let calAprobatoria=70;
let i=0
calificaciones.length;
for(;i<calificaciones.length;i++){
if(calificaciones[i]>=calAprobatoria){
    console.log(calificaciones[i],"Aprueba");
}
else{
    console.log(calificaciones[i],"Reprueba");
}
}