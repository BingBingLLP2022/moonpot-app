const styles = theme => ({
  rowLogoWinTotal: {
    marginBottom: `${24 - 8}px`,
  },
  title: {
    color: '#EBF3F9',
    fontSize: '19px',
    lineHeight: '28px',
    fontWeight: '500',
    textAlign: 'right',
    letterSpacing: '0.6px',
  },
  winTotalPrize: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: '0.6px',
    '& > span': {
      color: '#F3BA2E',
    },
  },
  winTotalTokens: {
    textAlign: 'right',
    color: '#FAFAFC',
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
    '& > span': {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  },
  rowDrawStats: {
    justifyContent: 'flex-start',
    marginBottom: `${20 - 8}px`,
    '& > .MuiGrid-item:nth-child(even)': {
      textAlign: 'right',
    },
  },
  statLabel: {
    color: '#EBF3F9',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '10px',
    lineHeight: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    display: 'inline-flex',
    alignItems: 'center',
  },
  statValue: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15px',
    lineHeight: '24px',
    letterSpacing: '0.2px',
    '& > span': {
      fontWeight: 'normal',
      color: '#A0BBD5',
      textDecoration: 'line-through',
    },
  },
  interestValueApy: {
    color: '#F3BA2E',
  },
  interestValueBaseApy: {
    fontWeight: 'normal',
    color: '#A0BBD5',
    textDecoration: 'line-through',
  },
  interestValueApr: {
    fontWeight: 'normal',
  },
  prizeSplitValue: {
    textAlign: 'right',
    '& span': {
      fontWeight: 'bold',
      color: '#ffffff',
    },
  },
  rowPlay: {
    marginTop: '20px',
  },
  rowOdds: {
    marginTop: '8px',
    textAlign: 'center',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '20px',
    color: '#FFFFFF',
  },
});

export default styles;