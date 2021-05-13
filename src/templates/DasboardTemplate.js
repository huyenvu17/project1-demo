import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';

function DashboardLayout(props){
  return (
    <div className="mainpage">
      <Header />
      {props.children}
      <Footer />
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
