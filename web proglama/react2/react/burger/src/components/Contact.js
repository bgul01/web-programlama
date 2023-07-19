import React from 'react';
import BannerImage from '../assets/banner.png'
import '../styles/Contact.css';

export const Contact = () => {
  return <div className='contact'>

    <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}} >


    </div>

    <div className='rightSide'>

      <h1>Bizimle iletişime geçin</h1>

      <form className='form'>
 <lab>AD SOYAD</lab>
<input type="text" name="name" placeholder="adını soyadını gir"/>

<lab>email</lab>
<input type="email" name="email" placeholder="E-mailiniz giriniz."/>
<lab>MESAJINIZ</lab>
<textarea  name="message" placeholder="mesajınız..."/>

      </form>

    </div>
  </div>;
};
