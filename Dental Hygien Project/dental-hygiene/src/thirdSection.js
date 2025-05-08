import healthyfood from './images/healthyFood.png';
import { Link } from 'react-router-dom';
export default function ThirdSection(){
    return(
        <div className="px-4 md:px-24 py-28" id="challenges"> 
          <div>
            <h2 className="text-3xl text-teal-custom-DarkCayan font-bold  align-middle flex justify-center">التحديات</h2>
          </div>
          {/* div contains three cards*/}
          <div className="flex justify-center flex-col md:flex-row gap-6 md:gap-12 py-10">
             {/* first card*/}
            <div className="h-auto w-full md:max-w-sm flex-1 border-red-600 border-2 bg-red-300/40 rounded-r-lg  md:rounded-r-lg p-5 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
                <img src={healthyfood} className="w-44 h-44"></img>
                <h4 className="text-xl font-medium font-semibold text-black"> اختبر أكلك </h4>
                <p className="text-gray-500 sm:text-sm text-xs text-center">الأطعمة الغنية بالكالسيوم مثل الحليب، الجبن، والزبادي تُقوي مينا الأسنان وتحافظ على صحتها</p>
                <Link to="/challenge1">
                <button className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105'>ابدأ الان</button> 
                </Link>   
            </div>
             {/* second card*/}
             <div className="h-auto w-full md:max-w-sm flex-1 border-red-600 border-2 bg-red-300/40 rounded-lg md:rounded-none p-7 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
                <img src={healthyfood} className="w-44 h-44"></img>
                <h4 className="text-xl font-medium font-semibold text-black" >   تقدر تحافظ على ابتسامتك ؟  </h4>
                <p className="text-gray-500 sm:text-sm text-xs text-center">الأطعمة الغنية بالكالسيوم مثل الحليب، الجبن، والزبادي تُقوي مينا الأسنان وتحافظ على صحتها</p>
                <Link to="/challenge2">
                <button className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105'>ابدأ الان</button>  
                </Link> 
            </div>
             {/* third card*/}
             <div className="h-auto w-full md:max-w-sm flex-1 border-red-600 border-2 bg-red-300/40 rounded-l-lg md:rounded-l-lg p-7 flex flex-col justify-center items-center gap-3 transition-all duration-500 hover:scale-105 hover:shadow-md">
                <img src={healthyfood} className="w-44 h-44"></img>
                <h4 className="text-xl font-medium font-semibold text-black"> تعرف </h4>
                <p className="text-gray-500 sm:text-sm text-xs text-center">الأطعمة الغنية بالكالسيوم مثل الحليب، الجبن، والزبادي تُقوي مينا الأسنان وتحافظ على صحتها</p>
                <Link to="/challenge3">
                <button className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105'>ابدأ الان</button> 
                </Link>  
            </div>
          </div>
        </div>
    )
}