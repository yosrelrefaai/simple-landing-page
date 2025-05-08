import video from './images/video.jpeg';
export default function Videosection(){

    
    return(
       <div className="flex flex-col md:flex-row gap-8 md:gap-40 px-4 md:px-24 py-7 md:py-28 bg-slate-100">
               {/* Right div - العنوان */}
               <div className="pt-10 md:w-1/2 w-full flex flex-col justify-center md:block">
               <h2 className=" font-semibold text-teal-custom-DarkCayan text-3xl text-center md:text-right">
               دقايق تفرّج... وسنانك تشكرك!
          </h2>
          <p className='  text-base text-gray-700 font-medium py-10 leading-8'>
          هنا هتلاقي فيديوهات ممتعة وبسيطة بتشرحلك إزاي تحافظ على أسنانك وتتعلم الحاجات المهمة علشان تفضل ابتسامتك دايمًا حلوة!
<br></br> كل فيديو قصير ومفيد، ومشاهدة الفيديوهات دي هي أول خطوة لازم تعملها قبل ما تبدأ تحل التحديات!<br></br>
جاهز؟ شغّل أول فيديو وابدأ تتعلّم!
          </p>
          <button
          className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105"
        >
          شاهدالآن
        </button>
               </div>
         
               {/* Left div - الأسئلة */}
               <div className="md:w-1/2 w-full flex flex-col justify-center ">
                <img src={video} alt="Video Section" className='rounded-2xl max-w-md h-auto '></img>
                 
               </div>
             </div>
    );
}