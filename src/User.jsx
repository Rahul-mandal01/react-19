const User = ({data}) => {
    return(
        <div style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#f0f0f0",
            width: "400px", 
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <h3>Name: <span>{data.name}</span> </h3>
            <h3>Age: <span>{data.age}</span> </h3>
            <h3>City: <span>{data.city}</span> </h3>
        </div>

    )
}

export default User;