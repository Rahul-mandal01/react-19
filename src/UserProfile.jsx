import User from "./User";
import style from "./css/userProfile.module.css";

const UserProfile = () => {
  return (
    <>
      <h1 className={style.heading}>User Profile</h1>
      <div className={style.container}>
        {User.map((user, index) => (
          <div key={index} className={style.userCard}>
            <img src={user.image} className={style.imgStyle} />
            <div className={style.textWrap}>
              <h4>{user.name}</h4>
              <p>{user.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserProfile;
