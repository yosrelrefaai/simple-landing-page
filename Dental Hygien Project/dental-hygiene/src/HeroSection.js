
import { TypeAnimation } from 'react-type-animation';
import motion from './images/Motion (2).mp4';
export default function HeroSection(){
    return(
        <div className="px-24 py-28 ">
            
            <div className='max-w-xl  text-center lg:text-start '>
                <h1 className="text-teal-custom-DarkCayan font-bold  leading-relaxed text-2xl sm:text-3xl md:text-4xl">
                    مغامرة جديدة لإكتشاف عالم الأسنان مع {''}
                    <span>
                    <TypeAnimation 
                         sequence={[
                         'دنتا فيرس', 
                         2000,          
                       '',            
                         2000          
                       ]}
                       speed={50}           
                       deletionSpeed={50}   
                       wrapper="span"
                       cursor={false}
                       repeat={Infinity}    
                       className="
                         text-teal-custom-Poppy
                         font-bold
                         text-2xl sm:text-3xl md:text-4xl
                         inline-block
                       "
                     />

                    </span>
                </h1>
                <p className='  text-base text-gray-700 font-medium py-10 leading-8'>  أهلًا بيك في عالم دنتافرس، جاهز عشان تخوض معانا رحلة استكشافية مميزة مليانة بالتحديّات والمتعة والمغامرات؟ عالم هتعرف فيه سر الابتسامة
                لو لسه متردد فصديقنا باسم هيشجّعك، تحب تعرَف عن عالمنا وعن بطلنا وتكون إنت البطل الجديد؟ </p>
                <div className="flex flex-col  sm:flex-row gap-12 lg:gap-4" >
                  <a  href="/Game/index.html">
                <button className='bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500  tranform hover:scale-105'>ابدأ اللعب الآن</button>   
                </a>
                <a href='https://forms.gle/vEnMFX7NyLaFUp83A' target='blank'>
                <button className='bg-white animate-bounce text-teal-custom-green border-teal-custom-green border-2 rounded-full text-base p-3 font-semibold transition-all duration-500  tranform hover:scale-105 mx-7'> ابدأ التحدي الان   </button>   
                </a>
                </div>
            </div>
        </div>
    )
}