
const Profile = () => {
    return(
        <>
        <div className='profile'>
        <h3>Profile</h3>
        <div className='profile-detail'>
          <div className='detail'>
            <h4>Basic Information</h4>
            <div className='row'>
              <div className='row-title'>Doğum Tarihi</div>
              <div className='row-content'>24.11.1111</div>
            </div>
            <div className='row'>
              <div className='row-title'>İkamet Şehri</div>
              <div className='row-content'>Ankara</div>
            </div>
            <div className='row'>
              <div className='row-title'>Eğitim</div>
              <div className='row-content'>Hacettepe Ünv. Biyoloji</div>
            </div>
            <div className='row'>
              <div className='row-title'>Durumu</div>
              <div className='row-content'>Lisans 2016</div>
            </div>
            <div className='row'>
              <div className='row-title'>Tercih Ettiği Rol</div>
              <div className='row-content'>Frontend, UI</div>
            </div>
          </div>
          <div className='detail'>
            <div className='detail-img'></div>
          </div>
          <div className='detail'>
          <h4>About Me</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      </>
    )
}

export default Profile;