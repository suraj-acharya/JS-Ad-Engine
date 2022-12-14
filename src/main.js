import styles from "./styles/index.module.css";
import {COLORPALETTE,ALERT_MESSAGE,BACKGROUNDTIMERCOUNT} from './constants';
import {checkPropertyCompatibility, changeBackgroundColor} from './helpers';

const stickyElement = document.createElement("footer");
stickyElement.classList.add(styles?.footer);
document.body.appendChild(stickyElement);

function addListenerForPageState(key,methodName) {
    return document.addEventListener(methodName, handlePageStateChange(key), false);
}

function handlePageStateChange(key) {
    let timer;
    return (e) => {
        if(document[key] !== "hidden") {
            changeBackgroundColor(stickyElement, COLORPALETTE);
            timer = setInterval(changeBackgroundColor.bind(this,stickyElement, COLORPALETTE), BACKGROUNDTIMERCOUNT);
        } else clearInterval(timer);
    };
}

(function createStickyElement() {
    const {key,isPresent,methodName} = checkPropertyCompatibility("visibilityState", "VisibilityState", "visibilitychange");
    if(!isPresent) {
        alert(ALERT_MESSAGE);
        return;
    }
    handlePageStateChange(key)(null); // Called on Initial Load
    return addListenerForPageState(key,methodName);
})();