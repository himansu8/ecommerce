import React from 'react'
import Layout from '../../components/layout/Layout'
import UserSideBar from '../../components/layout/UserSideBar'
import { useAuth } from '../../context/auth'

function Dashboard() {
  const [auth] = useAuth()
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
    <div className="container-flui m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <UserSideBar />
        </div>
        <div className="col-md-9">
          <div className="card w-75 p-3">
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.address}</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}

export default Dashboard