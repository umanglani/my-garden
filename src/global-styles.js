import { StyleSheet } from 'react-native';

export const Colors = {
    MainBackground: '#f6f6f8',
    ButtonBackgroundColor: '#006400',
    Gray: '#afafaf',
    LightGray: '#e1e1e1',
    MidGray: '#a3a6ab',
    MainForeColor: '#006400'
};


export const globalStyles = StyleSheet.create({
    flexStart: {
        justifyContent: 'flex-start',
    },
    flexCenter: {
        justifyContent: 'center',
    },
    flexEnd: {
        justifyContent: 'flex-end'
    },
    vCenter: {
        alignItems: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },
    fullWidth: {
        width: '100%'
    },
    lightSmallText: {
        fontSize: 12,
        fontFamily: 'Poppins_300Light',
        color: Colors.MainForeColor
    },
    lightText: {
        fontSize: 13,
        fontFamily: 'Poppins_300Light',
        color: Colors.MainForeColor
    },
    lightBig: {
        fontSize: 22,
        fontFamily: 'Poppins_300Light',
        color: Colors.MainForeColor
    },
    lightMedium: {
        fontSize: 18,
        fontFamily: 'Poppins_300Light',
        color: Colors.MainForeColor
    },
    biggerTitle: {
        fontSize: 42,
        fontFamily: 'Poppins_700Bold',
        color: Colors.MainForeColor
    },
    bigTitle: {
        fontSize: 32,
        fontFamily: 'Poppins_700Bold',
        color: Colors.MainForeColor
    },
    mediumTitle: {
        fontSize: 22,
        fontFamily: 'Poppins_700Bold',
        color: Colors.MainForeColor
    },
    regularTitle: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',
        color: Colors.MainForeColor
    },
    regularText: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: Colors.MainForeColor
    },
    gray: {
        color: Colors.Gray
    },
    white: {
        color: Colors.MainForeColor
    },
    icon: {
        fontSize: 17
    },
    padding15: {
        padding: 15
    },
    separator: {
        height: 1,
        backgroundColor: Colors.BorderColor,
        marginVertical: 5
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },
    flex6: {
        flex: 6
    },
    flex7: {
        flex: 7
    },
    relative: {
        position: 'relative'
    }
});
