import profilePic from './assets/pfp.jpeg'

function Card() {
    return (
        <div className = "card">
            <img className = "card-image" src = {profilePic} alt = "Profile Picture" height = "100px" ></img>
            <h2 className = "card-title">Shubham Singh Negi</h2>
            <p className = "card-text" > 3rd Year Undergrad at Anurag University and play </p>
        </div>
    );
}

export default Card;