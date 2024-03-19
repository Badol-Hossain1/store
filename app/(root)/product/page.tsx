import ThereeSuites from '@/components/containers/ThreeSuites'
import ProductMain from '@/components/containers/appleSection'
import BrochureSection from '@/components/containers/brochure'
import ContactInfo from '@/components/containers/contact'
import PlatformSection from '@/components/containers/platfrom'

import Products from '@/components/containers/products'
import React from 'react'

export default function page() {
    return (
        <div className=''>

            <Products />
            <ThereeSuites />
            <ProductMain />
            <PlatformSection />
            <BrochureSection title="Download our brochure"
                description="Elementum semper praesent amet integer orci. Enim molestie magna morbi tempor. Sed nascetur felis dictum a ac eget arcu tempus. Aliquet diam lorem semper leo nascetur eget. Tincidunt libero tristique nisl tristique vitae potenti eget egestas. Adipiscing morbi senectus et gravida orci pellentesque."
                buttonText="Download"
            />
            <ContactInfo />



        </div>
    )
}
