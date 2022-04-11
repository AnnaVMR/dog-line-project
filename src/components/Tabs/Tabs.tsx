import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Tabs.module.scss';
import ImgList from '../ImgList/ImgList';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ div: 3 }}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className={styles.tabs}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Breeds" {...a11yProps(0)} />
          <Tab label="Toy Breeds" {...a11yProps(1)} />
          <Tab label="Hound Breeds" {...a11yProps(2)} />
          <Tab label="Working Breeds" {...a11yProps(3)} />
          <Tab label="Terrier Breeds" {...a11yProps(4)} />
          <Tab label="Non-Sporting Breeds" {...a11yProps(5)} />
          <Tab label="Sporting Breeds" {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ImgList value='' />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ImgList value='Toy' />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ImgList value='Hound' />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ImgList value='Working' />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ImgList value='Terrier' />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ImgList value='Non-Sporting' />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ImgList value='Sporting' />
      </TabPanel>
    </Box>
  );
}