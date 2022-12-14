import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Widget from '../../Components/Widget/Widget';
import Featured from '../../Components/Featured/Featured';
import Chart from '../../Components/Chart/Chart';
import './Home.scss';
import Table from '../../Components/Table/Table';

const Home = () => {
    return (
        <div className="home">
            <Sidebar></Sidebar>
            <div className="homeContainer">
                <Navbar></Navbar>
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />


                </div>

                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />

                </div>

                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>

            </div>

        </div>
    );
};

export default Home;