import AccordionClick from "./AccordionClick";

export default function Accordion() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-24 py-14 md:py-28 bg-slate-100">
      {/* Right div - العنوان */}
      <div className="md:w-1/2 w-full flex justify-center md:block">
        <h2 className="font-semibold text-teal-custom-DarkCayan text-3xl text-center md:text-right">
          الأسئلة الشائعة
        </h2>
      </div>

      {/* Left div - الأسئلة */}
      <div className="md:w-1/2 w-full">
        <div className="p-4 bg-gradient-to-br from-teal-custom-DarkCayan to-teal-custom-green rounded-lg">
          <AccordionClick
            title="اعمل ايه عشان أحافظ على سنانى ؟"
            answer="اغسل سنانك بالفرشة و المعجون بالطريقة الصحيحة مرتين فى اليوم مره بعد ما تصحى و مره قبل ما تنام و استخدم خيط الاسنان مره فى اليوم و ابعد عن الأكل الغير صحى ."
          />
          <AccordionClick
            title="نغير فرشة الاسنان كل اد إيه ؟"
            answer="كل ٣ شهور و ممكن قبل كده لو الفرشة شكلها اتغير او مبقتش ناعمة زى الاول."
          />
          <AccordionClick 
            title="فيه مشكلة لو مش محدد وقت للأكل و بفضل آكل طول اليوم ؟" 
            answer="ايوة, الاكل لو موجود طول الوقت فى الفم كده البكتيريا موجوده معاه عشان كده لازم نحدد وقت معين للأكل عشان نقلل وجود البكتيريا " 
          />
           <AccordionClick 
            title="ليه لازم آكل أكل صحى  ؟"
            answer=" عشان احافظ على صحة فمى و أسنانى لإن الفم الصحى زى البوابة للجسم الصحى ." 
          />
           <AccordionClick 
            title="ليه بنلاقى دم مع الغسيل بالفرشة و المعجون ؟" 
            answer=" عشان الاكل بيتراكم ف بتتراكم البكتيريا و بيتراكم الجير اللى بيإذى اللثه و تنزف من أقل احتكاك و
 لو بتتنفس من الفم "
          />
           <AccordionClick 
            title="اية العادات الخاطئة اللى بتأثر على الاسنان ؟"
            answer="التنفس من الفم 
و قضم اظافر الاصابع او الاقلام او اى شى حاد فى الفم بشكل متكرر 
 غسل الاسنان بعد تناول الحمضيات و المياة الغازية مباشرة"
          />
        </div>
      </div>
    </div>
  );
}