import Image from "next/image"

const ReactCard = () => {
  return (
    <section className='flex flex-row border-2 
    border-red justify-center 
    items-center flex-wrap gap-y-8 gap-x-5'>
    <div className='p-4 border-1
     border-[#6b7688] text-center bg-[#e0e0e0]
         w-[250px] rounded-xl 
         hover:shadow-[0_5px_50px_-20px_#0eb9f5]'>
        <Image width={200} height={100} alt='' src='/Image/React1.png'/>
        讀賣巨人軍90週年紀念台灣試合落幕，巨人隊帶著1勝1和結束訪台行程。台北大巨蛋熱度未減，中職官辦熱身賽門票昨開放預售，兩場大巨蛋賽事短短兩小時都確定破萬，
        成為歷年人氣最高的熱身賽，聯盟不排除開放更多觀眾進場。

    </div>
   
    </section>
  )
}

export default ReactCard