import { useState } from "react";
import askdoc from './images/doctor.png';
import { db } from "./Firebase";
import { collection ,addDoc ,serverTimestamp } from "firebase/firestore";
export default function UserQuestion(){
    const [question, setQuestion] = useState("");
    const [submitted, setSubmitted] = useState(false); 
    const handleSubmit= async(e)=> {
        e.preventDefault();
        if(!question.trim()) return;
        try {
            await addDoc(collection(db ,"questions"),{
                text :question,
                createdAt: serverTimestamp(),
                answer : false,
            });
            setSubmitted(true);
            setQuestion("");
        }catch (error) {
            console.error("Error adding question:", error);
          }
    };
    return(
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 px-4 md:px-24 py-7 md:py-28 bg-gradient-to-t from-teal-custom-DarkCayan to-teal-custom-green">
        {/* Right div - العنوان */}
        <div className="md:w-1/2 w-full flex justify-center md:block">
         <img src={askdoc} className="max-w-md h-auto"/>
        </div>
  
        {/* Left div - الأسئلة */}
        <div className="md:w-1/2 w-full flex flex-col justify-center ">
        <h2 className=" font-semibold text-white text-3xl text-center md:text-right">
            اسأل طبيبك
          </h2>
          <p className='  text-base text-gray-300 font-medium py-10 leading-8'>
          لو عندك أي سؤال عن أسنانك أو طريقة تنظيفها، ما تترددش تسأل دكتورك!
سواء حاسس بألم بسيط، أو مش عارف تستخدم الفرشاة كويس، أو محتار تختار معجون مناسب — الدكتور موجود علشان يساعدك.
مافيش سؤال صغير، وكل سؤال ليه إجابة مهمة تساعدك تحافظ على ابتسامتك الجميلة.
خليك دايمًا فضولي، واسأل علشان تتعلم وتحمي نفسك.
          </p>
        <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="اكتب سؤالك هنا..."
          className="w-full border p-3 rounded mb-4"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-custom-Poppy to-teal-custom-orange rounded-full text-white text-base p-3 font-semibold transition-all duration-500 tranform hover:scale-105"
        >
          إرسال
        </button>
        {submitted && <p className="text-green-600 mt-3">تم إرسال سؤالك بنجاح!</p>}
      </form>
        </div>
      </div>
    );
    
}