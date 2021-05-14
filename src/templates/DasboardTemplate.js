import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';
import { Layout } from 'antd';

function DashboardLayout(props){
  return (
    <div className="mainpage">
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout className="site-layout">
        {props.children}
        <Footer />
      </Layout>
    </Layout>

    </div>
  )
} 
export default function DasboardTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent) => (
        <DashboardLayout>
          <Component {...propsComponent} />
        </DashboardLayout>
      )}
    />
  )
}
