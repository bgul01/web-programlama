import React from 'react';
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css';

export const About = () => {
  return <div className='about'>
    <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}></div>
  
  
    <div className='AboutBottom'>

<h1>Hakkımızda</h1>
<p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.

</p>
</div>
  
  </div>;
};
