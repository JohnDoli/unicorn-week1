


function Header() {
    
    return(
        <header>
            <h1 style={styles.h1}>Hello world</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header


const styles = {
    h1: {
        fontFamily: "Consolas, Arial",
    }
}