function huiswerkMaken(vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(function () { }, 2000);
    callback();
};

function klaarMetHuiswerk() {
    console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};

huiswerkMaken(`wiskunde`, klaarMetHuiswerk);