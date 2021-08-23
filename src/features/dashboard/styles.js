const styles = theme => ({
  h1: {
    fontSize: '22px',
    lineHeight: '34px',
    fontWeight: 400,
    color: '#ffffff',
    padding: '30px 0',
    textAlign: 'center',
    '& span': {
      color: '#F3BA2E',
    },
  },
  noActivePots: {
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    width: '100%',
    maxWidth: '350px',
    minHeight: '320px',
    border: '2px solid #F3F2F8',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 12px 24px -10px rgba(0, 0, 0, 0.4)',
    borderRadius: '16px',
    boxSizing: 'border-box',
    marginTop: '48px',
    padding: '24px',
  },
  noActivePotsImage: {},
  noActivePotsTitle: {
    color: '#585464',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '36px',
    marginBottom: '12px',
    marginTop: '24px',
  },
  noActivePotsText: {
    color: '#585464',
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '24px',
  },
  noActivePotsPlayButton: {
    backgroundColor: 'rgba(103, 83, 219, 0.1)',
    border: '2px solid #6753DB',
    boxSizing: 'border-box',
    borderRadius: '20px',
    width: '100%',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '17.24px',
    color: '#6753DB',
    marginTop: '32px',
  },
  potsContainer: {
    height: '100%',
    width: 'min(100%, 500px)',
    margin: '80px auto 0px auto',
    marginTop: '56px',
    borderRadius: '16px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20px',
      marginRight: '20px',
    },
    '& .MuiDivider-root': {
      color: '#8A7EAF',
      backgroundColor: '#8A7EAF',
      height: '2px',
    },
    '& .MuiPaper-root': {
      background: '#8375A9',
      border: '2px solid #B6ADCC',
    },
    '& .MuiInputBase-input': {
      color: '#B6ADCC',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '24px',
      letterSpacing: '0.2px',
    },
    '& $actionBtn': {
      color: '#6F609A',
    },
    '& .MuiPaper-root .MuiButtonBase-root': {
      background: '#B6ADCC',
      color: 'rgba(255, 255, 255, 0.95)',
    },
  },
  eolMyPot: {
    backgroundColor: '#594C7B',
    height: '100%',
    width: 'min(100%, 500px)',
    margin: '80px auto 0px auto',
    marginTop: '56px',
    borderRadius: '16px',
    padding: '24px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20px',
      marginRight: '20px',
    },
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 12px 24px -10px rgba(0, 0, 0, 0.4)',
    border: '2px solid #70609A',
    '& .MuiDivider-root': {
      color: '#70609A',
      backgroundColor: '#70609A',
      height: '2px',
    },
  },
  potImage: {
    width: '100%',
    marginBottom: '24px',
    '& img': {
      maxHeight: '90px',
      maxWidth: '90px',
    },
  },
  potUsdTop: {
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.6px',
    color: '#ffffff',
    '& span': {
      color: '#DFDDE7',
    },
  },
  potUsd: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '20px',
    letterSpacing: '0.6px',
    color: '#ffffff',
    '& span': {
      color: '#DFDDE7',
    },
  },
  myPotsNextWeeklyDrawText: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#EBF3F9',
    padding: 0,
    margin: 0,
    marginBottom: '20px',
    '& span': {
      fontWeight: 700,
    },
  },
  myDetailsText: {
    color: '#EBF3F9',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    textTransform: 'capitalize',
    marginBottom: '16px',
  },
  myDetailsValue: {
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    marginBottom: '16px',
    '& span': {
      textDecoration: 'line-through',
      opacity: 0.6,
    },
  },
  potsItemText: {
    color: '#EBF3F9',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    textTransform: 'capitalize',
    margin: '8px 0',
  },
  potsItemValue: {
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    margin: '12px 0',
    '& span': {
      textDecoration: 'line-through',
      opacity: 0.6,
    },
  },
  potsPrizeWinners: {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    margin: '12px 12px',
    '& span': {
      fontWeight: 700,
    },
  },
  potsPrizeWinnersTransaction: {
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    margin: '12px 12px',
    color: '#F3BA2E',
  },
  myPotsInfoText: {
    color: '#EBF3F9',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
  },
  myPotsUpgradeText: {
    color: '#EBF3F9',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    paddingBottom: '16px',
  },
  learnMoreText: {
    color: '#F3BA2E',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    paddingBottom: '8px',
  },
  actionBtn: {
    width: '100%',
    height: '48px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#70609A',
    boxShadow: 'none',
    margin: '20px 0 16px 0',
    '& .MuiButton-label': {
      position: 'relative',
      zIndex: '10',
    },
    '&:hover, &:focus': {
      boxShadow: 'none',
      color: '#70609A',
      backgroundColor: '#E6E6E6',
    },
    '& .MuiTouchRipple-rippleVisible': {
      opacity: 1,
      animation: `$enter 550ms ${theme.transitions.easing.easeInOut}`,
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: '#C7C0D8',
    },
    '&.Mui-disabled': {
      backgroundColor: '#CCCCCC',
      color: '#888888',
      borderColor: '#CCCCCC',
    },
  },
  eolMoveBtn: {
    margin: '16px 0 8px 0',
  },
  depositMoreExtraInfo: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#EBF3F9',
  },
  dividerText: {
    color: '#EBF3F9',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  divider: {
    marginBottom: '16px',
  },
  expandToggle: {
    color: '#FFFFFF',
  },
  split: {
    width: '118px',
    '& .MuiTypography-h1': {
      fontSize: '20px',
      fontFamily: 'Ubuntu',
      fontWeight: 400,
      color: '#ffffff',
    },
    '& .MuiTypography-h2': {
      fontSize: '12px',
      fontWeight: 700,
      color: '#ffffff',
    },
    '& .MuiTypography-h3': {
      fontSize: '10px',
      fontWeight: 700,
      color: '#DFDDE7',
      letterSpacing: '0.6px',
    },
  },
  seperator: {
    paddingTop: '8px',
  },
  btn: {
    width: '100%',
  },
  empty: {
    color: '#E1DDEA',
    padding: '20px',
    textAlign: 'center',
    '& .MuiTypography-body1': {
      paddingTop: '10px',
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '0.46px',
    },
  },
  '@keyframes enter': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  altActionBtn: {
    width: '100%',
    height: '48px',
    backgroundColor: '#42385B',
    border: '2px solid #FFFFFF',
    borderRadius: '8px',
    boxSizing: 'border-box',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '15px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    boxShadow: 'none',
    '& .MuiButton-label': {
      position: 'relative',
      zIndex: '10',
    },
    '&:hover, &:focus': {
      boxShadow: 'none',
      color: '#ffffff',
      backgroundColor: '#2B253C',
    },
    '& .MuiTouchRipple-rippleVisible': {
      opacity: 1,
      animation: `$enter 550ms ${theme.transitions.easing.easeInOut}`,
    },
    '& .MuiTouchRipple-child': {
      backgroundColor: '#201B2C',
    },
    '&.Mui-disabled': {
      backgroundColor: '#CCCCCC',
      color: '#888888',
      borderColor: '#CCCCCC',
    },
  },
  bonusEarningsInner: {
    paddingBottom: '16px',
  },
  explainerText: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#ECEAFB',
  },
  bonusExplainerRow: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  bonusCompoundRow: {
    marginBottom: '16px',
    '& $actionBtn:first-child': {
      marginTop: 0,
    },
  },
  title: {
    color: '#EBF3F9',
    fontSize: '15px',
    lineHeight: '24px',
    fontWeight: '500',
    textAlign: 'right',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  interestValueApy: {
    color: '#F3BA2E',
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '700',
  },
  interestValueBaseApy: {
    color: '#A0BBD5',
    textDecoration: 'line-through',
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '700',
  },
  interestValueApr: {
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: '700',
  },
  potList: {
    width: `${500 * 2 + 24 * 2}px`,
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  potListInner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: '-12px',
    marginRight: '-12px',
    marginBottom: '-24px',
    '& > *': {
      marginBottom: '24px',
      marginLeft: '12px',
      marginRight: '12px',
    },
  },
});

export default styles;
