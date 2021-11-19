import './Header.css'
const HeaderComponent = ({
    navigationChangeHandler

}) => {
    const onNavClick = (e) => {
        e.preventDefault();

        if (e.target.tagName == 'A') {
            let url = new URL(e.target.href);
            navigationChangeHandler(url.pathname);
        }
    };

    return (
        <header onClick={onNavClick}>
          <nav>
            <a href="/">Kanban Boards</a>
            <ul>
    
                <li><a href="/view-my-notes">My Notes</a></li>
              
                <li><a href="/auth/logout">Logout</a></li>

                <li><a href="/auth/login">Login</a></li>
                <li><a href="/auth/register">Register</a></li>
              
            </ul>
        </nav>  
        
        </header>


    );
}

export default HeaderComponent;