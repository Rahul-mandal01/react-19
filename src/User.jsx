const User = ({displayName, name, getUser}) => {
    return(
        <>
            <button onClick={() => displayName(name)} >Display Name</button>
            <button onClick={() => getUser()} >Get User</button>
            <br/> <br/>
        </>
    )
}

export default User;