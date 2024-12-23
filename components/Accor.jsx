"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

const Accor = () => {
  return (
    <div className="p-6 text-white mt-32 ">
      <h1 className="text-2xl font-bold mb-6">Our Services</h1>
      <Accordion
        className="w-full"
        selectionMode="multiple"
      >
        <AccordionItem
          key="1"
          title={<span className="text-white">Buyurtmani narxini qanday to'lashim mumkin?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>To'lov usullari:</li>
            <li>--ofisda naqd pul yoki bank kartasi orqali to'lash;</li>
            <li>--uuridik shaxslarni o'tkazish yo'li bilan to'lash;</li>
            <li>--onlayn kreditlash xizmatlaridan foydalangan holda to'lov.</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          key="2"
          title={<span className="text-white">Toshkent shahri aholisi oldindan to‘lovni amalga oshirishi kerakmi?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>30% oldindan toʻlov talab qilinadi:</li>
            <li>--kompyuterlar</li>
            <li>--noutbuklar</li>
            <li>--mebel</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          key="3"
          title={<span className="text-white">Chegirmalar bormi?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Kompaniyamiz takroriy xaridlar uchun, shuningdek, ikki yoki undan ortiq kompyuterga buyurtma berish uchun individual shartlarni qo'llaydi. Bonus yoki chegirma miqdori buyurtmani tasdiqlashda menejer bilan kelishiladi.</li>
          </ul>
        </AccordionItem>

        <AccordionItem
          key="4"
          title={<span className="text-white">Kompyuterni qachon olishim mumkin?  </span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Kompyuterning butun ishlab chiqarish tsikli o'rtacha 1-3 kun davom etadi, keyin u sizga bizning kurerlik xizmatimiz yoki inGame kuryerimiz tomonidan yetkaziladi (mijozning joylashgan joyiga qarab). Buyurtmani Toshkentdagi ofisdan ham o'zingiz olishingiz mumkin.</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="5"
          title={<span className="text-white">Yetkazib berishdan keyin kompyuter/noutbuk o'rnatiladimi va ulanadimi? </span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Kompyuter/noutbukni ulash va o‘rnatish Toshkent shahri va O‘zbekiston viloyati aholisi uchun mavjud. Transport kompaniyalari tomonidan boshqa hududlarga etkazib berilganda, o'rnatish va ulash amalga oshirilmaydi.</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="6"
          title={<span className="text-white">Qaysi transport kompaniyalari etkazib beradi?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Biz quyidagi transport kompaniyalari tomonidan yetkazib beramiz:</li>
            <li>--BTS</li>
            <li>--Fargo</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="7"
          title={<span className="text-white">Kafolat nima?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Barcha inGame kompyuterlari kamida 1 yillik kafolatga ega.</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="8"
          title={<span className="text-white">Kafolat ta'mirlash muddatlari qanday?</span>}
          >
          <ul className="mx-4 text-gray-500">
            <li>Kompyuterlar uchun: qoida tariqasida, noto'g'ri komponentlarni diagnostika qilish va almashtirish 45 ish kunidan oshmaydi</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="9"
          title={<span className="text-white">Kompyuter narxiga nimalar kiradi?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Kompyuterning yakuniy narxiga quyidagi omillar ta'sir qiladi: tanlangan komponentlar va ularning xususiyatlari, tanlangan dasturiy ta'minot, modifikatsiya va moslashtirish, ishlab chiqarish muddati, kafolat va xizmat ko'rsatish muddati, yangilash imkoniyatlari, shuningdek logistika shartlari.</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="10"
          title={<span className="text-white">Yig'ish va xizmat ko'rsatish uchun belgingiz qanday?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Bizda qo‘shimcha to‘lov yo‘q, bizda kafolat va yuqori sifatli inGame kompyuteri narxi bor.</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="11"
          title={<span className="text-white">Chegirma yoki sovg'a olish mumkinmi?</span>}
        >
          <ul className="mx-4 text-gray-500">
            <li>Ikkinchi kompyuterni sotib olganingizdan so'ng siz chegirma/sovg'a olishingiz mumkin bo'ladi. Bizning doimiy mijozlarimiz uchun individual dastur mavjud. U buni shaxsiy menejeri bilan muhokama qiladi.</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Accor