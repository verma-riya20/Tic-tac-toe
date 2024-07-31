let turn ="X";
let gameover=false;

//function to change turn
const changeturn=()=>{
    return turn=="X" ? "0" :"X"
}

//function to get the winner
const checkwin=()=>{
    let insidetext=document.getElementsByClassName('text')
    let win=[
        [0,1,2],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e => {
        if((insidetext[e[0]].innerText!=='') && (insidetext[e[1]].innerText===insidetext[e[0]].innerText )&&(insidetext[e[1]].innerText===insidetext[e[2]].innerText)){
              document.querySelector('.info').innerText=insidetext[e[0]].innerText +"won"
              gameover=true;
              document.querySelector('.gif').style.width="200px"
        }
        if(gameover) return;
    });

}

//Game Logic

    let boxes=document.querySelectorAll('#box')
    Array.from(boxes).forEach(element => {
        let insidetext=element.querySelector('.text')
        element.addEventListener('click',()=>{
            if(insidetext.innerText===''){
                insidetext.innerText=turn;
                turn=changeturn()
                checkwin()
                if(!gameover){
                document.getElementsByClassName("info")[0].innerText='Turn for  ' + turn;
                }
            }
        })
    
    
        
    });
    //reset
    const reset=document.querySelector('.reset')
    reset.addEventListener('click',()=>{
        let insidetext=document.querySelectorAll('.text')
        Array.from(insidetext).forEach(element => {
            element.innerText=" "
            
        });
    })
