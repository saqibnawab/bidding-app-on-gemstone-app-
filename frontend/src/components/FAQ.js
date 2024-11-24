import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
const FAQ = () => {
    return (
        <div className="container pt-5">
            <div className="faqtext">
                <h3 className='text-center'>Frequently Asked Questions</h3>
            </div>
            <div className="row">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        What Happens If I Win An Auction?
                    </AccordionSummary>
                    <AccordionDetails>
                        If you win an auction, you're obligated to purchase the item at the winning bid price. Follow payment instructions provided by the auction platform. Non-compliance may lead to penalties or account suspension.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        What is An Auction?
                    </AccordionSummary>
                    <AccordionDetails>
                        An auction is a public sale where goods or services are sold to the highest bidder. Bidders compete to offer the highest price, and the item is awarded to the bidder with the highest bid when the auction ends.
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        How Do Auctions Work?
                    </AccordionSummary>
                    <AccordionDetails>
                        Auctions allow items to be sold to the highest bidder. Participants bid on the item until the highest bid is reached within a set timeframe. The highest bidder wins and pays the bid amount.
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        What Happens If I Win An Auction?
                    </AccordionSummary>
                    <AccordionDetails>
                        If you win an auction, you're obligated to purchase the item at the winning bid price. Follow payment instructions provided by the auction platform. Non-compliance may lead to penalties or account suspension.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        What Happens If I Win An Auction?
                    </AccordionSummary>
                    <AccordionDetails>
                        If you win an auction, you're obligated to purchase the item at the winning bid price. Follow payment instructions provided by the auction platform. Non-compliance may lead to penalties or account suspension.
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default FAQ
