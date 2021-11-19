import './Header.css'
const HeaderComponent = ({
    navigationChangeHandler

}) => {
   

    return (
        <header >
          <nav>
            <a href="/">Kanban Boards</a>
            <ul>
    
                <li><a href="/notes/my-notes/">My Notes</a></li>
              
                <li><a href="/auth/logout">Logout</a></li>

                <li><a href="/auth/login">Login</a></li>
                <li><a href="/auth/register">Register</a></li>
              
            </ul>
        </nav>  
        
        </header>


    );
}

export default HeaderComponent;