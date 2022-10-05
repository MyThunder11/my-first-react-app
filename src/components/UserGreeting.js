const UserGreeting = () => {
    const isLoggedIn = true;
    return ( <h1>Welcome {isLoggedIn ? 'Amine' : 'Guest' }</h1> );
}
 
export default UserGreeting;