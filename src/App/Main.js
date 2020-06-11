import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Movie from './Movie'
import Movies from './Movies'


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    
    render(){
        const displayPost = (
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                <TabList>
                    <Tab>Tab1</Tab>
                    <Tab>Tab2</Tab>
                </TabList>
                <TabPanel><Movie/></TabPanel>
                <TabPanel><Movies/></TabPanel>
            </Tabs>
        );
        return(
            <div>
                {displayPost}

            </div>
        );
    }
}
export default Main;