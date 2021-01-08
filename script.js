const draggables= document.querySelectorAll('.demand')
const containers = document.querySelectorAll('.exBox')
const demandBox = document.getElementById('demandBox')
var rightCount = 0
const ansCheckerBox = [
  {id:'demand0', riBox: 'boxHead0'},
  {id:'demand1', riBox: 'boxHead0'},
  {id:'demand2', riBox: 'boxHead0'},
  {id:'demand3', riBox: 'boxHead1'},
  {id:'demand4', riBox: 'boxHead1'},
  {id:'demand5', riBox: 'boxHead2'},
  {id:'demand6', riBox: 'boxHead2'}
]


function getZindex(min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min;
}

function zIndexRand(){
  for(i=0; i < 7; i++){
    document.getElementById('demand' + i).style.zIndex= getZindex(1000,1007)
  }
}

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })

})

containers.forEach(container => {
  container.addEventListener('dragover', () => {
    const draggable = document.querySelector('.dragging')
    container.appendChild(draggable)
    draggable.classList.add('positioned')
  })
})

function control(){
  const answers = document.querySelectorAll('.positioned')
  answAr = Array.from(answers) //array of chosen answers, answ can be located with .id
  contAr = Array.from(containers) // array of answer containers, has a fixed number of 3
  for(e=0; e < contAr.length; e++){
    const listChild = Array.from(contAr[e].childNodes) //array of nodes into any container
    for(i=0; i <= listChild.length + 1; i++){
      var checked = listChild.find(element => element.id == 'demand' + i)
      if (checked != undefined){
        curAns = ansCheckerBox.find(element => element.id == checked.id)
        if (curAns.riBox == checked.offsetParent.id){
          const rAns = document.getElementById(checked.id)
          rAns.classList.add('rightAns')
          rightCount =  rightCount + 1
        }else{
          const rAns = document.getElementById(checked.id)
          rAns.classList.add('wrongAns')
        }
      }
    }
  }
  console.log(rightCount)
  if(rightCount == 7){
    document.getElementById("rightBox").style.visibility = "visible"
    document.getElementById('rightTitle').innerHTML = "Fantastico"
    document.getElementById('rightDesc').innerHTML = "Tutto giusto!"
  }else{
    document.getElementById("rightBox").style.visibility = "visible"
    document.getElementById('rightTitle').innerHTML = "Puoi fare di meglio!"
    document.getElementById('rightDesc').innerHTML = "Hai fatto " + rightCount + " risposte giuste su 7"
  }
}

restart.onclick = () => {
  location.reload()
}

function startingEx(){
  document.getElementById("start-notification").style.display = "none"
}
