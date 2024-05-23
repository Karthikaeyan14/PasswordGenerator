const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const passwordLengthElement=document.querySelector('#length');
const numberElement=document.querySelector("#number");
const captialElement=document.querySelector("#captial");
const smallElement=document.querySelector("#small");
const symbolElement=document.querySelector("#symbol");
const frm=document.querySelector("#frm");

btnCopy.addEventListener('click',async()=>{
    const pass=outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("copied to clipboard")
    }else{
        altter("There is no passoword to copy")
    }

});

function generateRandomChar(min,max){
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function captialValue(){
    return generateRandomChar(65,90);
}

function smallValue(){
    return generateRandomChar(97,122);
}

function numberValue(){
    return generateRandomChar(48,57);
}
function symbolvalue(){
    const symbol="!@#$%^&*()-_+={}[]?/";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

const functionArray=[
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:captialElement,
        fun:captialValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:symbolElement,
        fun:symbolvalue
    }
];


frm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const limit=passwordLengthElement.value;

    let genderatedPassword="";
    const funArray=functionArray.filter(({element})=>element.checked);
   
    for (i=0;i<limit;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        genderatedPassword+=letter;

}

 outputElement.value=genderatedPassword;
})
