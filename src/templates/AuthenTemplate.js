import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import whiteLogo from '../assets/images/white-logo.svg';
function AuthenLayout(props){
  return (
    <div className="authenpage">
      <div className="authenpage_content">
        <div className="text-center authenpage__logo"><img src={whiteLogo} /> <span>Vetspire</span></div>
        {props.children}
        <Footer />
      </div>
    </div>
  )
} 
export default function AuthenTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent) => (
        <AuthenLayout>
          <Component {...propsComponent} />
        </AuthenLayout>
      )}
    />
  )
}
