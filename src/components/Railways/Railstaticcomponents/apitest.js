import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';
import './apitest.css'


export default class apitest extends Component {
  state={
    cancelled:[],
    rescheduled:[],
  }
 async componentDidMount(){
    await this.getData();
    await this.DatatablePage();
  }
  async getData(){
    var i=0;
   
    await Axios.get("https://api.railwayapi.com/v2/cancelled/date/07-02-2020/apikey/0gd8z8xa2u/").then(res=>{
     // console.log(res);-
      const cancelinfo=res.data.trains;
      // console.log(cancelinfo);
       const total=cancelinfo.map(res=>{
        //  console.log(res.number);
        //  console.log(res.name);
        //  console.log(res.start_time);
         var infos= {
                 "number":res.number,
                "Name":res.name,
                "strt_time":res.start_time,
                "status":'Cancelled'
            }
            return(infos);
          } 
              
       )
       this.setState({cancelled:total});
       console.log(this.state.cancelled);
        }
    )
          
            
          }
    DatatablePage = () => {
 
    const data = {
      columns: [
        {
          label: 'Train Number',
          field: 'number',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Train Name',
          field: 'Name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Start Time',
          field: 'strt_time',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 150
        },
        ],
      rows:this.state.cancelled
    };
  const datam=
 
      <MDBDataTable
        striped
        bordered
        small
        data={data} className="paging_box"
      />
      this.setState({datass:datam});
    
}
  
  render() {
    
         return(           
      <div className="container" id="pages">
        {this.state.datass}
         </div>
         ) 
  }
}