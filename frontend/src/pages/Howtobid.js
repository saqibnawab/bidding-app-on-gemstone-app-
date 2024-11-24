import React, { useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Auctionmethodology from '../components/Auctionmethodology';

const Howtobid = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="box pt-5 pb-5  w-100 h-50">
                <Auctionmethodology/>
            </div>
            <div className="methods d-flex flex-column align-items-center">
                <Timeline position="alternate-reverse">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="stepone d-flex flex-column align-items-start">
                                <button className='btn btn-primary mt-3 mb-3'>Step 1</button>
                                <h4>Registration</h4>
                                <p className='text-start'>
                                    Clearly state your pricing structure, payment terms,  and any additional charges.
                                    Specify when payment invoices will be issued, as well as your accepted payment methods.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="stepone d-flex flex-column align-items-start">
                                <button className='btn btn-primary mt-3 mb-3'>Step 2</button>
                                <h4>Browse Listings</h4>
                                <p className='text-start'>
                                    Clearly state your pricing structure, payment terms, and any additional charges.
                                    Specify when payment invoices will be issued, as well as your accepted payment methods.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>



                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="stepone d-flex flex-column align-items-start">
                                <button className='btn btn-primary mt-3 mb-3'>Step 3</button>
                                <h4>Place Bids</h4>
                                <p className='text-start'>
                                    Clearly state your pricing structure, payment terms and and any additional charges. Specifying when & payment invoices will be issued, as well as your accepted.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>




                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="stepone d-flex flex-column align-items-start">
                                <button className='btn btn-primary mt-3 mb-3'>Step 4</button>
                                <h4>Winning the Auction</h4>
                                <p className='text-start'>
                                Clearly state your pricing structure, payment terms and and any additional charges. <br /> Specifying when & payment invoices will be issued, as well as your accepted.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>




                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="stepone d-flex flex-column align-items-start">
                                <button className='btn btn-primary mt-3 mb-3'>Step 5</button>
                                <h4>Payment and Shipping</h4>
                                <p className='text-start'>
                                Clearly state your pricing structure, payment terms and and any additional charges. <br /> Specifying when & payment invoices will be issued, as well as your accepted.
                                </p>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </>
    );
}

export default Howtobid;
