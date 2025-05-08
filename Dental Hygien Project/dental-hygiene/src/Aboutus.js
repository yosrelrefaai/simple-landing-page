export default function Aboutus(){
    return(
<div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-24 py-7 md:py-28 bg-white">
        {/* Right div - العنوان */}
        <div className="md:w-1/2 w-full flex justify-center md:block">

        </div>
  
        {/* Left div - الأسئلة */}
        <div className="md:w-1/2 w-full flex flex-col justify-center ">
        <h2 className=" font-semibold text-teal-custom-DarkCayan text-3xl text-center md:text-right">
        إحنا مين؟ 
          </h2>
          <p className='  text-base text-gray-700 font-medium py-10 leading-8'>
          إحنا مجموعة من أطباء الأسنان بجامعة الإسكندرية هدفنا نكون أصحابك ودليلك في كل اللي مُمكن يرشدك لصحتك وأكلك وأثرهم على أسنانك، عملنالك عالم مليئ بالاستكشافات فيه كل اللي ممكن تحتاجه عشان تاخد المعلومة بالطريقة اللي تحبها.. 
جاهز تستكشف عالمنا؟
          </p>
        
        </div>
      </div>
    );
}