const log = document.querySelector('#log');
const codeBlock = document.querySelector('code');
export function clearPage(){
    log.innerHTML = "";
    codeBlock.innerHTML = "";
}