import React, {useEffect} from 'react';
import {connect, Provider} from 'react-redux';
import configureStore from "./redux/configureStore";
import {InitState} from "./redux/reducers";
import {categories, Categories, fetchArticles} from "./redux/actions";
import {Box, CssBaseline} from "@material-ui/core";
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles';
import Header from "./components/header/header";
import Articles from "./components/articles/articles";
import Attribution from "./components/attribution";


const store = configureStore();

interface InnerAppProps extends InitState{
    dispatch: any,
}

function InnerApp(props: InnerAppProps) {
    useEffect(() => {
        props.dispatch(fetchArticles(Categories.HEADLINE))
    }, []);
    return (
        <Box width={'100vw'} minHeight={'100vh'} maxWidth={'100%'}>
            <Header headers={categories} dispatcher={props.dispatch}/>
            <Articles articles={props.articles}/>
            <Attribution />
        </Box>
    )
}
function mapStateToProps(state: InitState) {
    return state
}
const InnerAppContainer = connect(mapStateToProps)(InnerApp);
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#333333',
            contrastText: '#fff',
        },
        secondary: {
            main: '#1EB980',
            contrastText: '#fff',
        },
    },
});
theme = responsiveFontSizes(theme);
theme.typography.h1 = {
    fontFamily: [
        'Anton',
        'sans-serif',
    ].join(','),
    fontWeight: 400,
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
    fontStyle: "normal",
    color: "inherit"
};

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <InnerAppContainer />
            </ThemeProvider>
        </Provider>
    )
}



export default App;