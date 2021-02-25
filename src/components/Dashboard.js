import { MDBContainer, MDBInput, MDBProgress } from 'mdbreact'
import React, { useContext, useEffect } from 'react';
import {
    MDBCard, MDBCardBody,
    MDBCol, MDBIcon
} from 'mdbreact';

const Dashboard = () => {

    return (
        <main style={{ paddingTop: "5.5rem" }}>
            <MDBContainer fluid style={{ minHeight: '100vh' }} className="mt-5">
                <MDBCol xl='3' md='6' className='mb-5'>
                    <MDBCard cascade className='cascading-admin-card'>
                        <div className='admin-up'>
                            <MDBIcon
                                far
                                icon='money-bill-alt'
                                className='primary-color mr-3 z-depth-2'
                            />
                            <div className='data'>
                                <p>SALES</p>
                                <h4 className='font-weight-bold dark-grey-text'>2000$</h4>
                            </div>
                        </div>
                        <MDBCardBody cascade>
                            <MDBProgress
                                value={25}
                                barClassName='bg-primary'
                                height='6px'
                                wrapperStyle={{ opacity: '.7' }}
                                className='mb-3'
                            />
                            <p className='card-text'>Better than last week (25%)</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBContainer>
        </main>
    )
}

export default Dashboard;
