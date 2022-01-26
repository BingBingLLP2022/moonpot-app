import React from 'react';
import { Container, makeStyles, Grid } from '@material-ui/core';
import styles from './styles';
//import { TVL } from './components/TVL';
import SectionSelect from './components/SectionSelect/SectionSelect';
import Moonpots from './Moonpots/Moonpots';
import MyPots from './MyPots/MyPots';
//import { Title } from './components/Title';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
//import { PoweredByBeefy } from '../../components/PoweredByBeefy';
import Filter from './components/Filter';
import HomeHeader from './components/HomeHeader/HomeHeader';

const useStyles = makeStyles(styles);

function useSelectedParams() {
  let { top, bottom } = useParams();
  let filter = useSelector(state => state.filterReducer.sort);
  let status = useSelector(state => state.filterReducer.status);
  if (!top) {
    top = 'moonpots';
  }

  if (!bottom) {
    bottom = 'featured';
  }

  if (!filter) {
    filter = 'default';
  }

  return { top, bottom, filter, status };
}

const Home = () => {
  const classes = useStyles();
  const { top, bottom, filter, status } = useSelectedParams();

  return (
    <Container maxWidth={false} style={{ padding: '0', overflow: 'hidden' }}>
      <HomeHeader />
      {/* <Title className={classes.mainTitle} />
      <PoweredByBeefy />
      <div className={classes.tvlSpacer}>
        <TVL className={classes.totalTVL} />
      </div> */}
      <div className={classes.backgroundWrapper}>
        <Grid container className={classes.filters}>
          <Grid item className={classes.filterContainerLeft}>
            <SectionSelect selected={top} />
          </Grid>
          <Grid item className={classes.filterContainerRight}>
            <Filter selected={top} potType={bottom} sort={filter} />
          </Grid>
        </Grid>
        {top === 'moonpots' ? (
          <Moonpots potType={bottom} potStatus={status} sort={filter} />
        ) : (
          <MyPots potStatus={status} sort={filter} />
        )}
      </div>
    </Container>
  );
};

export default Home;
