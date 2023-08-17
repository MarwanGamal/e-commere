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
    background-color: #1F304C;
    color: #F4F2F7;
    padding: 12px 20px;
    margin-bottom: 24px;
    .css-yw020d-MuiAccordionSummary-expandIconWrapper{
      color: #F4F2F7;
    }
`

export default function ControlledAccordions({description}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const productDescription = description.productDescription
  const aboutMe = description.aboutMe
  const brandDescription = description.brandDescription

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
            <div dangerouslySetInnerHTML={{ __html: productDescription }}></div>
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
            <div dangerouslySetInnerHTML={{ __html: aboutMe }}></div>
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
          {description.careInfo}
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
            <div dangerouslySetInnerHTML={{ __html: brandDescription }}></div>
          </Typography>
        </AccordionDetails>
      </AccordionContainer>
    </div>
  );
}
