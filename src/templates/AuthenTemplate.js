import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import { Route,Redirect } from 'react-router-dom';
import whiteLogo from '../assets/images/white-logo.svg';
function AuthenLayout(props) {
  return (
    <div className="authenpage">
      <div className="text-center authenpage__logo"><img src={whiteLogo} /> <span>Vetspire</span></div>
      <div className="authenpage_content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default function AuthenTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        const user = props.userInfo;
        return (user != null) ? (
          <Redirect exact from="/" to="/patients" />
        ) :
          (
            <AuthenLayout>
              <Component {...propsComponent} />
            </AuthenLayout>
          );
      }}
    />
  )
}
