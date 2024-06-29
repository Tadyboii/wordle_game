


function LogoutPanel(){

    const handleOnClick = () => {
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('isLoggedIn')
        window.location.href = 'http://localhost:8080/logout'
    }

    return (
        <button className='logout-button' onClick={handleOnClick}>
            Logout
        </button>
    )
}

export default LogoutPanel