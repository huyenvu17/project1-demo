import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';
import Header from '../components/Header';

function DefaultLayout(props){
  return (
    <div className="defaultpage">
      {props.children}
      <Footer />
    </div>
  )
} 
export default function DefaultTemplate({Component, ...props}) {
  return (
    <Route 
      {...props}
      render={(propsComponent) => (
        <DefaultLayout>
          <Component {...propsComponent} />
        </DefaultLayout>
      )}
    />
  )
}
