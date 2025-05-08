import { useEffect, useState } from "react"
import drinkwater from './images/cabgbkgd.jpeg';
import fruits from './images/fruits.jpeg';
import water from './images/water.jpeg';
import gum from './images/gum.jpeg';
export default function SecondSection(){

   

    return(
        <div className="px-24 py-28 bg-gradient-to-br from-teal-custom-DarkCayan to-teal-custom-green ">
          <h2 className="text-3xl text-center text-white font-bold  py-10 ">  ازاي تخلي أسنانك صحية ولامعة </h2>
          <div class="flex justify-center flex-col md:flex-row gap-6 md:gap-12 py-10">
            {/*first box*/}
         <div className="w-64 h-80 [perspective:1000px] ">
           <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
              <img src={water} alt="Front" className="w-36 h-44 object-cover rounded-md"></img>
              <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold ">  اهتم بشرب الماية الكتير بانتظام</h3>
              </div>
              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
              <h4 class="text-lg font-medium"> الماية بتساعد فى غسل بواقى الاكل و بتقلل الاحماض من الفم و ده بيحمى الاسنان من التسوس</h4>
           </div>
           </div>
           </div>
           {/*second box*/}
           <div className=" w-64 h-80 [perspective:1000px] ">
           <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
              <img src={drinkwater} alt="Front" className="w-36 h-44 object-cover rounded-md"></img>
              <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> الكالسيوم لازم يكون صديقك</h3>
              </div>
              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
              <h4 class="text-lg font-medium"> الاكل اللى مليان كالسيوم زى اللبن و الجبنة و الزبادى بيقوى مينا الاسنان و بيحافظ على صحتها</h4>
           </div>
           </div>
           </div>
           {/*third box*/}
           <div className=" w-64 h-80 [perspective:1000px] ">
           <div className=" relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
              <img src={fruits} alt="Front" className="w-36 h-44 object-cover rounded-md"></img>
              <h3 className="text-teal-custom-orange px-5 py-5 text-center text-lg font-semibold "> اهتم بأكل الخُضار و الفاكهة المقرمشة </h3>
              </div>
              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
              <h4 class="text-lg font-medium"> الجزر و التفاح بيزودوا اللعاب فى الفم و ده بيساعد فى نضافة الفم و تقوية اللثة</h4>
           </div>
           </div>
           </div>
           {/*4th box*/}
           <div className="w-64 h-80 [perspective:1000px] ">
           <div className="  relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/50 border border-teal-custom-orange rounded-2xl flex  flex-col items-center justify-center">
              <img src={gum} alt="Front" className="w-36 h-44 object-cover rounded-md"></img>
              <h3 className="text-teal-custom-orange  text-center text-lg font-semibold px-5  py-5"> امضغ العلكة اللى منغير سكر</h3>
              </div>
              <div class="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/60 border border-teal-custom-orange rounded-lg shadow-lg flex items-center justify-center text-gray-700 text-center px-4">
              <h4 class="text-lg font-medium"> لإنها بتزود اللعاب  و ده بيقلل البكتيريا الضارة فى
              الفم .</h4>
           </div>
           </div>
           </div>
    </div>
        </div>
        
    )
    
}