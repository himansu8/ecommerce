import React from 'react'
import Layout from '../../components/layout/Layout'
import UserSideBar from '../../components/layout/UserSideBar'

function Profile() {
  return (
    <Layout title={"Your Profile"}>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <UserSideBar />
        </div>
        <div className="col-md-9">
          <h1>Your Profile</h1>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Profile