
const Profile = () => {
  return (
    <div>
      <div className="container-profile mt-5">
        <div className="columns is-multiline">
            <div className="column is-one-quarter">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">John Smith</p>
                                <p className="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
