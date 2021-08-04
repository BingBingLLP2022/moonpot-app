const styles = (theme) => ({
    title: {
        fontSize: '22px',
        lineHeight: '34px',
        fontWeight: 500,
        color: '#ffffff',
        padding: '30px 0',
        textAlign: 'center',
        '& span': {
            color: '#F3BA2E'
        }
    },
    vaultPotItem: {
        backgroundColor: '#345675',
        height: '100%',
        width: 'min(100%, 500px)',
        margin: '80px auto 0px auto',
        marginTop: '56px',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '4px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: '20px',
            marginRight: '20px',
        },
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.4)', 

    },
    potImage: {
        width: '100%',
        marginBottom: '20px',
        '& img': {
            maxHeight: '90px',
            maxWidth: '90px',
        }
    },
    countdown: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '24px',
        letterSpacing: '0.2px',
        color: '#ffffff',
        marginBottom: '16px',
    },
    subTitle: {
        fontWeight: 700,
        fontSize: '10px',
        lineHeight: '20px',
        color: '#EBF3F9',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    apy: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '24px',
        color: '#ffffff',
        textAlign: 'right',
        marginBottom: '16px',
        '& span': {
            textDecoration: 'line-through',
            opacity: '0.6',
        }
    },
    earn: {
        fontWeight: 500,
        fontSize: '10px',
        lineHeight: '12px',
        color: '#DFDDE7',
        letterSpacing: '0.6px',
    },
    potUsdTop: {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: '0.6px',
        marginTop: '10px',
        color: '#ffffff',
        '& span': {
            color: '#DFDDE7'
        }
    },
    potUsd: {
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '20px',
        letterSpacing: '0.6px',
        color: '#ffffff',
        '& span': {
            color: '#DFDDE7'
        }
    },
    potCrypto: {
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#EBF3F9',
        textAlign: 'right',
        paddingTop: '4px',
        '& span': {
            color: '#FFFFFF',
        }
    },
    potDataPoint: {
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '24px',
        color: '#ffffff',
        marginBottom: '20px',
    },
    prizeSplitText: {
        fontWeight: 700,
        fontSize: '12px',
        fontStyle: 'Bold',
        letterSpacing: '1px',
        lineHeight: '145%',
        textTransform: 'uppercase',
        color: '#EBF3F9',
        cursor: 'pointer',
    },
    prizeSplitWinners: {
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '0.2px',
        textTransform: 'capitalize',
        color: '#EBF3F9',
        padding: '4px 12px 12px 0',
    },
    prizeSplitValue: {
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '0.2px',
        color: '#FFF',
        padding: '4px 0 12px 12px',
        '& span': {
            fontWeight: 700,
        }
    },
    input: {
        border: '2px solid #6B96BD',
        borderRadius: '8px',
        width: '100%',
        backgroundColor: '#3F688D',
        alignItems: 'center',
        '& .MuiInputBase-root': {
            alignItems: 'center',
            height: '100%',
        },
        '& .MuiInputBase-input': {
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '15px',
            lineHeight: '24px',
            height: '100%',
            letterSpacing: '0.2px',
            color: '#AAC3D9',
        },
    },
    inputRoot: {
        fontWeight: 700,
        fontSize: '20px',
        padding: '0 10px',
    },
    enabledActionBtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        height: '48px',
        width: '100%',
        fontWeight: 700,
        fontStyle: 'Bold',
        fontSize: '15px',
        lineHeight: '139%',
        letterSpacing: '0.2px',
        color: '#3675A2',
        margin: '16px 0 12px 0',
    },
    disabledActionBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        height: '48px',
        width: '100%',
        fontWeight: 700,
        fontStyle: 'Bold',
        fontSize: '15px',
        lineHeight: '139%',
        letterSpacing: '0.2px',
        color: 'rgba(54, 117, 162, 0.4)',
        margin: '16px 0 12px 0',
    },
    actionBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        height: '48px',
        width: '100%',
        fontWeight: 700,
        fontStyle: 'Bold',
        fontSize: '15px',
        lineHeight: '139%',
        letterSpacing: '0.2px',
        color: 'rgba(54, 117, 162, 0.4)',
        margin: '16px 0 8px 0',
        '& .Mui-disabled': {
            color: '#FFFFFF',
        }

    },
    eolWithdrawWarningBox: {
        backgroundColor: '#FAF9FB',
        padding: '12px 0px',
        border: '2px solid #E4E0EB',
        boxSizing: 'border-box',
        borderRadius: '4px',

    },
    eolWithdrawWarning: {
        color: '#333333',
        fontSize: '12px',
        lineHeight: '20px',

    },
    eolWithdrawBtn: {
        backgroundColor: '#42385B',
        border: '2px solid #FFFFFF',
        borderRadius: '8px',
        boxSizing: 'border-box',
        height: '48px',
        width: '100%',
        fontWeight: 700,
        fontStyle: 'Bold',
        fontSize: '15px',
        lineHeight: '160%',
        letterSpacing: '0.2px',
        color: '#FFFFFF',
        margin: '16px 0 8px 0',

    },
    connectWalletBtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        height: '48px',
        width: '100%',
        fontWeight: 700,
        fontStyle: 'Bold',
        fontSize: '15px',
        lineHeight: '139%',
        letterSpacing: '0.2px',
        color: '#345675',
        margin: '16px 0 8px 0',
    },
    fairplayDepositMessage: {
        color: '#EBF3F9',
        fontSize: '10px',
        lineHeight: '16px',
        fontWeight: 400,
        letterSpacing: '0.2px',
        marginBottom: '20px',
        '& span': {
            textDecoration: 'underline',
        },
        '& .MuiLink-root': {
            cursor: 'pointer',
        }
    },
    divider: {
        color: '#436F97',
        backgroundColor: '#436F97',
        height: '2px',
    },
    timelockRemaining: {
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '14px',
        color: '#172734',
    },
    oddsPerDeposit: {
        fontWeight: 300,
        fontSize: '12px',
        lineHeight: '145%',
        textAlign: 'center',
        color: '#DFDDE7',
    },
    expandToggle: {
        color: '#FFFFFF',
        alignText: 'right',
        cursor: 'pointer',
    },
    potsMaxButton: {
        backgroundColor: '#6B96BD',
        textTransform: 'uppercase',
        width: '60px',
        borderRadius: '4px',
        margin: '10px',

    },
    tokenIcon: {
        borderRadius: '25px',
        margin: '14px 16px 0 '
    },
    withdrawText: {
        fontWeight: 700,
        fontSize: '12px',
        fontStyle: 'Bold',
        letterSpacing: '1px',
        lineHeight: '145%',
        textTransform: 'uppercase',
        color: '#EBF3F9',
        marginBottom: '25px',
        cursor: 'pointer',
    },
    withdrawItemText: {
        color: '#EBF3F9',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '145%',
        letterSpacing: '0.2px',
        marginBottom: '16px',
    },
    withdrawItemValue: {
        color: '#FFFFFF',
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '145%',
        fontStyle: 'Bold',
        letterSpacing: '0.2px',
    },
    withdrawPenaltyWarning: {
        fontWeight: 300,
        fontStyle: 'Light',
        fontSize: '12px',
        lineHeight: '145%',
        color: '#EBF3F9',
        letterSpacing: '0.2px',
        textAlign: 'center',
        '& span': {
            textDecoration: "underline",
        }
    },
    beefy: {
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '14px',
        color: '#ffffff',
        letterSpacing: '0.34px',
        textAlign: 'center',
        marginTop: '16px',
        marginBottom: '56px',
        '& .MuiLink-root': {
            color: '#ffffff',
            textDecoration: 'underline',
        },
        '& img': {
            marginBottom: '-5px',
            marginLeft: '3px',
        }
    },
    infoContainer: {
        backgroundColor: '#393960',
        border: '2px solid #6753DB',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 12px 24px -10px rgba(0, 0, 0, 0.4)',
        borderRadius: '16px',
        margin: '24px 0px',
        padding: '24px',
        width: 'min(100%, 452px)',
    },
    ziggyTimelock: {
        paddingBottom: '20px',
    },
    infoTitle: {
        color: '#FAFAFC',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.6px',
        marginBottom: '16px',
    },
    infoSubHeader: {
        color: '#EBF3F9',
        fontWeight: 700,
        fontSize: '10px',
        lineHeight: '16px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    infoMessage: {
        color: '#D9D9E8',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.2px',

    },
    infoDetail: {
        color: '#FAFAFC',
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '24px',
        paddingTop: '5px',
        paddingBottom: '20px',
        '& span': {
            textDecoration: 'line-through',
        }
    },
    ziggyPlay: {
        marginTop: '32px',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1D1D30',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 12px 24px rgba(0, 0, 0, 0.4)',

    },
    modalForeground: {
        maxWidth: 500,
        fontWeight: 500,
        minHeight: '300px',
        fontSize: '28px',
        lineHeight: '36px',
        letterSpacing: '0.6px',
        display: 'flex',
        color: '#6753DB',
        backgroundColor: '#fff',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '0px',
        marginLeft: '16px',
        marginRight: '16px',
    },
    modalText: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
    },
    transactionConfirmations: {
        marginTop: '20px',
        marginBottom: '16px',

    },
    stepsTitleText: {
        fontSize: '28px',
        lineHeight: '36px',
        letterSpacing: '0.6px',
        display: 'flex',
        color: '#6753DB',
        marginTop: '20px',
        marginBottom: '16px',

    },
    pendingText: {
        color: '#A5A1B0',
        fontWeight: 400,
        fontSize: '13px',
        lineHeight: '24px',
    },
    successfulDepositAmountText: {
        color: '#585464',
        fontSize: '15px',
        lineHeight: '24px',
    },
    confirmationImage: {
        height: '120px',
        marginTop: '-80px', 
    },
    confirmTransactionText: {
        color: '#585464',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '24px',
    },
    viewMyMoonpots: {
        backgroundColor: '#6753DB',
        borderRadius: '8px',
        fontWeight: 700,
        fontSize: '15px',
        lineHeight: '24px',
        letterSpacing: '0.2px',
        marginTop: '32px',
        marginBottom: '12px',
    },
    blockExplorerLink: {
        color: '#585464',
        fontWeight: 400,
        fontSize: '15px',
        lineHeight: '24px',
        letterSpacing: '0.2px',
    },
    docsLink: {
        textDecoration: 'none'
    }
});

export default styles;