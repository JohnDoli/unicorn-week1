import styles from "./Button.module.css"

function Button() {

    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count++
            console.log(`${name} clicked me ${count} times`)
        }
        else {
            console.log(`${name} stop clicking me`)
        }
    }

    const handleClick2 = (e) => {
        e.target.textContent = "AU!! 🤕"
    }

    return(
        <button className={styles.button} onClick={() => handleClick("Bohouš")} onDoubleClick={(e) => handleClick2(e)}>click me!</button>
    );
}

export default Button