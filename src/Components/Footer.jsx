import React from 'react'

import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter style={{ backgroundColor: '#0461C0' }} className='text-center text-lg-left'>
                <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
                    &copy; {new Date().getFullYear()} Copyright :{' '}
                    <a className='text-white' href='/'>
                        RandomQuotesGenerator.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer