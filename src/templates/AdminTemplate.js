import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';

function AdminLayout(props){
  return (
    <div className="mainpage">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
} 
export default function AdminTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent) => (
        <AdminLayout>
          <Component {...propsComponent} />
        </AdminLayout>
      )}
    />
  )
}
