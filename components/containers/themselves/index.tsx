import ThemselvesCard from '@/components/shared/themselves-card'

import React from 'react'

export default function ThemSelves() {
    return (
        // <div className='bg-white shadow-lg mt-4 w-full mx-4'>
        //     <h1 className='text-[#131314] text-center'>Our numbers speak
        //         for themselves</h1>

        //     <div className=" text-3xl font-bold grid grid-cols-3 w-[90%] mx-auto">
        //         <div className='h-full w-full '>3M

        //             <div className="max-w-sm h-2/3 w-2/3 rounded-full border-l overflow-hidden border-b border-r">
        //                 <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        //                 <div className="px-6 py-4">
        //                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        //                     <p className="text-gray-700 text-base">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //                     </p>
        //                 </div>
        //                 <div className="px-6 pt-4 pb-2">
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>2B
        //             <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //                 <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        //                 <div className="px-6 py-4">
        //                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        //                     <p className="text-gray-700 text-base">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //                     </p>
        //                 </div>
        //                 <div className="px-6 pt-4 pb-2">
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>3MX
        //             <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //                 <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        //                 <div className="px-6 py-4">
        //                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        //                     <p className="text-gray-700 text-base">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //                     </p>
        //                 </div>
        //                 <div className="px-6 pt-4 pb-2">
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>#1
        //             <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //                 <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        //                 <div className="px-6 py-4">
        //                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        //                     <p className="text-gray-700 text-base">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //                     </p>
        //                 </div>
        //                 <div className="px-6 pt-4 pb-2">
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>18000
        //             <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //                 <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        //                 <div className="px-6 py-4">
        //                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        //                     <p className="text-gray-700 text-base">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //                     </p>
        //                 </div>
        //                 <div className="px-6 pt-4 pb-2">
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //                 </div>
        //             </div>
        //         </div>
        //         <div>85%+
        //             <div className="max-w-sm rounded overflow-hidden shadow-lg">
        //                 <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        //                 <div className="px-6 py-4">
        //                     <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        //                     <p className="text-gray-700 text-base">
        //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //                     </p>
        //                 </div>
        //                 <div className="px-6 pt-4 pb-2">
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        //     <div className='h-[400px]'></div>

        // </div>
        <ThemselvesCard
        />
    )
}
