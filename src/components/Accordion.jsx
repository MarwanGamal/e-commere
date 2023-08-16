import {useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';

const AccordionTitle = styled(Typography)`
    &&{
        font-size: 18px;
        font-weight: 700;
    }
`
const Description = styled(Typography)`

`
const AccordionContainer = styled(Accordion)`
    border-radius: 5px;
    padding: 12px 20px;
    background-color: #afafaf;
    margin-bottom: 24px;
    color: black;
`

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <AccordionContainer expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AccordionTitle>
            Product description
          </AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Description>
            <a href="https://www.asos.com/men/jackets-coats/cat/?cid=3606"><strong>Jackets & Coats</strong></a> by <a href="https://www.asos.com/men/a-to-z-of-brands/only-sons/cat/?cid=19963"><strong>Only & Sons</strong></a><br/><ul><li>Jacket upgrade: check</li><li>Spread collar</li><li>Button placket</li><li>Functional pockets</li><li>Oversized fit</li></ul>
          </Description>
        </AccordionDetails>
      </AccordionContainer>
      <AccordionContainer expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <AccordionTitle>About product</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Twill: semi-structured fabric with a parallel-rib pattern<br/><br/>Main: 100% Cotton.
          </Typography>
        </AccordionDetails>
      </AccordionContainer>
      <AccordionContainer expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <AccordionTitle>
            Care Info
          </AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Machine wash according to instructions on care label
          </Typography>
        </AccordionDetails>
      </AccordionContainer>
      <AccordionContainer expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <AccordionTitle>Brand description</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Quality craftsmanship is at the forefront of Danish brand <a href="https://www.asos.com/men/a-to-z-of-brands/only-sons/cat/?cid=19963"><strong>Only & Sons</strong></a>, whose signature designs include classic knitwear, relaxed sweats and denim. Using a range of high quality fabrics, theirs is a seamlessly crafted collection for laid-back style.
          </Typography>
        </AccordionDetails>
      </AccordionContainer>
    </div>
  );
}
