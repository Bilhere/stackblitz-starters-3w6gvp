import React from 'react';
import './style.css';

export default function App() {
  const userName="Vırdınlı"
  const users=["Frontend öğrencisi"]
  const isActive= true
  return (
    <div>
      <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>Billur {userName}</h1>
  <h5>Bloğuma Hoş Geldiniz</h5>
</div>

<div className="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"lightblue":"purple"}`}}>Hakkımda</h3>
      <p>Yazılıma duyduğum ilgi nedeniyle katıldığım code 16 temel seviye yazılım akademisi projesi olarak bu blog sitesini tasarladım. Gelecekte daha büyük projelerde görüşmek üzere.  </p>
      <img src="https://picsum.photos/seed/picsum/200/300" alt="" width="200px" height="300px"style={
        {padding:"4px", margin:0 , borderRadius:"8px", border:"1px solid #bdc8c2"}}/>
    </div>
    <div class="col-sm-4">
      <h3 style={{backgroundColor:`${isActive?"lightgreen":"purple"}`}} >Hobilerim</h3>
      <p> Dizi izlemekten ve spor yapmaktan hoşlanırım. </p>
      <img src="https://picsum.photos/id/237/200/300" alt="" width="200px" height="200px" style={
        {padding:"4px", margin:0, borderRadius:"8px", border:"1px solid #bdc4c9"}}/>
      </div>
    </div>
  </div>
      </div>
  );
}



