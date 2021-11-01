import React from "react";
import Header from './Header';
import Menu from './Menu';

const Home = () => {
    return (
         <div>
             <Header />
             <Menu />
             <div className='container'>
                 <div className='row'>
                     <div className='col margintopbottom'>
                         <h2>Home</h2>
                         <h6 className='margintopbottom10'>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Sed eleifend eleifend facilisis. Phasellus a lorem augue.
                             Phasellus vulputate nisl non diam varius gravida.
                             Praesent vel ex id augue semper pellentesque ac at mauris.
                             Mauris at ornare ipsum, eget euismod nisl. Duis non mattis tortor.
                             Donec a rutrum ex, eu commodo tellus.
                             Nulla eget augue ut sapien lacinia finibus et quis sem.
                             Nullam luctus tellus vel ex porta, eu pharetra dolor vestibulum.
                         </h6>
                     </div>
                 </div>
             </div>
         </div>
    );
};

export default Home;