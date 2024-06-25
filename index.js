// code your solution here
function saturdayFun(funActivity='roller-skate') {
  return `This Saturday, I want to ${funActivity}!`
}

const mondayWork = function(work='go to the office') {
  return `This Monday, I will ${work}.`
}

function wrapAdjective(str='*') {
  return function(param='special') {
    return `You are ${str}${param}${str}!`
  }
}